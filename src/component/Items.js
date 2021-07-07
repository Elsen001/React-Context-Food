import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import FoodContext from '../Context/Context'
import Comments from './Comments';

const Items = () => {
    const context = useContext(FoodContext)
    const { foods, items, getCategoryItem } = context;



    return (
        <div className="items">
            <div className="container">
                <h1>Bizim menyu</h1>
                {
                    foods.map(item => (
                        <Link to={`/menu/${item.strCategory}`}>
                            <div className="item">
                                <div className="img" style={{ backgroundImage: `url(${item.strCategoryThumb})` }}></div>
                                <div className="linear">{item.strCategory}</div>
                            </div>
                        </Link>
                    ))
                }
            </div>
            <Comments />
        </div>
    )
}

export default Items
