import { mergeTypes } from "merge-graphql-schemas";
import superHero from "./superHero/type";

const types = [
    superHero
]

export default mergeTypes(types, { all: true })