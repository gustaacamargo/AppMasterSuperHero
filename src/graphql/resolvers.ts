import { mergeResolvers } from "merge-graphql-schemas";
import test from "./test/resolver";
import superHero from "./superHero/resolver";

const resolvers = [
    test,
    superHero
]

export default mergeResolvers(resolvers)