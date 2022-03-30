import {useState} from 'react';

function Pasaka() {

    const [title, setTitle] = useState('non');
    // const [title1, setTitle1] = useState('non');

    // const bla = 5;BLOGIS

    const goBebrai = () => {
        setTitle('Apie Bebrus');
    }

    const goTrysBroliai = () => {
        setTitle('3 Broliai');
    }

    return (
        <div>
            <h2>PASAKA {title}</h2>
            <button onClick={goBebrai}>Apie Bebrus</button>
            <button onClick={goTrysBroliai}>3 Broliai</button>
        </div>
    );
    
}

export default Pasaka;