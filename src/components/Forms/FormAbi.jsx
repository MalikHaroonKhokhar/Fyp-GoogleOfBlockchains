import { useState, useEffect } from 'react';
import { getAbi } from '../../constants/abi';

const FormAbi = () => {
  const [abi, setAbi] = useState(undefined);

  useEffect(() => {
    const fetchAbi = async () => {
      try {
        const abiData = await getAbi(); // Assuming getAbi() is an async function that fetches the ABI
        setAbi(abiData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAbi();
  }, []);

  return (
    <div className="max-w-sm mx-auto">
      {abi !== undefined ? (
        <form>
          <label htmlFor="abi" className="block text-gray-500 font-bold mb-2">
            ABI
          </label>
          <textarea
            id="abi"
            name="abi"
            className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            rows={10} // Increase the number of rows to make the textarea larger
            value={JSON.stringify(abi, null, 2)}
            readOnly
          />
        </form>
      ) : (
        <div>Loading ABI...</div>
      )}
    </div>
  );
};

export default FormAbi;
