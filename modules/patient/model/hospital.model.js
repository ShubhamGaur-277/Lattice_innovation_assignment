const { DataTypes, Model } = require('sequelize');
const {connection} = require("../../../middlewares/sequalize")

class Hospital extends Model {}

Hospital.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {  sequelize: connection, modelName: 'Hospital' });

module.exports = Hospital;