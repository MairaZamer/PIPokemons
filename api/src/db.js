require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const definePokemon = require('./models/Pokemon');
const defineType = require('./models/Type');

const sequelize = new Sequelize({
   database: process.env.DB_DATABASE,
   username: process.env.DB_USERNAME,
   password: process.env.DB_PASSWORD,
   host: process.env.DB_HOST,
   port: process.env.DB_PORT,
   dialect: 'postgres',
   dialectOptions: {
     ssl: process.env.DB_SSL === 'true' ? {
       require: true,
       rejectUnauthorized: false // Ajusta esto según tu configuración de certificados SSL
     } : false
   },
   logging: false // Opcional: desactivar el registro de consultas
});

// Define los modelos
definePokemon(sequelize);
defineType(sequelize);

// Obtén los modelos después de definirlos
const { Pokemon, Type } = sequelize.models;

// Define las relaciones
Pokemon.belongsToMany(Type, { through: "pokemon_type" });
Type.belongsToMany(Pokemon, { through: "pokemon_type" });

module.exports = {
   conn: sequelize,
   Pokemon,
   Type,
};
