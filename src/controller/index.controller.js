const controller = {}
const connection = require('../dbConnection/connection')


controller.index = async (req, res) => {
    try {
        const tittle = 'SERVIDOR'
        await connection()
        console.log('conectado')
        res.render('index', { tittle })
    } catch (err) {
        console.error(err)
    }

}

module.export = controller