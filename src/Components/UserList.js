import React, { Component } from 'react'
import { Heading4 } from '../StyledComponents/Headings'
import { Table, Tbody, Td, Th, Thead, Tr } from '../StyledComponents/Table'
import { UserListContainer } from '../StyledComponents/UserListContainer'
import { connect } from 'react-redux'
import { deleteUserAction, editUserAction } from '../redux/actions/UserManagementActions'

class UserList extends Component {
    renderUserList = () => {
        return this.props.userList.map((user, index) => {
            return <Tr key={index}>
                <Td style={{ verticalAlign: 'middle' }}>{user.id}</Td>
                <Td style={{ verticalAlign: 'middle' }}>{user.userAccount}</Td>
                <Td style={{ verticalAlign: 'middle' }}>{user.fullName}</Td>
                <Td style={{ verticalAlign: 'middle' }}>{user.password}</Td>
                <Td style={{ verticalAlign: 'middle' }}>{user.email}</Td>
                <Td style={{ verticalAlign: 'middle' }}>{user.phoneNumber}</Td>
                <Td style={{ verticalAlign: 'middle' }}>{user.userType}</Td>
                <Td style={{ verticalAlign: 'middle' }}>
                    <button className="btn btn-dark text-white" onClick={() => {
                        this.props.dispatch(editUserAction(user))
                    }}><i className="fa fa-edit"></i></button>

                    <button className="btn btn-dark text-white ml-2" onClick={() => {
                        this.props.dispatch(deleteUserAction(user.id))
                    }}><i className="fa fa-trash"></i></button>
                </Td>
            </Tr>
        })
    }

    render() {
        return (
            <div><br />
                <UserListContainer className="card">
                    <Heading4>User List</Heading4>
                    <div className="card-body">
                        <Table className="table" >
                            <Thead>
                                <Tr>
                                    <Th>No</Th>
                                    <Th>Account</Th>
                                    <Th>Full Name</Th>
                                    <Th>Password</Th>
                                    <Th>Email</Th>
                                    <Th>Phone Number</Th>
                                    <Th>User Type</Th>
                                    <Th></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {this.renderUserList()}
                            </Tbody>
                        </Table>
                    </div>

                </UserListContainer>
            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        userList: state.UserManagementReducer.userList
    }
}


export default connect(mapStateToProps)(UserList)
