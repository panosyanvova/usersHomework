import React, { Component } from 'react';
import request from './lib';
import UsersCss from '../ComponentCss/Users.module.css';

export default class Users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usersRequest: [],
            erexaEj: "user",
            usId: 0
        }
    }

    componentDidMount() {
        request("GET", "https://jsonplaceholder.typicode.com/users").then((res) => {
            this.setState({
                usersRequest: res
            })
        }).catch((error) => {
            console.log(error)
        })
    }

    render() {

        return (
            <div>
                <div className={UsersCss.main} >
                    <div className={UsersCss.usersCont}>{this.state.usersRequest.map((el, i) => (<div onClick={() => { this.props.onUsersClick(this.state.erexaEj, el.id) }} key={`userName is id ${i}`} className={UsersCss.usersElement}>
                        <div className={UsersCss.img}></div>
                        {el.name}
                    </div>))}</div>
                </div>
            </div>
        )
    }
}
