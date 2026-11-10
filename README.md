
# Alvion Travels

A modern travel agency website designed to showcase travel experiences and make customer enquiries simple. Built with Next.js and FastAPI, with email notifications powered by Resend.

## Overview

Alvion Travels is a full-stack travel website featuring a responsive frontend, a FastAPI enquiry API, form validation, spam protection, and email notifications.

The lightweight version does not require a PostgreSQL database. Customer enquiries are submitted through the backend and forwarded directly to the configured email address using Resend.

## Features

### Frontend
- Responsive travel website design
- Destination and travel experience showcase
- Contact and enquiry form
- Form validation and submission feedback
- Integration with the backend REST API

### Backend
- FastAPI REST API
- Pydantic request validation
- API rate limiting
- Honeypot-based spam protection
- Email notifications using Resend
- No database dependency in the enquiry submission flow

## Technology Stack

| Layer | Technologies |
|---|---|
| Frontend | Next.js 15, React, TypeScript |
| Styling | Tailwind CSS |
| Backend | Python, FastAPI |
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
│   ├── DB/                  # Legacy database files, unused in this version
│   ├── migrations/          # Legacy Alembic files, unused in this version
│   ├── routes/
│   ├── services/
│   ├── main.py
│   ├── schemas.py
│   ├── rate_limiter.py
│   ├── requirements.txt
│   └── .env.example
│
├── .gitignore
└── README.md
```

## Prerequisites

Install the following before running the project:

- Node.js and npm
- Python 3.10 or later
- Git
- A Resend account and API key

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

Create a `.env.local` file if required:

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
RESEND_API_KEY=your_resend_api_key
RESEND_TEST_EMAIL=your_email_address
RESEND_FROM_EMAIL=Alvion Travels <onboarding@resend.dev>
FRONTEND_URLS=http://localhost:3000
```

`RESEND_FROM_EMAIL` is optional. If omitted, the backend uses Resend's testing sender address.

For production, use a sender address associated with a domain verified in Resend.

### 4. Start the Backend

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
| RESEND_API_KEY | Resend API authentication |
| RESEND_TEST_EMAIL | Email address receiving customer enquiries |
| RESEND_FROM_EMAIL | Sender address used for notifications (optional) |
| FRONTEND_URLS | Allowed frontend origins |
| NEXT_PUBLIC_API_URL | Frontend backend API URL |

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Backend status |
| GET | `/health` | Backend health check |
| POST | `/enquiries/` | Submit a travel enquiry |

### Enquiry Submission

The enquiry endpoint accepts:

```json
{
  "name": "Customer Name",
  "email": "customer@example.com",
  "subject": "Travel Enquiry",
  "message": "I would like to plan a trip.",
  "website": ""
}
```

Successful response:

```json
{
  "message": "Your enquiry has been submitted successfully."
}
```

The backend validates the request and sends an email notification through Resend.

If the email submission fails, the API returns an error response so the customer can try again.

## Security Measures

The backend currently includes:

- Request validation using Pydantic
- Rate limiting on enquiry submissions
- Honeypot spam detection
- CORS origin restrictions
- Environment-based secret management
- HTML escaping in email notifications

## Enquiry Handling

This lightweight version does not store enquiries in a database.

Customer enquiries are forwarded to the configured notification email address through Resend.

Important considerations:

- Ensure the notification email address is monitored.
- Email delivery and notification failures should be monitored.
- There is no database backup or enquiry history in this version.
- PostgreSQL can be introduced later if enquiry tracking and management become necessary.

## Deployment

The project is designed for separate frontend and backend deployment.

Planned hosting architecture:

- Frontend: Vercel
- Backend: Render
- Email notifications: Resend
- Database: Not required in the lightweight version

Production environment variables should be configured through the respective hosting platforms.

The frontend's `NEXT_PUBLIC_API_URL` must point to the deployed backend URL.

## Future Improvements

- PostgreSQL integration for enquiry storage
- Enquiry management dashboard
- CAPTCHA integration
- Improved email delivery monitoring
- Administrative enquiry management

## License

All rights reserved.

This project is developed for Alvion Travels. Reuse, redistribution, or commercial use requires authorization from the project owner.
