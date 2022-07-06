import { CocktailAPI } from "../model/ApiData";

export class AppRepo {

    // retrieve latest
    async fetch_latest_drinks() : Promise<any>{
        return  await fetch(CocktailAPI.LATEST_DRINK)
                .then((response: Response) => response.json())

    }

    fetchAlcoholic = async (): Promise<any> => {
        return await fetch(CocktailAPI.ALCOHOLIC_DRINK)
                .then((response: Response) => response.json())
    }

    fetchJuice = async (): Promise<any> => {
        return await fetch(CocktailAPI.JUICE_DRINK)
                .then((response: Response) => response.json())
    }

    fetchHotBeverage = async (): Promise<any> => {
        return await fetch(CocktailAPI.BEVERAGE_DRINK)
                .then((response: Response) => response.json())
    }




}