const express = require('express');
const Controller = require('./controller');
const router = express.Router();

router.post('/addDevice', Controller.addDevice);
router.get('/getAllDevices', Controller.getAllDeivces);
router.get('/getDeviceById/:id', Controller.getDeviceById);
router.put('/updateDevice/:id', Controller.updateDevice);
router.delete('/deleteDevice/:id', Controller.deleteDevice);
module.exports = {
    routes: router
}