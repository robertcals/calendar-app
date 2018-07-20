import React, { Component } from 'react';

import IndividualDay from './IndividualDay';

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            month: new Date().getMonth(),
            year: new Date().getFullYear()
        }
    }

    renderDayHeaders() {
        var dayHeaders = [];
        for (var i=0; i<7; i++) {
            dayHeaders.push(<div className="day-title grow shadow-5" key={`${i} day`} id={`${i} day`}>{daysOfTheWeek[i]}</div>)
        }
        return dayHeaders;
    }

    renderDaySlots() {
        var firstDay = firstDayOfTheMonth(this.state.month, this.state.year);
        var daySlots = [];
        for (var i=0; i<42; i++) {
            let thisDate = new Date(this.state.year, this.state.month, i-(firstDay-1)).getDate();
            daySlots.push(
                <IndividualDay i={i} date={thisDate} />
            )
        }
        return daySlots;
    }

    render() {
        return(
            <div className="calendar-grid">
                {this.renderDayHeaders()}
                {this.renderDaySlots()}
            </div>
        )
    }
}

function firstDayOfTheMonth(month, year) {
    return new Date(year, month, 1).getDay();
}

const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

export default Calendar;
