import { ChangeEvent, EventHandler, FC, FormEvent, useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import { generateRandomCode, isValidUrl } from './lib/util';

import './style.css';



export const App = () => {
  const [inputUrl, setInputUrl] = useState('a');
  const [outputCode, setOutputCode] = useState('');

  const [validationMessage,setValidationMessage] = useState('')


  const shorternUrl = () => {
    if (inputUrl === '' || !isValidUrl(inputUrl)) {
      setValidationMessage('URL REQUIRED or INVALID URL');
    } else {
      const code = generateRandomCode();
      setOutputCode(code);
    }
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputUrl(e.target.value)
  }
  return (
    <div>
      <div style={{textAlign:'center'}}>

      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: '10px',
          justifyContent: 'center',
        }}
        >
        <Input title='URL' url={inputUrl} handleOnChange={handleOnChange} />
        <div>
          <Button handleOnClick={shorternUrl} title='Shorten URL' />
        </div>
      </div>
      <p style={{color:'red'}}>{validationMessage}</p>

        </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: '10px',
          justifyContent: 'center',
        }}
      >
        <Input title='Shorten URL' url={outputCode} />

        <div>
          <Button handleOnClick={() => navigator.clipboard.writeText(outputCode)} title='Copy URL' />
        </div>
      </div>
      <p>{window.location.href}</p>


    </div>
  );
};
