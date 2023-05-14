var mysql = require('mysql');

//Create connection from mysql
const db = mysql.createConnection({
    host: 'localhost',
    port: "3306",
    user: 'root',
    password: 'Vinh01264686044@',
    database: 'db_thcntt3',
    insecureAuth : true
})

//Connect to mysql
db.connect((err) => {
    if(err) {
        throw err
    }
    console.log('Mysql ket noi thanh cong')
})

//Add a device
const addDevice = async (req, res) => {
    const sql = "INSERT INTO tbldevice ( id, name, description) VALUES ('"+req.body.id+"','"+req.body.description+"','"+req.body.name+"')";
    db.query(sql, function(err, results) {
        if (err) throw err;
        res.send(results);
        console.log('Add thanh cong')
    });
}

//Get all devices
const getAllDeivces = async (req, res) => {
    const sql = "SELECT * FROM tbldevice";
    db.query(sql, function(err, results) {
      if (err) throw err;
      res.send(results);
      console.log('getAllDevice thanh cong');
    });
}
//Get device by id
const getDeviceById = async (req, res) => {
    const sql = "SELECT * FROM tbldevice WHERE id = "+req.params.id+"";
    db.query(sql, function(err, results) {
      if (err) throw err;
      res.send(results);
      console.log('get Device by id thanh cong')
    });
}
//Update device by id
const updateDevice = async (req, res) => {
    const sql = "UPDATE tbldevice SET name = '"+req.body.name+"', description = '"+req.body.description+"' WHERE id = " +req.params.id;
    db.query(sql, function(err, results) {
      if (err) throw err;
      res.send(results);
      console.log('update Device thanh cong')
    });
}
//Delete device by id
const deleteDevice = async (req, res) => {
    const sql = "DELETE FROM tbldevice WHERE id = " +req.params.id;
    db.query(sql, function(err, results) {
      if (err) throw err;
      res.send(results);
      console.log('Delete Device thanh cong')
    });
}

module.exports = {
    addDevice,
    getAllDeivces,
    getDeviceById,
    updateDevice,
    deleteDevice
}