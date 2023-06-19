export const getAbi = async (contractAddress) => {
  try {
    const endpoint = `https://api.etherscan.io/api?module=contract&action=getabi&address=${contractAddress}&apikey=${process.env.ETHERSCAN_API_KEY}`;

    const response = await fetch(endpoint);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // Do something with the data
    } else {
      console.log('Error: ', response.status);
    }
  } catch (error) {
    console.log('Error: ', error);
  }
};
