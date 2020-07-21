import React, {Component} from 'react'
import axios from 'axios'

const API_URL = "http://localhost:3004/blogs/";

class AddBlog extends Component {
    state = {
        title: '',
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })

    }
    handleSubmit = (e) => {
        e.preventDefault();
        
        const post = {
            title: this.state.title,
            content: this.state.content
        }
        axios.post(API_URL, post)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    render(){
        return (
            <div className="addblog">
                <h2>Add New Blog</h2>
                <form onSubmit={this.handleSubmit}>
                    <input className="d-block mx-auto mb-3" placeholder="Enter blog title..." id="title" type="text" onChange={this.handleChange} value={this.state.title}/>
                    <input className="d-block mx-auto mb-3" placeholder="Enter blog content..." id="content" type="text" onChange={this.handleChange} value={this.state.content}/>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddBlog