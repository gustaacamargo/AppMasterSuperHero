import { mergeTypes } from "merge-graphql-schemas";
import test from "./test/type";
import superHero from "./superHero/type";

const types = [
    test,
    superHero
]

export default mergeTypes(types, { all: true })