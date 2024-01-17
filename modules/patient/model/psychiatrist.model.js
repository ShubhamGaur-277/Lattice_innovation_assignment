const { DataTypes, Model } = require('sequelize');
const { connection } = require('../../../middlewares/sequalize');
const Hospital = require('./hospital.model');
class Psychiatrist extends Model {}

Psychiatrist.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hospitalId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Hospital,
        key: 'id',
      },
    },
  },
  {
    sequelize: connection,
    modelName: 'Psychiatrist',
  }
);
Psychiatrist.sync()

module.exports = Psychiatrist;
