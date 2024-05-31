import React, { useState } from 'react';
import Cards from './Cards';
import PostForm from './PostForm';
import { useStore } from '../context/context';

const Home = () => {
    const { posts } = useStore();
    const [inputText, setInputText] = useState('');

    const filterPost = posts.filter((post) =>
        post.title.toLowerCase().includes(inputText.toLowerCase())
    );

    return (
        <main className="home">
            <div className="container">
                <header className='header'>
                    <h1 className='heading'>Memories</h1>
                    <input
                        type="search"
                        placeholder='Search Post'
                        className='search'
                        value={inputText}
                        onInput={(e) => setInputText(e.target.value)}
                    />
                </header>
                <hr />
                <div className="innerContainer">
                    <div className="cardSection">
                        {filterPost.length === 0 ? (
                            <h2 className='noPost'>No Post Found</h2>
                        ) : (
                            filterPost.map((item) => (
                                <Cards
                                    key={item._id}
                                    id={item._id}
                                    title={item.title}
                                    message={item.message}
                                    creator={item.creator}
                                    likeCount={item.likeCount}
                                    image={item.selectedFile}
                                    date={item.createdAt}
                                />
                            ))
                        )}
                    </div>
                    <div className="formSection">
                        <PostForm />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;
