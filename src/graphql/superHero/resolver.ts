import { sortHeroes } from "../../shared/utils/sortHeroes";
import SuperHeroAPI from "../../services/SuperHeroAPI"
import { IListHeroesParams } from "../../shared/interfaces/IListHeroesParams";

export default {
    Query: {
        listHeroes: async (_, { limit, order }: IListHeroesParams) => {
            const superHeroAPI = new SuperHeroAPI()

            const listHeroes = await superHeroAPI.listHeroes({ limit, order })

            if(limit && order) {
                const listHeroesSorted = sortHeroes({ orderBy: order, array: listHeroes })

                listHeroesSorted.length = limit

                return listHeroesSorted
            }
            else if(!limit && order) {
                const listHeroesSorted = sortHeroes({ orderBy: order, array: listHeroes })

                return listHeroesSorted
            }
            else if(limit && !order) {
                listHeroes.length = limit
            }

            return listHeroes
        }
    }
}