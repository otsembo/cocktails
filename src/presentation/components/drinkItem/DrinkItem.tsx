import React from "react";

class DrinkItem extends React.Component<any, any>{

    render(): React.ReactNode {

        const image = this.props.image
        const title = this.props.title
        const desc = this.props.desc

        return (
            <div className="col s12 m4 l3">
                <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img src={image} alt="" className="activator"/>
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4" style={{"minHeight": "75px"}}>
                                {title}
                                <i className="material-icons right">more_vert</i>
                            </span>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title activator grey-text text-darken-4">
                                {title} <i className="material-icons right">close</i>
                            </span>
                            <p>{desc}</p>
                        </div>
                        
                        </div>
                        
                    </div>
        )
    }

}

export default DrinkItem