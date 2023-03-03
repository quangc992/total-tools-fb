"use strict";
const moduleName = 'checkUrl';
const Manager = require(`../manager/${moduleName}Manager`);
const Response = require("../../Common/route/response").setup(Manager);
const Joi = require("joi");

module.exports = {
  insert: {
    tags: ["api", `${moduleName}`],
    description: `check Url ${moduleName}`,
    // pre:
    validate: {
      // headers: Joi.object({
      //   authorization: Joi.string(),
      // }).unknown(),
      payload: {
        url: Joi.string()
      }
    },
    handler: function (req, res) {
      Response(req, res, "insert");
    }
  },
};