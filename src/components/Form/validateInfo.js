export default function validateInfo(values) {
    let errors = {}
    if (!values.username.trim()) {
        errors.username = 'Username Required'
    }
    if (!values.password) {
        errors.password = 'Password Required'
    } else if (values.password.length < 6) {
        errors.password = 'Password needs to be atleast 6 characters'
    }
    return errors;
}