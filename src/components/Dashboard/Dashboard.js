// import List from '../Blog/List'
import React, { Component } from 'react';
// import AddBlog from '../Blog/AddBlog';
import Bloglist from '../Blog/Bloglist';

export class Dashboard extends Component {
    // state = {
    //     blogs: []
    //   }
      // deleteBlog = (id) => {
      //   const blogs = this.state.blogs.filter(blog => {
      //     return blog.id !== id;
      //   })
      //   this.setState({
      //     blogs
      //   })
      // }
    
      // editBlog = (updatedblog, id, name) => {
      //   const blogs = this.state.blogs;
      //   blogs.map(blog => {
      //     if(blog.id === id){
      //        if(name === 'title'){
      //            blog.title = updatedblog;
      //        }
      //        else{
      //            blog.content = updatedblog;
      //        }
      //     }
      //     this.setState({
      //       blogs
      //     })
      //   })
      // }
    
      // addBlog = (blog) => {
      //   blog.id = Math.random();
      //   let blogs = [...this.state.blogs, blog];
      //   this.setState({
      //     blogs
      //   })
      //   console.log(this.state)
      // }
    render() {
        return (
            <div className="dashboard">
                <h1 className="appTitle container mb-5">
                    Blog List
                </h1>
                <div className="container">
                  <div className="row">
                    <div className="col-sm-6 col-12">
                      {/* <AddBlog/> */}
                    </div>
                    <div className="col-sm-6 col-12">
                      <Bloglist />
                    </div>
                  </div>
                </div>
                {/* <List blogs={this.state.blogs} deleteBlog={this.deleteBlog} editBlog={this.editBlog}/> */}
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//   return {
//     blogs : state.blog.blogs
//   }
// }

// export default connect(mapStateToProps)(Dashboard)
export default Dashboard
