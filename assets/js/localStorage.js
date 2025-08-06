export function set(key, value) {
  const newValue = typeof value === "string" ? value : JSON.stringify(value);
  window.localStorage.setItem(key, newValue);
}

export function get(key) {
  const value = window.localStorage.getItem(key);
  return value !== null ? JSON.parse(value) : null;
}

export function del(key) {
  window.localStorage.removeItem(key);
}
