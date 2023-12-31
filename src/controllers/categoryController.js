const knex = require('../database/conection');

async function viewCategories (req, res) {
    const categories = await knex('categorias')

    if (!categories.length){
        return res.status(404).json({mensagem: "Nenhuma categoria foi encontrada!"})
    }

    return res.status(200).json(categories)
}

module.exports = {
    viewCategories
}