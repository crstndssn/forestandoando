import React, { Component } from 'react'

import Post from '../components/Post'
import AddPost from '../components/AddPost'

export default class Posts extends Component {
    render() {
        return (
            <div>
                <div className="grid grid-cols-3 gap-3">
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <AddPost />
                </div>
            </div>
        )
    }
}
