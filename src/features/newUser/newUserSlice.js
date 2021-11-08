
export function newUserReducer(state = [], action) {
    if (action.type === 'add-first-name' && action.type === 'add-last-name' && action.type === 'add-email' && action.type === 'add-password') {
        return [
            ...state,
            {
                id:Math.random(),
                f_name: action.payload.f_name,
                l_name: action.payload.l_name,
                email: action.payload.email,
                password: action.payload.password
            }

        ];
    }
    return state;
}
export const initialUsers=[];
export function selectUser(state){
    return state.newUser
}