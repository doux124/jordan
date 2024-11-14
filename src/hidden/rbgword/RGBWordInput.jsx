import { useState } from 'react'
import RGBWord from './RGBWord';

const RGBWordInput = () => {
    const [text, setText] = useState("")
    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
      <div>
        <input
            type = "text"
            placeholder = "Enter text"
            value = {text}
            onChange = {handleChange}
            style={{ color: "black" }}
        />
        <RGBWord text={text} />
      </div>
    );
  };
  
  export default RGBWordInput;
  