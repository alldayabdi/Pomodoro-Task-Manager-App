const holdStartDetails = (state = [], action) =>{
    // console.log('I am in the reducer');
    
    if(action.type == 'SET_START_TASK'){
        return action.payload
    }
    return state;
}

export default holdStartDetails;