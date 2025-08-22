# MemeV - Meme Voting Application

A full-stack web application for voting on memes, built with Django (backend) and React (frontend).

## Features

- Display memes in a responsive grid layout
- Upvote and downvote memes
- Real-time vote count updates
- Modern, responsive UI with Tailwind CSS
- RESTful API backend

## Tech Stack

### Backend
- Django 5.2.5
- Django REST Framework
- SQLite database
- CORS headers for cross-origin requests

### Frontend
- React 19.1.1
- Vite for build tooling
- Tailwind CSS for styling
- Modern ES6+ JavaScript

## Project Structure

```
memeV/
├── backend/                 # Django backend
│   ├── base/               # Django project settings
│   ├── memes/              # Memes app
│   │   ├── models.py       # Database models
│   │   ├── views.py        # API views
│   │   ├── serializers.py  # DRF serializers
│   │   └── urls.py         # URL routing
│   └── manage.py
├── frontend/               # React frontend
│   ├── src/
│   │   ├── App.jsx         # Main app component
│   │   ├── MemeList.jsx    # Meme display component
│   │   └── index.css       # Global styles
│   └── package.json
└── pypy/                   # Python virtual environment
```

## Getting Started

### Prerequisites
- Python 3.8+
- Node.js 16+
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Activate the virtual environment:
   ```bash
   source ../pypy/bin/activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run migrations:
   ```bash
   python manage.py migrate
   ```

5. Load sample data:
   ```bash
   python manage.py load_sample_data
   ```

6. Start the development server:
   ```bash
   python manage.py runserver
   ```

The backend will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:5173`

## API Endpoints

- `GET /api/memes/` - Get all memes
- `POST /api/memes/` - Create a new meme
- `POST /api/memes/{id}/upvote/` - Upvote a meme
- `POST /api/memes/{id}/downvote/` - Downvote a meme

## Database Models

### Memes
- `id`: Primary key
- `title`: Meme title (max 20 characters)
- `url`: Image URL (max 255 characters)
- `created_at`: Creation timestamp

### Vote
- `user`: Foreign key to User model
- `meme`: Foreign key to Memes model
- `vote_type`: Choice field ('UP' or 'DOWN')

## Development

### Adding New Memes
You can add new memes through the Django admin interface or by creating a new management command.

### Customizing the UI
The frontend uses Tailwind CSS for styling. You can customize the appearance by modifying the classes in the React components.

### Database Changes
When making changes to models, remember to:
1. Create migrations: `python manage.py makemigrations`
2. Apply migrations: `python manage.py migrate`

## License

This project is open source and available under the MIT License.
