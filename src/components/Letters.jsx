import React from 'react'
import { Component } from 'react';

export default class Letters extends Component {
    handleScroll = (el) => {
        document.getElementById("app").scrollTo(0, document.getElementById(el).offsetTop-100);
    }
    render() {
        const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
        return (
            <div class="letters">
                {
                    letters.map((letter, index) => <span onClick={() => this.handleScroll(letter)} key={index}>{letter}</span>)
                }
            </div>
        )
    }
}
