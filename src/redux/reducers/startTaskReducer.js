const holdStartDetails = (state = {}, action) =>{
    if(action.type == 'SET_START_TASK'){
        return action.payload
    }
    return state;
}