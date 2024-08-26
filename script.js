// select dom elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
// const inputIncrement = document.getElementById("inputI");
// const inputDecrement = document.getElementById("inputD");

//action identifiers
const INCREAMENT = "increment";
const DECREAMENT = "decrement";

// create action creators
const increment = (value) => {
  return {
    type: INCREAMENT,
    payload: value || 1,
  };
};
const decrement = (value) => {
  return {
    type: DECREAMENT,
    payload: value || 1,
  };
};

// initial state
const initialState = {
  value: 0,
};

// create reducer function
function counterReducer(state = initialState, action) {
  if (action.type === INCREAMENT) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === DECREAMENT) {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else {
    return state;
  }
}

// create store
const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  counterEl.innerText = state.value.toString();
};

// update UI initially
render();

store.subscribe(render);

// button click listeners
incrementEl.addEventListener("click", () => {
  const inputIncrement = document.getElementById("inputI");
  store.dispatch(increment(parseInt(inputIncrement.value)));
});

decrementEl.addEventListener("click", () => {
  const inputDecrement = document.getElementById("inputD");
  store.dispatch(decrement(parseInt(inputDecrement.value)));
});
