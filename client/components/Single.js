import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends Component {
    render() {
        // post index
        const i = this.props.posts.findIndex(
            (post) => post.code === this.props.params.postId
        );
        // the actual post
        const post = this.props.posts[i];

        return (   
            <div className="single-photo">
                <Photo i={i} post={post} {...this.props}></Photo>
                <Comments></Comments>
            </div>
        );
    }
}

export default Single;