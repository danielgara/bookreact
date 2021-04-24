import { IResolvers } from "apollo-server-express";
import { GqlContext } from "./GqlContext";

interface TodoResolver {
  id: string;
  message: string;
}

const resolvers: IResolvers = {
  Query: {
    getTodos: async (
      parent: any,
      args: null,
      ctx: GqlContext,
      info: any
    ): Promise<Array<TodoResolver>> => {
        return [
        {
          id: "1",
          message: "clean-no-db"
        },
        {
          id: "2",
          message: "buy-no-db"
        }
      ];
    },
  },
};
export default resolvers;