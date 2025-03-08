import mysql from 'mysql2';

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"productos"
});

connection.connect((err) => {
    if (err) {
        console.error('Error sl conectar a la BD:', err);
        return;
    }
    console.log('conexion a la BD exitosa');
});

export default connection;