const redux = require('redux');

const createStore = redux.createStore;

//create a action
const BUYCAKE = {
    type: "BUY_CAKE",
    value: 1
};

const BUYCAKEINBULK = {
    type: "BUY_CAKE_INBULK",
    value: 4
}

function buycake () {
    return BUYCAKE; //it is used to return action
}

function cakeInBulk () {
    return BUYCAKEINBULK;
}

//initial state value
const initialState = {
    cakes: 10
}

// create reducer function 
const cakeReducer = (state = initialState, action) => {
    if(action.type === "BUY_CAKE") {
        return{ ...state, cakes: state.cakes - 1};
    } else if(action.type === "BUY_CAKE_INBULK") {
        return { ...state, cakes: state.cakes - action.value};
    }
}

const store = createStore(cakeReducer);

console.log('--store--', store);

const subscribeStore = store.subscribe(() => {
    console.log('--store.getState--', store.getState());
});

store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(cakeInBulk());
subscribeStore();
