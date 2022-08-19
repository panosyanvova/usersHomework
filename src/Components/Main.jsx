import React, { Component } from 'react';
import Users from './Users';
import User from './User';
import Post from './Post';
import Album from './Album';

export default class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pageName: "users",
            useriId: 0
        }
        this.ejPoxox = this.ejPoxox.bind(this)
    }
    ejPoxox(ejiAnun, id) {
        this.setState({ pageName: ejiAnun, useriId: id })
    }

    render() {
        return (
            <div>
                {this.state.pageName === "users" && <Users onUsersClick={this.ejPoxox} />}
                {this.state.pageName === "user" && <User onUserClick={this.ejPoxox} id={this.state.useriId} />}
                {this.state.pageName === "posts" && <Post onUserClick={this.ejPoxox} id={this.state.useriId} />}
                {this.state.pageName === "albums" && <Album onUserClick={this.ejPoxox} id={this.state.useriId} />}
            </div>
        )
    }
}
