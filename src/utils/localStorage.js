// Store data in local storage
export function storeData(key, data) {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
    //sendDataToBackend(serializedData);
    


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

    // Send the data to the backend
   // sendDataToBackend(data);

    return data;

  } catch (error) {
    console.error(`Failed to load data with key '${key}':`, error);
    return null;
  }
}

// Function to send data to the backend
/*async function sendDataToBackend(data) {
  try {
    const response = await fetch('http://localhost:8000/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to send data to the backend');
    }

    console.log('Data sent to the backend successfully');
  } catch (error) {
    console.error('Error sending data to the backend:', error);
  }
}*/


// Overwrite data in local storage
export function overwriteData(key, newData) {
  try {
    const serializedData = JSON.stringify(newData);
   // sendDataToBackend(serializedData);

    localStorage.setItem(key, serializedData);

    console.log(`Data overwritten successfully with key '${key}'`);
  } catch (error) {
    console.error(`Failed to overwrite data with key '${key}':`, error);
    
  }
}
