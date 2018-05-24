import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends Component {
    render() {
        const { postId } = this.props.params;
        // post index
        const i = this.props.posts.findIndex(
            (post) => post.code === postId);
        // the actual post
        const post = this.props.posts[i];
        // the post comments
        const postComments = this.props.comments[postId] || [];

        return (   
            <div className="single-photo">
                <Photo i={i} post={post} {...this.props}></Photo>
                <Comments postComments={postComments} />
            </div>
        );
    }
}

export default Single;