import { useState, useEffect } from 'react';
import { getAbi } from '../../constants/abi';
import { Formik, Form, Field } from 'formik';
import { storeData } from '../../utils/localStorage' 

const YourComponent = () => {
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

  const initialValues = {
    options: [],
  };

  const handleSubmit = (values) => {
    // Handle form submission
    console.log(values.options);
    storeData('Events', {events: values.options});
  };

  return (
    <div className="max-w-sm mx-auto">
      {abi !== undefined ? (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ values, setFieldValue }) => (
            <Form>
              <label htmlFor="selectedOptions" className="block text-gray-500 font-bold mb-2">
                Events in ABI
              </label>
              {abi.map((option) => (
                <div key={option.name} className="flex items-center mb-2">
                  <Field
                    type="checkbox"
                    id={option.name}
                    name="options"
                    value={option.name} // Use option.name instead of option
                  />
                  <label htmlFor={option.name} className="text-gray-700">
                    {option.name}
                  </label>
                </div>
              ))}
              <div className="md:w-2/3">
                <button
                  type="submit"
                  className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
          </Formik>
      ) : (
        <div>Loading ABI...</div>
      )}
    </div>
  );
};

export default YourComponent;
