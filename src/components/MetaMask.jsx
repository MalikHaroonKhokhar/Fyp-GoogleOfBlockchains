import React, { useState } from 'react';
import Web3 from 'web3';

const MetaMask = () => {
  const [selectedAccount, setSelectedAccount] = useState(null);

  const connectToMetaMask = async () => {
    try {
      if (window.ethereum) {
        // Request MetaMask to enable accounts and open the dropdown
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        // Create a new instance of Web3 using MetaMask's provider
        const web3 = new Web3(window.ethereum);

        // Get the current selected account
        const accounts = await web3.eth.getAccounts();
        setSelectedAccount(accounts[0]);
      } else {
        console.error('MetaMask not found');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div >
      {selectedAccount ? (
        <div>
         
          <p className="text-lg text-gray-700 mb-4">{selectedAccount}</p>
        </div>
      ) : (
        <div className="flex flex-col items-center">
        
          <button
            className="px-4 py-2 text-lg font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
            onClick={connectToMetaMask}
          >
            Connect MetaMask
          </button>
        </div>
      )}
    </div>
  );
};

export default MetaMask;
