
 import actionTypes from '../../constant/constant'
const INITIAL_STATE = {
    repayments: null
}

export default (states = INITIAL_STATE, action)=>{
    switch(action.type){

        case actionTypes.REPAYMENTS: 
        return({
            ...states, repayments: action.payload
        })
       

        default:
        return states;
    }
}
