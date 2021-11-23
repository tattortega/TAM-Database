if (process.env.NODE_ENV != 'production'){
    require('dotenv').config();
};

const uri = process.env.DB_URI;