import React, { Component } from 'react'
import AlbumCsss from '../ComponentCss/Album.module.css';
import request from './lib';

export default class Album extends Component {
    constructor(props) {
        super(props)

        this.state = {
            glxavorEj: "users",
            albumRequest: []
        }
    }

    componentDidMount() {
        request("GET", `https://jsonplaceholder.typicode.com/albums?userId=${this.props.id}`).then((res) => {
            this.setState({
                albumRequest: res
            })
        }).catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => { this.props.onUserClick(this.state.glxavorEj) }}>Back</button>
                <div className={AlbumCsss.albumCont}>
                    {this.state.albumRequest.map((el, i) => (
                        <h3 key={`album id ${i}`} className={AlbumCsss.albumTitle}>{el.title}</h3>
                    ))}
                </div>
            </div>
        )
    }
}
