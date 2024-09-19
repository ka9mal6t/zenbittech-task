// function for saving state to localStorage
export const saveState = (state: any) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch (err) {
      console.error("Failed to save state to localStorage", err);
    }
  };
  
// function for loading state from localStorage
export const loadState = () : undefined | JSON => {
try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
    return undefined; // undefined, for reducrtors use default state
    }
    return JSON.parse(serializedState);
} catch (err) {
    console.error("Failed to load state from localStorage", err);
    return undefined;
}
};