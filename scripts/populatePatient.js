const {connection} = require("../middlewares/sequalize");
const Patient = require("../modules/patient/model/patient.model")
const Psychiatrist = require("../modules/patient/model/psychiatrist.model")

async function populatePatient(){
  try {
  
  connection.sync();
  const psychiatrists = await Psychiatrist.findAll();
    let count =1;
  for(const psy of psychiatrists){
    for(let i=1;i<=5;i++){
      let patient = {
        name: `patient${count}`,
        psychiatristId: psy.id,
        address: "new york",
        countryCode: "+91",
        email: `shubham${count}@gmail.com`,
        phoneNumber: `123456${count}`,
        password: "123Paasswore",
        patientPhoto: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1705393423~exp=1705394023~hmac=7d628d10dd9b5d0cc535681301d5f2003f8680e3b3173932ca30f38fa6f12f08"
      }
      await Patient.create(patient);
      count++;
    }
  }
  } catch (error){
    console.log("error while populating",error);
  } finally {
    process.exit()
  }
}

populatePatient();