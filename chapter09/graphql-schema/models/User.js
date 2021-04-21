"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(id, username) {
        this.id = id;
        this.username = username;
    }
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.getUsername = function () {
        return this.username;
    };
    User.prototype.getDescription = function () {
        if (this.description) {
            return this.description;
        }
        return "";
    };
    User.prototype.setDescription = function (description) {
        this.description = description;
    };
    return User;
}());
exports.default = User;
