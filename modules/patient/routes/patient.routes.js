const router = require("express").Router();
const patientController = require("../controller/patient.controller")

router.post("/create",
patientController.register
);

router.get("/hospitals",
patientController.getHospitalDetails
);

module.exports = router