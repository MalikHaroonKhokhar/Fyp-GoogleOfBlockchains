import React from "react";
import { Formik, Field, Form } from "formik";
import {
  setAbi,
} from '../../constants/abi'
import { storeData } from '../../utils/localStorage' 

const chains = ["Ethereum", "BNB"];

const Form1 = ({step}) => {
  const getAbi = async (contractAddress) => {
    try {
      storeData('Address', {address: contractAddress});
      const endpoint = `https://api.etherscan.io/api?module=contract&action=getabi&address=${contractAddress}&apikey=${process.env.REACT_APP_ETHERSCAN_API_KEY}`;
      
      fetch(endpoint)
        .then((response) => response.json())
        .then((data) => {
          const abi = JSON.parse(data.result);
          // Filter the abi for event types
          const events = abi.filter((item) => item.type === "event");
          console.log(events);
          setAbi(events)
          storeData('Abi', {abi: events});
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          console.log("Request completed."); // Code to be executed regardless of success or failure
        });
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  return (
    <Formik
      initialValues={{ chain: "", contractAddress: "" }}
      onSubmit={(values) => {
        const contractAddress = values.contractAddress;
        getAbi(contractAddress);
      }}
    >
      {({ values, handleChange }) => (
        <Form className="w-full max-w-sm">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="chain"
              >
                Select Chain {step}
              </label>
            </div>
            <div className="md:w-2/3">
              <Field
                as="select"
                id="chain"
                name="chain"
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                value={values.chain}
                onChange={handleChange}
              >
                <option value="">Select a chain</option>
                {chains.map((chain) => (
                  <option key={chain} value={chain}>
                    {chain}
                  </option>
                ))}
              </Field>
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="contractAddress"
              >
                Enter Contract Address
              </label>
            </div>
            <div className="md:w-2/3">
              <Field
                id="contractAddress"
                name="contractAddress"
                type="text"
                placeholder="Enter Contract Address"
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                value={values.contractAddress}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button 
                type="submit"
                className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Form1;
