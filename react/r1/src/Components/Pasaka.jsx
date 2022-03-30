import {useState} from 'react';

function Pasaka() {

    const [title, setTitle] = useState('non');
    const [color, setColor] = useState('pink');

    // const bla = 5;BLOGIS

    const goBebrai = () => {
        setTitle('Apie Bebrus');
    }

    const goTrysBroliai = () => {
        setTitle('3 Broliai'); // įrašymas
    }

    const goColor = c => {
        setColor(c);
    }

    const changeColor = () => {
        // const newColor = color == 'blue' ? 'pink' : 'blue';
        // setColor(newColor);
        setColor(oldColor => oldColor == 'blue' ? 'pink' : 'blue');
    }



    return (
        <div>
            <h2 style={{color:color}}>PASAKA {title}</h2>
            <button onClick={goBebrai}>Apie Bebrus</button>
            <button onClick={goTrysBroliai}>3 Broliai</button>
            <button onClick={() => goColor('pink')}>Pink</button>
            <button onClick={() => goColor('blue')}>Blue</button>
            <button onClick={changeColor}>Change</button>
        </div>
    );
    
}

export default Pasaka;