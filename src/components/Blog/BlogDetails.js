import React from 'react'

const BlogDetails = (props) => {
    const id = props.match.params.id;

    return (
        <div className="blogdetails">
            <div className="card">
                <span className="card-title">Title - {id}</span>
                <p className="blog-content">lorem40</p>
                <div>Posted by User</div>
            </div>
        </div>
    )
}

export default BlogDetails
