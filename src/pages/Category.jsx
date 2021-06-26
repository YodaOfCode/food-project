import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {getFilteredCategory} from "../api";
import Preloader from "../components/Preloader";
import MealList from "../components/MealList";

const Category = () => {
    const [meals, setMeals] = useState([])
    const {name} = useParams()


    useEffect(() => {
        getFilteredCategory(name).then(data => {
            setMeals(data.meals)
        })
    }, [name])

    return (
        <>
            {!meals ? <Preloader/> : <MealList meals={meals}/>}
        </>
    );
}

export default Category;