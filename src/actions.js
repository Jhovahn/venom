import {
  INCREMENT,
  DECREMENT,
  REQUEST_PENDING,
  REQUEST_SUCCESS,
  REQUEST_FAILURE
} from './constants';

export const increment = input => {
  return {
    type: INCREMENT
  };
};

export const decrement = input => {
  return {
    type: DECREMENT
  };
};

export const request = () => dispatch => {
  dispatch({ type: REQUEST_PENDING });
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_FAILURE, payload: error }));
};
