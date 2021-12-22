const { sequelize } = require('./index')


const env = process.env.NODE_ENV || 'development'

const connect = async (callback) => {
    if (env == 'development') {
        await sequelize.sync({
            alter: true,
            logging: false
        })
    }
    else if (env == 'production') {
        await sequelize.connect()
    }
    else if (env == 'test') {
        await sequelize.sync({
            logging: false
        })
    }

    callback()
}

module.exports = connect
