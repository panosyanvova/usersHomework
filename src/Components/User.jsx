import React, { Component } from 'react'
import request from './lib';
import UserCss from '../ComponentCss/User.module.css';



export default class User extends Component {
    constructor(props) {
        super(props)

        this.state = {
            glxavorEj: "users",
            userRequest: [],
            album: "albums",
            post: "posts"
        }
    }
    componentDidMount() {
        request("GET", `https://jsonplaceholder.typicode.com/users?id=${this.props.id}`).then((res) => {
            this.setState({
                userRequest: res
            })
        }).catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <>
                <button onClick={() => { this.props.onUserClick(this.state.glxavorEj) }}>Back</button>
                <div className={UserCss.userEj}>
                    <div className={UserCss.userCont}>
                        <div className={UserCss.nkarEvAnun}>
                            <div className={UserCss.userNkar}></div>
                            {this.state.userRequest.map((el, i) => (
                                <div key={`User name ${i}`} className={UserCss.name}><span className={UserCss.result}>{el.name}</span></div>
                            ))}
                        </div>
                        <div className={UserCss.userInfo}>
                            {this.state.userRequest.map((el, i) => (
                                <>
                                    <div className={UserCss.useriMasin} key={`User email ${i}`}> Email: <span className={UserCss.result}>{el.email}</span></div>
                                    <div className={UserCss.useriMasin} key={`User phone ${i}`}>Phone: <span className={UserCss.result}>{el.phone}</span></div>
                                    <div className={UserCss.useriMasin} key={`User username ${i}`}>Username: <span className={UserCss.result}>{el.username}</span></div>
                                    <div className={UserCss.useriMasin} key={`User website ${i}`}>Website: <span className={UserCss.result}>{el.website}</span></div>
                                </>
                            ))}
                        </div>
                        <div className={UserCss.erkuButton}>
                            <button className={UserCss.postsButton} onClick={() => { this.state.post === "posts" && this.props.onUserClick(this.state.post, this.props.id) }}>Posts</button>
                            <button className={UserCss.albumButton} onClick={() => { this.state.album === "albums" && this.props.onUserClick(this.state.album, this.props.id) }}>Albums</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
