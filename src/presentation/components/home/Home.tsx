import React, { } from "react";
import { AppRepo } from "../../../data/repository/AppRepo";
import DrinkItem from "../drinkItem/DrinkItem";

export class Home extends React.Component<any, any>{

    // app repository
    appRepo:AppRepo = new AppRepo()

    constructor(props: any){
        super(props)
        this.state = {items: this.prepareCarouselItems(), latestDrinks: []}
        this.loadItems()
    }

    prepareCarouselItems(): any[]{
        const items:any[] = [
            {image:"https://www.thecocktaildb.com/images/media/drink/mrz9091589574515.jpg", key:1},
            {image:"https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg", key:2},
            {image:"https://www.thecocktaildb.com/images/media/drink/hbkfsh1589574990.jpg", key:3},
            {image:"https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg", key:4},
        ]
        return items
    }

    loadItems(){
        this.appRepo.fetch_latest_drinks().then(
            (data:any) => {
                this.setState({latestDrinks: data.drinks})
            }
        )
    }

    render(): React.ReactNode {
        
        let items = this.state.items
        const textStyle = {
            position: "relative"
        }
        let drinks = this.state.latestDrinks
        return (
            <div>
                <Carousel items={items}/>
                <FloatingText style={textStyle} title="WELCOME TO COCKTAILS. YOUR ONE STOP DRINK SHOP"/>
                <div className="container">
                    <DrinksBar drinks={drinks} icon={'local_bar'} title={'Latest Drinks'}/>
                </div>
                
            </div>
        ) 
    }
}

function CarouselItem(props: any){

    const imageStyle =  {
        height: "750px",
        "object-fit": "cover"
    } 

    return (
        <a className="carousel-item" href="/">
            <img style={imageStyle} src={props.image} alt="" />
        </a>
        )
}

function FloatingText(props: any){
    return (<h3>{props.title}</h3>)
}

function Carousel(props: any){
    const items = props.items.map((element: any) => <CarouselItem key={element.key} image={element.image}/>)
    return (
        <div className="carousel  carousel-slider">
            {items} 
        </div>
        )
}

export function DrinksBar(props: any){
    const drink = (<h3><i className="material-icons" style={{"marginRight" : "10px"}}>{props.icon}</i>{props.title}</h3>)
    const drinks = props.drinks.map((element:any) => <DrinkItem image={element.strDrinkThumb} title={element.strDrink} desc={element.strInstructions} key={element.idDrink} id={element.idDrink}/>)
    return (
        <div className="col">
        <div className="row">
            <div className="col" style={{"marginLeft":"5%", "marginTop":"2%"}}>
                {drink}
            </div>
        </div>
        <div className="row">
            {drinks}
        </div>
        </div>
        
    )
}
