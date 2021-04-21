import { IResolvers } from "apollo-server-express";
import { v4 } from "uuid";
import { GqlContext } from "./GqlContext";
import User from "./models/User";

interface UserResolver {
  id: string;
  username: string;
  description?: string;
}

const u1 = new User("1","danielgara");
const u2 = new User("2","santiago");

const resolvers: IResolvers = {
  Query: {
    getUsers: async (
      parent: any,
      args: null,
      ctx: GqlContext,
      info: any
    ): Promise<Array<UserResolver>> => {
        return [
        {
          id: u1.getId(),
          username: u1.getUsername(),
          description: u1.getDescription(),
        },
        {
          id: u2.getId(),
          username: u2.getUsername(),
          description: u2.getDescription(),
        }
      ];
    },
  },
};
export default resolvers;