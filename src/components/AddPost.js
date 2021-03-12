import React, { Component } from 'react'

export default class AddPost extends Component {
    render() {
        return (
            <div className="flex">
                <div className="w-full shadow rounded-xl bg-leave flex justify-center items-center">
                    <p className="text-nature text-3xl font-bold">+ Add Post</p>
                </div>
            </div>
        )
    }
}
