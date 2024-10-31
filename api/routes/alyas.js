var express = require('express');
var routes = express.Router();

const AlyaController = require("../controller/alya");
const { route } = require('.');

Router.app.post('/', AlyaController.createdAlya);

module.exports = router;