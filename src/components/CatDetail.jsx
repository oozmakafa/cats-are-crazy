import React, { Component } from 'react';
import Axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

class CatDetail extends Component {
    state = {
        cats : {
            url: "",
            breeds: [],
            id: ""
        }
    }

    componentDidMount(){
        // Kuhaa ang detalye sa iring
        Axios.get(`https://api.thecatapi.com/v1/images/${this.props.match.params.id}`)
        .then(res => {
            const cats = {
                url: res.data.url,
                breeds: res.data.breeds[0],
                id: res.data.id
            }
            this.setState({cats});
        })
    }
    
    render() { 
        const {url, breeds, id} = this.state.cats;
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <Link to={`/?breed=${breeds.id}`}><button className="btn btn-primary">Back</button></Link>
                    </div>
                    <img src={url} className="card-img-top" alt={id} />
                    <div className="card-body">
                        <h4 className="card-title">{breeds.name}</h4>
                        <h5>Origin Type: {breeds.origin}</h5>
                        <h6>{breeds.temperament}</h6>
                        <p>{breeds.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default withRouter(CatDetail);