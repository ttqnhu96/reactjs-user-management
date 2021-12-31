import {  CHANGE_THEME, DELETE_USER, EDIT_USER, REGISTER, UPDATE_USER } from "../types/UserManagementTypes";

export const changeThemeAction = (themeId) => {
    return {
        type: CHANGE_THEME,
        themeId
    }
}

export const registerAction = (newUser) => {
    return {
        type: REGISTER,
        newUser
    }
}

export const deleteUserAction = (userId) => ({
    type: DELETE_USER,
    userId
}) 

export const editUserAction = (user) => ({
    type: EDIT_USER,
    user
})

export const updateUserAction = (user) => ({
    type: UPDATE_USER,
    user
})