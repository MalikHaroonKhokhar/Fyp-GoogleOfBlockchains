import { Formik, Form, Field, ErrorMessage } from 'formik';
import { storeData } from '../../utils/localStorage' 

const YourComponent = () => {
  const handleSubmit = (values) => {
    storeData('BlockRange', values)
    console.log(values);
    // Handle form submission here
  };

  return (
    <div className="max-w-sm mx-auto">
      <Formik
        initialValues={{ fromBlock: '', toBlock: '' }}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-4">
            <label htmlFor="fromBlock" className="block text-gray-500 font-bold mb-2">
              From Block
            </label>
            <Field
              type="text"
              id="fromBlock"
              name="fromBlock"
              placeholder="Enter From Block"
              className="w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
            <ErrorMessage name="fromBlock" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <label htmlFor="toBlock" className="block text-gray-500 font-bold mb-2">
              To Block
            </label>
            <Field
              type="text"
              id="toBlock"
              name="toBlock"
              placeholder="Enter To Block"
              className="w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
            <ErrorMessage name="toBlock" component="div" className="text-red-500" />
          </div>

          <button
            type="submit"
            className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default YourComponent;
