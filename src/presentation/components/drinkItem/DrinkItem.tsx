import React from "react";
import { Link } from "react-router-dom";

class DrinkItem extends React.Component<any, any>{

    render(): React.ReactNode {

        const image = this.props.image
        const title = this.props.title
        const desc = this.props.desc
        const id = this.props.id
        const route = `/drinks/:${id}`

        return (
            <div className="row">
                <div className="col s12 m6 l4">
                    <div className="card">
                        <div className="card-image">
                            <img src={image} alt=""/>
                            <span className="card-title">{title}</span>
                            <Link to={route} className="btn-floating halfway-fab waves-effect waves-light teal">
                                <i className="material-icons">info</i>
                            </Link>
                        </div>
                        <div className="card-content">
                            <p>{desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default DrinkItem