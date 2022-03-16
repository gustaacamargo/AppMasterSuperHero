import { mergeTypes } from "merge-graphql-schemas";
import test from "./test/type";

const types = [
    test
]

export default mergeTypes(types, { all: true })