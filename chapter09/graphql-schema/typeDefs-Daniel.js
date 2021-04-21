"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
var typeDefs = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type User {\n    id: ID!\n    username: String!\n    description: String\n  }\n\n  type Query {\n    getUsers: [User!]\n  }\n"], ["\n  type User {\n    id: ID!\n    username: String!\n    description: String\n  }\n\n  type Query {\n    getUsers: [User!]\n  }\n"])));
exports.default = typeDefs;
var templateObject_1;
