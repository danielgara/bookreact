import { IResolvers } from "apollo-server-express";
const { TodoModel } = require('../db/sequelize');

const resolvers: IResolvers = {
  Query: {
    async getTodos(root, args, context) {
      return TodoModel.findAll();
    },
  },
};

export default resolvers;