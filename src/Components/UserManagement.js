import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import RegisterForm from './RegisterForm'
import UserList from './UserList'
import { connect } from 'react-redux'
import { AdminTheme } from '../Themes/AdminTheme'

class UserManagement extends Component {
    state = {
        themeUserManagement: AdminTheme
    }
    render() {
        return (
            <div style={{ background: 'linear-gradient(to top,#fbc2eb 0%,#a18cd1 100%)', padding: '10px 0', height: '100%', minHeight: '100vh' }}>
                <ThemeProvider theme={this.props.themeUserManagement}>
                    <div className="container-fluid w-75">
                        <RegisterForm />
                        <UserList />
                    </div>
                </ThemeProvider>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        themeUserManagement: state.UserManagementReducer.themeUserManagement
    }
}


export default connect(mapStateToProps)(UserManagement)
