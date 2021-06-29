import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {getFilteredCategory} from "../api";
import Preloader from "../components/Preloader";
import MealList from "../components/MealList";
import {useHistory} from 'react-router-dom';

const Category = () => {
    const [meals, setMeals] = useState([])
    const {name} = useParams()
    const {goBack} = useHistory()

    useEffect(() => {
        getFilteredCategory(name).then(data => {
            setMeals(data.meals)
        })
    }, [name])

    return (
        <>
            <button className='btn' onClick={goBack}>Go Back</button>
            {!meals ? <Preloader/> : <MealList meals={meals}/>}
        </>
    );
}

export default Category;