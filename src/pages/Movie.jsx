import React from 'react';
import {useParams, useHistory} from 'react-router-dom'

const Movie = () => {
    const value = useHistory();
    console.log(value)
    return (
        <div>
           <h1>Some movie</h1>
        </div>
    );
};

export default Movie;