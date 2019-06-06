import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormGroup, Checkbox, FormControlLabel, Button, Grid } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    addButton: {
        margin: '10px'
    }
}

class CarFeatures extends Component {
    render() {
        let features = this.props.state;
        console.log('value takin from checkbox', this.state, this.props.car)
        return(
            <div>
            <h3>Features</h3>
            <FormGroup row>
                <FormControlLabel
                    control={
                        <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            value="all_wheel_drive"
                            color="primary"
                            onChange={this.props.handleChangeFeatures('all_wheel_drive')}
                            checked={features.all_wheel_drive}
                        />
                    }
                    label="AWD"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            value="pet_friendly"
                            color="primary"
                            onChange={this.props.handleChangeFeatures('pet_friendly')}
                            checked={features.pet_friendly}
                        />
                    }
                    label="Pet Friendly"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            value="heated_seats"
                            color="primary"
                            onChange={this.props.handleChangeFeatures('heated_seats')}
                            checked={features.heated_seats}
                        />
                    }
                    label="Heated Seats"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            value="convertible"
                            color="primary"
                            onChange={this.props.handleChangeFeatures('convertible')}
                            checked={features.convertible}
                        />
                    }
                    label="Convertible"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            value="sunroof"
                            color="primary"
                            onChange={this.props.handleChangeFeatures('sunroof')}
                            checked={features.sunroof}
                        />
                    }
                    label="Sunroof"
                />
                    <FormControlLabel
                        control={
                            <Checkbox
                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                value="automatic"
                                color="primary"
                                onChange={this.props.handleChangeFeatures('automatic')}
                                checked={features.automatic}
                            />
                        }
                        label="Automatic"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                value="manual"
                                color="primary"
                                onChange={this.props.handleChangeFeatures('manual')}
                                checked={features.manual}
                            />
                        }
                        label="Manual"
                    />
                </FormGroup>
                <h3>Vehicle Type</h3>
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                value="electric"
                                color="primary"
                                onChange={this.props.handleChangeFeatures('electric')}
                                checked={features.electric}
                            />
                        }
                        label="Electric"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                value="gas"
                                color="primary"
                                onChange={this.props.handleChangeFeatures('gas')}
                                checked={features.gas}
                            />
                        }
                        label="Gas"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                value="hybrid"
                                color="primary"
                                onChange={this.props.handleChangeFeatures('hybrid')}
                                checked={features.hybrid}
                            />
                        }
                        label="Hybrid"
                    />
            </FormGroup>
            </div>
        )
    }
}


export default withStyles(styles)(connect()(CarFeatures));