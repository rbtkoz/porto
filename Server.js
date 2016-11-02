/**
 * Created by alex.kozovski on 11/2/16.
 */

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));
app.listen(process.env.PORT || 8080);
