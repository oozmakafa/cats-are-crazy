import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CatsCard extends Component {
    render() { 
        const { id, image_url } = this.props
        return (
            <div className="col-md-4">
                <div className="card" style={{"width":"18rem"}}>
                    <img src={image_url} className="card-img-top" alt={id} />
                    <div className="card-body">
                        <Link to={`/${id}`}><button className="btn btn-primary" style={{"marginLeft": "58px"}}>View Details</button></Link> 
                    </div>
                </div>
            </div>
        );
    }
}
 
export default CatsCard;