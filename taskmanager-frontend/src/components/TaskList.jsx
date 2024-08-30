import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const TaskList = ({ onDelete }) => {
    
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/tasks/');
            console.log(response.data);
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/tasks/${id}/`);
            onDelete();
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <div className="bg-slate-600 p-4 rounded-lg">
            <h2 className="text-2xl text-white font-bold mb-4 text-center">All Availaible Tasks</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={task.id} className="mb-2 flex justify-between items-center">
                        <span className='text-white text-lg font-semibold'>{index+1}. {task.descryption}</span>
                        <button
                            onClick={() => handleDelete(task.id)}
                            className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;

TaskList.propTypes = {
    onDelete: PropTypes.func.isRequired,
};
