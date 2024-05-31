import React from 'react'
import { FaThumbsUp, FaBitbucket, FaEdit } from 'react-icons/fa'
import { useStore } from '../context/context'

const Cards = ({ title, message, creator, image, likeCount, date, id }) => {

    const { likePost, deletePost } = useStore()

    const formattedDate = new Date(date).toLocaleDateString()
    return (
        <div className="card">
            <img src={image} alt="post" />
            <p className="imagePara">{creator}</p>
            <p className="imageDate">{formattedDate}</p>
            {/* <FaEdit className='editBtn' /> */}
            <div className="cardContent">
                <h2 className="cardHeading">{title}</h2>
                <p className="cardPara">{message}</p>
                <div className="cardBtn">
                    <span className='like' onClick={() => likePost(id)}>
                        <FaThumbsUp />
                        Like <span>{likeCount}</span>
                    </span>
                    <span className='delete' onClick={() => deletePost(id)}>
                        <FaBitbucket />
                        Delete
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Cards