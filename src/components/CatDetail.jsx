import React, { Component } from 'react';
import Axios from 'axios';

class CatDetail extends Component {
    state = {
        cat: {}
    }
    componentDidMount(){
        Axios.get(`https://api.thecatapi.com/v1/images/${this.props.id}`)
        .then(res => {
            const cat = res.data;
            this.setState({cat});
        })
    }

    render() { 
        console.log(this.state);
        return (
            <div className="container">
                <div className="card">
                    <img src={this.state.cat.url} className="card-img-top" alt={this.state.cat.id} />
                    <div className="card-body">
                        <h4 className="card-title">Card title</h4>
                        <h5>Origin Type:</h5>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default CatDetail;