require('dotenv').config()

module.exports = {
    mongoURI: `mongodb://${process.env.USER_NAME}:${process.env.PASSWORD}@${process.env.ADDRESS}:${process.env.PORT_NUMBER}/${process.env.DATABASE_NAME}`
};