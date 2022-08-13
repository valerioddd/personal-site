import './Projects.css';
import React, { useState, useEffect } from 'react';

const Projects = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        fetch('https://api.github.com/users/valerioddd/repos', {
            method: 'GET',
            headers: {
                'User-Agent': '',
                'Authorization': 'token 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'
            },
        })
           .then((response) => response.json())
           .then((data) => {
              console.log(data);
              setPosts(data);
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);


    return (
        <>
        <div className='title-div'>
            <h1 className='title'>Projects</h1>
            <p className='subtitle'>
                <code>
                    Get a full view on my&nbsp;
                    <code className='link' onClick={() => 
                        window.open('https://www.linkedin.com/in/valerio-ditta/', '_blank')}>
                            GitHub
                    </code>        
                    &nbsp;profile
                </code>
            </p>
        </div>
        <div className="component">
            <div className="firstComponent">
                <p>GitHub projects</p>
                <table className="table table-bordered table-sm projects-table">
                    <tbody>
                        {posts.map((post) => {
                            return (
                                <tr>
                                    <td>{post.name}</td>
                                    <td className='projects-table-desc'>{post.description}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
}

export default Projects;