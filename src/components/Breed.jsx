import React, { Component } from 'react';
import axios from 'axios';
import CatsGrid from './CatsGrid';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
class Breed extends Component {
    state = { 
            cats: [],
            selected: ""
    }

    componentDidMount() {
        // kuhaa daw ang tanan breed sa iring
        axios.get(`https://api.thecatapi.com/v1/breeds`)
          .then(res => {
            const cats = res.data;
            this.setState({ cats });
          })

        // Gikan ka sa Cat Detail Page no? Unsa nga breed sa iring imong last gi tan-aw?
        const selected = queryString.parse(this.props.location.search);
        if(typeof selected.breed !== "undefined"){
            // Ahhh mao diay ni nga breed.
            this.setState({selected: selected.breed});
        }
    }

    // e set ang napili nga breed sa iring. Okay? Okay keyoww
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
                    <select name="breed" id="breed" className="form-control" onChange={this.handleBreedSelection} value={this.state.selected}>
                        <option value="" key="">Select Breed</option>
                        { this.state.cats.map(cat => <option key={cat.id} value={cat.id} >{cat.name} </option>)}
                    </select>
                </div>
            </div>
            {/* E display imong iring sok    */}
            <CatsGrid id={this.state.selected}/>
        </div> 
        );
    }
}
 
export default withRouter(Breed) ;