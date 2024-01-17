const Psychiatrist = require('../modules/patient/model/psychiatrist.model');
const Hospital = require('../modules/patient/model/hospital.model');
const {connection} = require('../middlewares/sequalize');

async function populatePsychiatrists() {
  try {
    await connection.sync(); 

    const hospitals = await Hospital.findAll();
    let count =1;
    for (const hospital of hospitals) {
      let n=5;

      for (let i = 1; i <= n; i++) {
        const psychiatristData = {
          name: `Psychiatrist ${i}`,
          email: `psychiatrist${i+count}@example.com`,
          phoneNumber: '1234567890', 
          password: 'Password123',   
          hospitalId: hospital.id,
        };
        count++;
        await Psychiatrist.create(psychiatristData);
      }
    }

    console.log('Dummy psychiatrists populated successfully.');
  } catch (error) {
    console.error('Error populating dummy psychiatrists:', error);
  } finally {
    process.exit();
  }
}

populatePsychiatrists();