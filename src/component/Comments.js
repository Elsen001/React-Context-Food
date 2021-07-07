import React, { useContext } from 'react'
import FoodContext from '../Context/Context'
import AddComment from './AddComment'

const Comments = () => {
    const context = useContext(FoodContext)
    const { comments } = context
    console.log(comments);
    return (
        <>
            <div className="cmt">
                <h1>Rəylər</h1>
                {
                    comments.map((i) => (
                        <div class="tooltip"><h2>{i.name}</h2>
                            <span class="tooltiptext">{i.text}</span>
                        </div>
                    ))
                }
            </div>
            <AddComment />
        </>
    )
}

export default Comments
