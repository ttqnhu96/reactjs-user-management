import React, { Component } from 'react'
import { changeThemeAction, registerAction, updateUserAction } from '../redux/actions/UserManagementActions'
import { Button } from '../StyledComponents/Button'
import { Dropdown } from '../StyledComponents/Dropdown'
import { Form } from '../StyledComponents/Form'
import { Heading3 } from '../StyledComponents/Headings'
import { TextField } from '../StyledComponents/TextFields'
import { arrTheme } from '../Themes/ThemeManager'
import { connect } from 'react-redux';
import Swal from 'sweetalert2'
import { ErrorMess } from '../StyledComponents/ErrorMess'
import { labels, REGEX_EMAIL, REGEX_PASSWORD, REGEX_PHONE_NUMBER } from '../Common/CommonConstant'

class RegisterForm extends Component {
    state = {
        values: {
            id:'',
            userAccount: '',
            fullName: '',
            password: '',
            phoneNumber: '',
            email: '',
            userType: 'Admin'
        },
        errors: {
            userAccount: '',
            fullName: '',
            password: '',
            phoneNumber: '',
            email: ''
        }
    }

    handleChangeValue = (event) => {

        let { name, value } = event.target;

        let newValue = { ...this.state.values, [name]: value };
        let newErrors = { ...this.state.errors, [name]: '' };

        this.setState({
            values: newValue,
            errors: newErrors
        })
    }

    handleSubmit = (event) => {
        //Prevent reloading page when submit
        event.preventDefault();
        //Get information inputted by user
        let { values } = this.state;

        let newErrors = { ...this.state.errors };

        //Validate before submitting
        let isValid = true;
        for (let key in values) {
            //Validate user account
            if (key === 'userAccount' && values[key] !== '') {
                let index = this.props.userList.findIndex(user => user.userAccount === values[key]);
                if (index !== -1) {
                    newErrors[key] = labels[key] + ' already exists!';
                    isValid = false;
                }
            }

            //Validate required fields
            if (key !== 'id' && values[key] === '') {
                newErrors[key] = labels[key] + ' is required!';
                isValid = false;
            }

            //Validate email
            if (key === 'email' && values[key] !== '') {
                if (!REGEX_EMAIL.test(values[key])) { //Invalid email
                    newErrors[key] = labels[key] + ' is invalid!';
                    isValid = false;
                }
            }

            //Validate password
            if (key === 'password' && values[key] !== '') {
                if (!REGEX_PASSWORD.test(values[key])) { //Invalid password
                    newErrors[key] = labels[key] + ' must be 5-10 characters, contain at least one letter and one number!';
                    isValid = false;
                }
            }

            //Validate phone number
            if (key === 'phoneNumber' && values[key] !== '') {
                if (!REGEX_PHONE_NUMBER.test(values[key])) { //Invalid phone number
                    newErrors[key] = labels[key] + ' is invalid!';
                    isValid = false;
                }
            }
        }

        //Failed
        if (!isValid) {
            this.setState({
                errors: newErrors
            })
            Swal.fire({
                title: 'Registration failed!',
                icon: 'error', //success, error, warning, question
                confirmButtonText: 'OK'
            })
            return;
        }

        //Create new user object
        let newUser = {
            id: '1',
            userAccount: values.userAccount,
            fullName: values.fullName,
            password: values.password,
            phoneNumber: values.phoneNumber,
            email: values.email,
            userType: values.userType
        }
        //Dispatch register action to producer
        this.props.dispatch(registerAction(newUser))

        //Success
        Swal.fire({
            title: 'Registration successful!',
            icon: 'success', //success, error, warning, question
            confirmButtonText: 'OK'
        });
    }

    renderTheme = () => {
        return arrTheme.map((theme, index) => {
            return <option key={index} value={theme.id}>{theme.name}</option>
        })
    }

    render() {
        return (
            <div>
                <Form autoComplete="off" onSubmit={this.handleSubmit}>
                    <Heading3>Registration Form</Heading3>
                    <div className="p-1">
                        <div className="row m-2">
                            <div className="col-6">
                                <TextField name="userAccount" label="User Account" placeholder="Enter user account"
                                    value={this.state.values.userAccount} onChange={this.handleChangeValue} />
                                <ErrorMess>{this.state.errors.userAccount}</ErrorMess>
                            </div>
                            <div className="col-6">
                                <TextField name="fullName" label="Full Name" placeholder="Enter full name"
                                    value={this.state.values.fullName} onChange={this.handleChangeValue} />
                                <ErrorMess>{this.state.errors.fullName}</ErrorMess>
                            </div>
                        </div>
                        <div className="row m-2">
                            <div className="col-6">
                                <TextField name="password" label="Password" type="password" placeholder="Enter password"
                                    value={this.state.values.password} onChange={this.handleChangeValue} />
                                <ErrorMess>{this.state.errors.password}</ErrorMess>
                            </div>
                            <div className="col-6">
                                <TextField name="phoneNumber" label="Phone Number" placeholder="Enter phone number"
                                    value={this.state.values.phoneNumber} onChange={this.handleChangeValue} />
                                <ErrorMess>{this.state.errors.phoneNumber}</ErrorMess>
                            </div>
                        </div>
                        <div className="row m-2">
                            <div className="col-6">
                                <TextField name="email" label="Email" placeholder="Enter email"
                                    value={this.state.values.email} onChange={this.handleChangeValue} />
                                <ErrorMess>{this.state.errors.email}</ErrorMess>
                            </div>
                            <div className="col-6">
                                <Dropdown value={arrTheme.findIndex(theme => theme.name === this.state.values.userType) + 1} name="userType" label="User Type" onChange={(e) => {
                                    let { name, value } = e.target;
                                    this.setState({
                                        values: { ...this.state.values, [name]: arrTheme.find(theme => theme.id === value).name }
                                    }, () => {
                                        this.props.dispatch(changeThemeAction(value))
                                    })
                                }}>
                                    {this.renderTheme()}
                                </Dropdown>
                            </div>
                        </div>
                        <div className="row m-2">
                            <div className="col-6">
                                {this.props.disable ? <Button className="btn" disabled>Register</Button> : <Button className="btn" >Register</Button>}
                                {this.props.disable ? <Button className="btn" onClick={() => {this.props.dispatch(updateUserAction(this.state.values))}} type="button">Update</Button> : <Button className="btn"  type="button" disabled>Update</Button>}
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.userEdit.id !== this.props.userEdit.id) {
            this.setState({
                values: this.props.userEdit
            })
        }
    }
}

const mapStateToProps = state => {
    return {
        userList: state.UserManagementReducer.userList,
        userEdit: state.UserManagementReducer.userEdit,
        disable: state.UserManagementReducer.disable
    }
}


export default connect(mapStateToProps)(RegisterForm)
