const initialState = "";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "CHANGE_BREED":
      return payload;
    case "CHANGE_ANIMAL":
      return "";

    default:
      return state;
  }
};
