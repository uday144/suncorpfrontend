 import actionTypes from '../../constant/constant'
 
 export function changeState (repayments) {
    return dispatch =>{
      dispatch({type: actionTypes.REPAYMENTS, payload: repayments})
    }
   

 }