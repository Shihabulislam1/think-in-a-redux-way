// import { createStore } from "redux";

const counterEl = document.getElementById("counter");
const incrementBtn = document.getElementById("increament");
const decrementBtn = document.getElementById("decreament");
const inputEl = document.getElementById("input");
const setBtn = document.getElementById("set");

const initialState = {
  setter: 1,
  value: 0,
};

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      value: state.value + parseInt(state.setter),
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      value: state.value - state.setter,
    };
  } else if (action.type === "set") {
    return {
      ...state,
      setter: inputEl.value ? inputEl.value : 1,
    };
  } else {
    return state;
  }
};

const store = Redux.createStore(counterReducer);
const render = () => {
  const state = store.getState();
  counterEl.innerHTML = state.value;
};

render();
store.subscribe(render);

incrementBtn.addEventListener("click", () => {
  store.dispatch({
    type: "increment",
  });
});

decrementBtn.addEventListener("click", () => {
  store.dispatch({
    type: "decrement",
  });
});

setBtn.addEventListener("click", (e) => {
  e.preventDefault();
  setBtn.classList.add("bg-green-400")
  store.dispatch({
    type: "set",
  });
  //after 100ms remove the bg-green-400 class
  setTimeout(() => {
    setBtn.classList.remove("bg-green-400");
  }, 100);
});
