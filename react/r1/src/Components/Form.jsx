import { useState } from "react";

function Form() {

    const [text1, setText1] = useState('labukas');
    const [volume, setVolume] = useState(0);

    const changeText1 = e => {
        setText1(e.target.value);
    }

    const changeVolume = e => {
        setVolume(e.target.value);
    }

    return (
        <>
            <input type="text" onChange={changeText1} value={text1}/>
            <div>
            <input type="range" id="volume" name="volume" onChange={changeVolume}
                    min="0" max="11" value={volume}/>
            <label htmlFor="volume">Volume {volume}</label>
            </div>
        </>
    )
}

export default Form;