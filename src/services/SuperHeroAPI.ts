import axios from "axios"

import { IListHeroes } from "../shared/interfaces/IListHeroes"
import { ISuperHero } from "../shared/interfaces/ISuperHero"
import { AppError } from "../shared/errors/AppErrors"

class SuperHeroAPI {
    private host: String = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api"

    async listHeroes({ limit, order }: IListHeroes): Promise<ISuperHero[]> {
        return new Promise((resolve, reject) => {
            axios.get(`${this.host}/all.json`)
            .then((res) => {
                const listHeroes = res.data as ISuperHero[]
                resolve(listHeroes)
            })
            .catch(e => {
                reject(new AppError("Error in list heroes"))
            })
        })
    }
}

export default SuperHeroAPI