import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import FoodContext from './Context'
import { foodReducer } from './foodReducer'

const FoodState = ({ children }) => {
    const initialState = {
        foods: [],
        comments: [
            { name: "mike4Sall", text: "Went here for a first time chinese in Baku.. it was outstanding.. for both the food and the service. The duck pancakes were without doubt best we have tasted Surroundings were lovely, with a great romantic feel to the place." },
            { name: "Aynur R", text: "Cosy, but at the same time very good-looking place. Good for a romantic dinner, family lunch and meeting with friends. Good unobtrusive but timely service: first we were served first meals and appetizers, and had our second meal after awhile just at the right moment." },
            { name: "SSDNY", text: "It was a great surprise since I have not had a good Asian food in Baku. There were six of us in the party and we ordered Japanese, Chinese and Thai food and shared it among all of us. It was very good. Service was excellent as well. Drinks were great." },
            { name: "Elnur B", text: "One of the most consistent restaurant in Baku. Ideal option for Asian food. A little bit pricey but it worth every manat you spend here." }
        ],
        items: [],
        loading:false
    }


    const [state, dispatch] = useReducer(foodReducer, initialState)
    const url = `https://www.themealdb.com/api/json/v1/1/`;

    // https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef



    const setLoading =()=>{
        dispatch({
            type:"LOADING"
        })
    }


    const getFoods = () => {
        axios.get(`${url}categories.php`)
            .then(res => {
                dispatch({
                    type: "GET-FOODS",
                    payload: res.data.categories
                })
            })

    }

    const getCategoryItem = (item) => {
        setLoading()    
            axios.get(`${url}filter.php?c=${item}`)
            .then(res => {
                dispatch({
                    type: "CATEGORY-ITEM",
                    payload: res.data.meals
                })
            })
        
    }


    const clearItems = () => {
        dispatch({
            type: "CLEAR"
        })
    }


    const addComment = (comment) => {
        dispatch({
            type: "ADD-COMMENT",
            payload: comment
        })
    }


    useEffect(() => {
        getFoods()
    }, [])

    useEffect(() => {

    }, [initialState])




    return <FoodContext.Provider value={{
        foods: state.foods,
        comments: state.comments,
        items: state.items,
        addComment,
        getCategoryItem,
        clearItems,
        loading:state.loading
        



    }}>

        {children}
    </FoodContext.Provider>
}

export default FoodState
