import React, { Component } from 'react'

import style from '../StyleComponent/StyleComponent.module.css'


export default class StyleComponent extends Component {
    render() {

        let fontSize = 50;

        return (
            <div className="container">
                style component
                <p style={{
                    fontSize: `${fontSize}px`,
                    padding: `10px`,
                    paddingTop: '15px'
                }} 
                className={`${style.fontBold} ${style['p-green']}`}>Hello</p>
            </div>
        )
    }
}
