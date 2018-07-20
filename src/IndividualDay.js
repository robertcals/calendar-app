import React, { Component } from 'react';

import EventManager from './EventManager';

class IndividualDay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventManager: false,
            events: []
        }
        this.showEventManager = this.showEventManager.bind(this);
        this.hideEventManager = this.hideEventManager.bind(this);
        this.newEvent = this.newEvent.bind(this);
        this.deleteThisEvent = this.deleteThisEvent.bind(this);
    }

    renderEventManager () {
        if (this.state.eventManager) {
            return (
                <EventManager date={this.props.date} closeBox={this.hideEventManager} newEvent={this.newEvent}/>
            )
        } else return;
    }

    showEventManager(e) {
        if (!this.state.eventManager) {
            this.setState({
                eventManager: true
            })
        }
    }

    hideEventManager() {
        this.setState({
            eventManager: false
        })
    }

    newEvent(event) {
        console.log(event);
        this.setState({
            events: [...this.state.events, event]
        })
    }

    listEvents() {
        if (this.state.events.length>0) {
            var eventList = this.state.events.map((event) => {
                return (
                    <li key={event.event}>{event.event} @ {event.time}
                        <span onClick={(e) => {
                                    e.stopPropagation();
                                    this.deleteThisEvent(event.event);
                                }
                            } className="remove-button">
                            X
                        </span>
                    </li>
                )
            })
            console.log(eventList);
            return eventList;
        }
    }

    deleteThisEvent(event) {
        this.setState((prevState) => {
                var interimEvents = [];
                for (var i=0; i<prevState.events.length; i++) {
                    if (prevState.events[i].event !== event) {
                        interimEvents.push(prevState.events[i]);
                    }
                }
                return ({
                    events: interimEvents
                })
            }
        );
        console.log(this.state.events);
    }

    render() {
            return (
            <div className="calendar-slot grow shadow-5" key={this.props.i} id={this.props.key} onClick={this.showEventManager}>{this.props.date}{this.renderEventManager()}
            <ul>
                {this.listEvents()}
            </ul>
            </div>
        )
    }
}

export default IndividualDay;
