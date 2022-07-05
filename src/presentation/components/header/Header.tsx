import React from "react";
import { Link } from "react-router-dom";
import { AppRepo } from "../../../data/repository/AppRepo";


class Header extends React.Component<any, any>{

    appRepo: AppRepo
    constructor(props: any){
        super(props)
        this.appRepo = new AppRepo()
        this.state = {navItems: this.prepareNavItems(), drinks: this.appRepo.latestDrinks}
    }

    prepareNavItems() : any[]{
        const items:any = [
            { id:'nav-home', link:'/', name:'Home', isActive:true },
            { id:'nav-alcoholic', link:'/alcoholic', name:'Alcoholic', isActive:false },
            { id:'nav-beverages', link:'/bevarages', name:'Bevarages', isActive:false },
            { id:'nav-juice', link:'/juice', name:'Juice', isActive:false }
        ]
        return items
    }

    toggleActiveItem(itemId:string){
        const menuItems = this.state.navItems.slice()
        menuItems.map((element:any) => {
            const data = element
            data.isActive = (data.id === itemId)
            return data
        });
        this.setState({navItems:menuItems})
        

    }

    navItem(props:any){
        let classes: string = props.isActive ? "active" : ""
        return (<li className={classes} key={props.id} onClick={(itemId) => this.toggleActiveItem(props.id)}><Link to={props.link}>{props.name}</Link></li>)
    }

    render() {
        return (
            <nav className="purple darken-4">
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo right" style={{marginRight: '40px'}}>COCKTAILS</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down" style={{marginLeft: '40px'}}>
                        {this.state.navItems.map((item:any) => this.navItem(item))}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header