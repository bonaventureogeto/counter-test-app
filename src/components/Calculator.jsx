import { useState } from "react";

const Calculator = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [result, setResult] = useState('');

    const handleInput1Change = (e) => {
        setInput1(e.target.value);
    };

    const handleInput2Change = (e) => {
        setInput2(e.target.value);
    };

    const handleCalculate = () => {
        const sum = parseFloat(input1) + parseFloat(input2);
        if (!isNaN(sum)) {
            setResult(sum);
        } else {
            setResult('Invalid input');
        }
    };

    return (
        <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-4xl font-bold mb-4 text-center">Simple Calculator</h1>
            <div className="mb-4">
                <input 
                    type="number"
                    value={input1}
                    onChange={handleInput1Change}
                    placeholder="Enter first number"
                    className="w-full p-2 text-lg border border-gray-300 rounded-md"
                />
            </div>
            <div className="mb-4">
                <input 
                    type="number"
                    value={input2}
                    onChange={handleInput2Change}
                    placeholder="Enter second number"
                    className="w-full p-2 text-lg border border-gray-300 rounded-md"
                />
            </div>
            <button 
                onClick={handleCalculate}
                className="w-full p-4 bg-blue-500 text-white rounded-lg mb-4"
            >
                Calculate
            </button>
            <div>
                <h3 className="text-2xl font-bold">Result: {result}</h3>
            </div>
        </div>
    );
};

export default Calculator;
