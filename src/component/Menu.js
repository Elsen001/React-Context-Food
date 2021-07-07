import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import FoodContext from '../Context/Context'
import Loading from './Loading';

const Menu = () => {
    const context = useContext(FoodContext)
    const { items, getCategoryItem, clearItems,loading } = context;
    const params = useParams()
    console.log(items);

    

    
    useEffect(() => {
        getCategoryItem(params.name)
        window.scrollTo(0,0)
    }, [])
    
    if(loading) return <Loading/>


    return (
        <div className="categoryItem">
            <div className="categoryHeader"><h2>{params.name}</h2> <Link to="/"><i onClick={clearItems} class="fas fa-arrow-left">Ana Sehife </i></Link> </div>
            {
                items.map((i) => (
                    <div className="categoryContent">
                        <img src={i.strMealThumb} alt="" />
                        <h3>{i.strMeal}</h3>
                    </div>
                ))
            }
        </div>
    )
}

export default Menu
