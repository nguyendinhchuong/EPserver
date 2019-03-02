'user strict';
var os = require('../model/os');
var express = require('express');

exports.getAllOS = (req, res) => {
    os.loadAll().then(rows => {
        console.log(rows);
        res.send(rows);
    })
}
