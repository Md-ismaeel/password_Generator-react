import React, { useState } from 'react';
import { generate } from '@wcj/generate-password';
import copyIcon from "../Assets/copy-icon-4803.png";

const PasswordGenerate = () => {
    const [lowerCase, setLowerCase] = useState(true);
    const [upperCase, setUpperCase] = useState(true);
    const [numeric, setNumeric] = useState(true);
    const [special, setSpecial] = useState(true);
    const [length, setLength] = useState(12);
    const opts = { lowerCase, upperCase, numeric, special, length };
    const [password, setPassword] = useState(generate(opts));

    const copyToClipboard = () => {
        const passwordInput = document.getElementById('passwordInput');
        passwordInput.select();
        document.execCommand('copy');
        setTimeout(() => {
            alert('Password copied')
        }, 200);
    };

    return (
        <div className='w-full flex justify-center flex-col items-start gap-7  text-white'>
            <h3 className=' w-full text-center text-3xl mt-16'>Password Generate</h3>

            <div className='w-full flex justify-between items-start px-6'>

                <input type='text' value={password} id='passwordInput' style={{ width: '90%', padding: '5px 20px', color: '#575757', borderRadius: '3px', outline: '0', border: '1px solid gray' }} readOnly />

                <button onClick={copyToClipboard} className='rounded-sm flex justify-center items-center' style={{ width: '9.9%', padding: '6px', backgroundColor: '#3b82f6', }}><img src={copyIcon} width={"22px"} alt="Copy" /></button>

            </div>
            <div className='w-full px-6'>

                <label className='w-full flex justify-between items-center'>
                    <div className='w-6/12'>  
                        <input className='w-4/12' type="range" min="8" max="100" value={length} onChange={(event) => setLength(Number(event.target.value))} /> {' '}
                        {length}
                    </div>

                    <span>Select Password length(<strong>**8-100 characters**</strong>)</span>
                </label>
                <br />

                <label>
                    <input type="checkbox" checked={upperCase} onChange={() => setUpperCase(!upperCase)} /> Include upper case
                </label>
                <br />

                <label>
                    <input type="checkbox" checked={lowerCase} onChange={() => setLowerCase(!lowerCase)} />Include lower case

                </label>
                <br />

                <label>
                    <input type="checkbox" checked={numeric} onChange={() => setNumeric(!numeric)} /> Include numbers
                </label>
                <br />

                <label>
                    <input type="checkbox" checked={special} onChange={() => setSpecial(!special)} /> Include symbols
                </label>

            </div>
            <div className='w-full flex justify-center items-center mb-10'>
                <button className='bg-blue-500 w-8/12 h-10 rounded-sm active:bg-blue-700'  onClick={() => setPassword(generate(opts))}>Generate Password</button>
            </div>
        </div>
    );
};

export default PasswordGenerate;