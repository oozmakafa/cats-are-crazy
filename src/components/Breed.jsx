import React, { Component } from 'react';
import axios from 'axios';
import CatsGrid from './CatsGrid';

class Breed extends Component {
    state = { 
            cats: [],
            selected: ""
    }

    componentDidMount() {
        axios.get(`https://api.thecatapi.com/v1/breeds`)
          .then(res => {
            const cats = res.data;
            this.setState({ cats });
          })
    }

    handleBreedSelection = (event) => {
        this.setState({selected: event.target.value});
    }

    render() { 
        return ( 
        <div>
            <h1>Cat Browser</h1>
            <div className="col-md-3">
                <div className="form-group">
                    <label htmlFor="breed">Breed</label>
                    <select name="breed" id="breed" className="form-control" onChange={this.handleBreedSelection}>
                        <option value="" key="">Select Breed</option>
                        { this.state.cats.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
                    </select>
                </div>
            </div>
                
            <CatsGrid id={this.state.selected}/>
        </div> 
        );
    }
}
 
export default Breed;