const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
const mongoConn = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        })
        console.log('Conexión correcta a Mongo')
    }catch(e){
        console.log('Error', e)
        throw new Error('Error conectando a Mongo')
    }
}

module.exports = { mongoConn }


