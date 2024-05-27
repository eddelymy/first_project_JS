const currentMode = (state = {mode : true}, action)=>{
    switch(action.type){
        case 'ChangeMode':
            return{
                ...state,
                mode: action.payload
            }
        default:
            return state  
    }
}

export default currentMode;