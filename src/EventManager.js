import React, { Component } from 'react';

class EventManager extends Component {
    constructor(props) {
        super(props);
        this.closeBox = this.closeBox.bind(this);
        this.handleEventChange = this.handleEventChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            event: "",
            time: ""
        }
    }

    handleEventChange(e) {
        this.setState({event: e.target.value});
    }
    handleTimeChange(e) {
        this.setState({time: e.target.value});
    }

    closeBox() {
        this.props.closeBox();
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.newEvent(this.state);
        this.setState({
            event: "",
            time: ""
        })
        this.closeBox();
    }

    render() {
        return (
            <div className="event-manager">
                {this.props.date}
                <div className ="shader" onClick={this.closeBox}/>
                <span onClick={this.closeBox} className="remove-button"> X </span>
                <form onSubmit={this.onSubmit}>
                    <input value={this.state.event} onChange={this.handleEventChange}  placeholder="Event"/>
                    <input value={this.state.time} onChange={this.handleTimeChange}  placeholder="Time"/>
                    <input type="submit" value="Enter"/>
                </form>
             </div>
        )
    }
}

export default EventManager;
