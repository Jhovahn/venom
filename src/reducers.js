import {
  INCREMENT,
  DECREMENT,
  REQUEST_PENDING,
  REQUEST_SUCCESS,
  REQUEST_FAILURE
} from './constants';

const initialStateCount = {
  count: 0
};

export const reducer = (state = initialStateCount, action = {}) => {
  console.log(('state', state));
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, { count: state.count + 1 });
    case DECREMENT:
      return Object.assign({}, state, { count: state.count - 1 });
    default:
      return state;
  }
};

const initialStateRequest = {
  isPending: false,
  robots: [],
  error: ''
};

export const request = (state = initialStateRequest, action = {}) => {
  switch (action.type) {
    case REQUEST_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_SUCCESS:
      return Object.assign({}, state, {
        robots: action.payload,
        isPending: false
      });
    case REQUEST_FAILURE:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false
      });
    default:
      return state;
  }
};
