import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class endDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            endDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        console.log('picked date', date);

        this.setState({
            endDate: date
        });
    }

    render() {
        return (
            <DatePicker
                selected={this.state.endDate}
                onChange={this.handleChange}
            />
        );
    }
}

export default endDate;