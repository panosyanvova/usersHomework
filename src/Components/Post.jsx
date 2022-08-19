import React, { Component } from 'react';
import PostsCss from '../ComponentCss/Posts.module.css';
import request from './lib';

export default class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            glxavorEj: "users",
            postsRequest: []
        }
    }

    componentDidMount() {
        request("GET", `https://jsonplaceholder.typicode.com/posts?userId=${this.props.id}`).then((res) => {
            this.setState({
                postsRequest: res
            })
        }).catch((error) => {
            console.log(error)
        })
    }

    render() {
        console.log(this.state.postsRequest);
        return (
            <div><button onClick={() => { this.props.onUserClick(this.state.glxavorEj) }}>back</button>
                <div className={PostsCss.postsBody}>
                    {this.state.postsRequest.map((el, i) => (
                        <div className={PostsCss.postsText}>
                            <h3 key={`posts title ${i}`}>{el.title}</h3>
                            <div key={`posts text ${i}`}>{el.body}</div>
                        </div>

                    ))}
                </div>
            </div>
        )
    }
}
