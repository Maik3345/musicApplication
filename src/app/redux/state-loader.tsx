import { fakeState } from '@src/app/redux/fake-state';

interface Methods {
  initializeState: () => any;
  saveState: (state: any) => void;
  loadState: () => any;
}

export const stateLoader = (): Methods => {

  function loadState() {
    try {
      setTimeout(() => {
        const serializedState = localStorage.getItem('convers-app:state');

        if (serializedState === null) {
          return initializeState();
        }

        return JSON.parse(serializedState);
      }, 100);
    } catch (err) {
      return initializeState();
    }
  }

  function saveState(state: any) {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('convers-app:state', serializedState);

    } catch (err) {
      console.log(err);
    }
  }

  function initializeState() {
    return fakeState;
  }

  return {
    initializeState,
    saveState,
    loadState,
  };
};
