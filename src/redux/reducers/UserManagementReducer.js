import { AdminTheme } from "../../Themes/AdminTheme"
import { arrTheme } from "../../Themes/ThemeManager";
import { CHANGE_THEME, DELETE_USER, EDIT_USER, REGISTER, UPDATE_USER } from "../types/UserManagementTypes";

const initialState = {
    disable: false,
    themeUserManagement: AdminTheme,
    userList: [{
        id: '1',
        userAccount: 'NhuTTQ3',
        fullName: 'Trinh Thi Quynh Nhu',
        password: 'nhu18tuoi',
        phoneNumber: '0123456789',
        email: 'qnhu96@gmail.com',
        userType: 'Admin'
    }
    ],
    userEdit: {
        id: '0',
        userAccount: '',
        fullName: '',
        password: '',
        phoneNumber: '',
        email: '',
        userType: ''
    },
}


const UserManagementReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_THEME: {
            //Find theme based on selected action.themeId
            let theme = arrTheme.find(theme => theme.id === action.themeId);
            if (theme) {
                //Set theme for state.themeToDoList
                state.themeUserManagement = { ...theme.theme };
            }
            return { ...state };
        }
        case REGISTER: {
            let newUser = { ...action.newUser, id: state.userList.length + 1 };
            let newUserList = [...state.userList];
            newUserList.push(newUser);

            //Assign new user list to current user list
            state.themeUserManagement = AdminTheme;
            state.userList = newUserList;
            state.userEdit = {
                id: '-1',
                userAccount: '',
                fullName: '',
                password: '',
                phoneNumber: '',
                email: '',
                userType: ''
            }
            return { ...state }
        }
        case DELETE_USER: {
            return { ...state, userList: state.userList.filter(user => user.id !== action.userId) }
        }
        case EDIT_USER: {
            let theme = arrTheme.find(theme => theme.name === action.user.userType);
            if (state.userEdit.id !== action.user.id) {
                if (theme) {
                    //Set theme
                    state.themeUserManagement = { ...theme.theme };
                }
            }
            return { ...state, userEdit: action.user, disable: true }
        }
        case UPDATE_USER: {
            //Find user in user list
            let userListUpdate = [...state.userList];

            let index = userListUpdate.findIndex(user => user.id === action.user.id);
            if (index !== -1) {
                userListUpdate[index] = action.user;
            }
            state.themeUserManagement = AdminTheme;
            state.userEdit = {
                id: '-1',
                userAccount: '',
                fullName: '',
                password: '',
                phoneNumber: '',
                email: '',
                userType: ''
            }
            return { ...state, userList: userListUpdate, disable: false }
        }
        default:
            return { ...state }
    }
}

export default UserManagementReducer;
