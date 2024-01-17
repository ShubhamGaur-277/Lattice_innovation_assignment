const Patient = require("../model/patient.model")
const Psychiatrist = require("../model/psychiatrist.model")
const Hospital = require("../model/hospital.model")
const patientSchema = require("../validation/validation");

const validatePatientData = (data) => {
  return patientSchema.validate(data);
};

const register = async (req, res, next)=>{
  try{

    const validationResult = validatePatientData(req.body);
    if (validationResult.error) {
      return res.status(400).json({ error: validationResult.error  });
    }

    const psychiatrist = await Psychiatrist.findByPk(req.body.psychiatristId);
    if(!psychiatrist){
      return res.status(404).
      send({ 
        success: false,
        message: "Error: Psychiatrist not found"
      });
    }

    const data = await Patient.create(req.body);
    res.status(201).
    send({
      success: "true",
      body:data
      })
  } catch(error){
    console.error(error);
    return res.status(500).
    send({
      success: false, 
      message: "Internal Server Error"
    })
  }
}

const getHospitalDetails = async (req, res, next) => {
  try {
    console.log(req.query);
    const hospital = await Hospital.findByPk(req.query.id);
    
    if (!hospital) {
      return res.status(404).send({ success: false, message: "Error: Hospital not found" });
    }

    const psychiatrists = await Psychiatrist.findAll({
      where: {
        hospitalId: hospital.id,
      }
    });
    const simplifiedPsychiatrists = psychiatrists.
    map(psy => Object.assign({}, { id: psy.id, name: psy.name, email: psy.email, hospitalId: psy.hospitalId}))
    let patientDetails =[]
    let count = 0;
    for(let psy of simplifiedPsychiatrists){
      
      let patients = await Patient.findAll({where: {psychiatristId:psy.id}})
      count+=patients.length
      const simplifiedPatients = patients.
    map(pat => Object.assign({}, { id: pat.id, name: pat.name, email: pat.email}))
      psy = {...psy,...{patientDetails:simplifiedPatients}}
      patientDetails.push(psy);
    }

    const psychiatristDetails = patientDetails.map(psy => ({
      id: psy.id,
      name: psy.name,
      patientsCount: psy.patientDetails.length,
    }));

    return res.send({
      success: true,
      hospitalName: hospital.name,
      totalPsychiatristsCount: psychiatrists.length,
      totalPatientCount: count,
      psychiatristDetails,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ success: false, message: error });
  }
};

module.exports = {
  register,
  getHospitalDetails
}