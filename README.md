
# Alvion Travels

A modern travel agency website designed to showcase travel experiences and make customer enquiries simple. Built with Next.js and FastAPI, backed by PostgreSQL.

## Overview

Alvion Travels is a full-stack travel website featuring a responsive frontend, an enquiry management API, PostgreSQL database integration, and email notifications.

## Features

### Frontend
- Responsive travel website design
- Destination and travel experience showcase
- Contact and enquiry form
- Form validation and submission feedback
- Integration with the backend REST API

### Backend
- FastAPI REST API
- PostgreSQL database integration
- SQLAlchemy ORM
- Alembic database migrations
- Pydantic request validation
- API rate limiting
- Honeypot-based spam protection
- Email notifications using Resend

## Technology Stack

| Layer | Technologies |
|---|---|
| Frontend | Next.js 15, React, TypeScript |
| Styling | Tailwind CSS |
| Backend | Python, FastAPI |
| Database | PostgreSQL |
| ORM | SQLAlchemy |
| Migrations | Alembic |
| Validation | Pydantic |
| Email | Resend |
| Rate Limiting | SlowAPI |

## Project Structure

```text
Travel_web/
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── DB/
│   ├── migrations/
│   │   └── versions/
│   ├── routes/
│   ├── services/
│   ├── main.py
│   ├── schemas.py
│   ├── rate_limiter.py
│   ├── requirements.txt
│   ├── alembic.ini
│   └── .env.example
│
├── .gitignore
└── README.md
```

## Prerequisites

Install the following before running the project:

- Node.js and npm
- Python 3.10 or later
- PostgreSQL
- Git

## Local Development Setup

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd Travel_web
```

### 2. Frontend Setup

```bash
cd frontend
npm install
```

Configure the backend API URL if required by creating a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```

Start the frontend:

```bash
npm run dev
```

Frontend runs at:

http://localhost:3000

### 3. Backend Setup

Open another terminal:

```bash
cd backend
```

Create and activate a virtual environment.

Windows PowerShell:

```powershell
python -m venv .venv
.venv\Scripts\Activate.ps1
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create a `.env` file using `.env.example` as a reference.

Configure the following environment variables:

```env
DATABASE_URL=your_postgresql_connection_string
RESEND_API_KEY=your_resend_api_key
RESEND_TEST_EMAIL=your_email_address
FRONTEND_URLS=http://localhost:3000
```

### 4. Database Migrations

Make sure PostgreSQL is running and the configured database exists.

Apply migrations:

```bash
alembic upgrade head
```

### 5. Start the Backend

```bash
uvicorn main:app --reload
```

Backend runs at:

http://127.0.0.1:8000

API documentation:

http://127.0.0.1:8000/docs

## Environment Variables

Never commit actual `.env` files or expose secret credentials.

| Variable | Purpose |
|---|---|
| DATABASE_URL | PostgreSQL connection |
| RESEND_API_KEY | Resend API authentication |
| RESEND_TEST_EMAIL | Notification recipient |
| FRONTEND_URLS | Allowed frontend origins |
| NEXT_PUBLIC_API_URL | Frontend backend API URL |

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Backend status |
| GET | `/health/db` | Database connectivity |
| POST | `/enquiries/` | Submit a travel enquiry |

## Security Measures

The backend currently includes:

- Request validation using Pydantic
- Rate limiting on enquiry submissions
- Honeypot spam detection
- CORS origin restrictions
- Environment-based secret management

## Database Management

Alembic is used to manage database schema changes.

Generate a migration after modifying SQLAlchemy models:

```bash
alembic revision --autogenerate -m "describe your changes"
```

Review the generated migration before applying it:

```bash
alembic upgrade head
```

## Deployment

The project is designed for separate frontend and backend deployment.

Planned hosting architecture:

- Frontend: Vercel
- Backend: Render
- Database: Managed PostgreSQL
- Email notifications: Resend

Production environment variables and database credentials should be configured through the respective hosting platforms.

## License

All rights reserved.

This project is developed for Alvion Travels. Reuse, redistribution, or commercial use requires authorization from the project owner.
