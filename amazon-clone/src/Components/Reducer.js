
export const initialState = {
    basket: [],
  };
  
  function reducer(state, action) {
    console.log(action);
    switch (action.type) {
      case 'ADD_TO_BASKET':
        return {
          ...state,
          basket: [...state.basket, action.item], // Add the new item to the basket
        };
  
      case 'REMOVE_FROM_BASKET':
        // Find the index of the item to be removed
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
        );
        let newBasket = [...state.basket];
  
        if (index >= 0) {
          // If the item is found, remove it from the basket
          newBasket.splice(index, 1);
        } else {
          console.warn(
            `Cannot remove product (id: ${action.id}) as it is not in the basket!`
          );
        }
  
        return {
          ...state,
          basket: newBasket,
        };
  
      default:
        return state;
    }
  }
  
  export default reducer;
  