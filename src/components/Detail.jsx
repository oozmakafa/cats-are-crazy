import React from 'react'
import { useParams } from 'react-router-dom';
import CatDetail from './CatDetail';

function Detail() {
    let { id } = useParams();
    return <CatDetail id={id} key={id}/>;
  }
 
export default Detail;