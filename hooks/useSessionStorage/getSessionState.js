export default (storageName, initialValue) => {
  // ? get stored state in session
  const state = JSON.parse(sessionStorage.getItem(storageName));

  // ? if there is any stored state just return that
  if (!!state) return state;
  // ? otherwise return initial values
  else return initialValue instanceof Function ? initialValue() : initialValue;
};
