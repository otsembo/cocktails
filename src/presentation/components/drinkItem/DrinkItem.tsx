import React from "react";
import { Link } from "react-router-dom";

class DrinkItem extends React.Component<any, any>{

    render(): React.ReactNode {

        const image = this.props.image
        const title = this.props.title
        const desc = this.props.desc
        const id = this.props.id
        const route = `/drinks/${id}`

        return (
            <div className="col s12 m4 l3">
                <div className="card">
                        <div className="card-image">
                            <img src={image} alt=""/>
                            <span className="card-title">{title}</span>
                            <Link to={route} className="btn-floating halfway-fab waves-effect waves-light teal">
                                <i className="material-icons">
                                    language
                                </i>
                            </Link>
                        </div>
                        <div className="card-content" style={{"minHeight":"150px", "maxHeight":"150px"}}>
                            <p style={{"minHeight":"150px", "maxHeight":"150px"}}>{desc}</p>
                        </div>
                    </div>
            </div>
        )
    }

}

export default DrinkItem