const { DataTypes, Model } = require('sequelize');
const { connection } = require('../../../middlewares/sequalize');
const Psychiatrist = require('./psychiatrist.model'); // Import Psychiatrist at the bottom to avoid circular dependency

class Patient extends Model {}

Patient.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    countryCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    patientPhoto: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: connection,
  }
);
Patient.belongsTo(Psychiatrist,{ foreignKey: 'psychiatristId' })
Patient.sync();

module.exports = Patient;