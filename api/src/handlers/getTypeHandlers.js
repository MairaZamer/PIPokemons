const getType = require("../controllers/getTypes");

const getTypeHandler = async (req, res) =>{
    try {
        const tipo = await getType();
        res.status(200).json(tipo)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports = getTypeHandler;