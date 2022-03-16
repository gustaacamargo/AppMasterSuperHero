import { mergeResolvers } from "merge-graphql-schemas";
import superHero from "./superHero/resolver";

const resolvers = [
    superHero
]

export default mergeResolvers(resolvers)