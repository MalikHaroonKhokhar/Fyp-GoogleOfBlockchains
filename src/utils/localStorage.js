// Store data in local storage
export function storeData(key, data) {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
    console.log(`Data stored successfully with key '${key}'`);
  } catch (error) {
    console.error(`Failed to store data with key '${key}':`, error);
  }
}

// Load data from local storage
export function loadData(key) {
  try {
    const serializedData = localStorage.getItem(key);
    if (serializedData === null) {
      console.log(`No data found with key '${key}'`);
      return null;
    }
    const data = JSON.parse(serializedData);
    console.log(`Data loaded successfully with key '${key}'`);
    return data;
  } catch (error) {
    console.error(`Failed to load data with key '${key}':`, error);
    return null;
  }
}

// Overwrite data in local storage
export function overwriteData(key, newData) {
  try {
    const serializedData = JSON.stringify(newData);
    localStorage.setItem(key, serializedData);
    console.log(`Data overwritten successfully with key '${key}'`);
  } catch (error) {
    console.error(`Failed to overwrite data with key '${key}':`, error);
  }
}
