import React, { useEffect, useState } from 'react'
import Web3 from 'web3';
import { loadData } from '../../src/utils/localStorage'
import { transform } from '@babel/standalone';
import CodeEditor, { SelectionText } from "@uiw/react-textarea-code-editor";

const web3 = new Web3(`https://eth-mainnet.g.alchemy.com/v2/-${process.env.REACT_APP_ALCHEMY_API_KEY}`);

function SubgraphQuery() {

  const [events, setEvents] = useState(undefined);
  const [output, setOutput] = useState('');

  const textRef = React.useRef();
  const [code, setCode] = React.useState(`const filteredEvents = events;

// Example Query to get Unique Addresses
const uniqueAddresses = [...new Set(filteredEvents.map(item => item.returnValues.src))];
setEvents(uniqueAddresses);

/*Example Query to get data from specific blockNumber
const filteredItems = filteredEvents.filter(item => item.blockNumber === 17516060);
setEvents(filteredItems)*/
  `
  );
  useEffect(() => {
    if (textRef.current) {
      const obj = new SelectionText(textRef.current);
      console.log("obj:", obj);
    }
  }, []);

  useEffect(() => {
    const contractAddress = loadData('Address');
    const contractABI = loadData('Abi');
    const blockRange = loadData('BlockRange');
    const eventsNeeded = loadData('Events');
    const contractInstance = new web3.eth.Contract(contractABI.abi, contractAddress.address);

    function reduceJSONByEvents(jsonData, eventsToKeep) {
      const reducedData = jsonData.filter(item => eventsToKeep.includes(item.event));
      return reducedData;
    }

    contractInstance.getPastEvents('allEvents', {
      fromBlock: blockRange.fromBlock,
      toBlock: blockRange.toBlock,
    })
      .then((events) => {
        const eventsToKeep = eventsNeeded.events;
        const reducedJSON = reduceJSONByEvents(events, eventsToKeep);
        setEvents(reducedJSON);
      })
      .catch((error) => {
        setEvents(null);
        console.error(error);
      });
  }, []);

  const executeCode = () => {
    try {
      const transformedCode = transform(code, { presets: ['env'] }).code;
      console.log(transformedCode);
      const result = eval(`(function() { ${transformedCode} })()`); // Wrap code in a function to create a separate scope
      console.log(result);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="max-w-6xl w-full p-4 bg-white border rounded shadow">
          <h1 className="text-xl font-bold mb-4 text-center">DATA</h1>
          <div className="overflow-y-auto max-h-96 p-2 border">
            <pre className="text-green-500">{JSON.stringify(events, null, 2)}</pre>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-4 text-center">QUERY</h1>
            <CodeEditor
              value={code}
              ref={textRef}
              language="js"
              placeholder="Please enter JS code."
              onChange={(evn) => setCode(evn.target.value)}
              padding={15}
              style={{
                fontFamily:
                  "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
                fontSize: 12
              }}
            />
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={executeCode}
            >
              Run Code
            </button>
            <div>{output}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubgraphQuery