import { combineReducers } from "redux";


const itemsState = {
    items: [],
    loading: true
}

const ordersState = {
    orders: [],
    loading: true
}


const itemsReducer = (state = itemsState, actions) => {
    switch (actions.type) {
        case 'items/get':
            return {
                ...state,
                items: actions.payload,
                loading: false
            }
        default:
            return state;
    }
}

const ordersReducer = (state = ordersState, actions) => {
    switch (actions.type) {
        case 'orders/get':
            return {
                ...state,
                orders: actions.payload,
                loading: false
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    items: itemsReducer,
    orders: ordersReducer
})

export default rootReducer