from fastapi import FastAPI
from sqlalchemy import text
from DB.database import engine, Base
from DB.models import Enquiry
from routes.enquiries import router as enquiries_router
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv

from slowapi import _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded
from slowapi.middleware import SlowAPIMiddleware

from rate_limiter import limiter

load_dotenv()   

app = FastAPI()

# Adding rate limiters per client per IP
app.state.limiter = limiter

app.add_exception_handler(
    RateLimitExceeded,
    _rate_limit_exceeded_handler
)

app.add_middleware(SlowAPIMiddleware)

# adding cors for seamless talking between frontend and backend
frontend_origins = [
    origin.strip()
    for origin in os.getenv("FRONTEND_URLS", "").split(",")
    if origin.strip()
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=frontend_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(enquiries_router)

@app.get('/')
def server_check():
    return ('Server is running')

@app.get("/health/db")
def check_database():
    try:
        with engine.connect() as connection:
            connection.execute(text("SELECT 1"))

        return {
            "status": "success",
            "message": "PostgreSQL connection is working!"
        }

    except Exception as e:
        return {
            "status": "error",
            "message": str(e)
        }