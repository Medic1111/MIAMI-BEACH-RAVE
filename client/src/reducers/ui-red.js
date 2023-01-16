export const uiState = {
  showModal: false,
  showBuyingOptions: false,
  showCheckout: false,
};

const uiRed = (state, action) => {
  switch (action.type) {
    case "CLOSE": {
      return { ...uiState };
    }
    case "BUYOPTIONS": {
      return { ...uiState, showModal: true, showBuyingOptions: true };
    }
    case "CHECKOUT": {
      return { ...uiState, showModal: true, showCheckout: true };
    }
    default:
      return { ...uiState };
  }
};

export default uiRed;
