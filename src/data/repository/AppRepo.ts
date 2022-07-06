import { CocktailAPI } from "../model/ApiData";

export class AppRepo {

    // retrieve latest
    async fetch_latest_drinks() : Promise<any>{
        return  await fetch(CocktailAPI.LATEST_DRINK)
                .then((response: Response) => response.json())

    }



}