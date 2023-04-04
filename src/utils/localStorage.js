export function getLocalStorageData(key) {
  return JSON.parse(localStorage.getItem("data"))?.[key] || "";
}
