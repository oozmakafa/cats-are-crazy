import React, { Component } from 'react';
import axios from 'axios';
import CatsCard from './CatsCard'

class CatsGrid extends Component {
    state = { 
        cats: [],
        length : 6
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.id !== this.props.id && this.props.id !== ""){
            axios.get(`https://api.thecatapi.com/v1/images/search`, {
            params: {
                breed_id: this.props.id,
                limit: 100
            }
            })
            .then(res => {
                const cats = res.data;
                this.setState({ cats });
            })
        }
    }

    handleLoadMore = () => {
        this.setState({length : this.state.length + 6});
    }
        
    render() { 
        const hasMore = this.state.cats.length && this.state.cats.length > this.state.length; // Check if there are more records than the limit
        return (
            <div className="container-fluid">
                <div className="row">
                    {
                        this.state.cats.map(
                            (cat, index) => {
                                if(index < this.state.length) return <CatsCard id={cat.id} image_url={cat.url} key={cat.id}/>
                            }
                        )}
                </div> 
                <button className="btn btn-success" disabled={!hasMore} onClick={this.handleLoadMore}>Load More</button>
            </div>
        );
    }
}
 
export default CatsGrid;