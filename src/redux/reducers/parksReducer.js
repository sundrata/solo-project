const parksReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_PARKS':
        return action.payload;
      default:
        return state;
    }
  };
  
  // features will be on the redux state at:
  // state.features
  export default parksReducer;