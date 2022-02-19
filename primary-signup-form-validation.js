module.exports = (user) => {

    const errors = {}
    if (typeof (user.firstname) !== 'string' || user.firstname.trim().length === 0) {
        errors.firstname = 'First name is required!';
    } else if (user.firstname.trim().length < 2) {
        errors.firstname = 'First name must be at least 2 chars!';
    }

    if (typeof (user.lastname) !== 'string' || user.lastname.trim().length === 0) {
        errors.lastname = 'First name is required!';
    } else if (user.lastname.trim().length < 5) {
        errors.lastname = 'First name must be at least 5 chars!';
    }
    // phone
    if (typeof (user.phone) !== 'string' || user.phone.trim().length === 0) {
        errors.phone = 'Phone number is required!';
    } else if (isNaN(user.phone)) {
        errors.phone = 'Provide a valid phone number!';
    } else if (!/^(\+88)?(88)?01([0-9]){9}$/.test(user.phone)) {
        errors.phone = 'Invalid format of phone number!';
    }

    // email
    if (typeof (user.email) !== 'string' || user.email.trim().length === 0) {
        errors.email = 'Email is required!';
    } else if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(user.email)) {
        errors.email = 'Provide a valid email address!';
    }

    if (typeof (user.password) !== 'string' || user.password.trim().length === 0) {
        errors.password = 'Password is required!';
    } else if (user.password.trim().length < 8) {
        errors.password = 'Password must be at least 8 chars!';
    }

    if (typeof (user.confirmpassword) !== 'string' || user.confirmpassword.trim().length === 0) {
        errors.confirmpassword = 'Confirm password is required!';
    } else if (user.confirmpassword !== user.password) {
        errors.confirmpassword = 'Confirm password does not match!';
    }

    //counting and final errors
    if (Object.keys(errors).length) {
        return errors;
    }

    return false;
}
