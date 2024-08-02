const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    life: {
      type: DataTypes.STRING,
      defaultValue: 0,
      allowNull: false,
    },
    attaque: {
      type: DataTypes.STRING,
      defaultValue: 0,
      allowNull: false,
    },
    defense: {
      type: DataTypes.STRING,
      defaultValue: 0,
      allowNull: false,
    },
    speed:{
      type: DataTypes.STRING,
      defaultValue: 0,
      allowNull: false,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight:{
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, { timestamps: false } );
};
