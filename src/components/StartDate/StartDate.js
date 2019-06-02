import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Checkout from '../Checkout/Checkout';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class StartDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            endDate: new Date(),
        };
        this.handleStartChange = this.handleStartChange.bind(this);
        this.handleEndChange = this.handleEndChange.bind(this);

    }

    handleStartChange(date) {
        console.log('Start date picked',date);
        
        this.setState({
            startDate: date
        });
    }

    handleEndChange(date) {
        console.log('End date picked', date);

        this.setState({
            endDate: date
        });
    }

    render() {
        return (
            <div>
                <lable>Start Date</lable>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleStartChange}
                />
                <br/>
                <label>End Date</label>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleEndChange}
                />
                <br/>
                <Checkout dates={this.state}/>
            </div>
            
        );
    }
}

export default StartDate;