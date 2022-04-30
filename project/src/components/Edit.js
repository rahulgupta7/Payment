import React, {useState} from 'react'

export const Edit = () => {
    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList("");
    }

  return (
    <div>
    <input type="text" placeholder='items' onChange={itemEvent} value={inputList}/>
    <input type="text" placeholder='items' onChange={itemEvent} value={inputList}/>
    <button onClick={listOfItems}>Click</button>

     {Items.map((itemval) => {
        return <h1>{itemval}</h1>
    })}

    
    </div>
  )
}

export default Edit
