# Origin_TaskManager

# Task Management Application

A basic task management application where users can add, view, and delete tasks. This project includes a Django backend API and a React frontend.

## Features

- List tasks
- Add new tasks
- Delete tasks

## Tech Stack

- **Backend:** Python, Django, Django REST Framework, PostgreSQL
- **Frontend:** React, Vite, Tailwind CSS
- **Database:** PostgreSQL

## Setup Instructions

### Prerequisites

- Python 3.x
- Node.js and npm
- PostgreSQL

### Backend Setup (Django)

1. **Clone the repository:**

    ```bash
    https://github.com/Lovesh1/Origin_TaskManager.git
    cd Origin_TaskManager
    ```

2. **Create and activate a virtual environment:**

    ```bash
    python3 -m venv env
    source env/bin/activate  # On Windows use `env\Scripts\activate`
    ```

3. **Install the required Python packages:**

    ```bash
    pip install -r requirements.txt
    ```

4. **Set up the PostgreSQL database:**

    - Create a PostgreSQL database and note down the credentials.

5. **Create a `.env` file in the root directory and add the following:**

    ```
    DATABASE_NAME=your_db_name
    DATABASE_USER=your_db_user
    DATABASE_PASSWORD=your_db_password
    DATABASE_HOST=localhost
    DATABASE_PORT=5432
    ```

6. **Apply migrations:**

    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```

7. **Run the Django development server:**

    ```bash
    python manage.py runserver
    ```

### Frontend Setup (React)

1. **Navigate to the frontend directory:**

    ```bash
    cd frontend
    ```

2. **Install the required npm packages:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm run dev
    ```

### Running the Application

- **Backend:** The Django backend will be running on `http://localhost:8000/`.
- **Frontend:** The React frontend will be running on `http://localhost:5173/`.


### Additional Information

- **API Endpoints:**
  - `GET /api/tasks/` - Retrieve all tasks.
  - `POST /api/tasks/` - Create a new task.
  - `DELETE /api/tasks/:id/` - Delete a task by ID.

- **Development Notes:**
  - Ensure to run both backend and frontend servers simultaneously.
  - Adjust CORS settings in `settings.py` if you encounter cross-origin issues.

### Testing

- **Backend:** Run `python manage.py test` to execute the backend tests.
- **Frontend:** Write and run tests using the chosen testing framework

For running the sample test cases:- 
 ```bash
    python manage.py test
    ```

### License

This project is licensed under the MIT License.

---


