import { ApiResponse, CocktailAPI } from "../model/ApiData";

export class AppRepo {

    latestDrinks:any[]
    constructor(){
        this.latestDrinks = []
        this.displayLatestDrinks()
    }

    // retrieve latest
    private async fetch_latest_drinks() : Promise<any>{
        return  await fetch(CocktailAPI.LATEST_DRINK)
                .then((response: Response) => response.json())

    }

    private async displayLatestDrinks(){
        this.fetch_latest_drinks().then((appData: any) => this.latestDrinks = appData.drinks )
    }

}