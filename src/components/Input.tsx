import * as React from "react";
import { useState } from "react";

type InputProps = {
  label:string,
  inputValue:string,
    handleOnChange?: React.ChangeEventHandler 
}

const Input = ({label, inputValue, handleOnChange,...props}:InputProps)=>{
    // const [url, setUrl] = useState('a');



return  <div className="coolinput">
<label htmlFor="input" className="text">
  {label}
</label>
<input
  type="text"
  placeholder="Copy URL here..."
  name="input"
  value={inputValue}
  className="input"
  onChange={handleOnChange}
  {...props}
  
/>
</div>
}

export default Input