import React from 'react';
import { ITodo } from './components/interfaces';
import { Navbar } from './components/Navbar';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import { TodosPages } from './pages/TodosPages';
import { AboutPage } from './pages/AboutPage';

// declare var confirm: (question: string) => boolean

export const App: React.FC = () => {
  // const [todos, setTodos] = useState<ITodo[]>([])

  // useEffect(() => {
  //   try {
  //     const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
  //     setTodos(saved)
  //   } catch (error) {
  //     console.error('Ошибка чтения данных из localStorage', error)
  //   }
  // }, [])
  
  // useEffect(() => {
  //   const handleBeforeUnload = () => {
  //     localStorage.setItem('todos', JSON.stringify(todos))
  //   }
  
  //   window.addEventListener('beforeunload', handleBeforeUnload)
  
  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload)
  //   }
  // }, [todos])

  // const addHandler = (title: string) => {
  //   const newTodo: ITodo = {
  //     title : title,
  //     id: Date.now(),
  //     completed: false
  //   }
  //   setTodos(prev => [newTodo, ...prev])
  // }

  // const toggleHandler = (id: number) => {
  // setTodos(prev => prev.map(todo => {
  //   if (todo.id === id) {
  //     return {...todo, completed: !todo.completed}
  //   }
  //   return todo
  // }))
  // }

  // const removeHandler = (id: number) => {
  //   const shoudRemove = confirm('Удалить это дело?')
  //   if(shoudRemove) {
  //     setTodos(prev => prev.filter(todo => todo.id !== id))
  //   }
  // }

  return (
    <BrowserRouter>
    <Navbar />
    <div className='container'>
        <Routes>
          <Route Component={TodosPages} path='/' caseSensitive />
          <Route Component={AboutPage} path='/about'  />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;


      {/* <div className='container'>
        <TodoForm onAdd={addHandler} />
        <TodoList todos={todos} onRemove={removeHandler} onToggle={toggleHandler}/>
      </div> */}