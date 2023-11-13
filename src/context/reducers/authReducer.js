const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };

    case "sign_in":
      return { errorMessage: "", token: action.payload };

    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "sign_out":
      return { token: null, errorMessage: "" };

    default:
      return state;
  }
};

export default authReducer;
