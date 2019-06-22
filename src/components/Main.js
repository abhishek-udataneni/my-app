import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchCurrentUser from '../store/actions/actionCreator';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { PrimaryButton } from 'office-ui-fabric-react';

const dropdownStyles = {
    dropdown: { width: 300 }
};
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDepartment: "",
            selectedId: ""
        };
        this.handleClick = this.handleClick.bind(this)
    }
    departments = [
        { key: 'eng', text: 'Engineering' },
        { key: 'hr', text: 'HR' },
    ]
    employeeIds = [
        { key: '1', department: 'hr', text: "1" },
        { key: '2', department: 'hr', text: "2" },
        { key: '3', department: 'hr', text: "3" },
        { key: '4', department: 'hr', text: "4" },
        { key: '4', department: 'hr', text: "5" },
        { key: '6', department: 'eng', text: "6" },
        { key: '7', department: 'eng', text: "7" },
        { key: '8', department: 'eng', text: "8" },
        { key: '9', department: 'eng', text: "9" },
        { key: '10', department: 'eng', text: "10" },
    ]
 
    stackTokens = { childrenGap: 20 };
    handleChange = (event, item) => {
        this.setState({
            [event.target.name]: item
        })
    }
    handleClick =() => {
        debugger
        if(this.state.selectedId === ""){
            return 
        }
        debugger
        this.props.fetchCurrentUser(this.state.selectedId)
    }

    render() {
        return (
            <Stack tokens={this.stackTokens}>
                <Dropdown
                    label="please select from options"
                    name="selectedDepartment"
                    selectedKey={this.state.selectedDepartment.key}
                    onChange={(event, item) => this.handleChange(event, item)}
                    placeholder="Select an option"
                    options={this.departments}
                    styles={dropdownStyles}
                />

                <Dropdown
                    label=""
                    selectedKey={this.state.selectedId.key}
                    onChange={(event, item) => this.handleChange(event, item)}
                    placeholder="Select an option"
                    options={this.employeeIds}
                    styles={dropdownStyles}
                    name="selectedId"
                />
                <div style={{width:300}}>  
                <PrimaryButton
                    // data-automation-id="test"
                    // disabled={disabled}
                    // checked={checked}
                    text="Button"
                    onClick={this.handleClick}
                    allowDisabledFocus={true}
                /> </div>
              {this.props.currentUserData.detailsLoading && "Loading ..."}
              {JSON.stringify(this.props.currentUserData.details) !== "{}" && 
                (<div>
                    <img src={this.props.currentUserData.details.avatar} style={{height:"200px"}} alt="profile"/>
                    {this.props.currentUserData.details.first_name} {this.props.currentUserData.details.last_name}
                </div>)
            }
            </Stack>


        );
    }
}

const mapStateToProps = state => {
    return {
        currentUserData:state.currentUser
    };
 };
export default connect(mapStateToProps, { fetchCurrentUser })(Main);