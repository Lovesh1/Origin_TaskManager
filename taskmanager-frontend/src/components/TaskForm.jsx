import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'

const TaskForm = ({ onAdd }) => {
    const [descryption, setDescryption] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (descryption.trim()) {
            try {
                await axios.post('http://localhost:8000/api/tasks/', { descryption });
                setDescryption('');
                onAdd(); 
            } catch (error) {
                console.error('Error adding task:', error);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <h2 className="text-2xl text-center text-black font-bold mb-4">Add New Task</h2>
            <input
                type="text"
                value={descryption}
                onChange={(e) => setDescryption(e.target.value)}
                placeholder="Enter task description..."
                className="border p-2 mb-4 w-full outline-none rounded-md opacity-80"
            />
            <button type="submit" className="bg-green-500 hover:bg-green-700 text-white p-2 rounded-lg w-full text-xl">
                Add Task
            </button>
        </form>
    );
};

export default TaskForm;

TaskForm.propTypes = {
    onAdd: PropTypes.func.isRequired
}