import React, { useContext, useReducer } from "react";
export const actionTypes = {
  TOGGLE_MODAL: "TOGGLE_MODAL",
};

const ModalContext = React.createContext();
const ModalDispatcher = React.createContext();

const initState = {
  modalIsOpen: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_MODAL:
      return {
        ...state,
        modalIsOpen: !state.modalIsOpen,
      };
  }
};

export function useModalContext() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error(
      "must use OpenModalProvider before call useOpenModalContext context!!"
    );
  }
  return context;
}

export function useModalDispatcher() {
  const context = useContext(ModalDispatcher);
  if (!context) {
    throw new Error(
      "must use OpenModalProvider before call useOpenModalDispatcher context!!"
    );
  }
  return context;
}

export const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <ModalContext.Provider value={state}>
      <ModalDispatcher.Provider value={dispatch}>
        {children}
      </ModalDispatcher.Provider>
    </ModalContext.Provider>
  );
}

