import './css/EditedArea.css';
import {useState, useRef, useEffect} from 'react';


function EditedArea(props){

    const {todo, saveTask} = props;
    const [editInput, setEditInput] = useState(todo.text);
    const focusRef = useRef(null);

    const handlerChange =(e)=> {
        let text = e.target.value;
        setEditInput(text);
    }

    const handlerSubmit =(e)=> {
        e.preventDefault();
        let text = editInput.trim();

        if(text) {
            saveTask(todo.id, editInput); 
        } 
    }

    useEffect(()=> {
        focusRef.current.focus();
        focusRef.current.selectionStart = focusRef.current.selectionEnd = editInput.length;
    })

    return(

        <form  className='todo__form-edited' onSubmit={handlerSubmit}>
           <textarea  onChange={handlerChange}
                     className='todo__task--edited' 
                     value={editInput} 
                     ref={focusRef}
                     placeholder={'waiting for your text...'}>
            </textarea>
           <button className='todo__btn-save'></button>
        </form>

    )
}


export default EditedArea;