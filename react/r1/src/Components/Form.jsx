import { useState } from "react";

function Form() {

    const [text1, setText1] = useState('');
    const [volume, setVolume] = useState(0);
    const [color, setColor] = useState('#ff0000');
    const [ta, setTa] = useState('---------');

    const changeText1 = e => {
        setText1(e.target.value);
    }

    const changeVolume = e => {
        setVolume(e.target.value);
    }

    const changeColor = e => {
        setColor(e.target.value);
    }

    const changeTa = e => {
        setTa(e.target.value);
    }

    return (
        <>
            <input type="text" placeholder="bla" onChange={changeText1} value={text1}/>
            <div>
            <input type="range" id="volume" name="volume" onChange={changeVolume}
                    min="0" max="11" value={volume}/>
            <label htmlFor="volume">Volume {volume}</label>
            </div>
            <input type="color" onChange={changeColor} value={color} />
            <div style={{
                width: '100px',
                height: '100px',
                background: color,
                margin: '100px'
            }}></div>
            <textarea value={ta} onChange={changeTa}></textarea>
        </>
    )
}

export default Form;