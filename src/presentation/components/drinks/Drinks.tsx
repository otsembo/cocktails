import React, { useState } from "react";
import { AppRepo } from "../../../data/repository/AppRepo";
import { DrinksBar } from "../home/Home";

class Drinks extends React.Component<any, any>{

    appRepo: AppRepo
    constructor(props: any){
        super(props)
        this.appRepo = new AppRepo()
        this.state = { drinks: [], searchTitle: this.props.title, searchIcon: this.props.icon}
        this.loadDrinksData()
    }

    loadDrinksData(){
        switch (this.state.searchTitle) {
            case 'Alcoholic Drinks':
                this.appRepo.fetchAlcoholic().then(
                    (data:any) => {
                        this.setState({drinks: data.drinks})
                    }
                )
                break;
            case 'Beverages':
                this.appRepo.fetchHotBeverage().then(
                    (data:any) => {
                        this.setState({drinks: data.drinks})
                    }
                )
                break;
            case 'Fruit Juice':
                this.appRepo.fetchJuice().then(
                    (data:any) => {
                        this.setState({drinks: data.drinks})
                    }
                )
                break;
            default:
                break;
        }
    }

    render(): React.ReactNode {

        const drinks = this.state.drinks
        const title = this.state.searchTitle
        const icon = this.state.searchIcon

        return (
        <div className="container">
            <SearchBar/>
            <DrinksBar drinks={drinks} icon={icon} title={title}/>
        </div>)
    }

}

// search bar
const SearchBar = (props: any) => {

    const [searchTerm, setSearchTerm] = useState("")

    const handleFormChange = (event: any) => {
        setSearchTerm(event.target.value)
    }

    return (
    <div className="row" style={{"marginTop":"2.5%"}}>
        <form className="col s6 m4 l3">
            <div className="row">
                <div className="input-field col s12">
                    <i className="material-icons prefix">search</i>
                    <input id="icon_prefix" type="text" className="validate" value={searchTerm} onChange={handleFormChange}/>
                    <label>SEARCH</label>
                </div> 
            </div>
        </form>
    </div>)

}


export default Drinks