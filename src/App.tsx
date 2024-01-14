import { FC, useState } from 'react';

import './style.css';

const db = [
  {
    origin: 'http://google.com',
    shortenCode: 'AAHVFT',
  },
  {
    origin: 'http://yahoo.com',
    shortenCode: 'EGTSHF',
  },
];

const generateRandomCode = () => {
  const letters =
    'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,0,1,2,3,4,5,6,7,8,9';
  const cookedLetters = letters.split(',');

  let random = '';
  for (let i = 0; i <= 6; i++) {
    const randomIndex = Math.floor(Math.random() * cookedLetters.length);
    random += cookedLetters[randomIndex];
  }

  return random;
};

export const App = () => {
  const [url, setUrl] = useState('a');
  const [shortenUrlCode, setShortenUrlCode] = useState('');

  const isValidUrl = (url) => {
    const regex =
      /^((https?|ftp|http):\/\/)?([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|net|org|biz|info|name|pro|coop|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;

    return regex.test(url);
  };

  const shorternUrl = () => {
    if (url === '' || !isValidUrl(url)) {
      alert('URL REQUIRED or INVALID URL');
    } else {
      const code = generateRandomCode();
      setShortenUrlCode(code);
    }
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: '10px',
          justifyContent: 'center',
        }}
      >
        <div className="coolinput">
          <label htmlFor="input" className="text">
            URL:
          </label>
          <input
            type="text"
            placeholder="Copy URL here..."
            name="input"
            value={url}
            className="input"
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div>
          <button className="button-18" role="button" onClick={shorternUrl}>
            Shortern URL
          </button>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: '10px',
          justifyContent: 'center',
        }}
      >
        <div className="coolinput">
          <label htmlFor="input" className="text">
            Shorten URL:
          </label>
          <input
            type="text"
            placeholder="Your URL here..."
            name="shorten"
            value={shortenUrlCode}
            className="input"
            disabled
          />
        </div>
        <div>
          <button
            className="button-18"
            role="button"
            onClick={() => navigator.clipboard.writeText('asdasd')}
          >
            Copy URL
          </button>
        </div>
      </div>

      
    </div>
  );
};
