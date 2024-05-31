import React, { useState } from 'react'
import { useStore } from '../context/context'
import { toast } from "react-toastify";

const PostForm = () => {

  const { uploadPost } = useStore();
  const [title, setTitle] = useState('');
  const [creator, setCreator] = useState('');
  const [message, setMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const success = await uploadPost(title, creator, selectedFile, message)

      if (success) {
        toast.success('Post Uploaded Successfully')
        setTitle('')
        setCreator('')
        setMessage('')
        setSelectedFile('')
      } else {
        toast.error('Post not uploaded')
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='formHeading'>Creating a memory</h2>
      <input type="text" name="creator" placeholder='Creator' value={creator} onChange={e => setCreator(e.target.value)} />
      <input type="text" name='title' placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} />
      <input type="text" className='file' placeholder='Image Url' value={selectedFile} onChange={e => setSelectedFile(e.target.value)} />
      <input type="text" name="message" placeholder='Message' className='message' value={message} onChange={e => setMessage(e.target.value)} />
      <button className='formBtn' type='submit'>Post</button>
    </form>
  )
}

export default PostForm