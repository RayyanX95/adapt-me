const initialState = "";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "CHANGE_ANIMAL":
      return payload;

    default:
      return state;
  }
};
