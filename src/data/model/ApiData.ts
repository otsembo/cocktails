export interface ApiResponse {
    drinks: any[];
}

export class CocktailAPI{
    private static BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1"

    public static LATEST_DRINK: string = `${this.BASE_URL}/search.php?f=l` 
    public static ALCOHOLIC_DRINK: string = `${this.BASE_URL}/filter.php?c=Ordinary Drink`
    public static JUICE_DRINK: string = `${this.BASE_URL}/filter.php?c=Soft Drink`
    public static BEVERAGE_DRINK: string = `${this.BASE_URL}/filter.php?c=Coffee / Tea`

}