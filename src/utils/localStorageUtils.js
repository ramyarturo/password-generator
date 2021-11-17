const localStorageUtils = {
    getValue: (key) => localStorage.getItem(key),
    setValue: (key, value) => localStorage.setItem(key, value)
}
export default localStorageUtils