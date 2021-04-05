import { ADD_TO_CART } from '../constants'
import { REMOVE_FROM_CART } from '../constants'


export default function cardItems(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            // console.warn("reducer",action)
            return [
                ...state,
                {cardData: action.data}
            ]
            case REMOVE_FROM_CART:
            // console.warn("reducer",action)
            state.pop()
            console.warn("reducer state",state.length)
            if(state.length===0)
            console.warn("lenght is 0")
            return [
                ...state,
            ]
        default:
            return state
    }


}
