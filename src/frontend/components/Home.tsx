import * as React from 'react';
import {Component} from "react";

export interface HomeState {
    name: string;
}

export default class Home extends Component<{}, HomeState> {

    componentDidMount() {
        fetch('/api')
            .then(res => res.json())
            .then(data => this.setState({
                name: data.name,
            }));
    }

    render() {
        const {name} = this.state;
        return (
            <>
                {name ? (
                    <div className="container-fluid">
                        <div className="row">
                            <div className="hidden-xs hidden-sm col-md-5 col-lg-5">
                                <div id="crop">
                                    <img src="public/headshot.jpg"/>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                                <div id="info">
                                    <h1>{name}</h1>
                                    <p>Student of the web</p>
                                    <ul>
                                        <a href="">
                                            <li>About &rsaquo;</li>
                                        </a>
                                        <a href="">
                                            <li>LinkedIn &rsaquo;</li>
                                        </a>
                                        <a href="">
                                            <li>Resume &rsaquo;</li>
                                        </a>
                                        <a href="">
                                            <li>Github &rsaquo;</li>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>Loading...</div>
                )}
            </>
        );
    }
}