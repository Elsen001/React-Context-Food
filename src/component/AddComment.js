import React, { useContext, useEffect, useState } from 'react'
import FoodContext from '../Context/Context'

const AddComment = () => {
    const context = useContext(FoodContext)
    const {addComment} = context;

    const [data,setData]=useState({
        name:"",
        text:""
    })

    const Change =(e) =>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const onSubmit=(e)=>{
        e.preventDefault()
        if(data.name && data.text){

            addComment(data)
        }else{
            alert("Place enter...")
        }
        setData({
            name:"",
            text:""
        })
    }

    useEffect(() => {
        
    }, [onSubmit])

    return (
        <div className="addComment">
            <form onSubmit={onSubmit} action="">
                <input onChange={Change} value={data.name} type="text" name="name" id="" placeholder="Name..."/>
                <textarea onChange={Change} value={data.text} placeholder="Comment..." name="text" id="" cols="30" rows="10"></textarea>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default AddComment
