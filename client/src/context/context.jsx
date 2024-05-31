import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";

const AppContext = createContext()

const AppProvider = ({ children }) => {

    const [posts, setPosts] = useState([])
    const [uploadCheck, setUploadCheck] = useState(false)

    const getPost = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/post')
            setPosts(data)
        } catch (error) {
            console.log(error.message)
        }
    }

    const uploadPost = async (title, creator, selectedFile, message) => {
        try {
            const { data } = await axios.post('http://localhost:5000/post',
                {
                    title,
                    creator,
                    selectedFile,
                    message,
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            if (data.success) {
                setUploadCheck(true)
            }
            return true;

        } catch (error) {
            console.log(error.message)
            return false;
        }
    }

    const likePost = async (id) => {
        try {
            const { data } = await axios.post(`http://localhost:5000/post/like/${id}`)

        } catch (error) {
            console.log(error)
        }
    }

    const editPost = async (id, title, creator, selectedFile, message) => {
        try {
            const { data } = await axios.patch(`http://localhost:5000/post/edit/${id}`,
                {
                    title,
                    creator,
                    selectedFile,
                    message,
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
        } catch (error) {
            console.log(error)
        }
    }

    const deletePost = async (id) => {
        try {
            const { data } = await axios.delete(`http://localhost:5000/post/delete/${id}`)
            if (data.success) {
                toast.success(data.message)
            }
            else {
                toast.error('Server Not Respond')
            }
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getPost();
    }, [uploadPost, deletePost, likePost, editPost])

    return (
        <AppContext.Provider value={{ posts, uploadPost, likePost, deletePost, editPost }}>
            {children}
        </AppContext.Provider>
    )
}

// Custom Hook
const useStore = () => {
    return useContext(AppContext)
}

export { AppProvider, useStore }