import React, {useRef} from 'react'

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = props => {
    const ref = useRef<HTMLInputElement>(null)
    // const [title, setTitle] = useState<string>('')

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter') {
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
            //     console.log(title)
            // setTitle('')
        }
    }

    return(
        <div className='input-field mt1'>
            {/* <input type='text' id='title' placeholder='>Введите название дела' value={title} onChange={changeHandler} onKeyDown={keyPressHandler}/> */}
            <input type='text' id='title' placeholder='>Введите название дела'  onKeyDown={keyPressHandler} ref={ref}/>
            <label htmlFor='title' className='active'>Введите название дела</label>
        </div>
    )
}

//Для практики перенес работу с useState на useRef