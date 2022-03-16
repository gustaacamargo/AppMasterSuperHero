import { mergeResolvers } from "merge-graphql-schemas";
import test from "./test/resolver";

const resolvers = [
    test
]

export default mergeResolvers(resolvers)