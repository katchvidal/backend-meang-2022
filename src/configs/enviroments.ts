import dotenv from 'dotenv';

// * ENVIROMENT DEV THE CONFIG COMMING FROM A ENV
const enviroment = dotenv.config({
    path:'./src/.env'
});


// ! IF ENVIROMENT IS A PROD THE CONFIG COMMING FROM A SEVER HOSTER ELSE THROW AN ERROR
if( process.env.NODE_ENV !== 'production'){

    if( enviroment.error ){
        throw enviroment.error;
    }

}



export default enviroment;