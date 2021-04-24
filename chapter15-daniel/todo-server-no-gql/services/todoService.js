const { TodoModel } = require('../db/sequelize');

exports.list = async function (req, res){
  const todos = await TodoModel.findAll();
  console.log(todos);
}