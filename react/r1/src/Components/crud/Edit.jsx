import { useEffect, useState } from "react";

function Edit({edit, animal, cancel}) {

    const [type, setType] = useState('');
    const [color, setColor] = useState('yellow');
    const [isalive, setIsalive] = useState(1);

    useEffect(() => {
        setType(animal.type);
        setColor(animal.color);
        setIsalive(animal.isalive);
    }, [animal])

    
    const handleCancel = () => {
        cancel();
    }

    const handleEdit = () => {
        const data = {
            type: type,
            color: color,
            isalive: isalive
        }
        edit(data);
    }

    const handleInput = (e, d) => {
        switch(d) {
            case 'type':
                setType(e.target.value);
                break;
            case 'color':
                setColor(e.target.value);
                break;
            case 'isalive':
                setIsalive(i => i === 0 ? 1 : 0);
                break;
            default:
        }
    }


    return (
        <div className="modal">
        <div className="edit">
            <div className="header">
            <h2>Edit</h2>
            </div>
            
            <div className="form">

                <div className="input">
                <label>Type:</label>
                <input type="text" value={type} onChange={(e) => handleInput(e, 'type')}></input>
                </div>

                <div className="input">
                <label>Color:</label>
                <select value={color} onChange={(e) => handleInput(e, 'color')}>
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="black">Black</option>
                    <option value="yellow">Yellow</option>
                </select>
                </div>

                <div className="input">
                <label>Is alive:</label>
                <input type="checkbox" checked={isalive} onChange={(e) => handleInput(e, 'isalive')}></input>
                </div>

                <div className="input btn">
                <button className="add" onClick={handleEdit}>edit</button>
                <button className="cancel" onClick={handleCancel}>cancel</button>
                </div>
            
            </div>
        </div>
        </div>
    )
}

export default Edit;