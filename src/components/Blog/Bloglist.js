import React, {Component} from 'react';
import {connect} from 'react-redux'
import {loadBlogs} from '../../store/actions/blogActions'



class Bloglist extends Component {
    componentDidMount() {
        this.props.loadBlogs();
        
    }

    render() {
        const { blogs } = this.props
        
        return (
            <div>
                <h1>{blogs[0].id}</h1>
            </div>
        )
    }
}



const mapStateToProps = blogs => ({
    blogs
})
const mapDispatchToProps = dispatch => ({
    loadBlogs: () => dispatch(loadBlogs()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Bloglist)
