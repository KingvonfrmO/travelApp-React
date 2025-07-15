export const initialState = {
    firstname: '',
    secondname: '',
    email: '',
    password: '',
    errors: {}
}

export function reducer(state, action){
    switch (action.type){
        case 'UPDATE_INPUT':
            return {...state, [action.field]: action.value};
        case 'ERROR':
            return {...state, errors: action.errors};
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}

export function validateForm(state){
    const errors = {};
    if (!state.firstname.trim()) errors.firstname = 'First name is required';
    if (!state.secondname.trim()) errors.secondname = 'Second name is required';
    if (!state.email.includes('@')) errors.email = 'Invalid Email';
    if (state.password?.length < 8) errors.password = 'Password must be longer than 8 Characters';
    //console.log(errors);
    return errors;
}