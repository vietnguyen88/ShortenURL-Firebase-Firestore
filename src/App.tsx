import { ChangeEvent, EventHandler, FC, FormEvent, useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import { generateRandomCode, isValidUrl } from './lib/util';
import { firestoreService } from './lib/util'
import './style.css';


const CombinedInputBtn = ({ label, inputValue, inputOnChange, buttonOnclick, btnTitle, ...props }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'flex-end',
      gap: '10px',
      justifyContent: 'center',
    }}
  >
    <Input label={label} inputValue={inputValue} handleOnChange={inputOnChange} {...props} />
    <div>
      <Button handleOnClick={buttonOnclick} title={btnTitle} />
    </div>
  </div>
)



export const App = () => {
  const [inputUrl, setInputUrl] = useState('google.com');
  const [outputCode, setOutputCode] = useState('');
  const [retrievedURL, setRetrievedURL] = useState('');


  const [validationMessage, setValidationMessage] = useState('')


  const shorternUrl = () => {
    if (inputUrl === '' || !isValidUrl(inputUrl)) {
      setValidationMessage('URL REQUIRED or INVALID URL');
    } else {
      const code = generateRandomCode();
      // setOutputCode(code);
      firestoreService.addNewURL({ inputUrl, code }).then(() => setOutputCode(code))
    }
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputUrl(e.target.value)
  }

  const retrieveURL = () => {
    console.log(retrievedURL)
    firestoreService.retrieveURL(retrievedURL).then(url => console.log(url))
  }
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <CombinedInputBtn label='URL' btnTitle='Shorten URL' inputValue={inputUrl} inputOnChange={handleOnChange} buttonOnclick={shorternUrl} />
        <p style={{ color: 'red' }}>{validationMessage}</p>
      </div>
      <CombinedInputBtn readOnly label='Output' btnTitle='Copy URL' inputValue={outputCode} inputOnChange={null} buttonOnclick={() => navigator.clipboard.writeText(outputCode)} />
      <p>{window.location.href}</p>
      <CombinedInputBtn label='codeToURL' btnTitle='Retrieve URL' inputOnChange={(e) => setRetrievedURL(e.target.value)} buttonOnclick={retrieveURL} inputValue={retrievedURL} />

    </div>
  );
};
