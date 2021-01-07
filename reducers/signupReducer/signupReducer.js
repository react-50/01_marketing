export const initialState = {
  userEmail: "",
  isLoading: false,
  error: "",
  success: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "REGISTERING_USER":
      return {
        ...state,
        isLoading: true,
        userEmail: "",
        success: true,
      };
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "FIELD":
      return {
        ...state,
        [action.name]: action.payload,
      };
    case "CLEAR_FORM":
      return {
        userEmail: "",
        isLoading: false,
        error: "",
        success: false,
      };
    default:
      return state;
  }
};
