import React, { useEffect } from "react";
import { AppRepo } from "../../../data/repository/AppRepo";
import DrinkItem from "../drinkItem/DrinkItem";

class Home extends React.Component<any, any>{

    // app repository
    appRepo:AppRepo

    constructor(props: any){
        super(props)
        this.appRepo = new AppRepo()
        this.state = {items: this.prepareCarouselItems(), latestDrinks: this.appRepo.latestDrinks}
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
                <LatestDrinks drinks={drinks}/>
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

function LatestDrinks(props: any){
    const drink = (<h5><i className="material-icons">local_bar</i> Latest Drinks</h5>)
    const drinks = props.drinks.map((element:any) => <DrinkItem image={element.strDrink} title={element.title} desc={element.strInstructions} id={element.idDrink}/>)
    return (
        <div>
        <div>
            {drink}
        </div>
        {/* <div>
            {drinks}
        </div> */}
        </div>
        
    )
}


export default Home