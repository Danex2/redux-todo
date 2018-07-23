export default function todoReducer(state = [], { type, payload }) {
  switch (type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: payload.id,
          text: payload.text
        }
      ];
    case "CLEAR_TODO":
      return [];
    case "REMOVE_TODO":
      return state.filter(id => {
        return id.id !== payload.id;
      });
    default:
      return state;
  }
}
