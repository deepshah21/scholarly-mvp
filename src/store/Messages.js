const GET_ALL_MESSAGES_ACTION = "GET_ALL_MESSAGES";
const DELETE_MESSAGE_ACTION = "DELETE_MESSAGE";
const UPDATE_MESSAGE_ACTION = "UPDATE_MESSAGE";
const ADD_MESSAGE_ACTION = "ADD_MESSAGE";

const initialState = {
  MESSAGEs: [
    {
      name: "Albiona",
      email: "alb@gmail.com",
      role: "Admin",
      caloryLimit: 123
    },
    {
      name: "Albiona",
      email: "alb@gmail.com",
      role: "Admin",
      caloryLimit: 123
    },
    {
      name: "Albiona",
      email: "alb@gmail.com",
      role: "Admin",
      caloryLimit: 123
    }
  ]
};

export const actionCreators = {
  getMESSAGEs: () => async (dispatch, getState) => {
    // dispatch({ type: GET_ALL_MESSAGES_ACTION, MESSAGEs: json });
  },
  removeMESSAGE: id => async (dispatch, getState) => {
    dispatch({
      type: DELETE_MESSAGE_ACTION,
      MESSAGEs: getState().MESSAGEManagement.MESSAGEs.filter(m => m.id !== id)
    });
  },
  editMESSAGE: MESSAGE => async (dispatch, getState) => {
    dispatch({
      type: UPDATE_MESSAGE_ACTION,
      MESSAGEs: getState().MESSAGEManagement.MESSAGEs.map(
        m => (m.id === MESSAGE.id ? MESSAGE : m)
      )
    });
  },
  addMESSAGE: MESSAGE => async (dispatch, getState) => {
    dispatch({
      type: ADD_MESSAGE_ACTION,
      MESSAGE: Object.assign({}, MESSAGE, { id: Math.random() })
    });
  }
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === GET_ALL_MESSAGES_ACTION) {
    return { ...state, MESSAGEs: action.MESSAGEs };
  }
  if (action.type === DELETE_MESSAGE_ACTION) {
    return { ...state, MESSAGEs: action.MESSAGEs };
  }
  if (action.type === UPDATE_MESSAGE_ACTION) {
    return { ...state, MESSAGEs: action.MESSAGEs };
  }
  if (action.type === ADD_MESSAGE_ACTION) {
    return { ...state, MESSAGEs: [...state.MESSAGEs, action.MESSAGE] };
  }

  return state;
};
