export const labels = {
    userAccount: 'User Account',
    fullName: 'Full Name',
    password: 'Password',
    phoneNumber: 'Phone Number',
    email: 'Email'
}

export const REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const REGEX_PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$@$!%*?&.]{5,10}$/;
export const REGEX_PHONE_NUMBER = /^[0-9]+$/;