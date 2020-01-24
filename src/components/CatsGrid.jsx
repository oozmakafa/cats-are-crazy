import React, { Component } from 'react';
import axios from 'axios';
import CatsCard from './CatsCard'

class CatsGrid extends Component {
    state = { 
        cats: [],
        length : 6
    }

    componentDidUpdate(prevProps){
        if(prevProps.id !== this.props.id){
            axios.get(`https://api.thecatapi.com/v1/images/search`, {
            params: {
                breed_id: this.props.id,
                limit: 100
            }
            })
            .then(res => {
                let cats = [];
                // Nag pasa kag breed sa iring o wala? 
                if(res.config.params.breed_id !== ""){
                    cats = [...res.data];
                }

                this.setState({ cats }); // diha kang iringa ka
            })
        }
    }

    handleLoadMore = () => {
        this.setState({length : this.state.length + 6}); // dungagan natong 6 ka iring
    }
    
    showNoCatsAvail = () => {
        // Wa man guro kay iring?
        if (this.state.cats.length === 0){
            return (<p>No Cats Available</p>)
        }
    }
        
    render() { 
        const hasMore = this.state.cats.length && this.state.cats.length > this.state.length; // Wait! Daghan pakag iring? Dungangi if naa pa (Sig breeding ug iring :D)
        return (
            <div className="container-fluid">
                {this.showNoCatsAvail()}
                <div className="row">
                    {
                        this.state.cats.map(
                            (cat, index) => {
                                // Ipakita imong iring pero limit lang ha.
                                if(index < this.state.length) return <CatsCard id={cat.id} image_url={cat.url} key={cat.id}/>
                                return "";
                            }
                        )}
                </div> 
                {/* Daghan paman ka tingali ug iring */}
                <button className="btn btn-success" disabled={!hasMore} onClick={this.handleLoadMore}>Load More</button>
            </div>
        );
    }
}
 
export default CatsGrid;