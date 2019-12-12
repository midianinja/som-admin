import React from 'react';
import PropTypes from 'prop-types';

const Store = React.createContext();

const initialState = {
  auth: null,
  user: null,
  modalLogin: false,
  loading: {
    auth: false,
    verify: true,
  },
  modals: {
    login: false,
    register: false,
    navigation: false,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const StoreProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, { ...initialState });
  const value = { state, dispatch };
  const { children } = props;
  return <Store.Provider value={value}>{children}</Store.Provider>;
};

StoreProvider.propTypes = {
  children: PropTypes.node,
};

StoreProvider.defaultProps = {
  children: [],
};

export default Store;
