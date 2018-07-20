import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="App-header grow shadow-5">
              <h1 className="App-title grow">Calendar App</h1>
              <div className="author">Made with <span className="text-danger">♥</span> by <a href="https://robertcals.github.io/portfolio/" target="_blank">Roberto Caldeira</a></div>
              <h2>{months[new Date().getMonth()] + " " + new Date().getFullYear()}</h2>
            </header>
        )
    }
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

export default Header;
