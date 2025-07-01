export const initialState = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    errors: {}
};

export const initialcontactState = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
    errors: {}
};

export const validateForm = (state) => {
    const errors = {};
    if (!state.firstname.trim()) {
        errors.firstname = 'First name is required';
    }
    if (!state.lastname.trim()) {
        errors.lastname = 'Last name is required';
    }
    if (!state.email || !state.email.includes('@')) {
        errors.email = 'Valid email is required';
    }
    if ('password'in state && state.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
    }
    if ('phone' in state && !state.phone.trim()) {
        errors.phone = 'Phone number is required';
    }
    if ('message' in state && !state.message.trim()) {
        errors.message = 'Message is required';
    }
    return errors;
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_INPUT':
            return {...state, [action.field]: action.value};
        case 'ERROR':
            return {...state, errors: action.errors};
        case 'RESET':
            return {...initialState, errors: {}};
        default:
            return state;
    }
};