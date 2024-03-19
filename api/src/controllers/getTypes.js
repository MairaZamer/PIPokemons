const axios = require("axios");
const { Type } = require("../db");

const getTypes = async () => {

    const typeApi = await axios.get("https://pokeapi.co/api/v2/type");
    const result = typeApi.data;

    for(const typeData of result.results){

        const typeName = typeData.name;

        const existingType = await Type.findAll({ where: { name: typeName }});

        if(existingType.length === 0){
            await Type.create({ name: typeName });
        }
    }

    return await Type.findAll();

}

module.exports = getTypes;