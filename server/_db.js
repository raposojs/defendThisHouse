'use strict';

var Sequelize = require('sequelize');

var databaseURI = require('../secrets').databaseURI

var db = new Sequelize(databaseURI, {
  define: {
    timestamps: false,
    underscored: true
  }
});

module.exports = db;
