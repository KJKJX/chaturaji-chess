export const setSearchParams = (param, value) => {
  const url = new URL(window.location.href);
  url.searchParams.set(param, value);
  window.history.pushState({}, "", url);
};
export const clearSearchParams = () => {
  const url = new URL(window.location.href);
  url.search = "";
  window.history.replaceState({}, "", url);
};
