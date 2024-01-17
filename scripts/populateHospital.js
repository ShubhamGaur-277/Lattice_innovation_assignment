const Hospital = require('../modules/patient/model/hospital.model');
const {connection} = require("../middlewares/sequalize");

const predefinedHospitals = [
  'Apollo Hospitals',
  'Jawaharlal Nehru Medical College and Hospital',
  'Indira Gandhi Institute of Medical Sciences (IGIMS)',
  'AIIMS - All India Institute Of Medical Science',
];

async function populateHospitals() {
  try {
    await connection.sync(); // Sync the models with the database

    for (const hospitalName of predefinedHospitals) {
      await Hospital.create({ name: hospitalName });
    }

    console.log('Predefined hospitals populated successfully.');
  } catch (error) {
    console.error('Error populating predefined hospitals:', error);
  } finally {
    process.exit(); // Exit the script
  }
}

populateHospitals();