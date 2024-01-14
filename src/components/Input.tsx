import * as React from "react";
import { useState } from "react";

type InputProps = {
    title:string,
    url:string,
    handleOnChange?: React.ChangeEventHandler 
}

const Input = ({title, url, handleOnChange}:InputProps)=>{
    // const [url, setUrl] = useState('a');



return  <div className="coolinput">
<label htmlFor="input" className="text">
  {title}
</label>
<input
  type="text"
  placeholder="Copy URL here..."
  name="input"
  value={url}
  className="input"
  onChange={handleOnChange}
/>
</div>
}

export default Input