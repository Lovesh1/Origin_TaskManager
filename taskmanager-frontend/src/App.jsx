import { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
    const [updateFlag, setUpdateFlag] = useState(false);

    const triggerUpdate = () => {
        setUpdateFlag(!updateFlag);
    };

    return (
        <div className="container bg-slate-200 min-h-screen">
          <div className='flex flex-col items-center p-2 gap-2 justify-center flex-wrap'>
            <img className='text-white ' src="https://cdn.prod.website-files.com/6550c6e6b5a8c14e769fa3f4/65a701be734aa6eade49a39f_origin-logo-dark.svg" loading="lazy" width="200" alt="Origin logo, black. For use on light backgrounds." />
            <h1 className="text-3xl font-bold text-center">Origin Task Manager</h1>
          </div>
          <div className='m-4 rounded-lg p-3 flex flex-col gap-2'>
            <TaskForm onAdd={triggerUpdate} />
            <TaskList key={updateFlag} onDelete={triggerUpdate} />
          </div>
        </div>
    );
};

export default App;
