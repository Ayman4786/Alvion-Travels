
import logging
from fastapi import HTTPException

from fastapi import APIRouter, Depends, status, Request
from sqlalchemy.orm import Session

from DB.database import get_db
from DB.models import Enquiry
from schemas import EnquiryCreate, EnquiryResponse
from services.email_service import send_enquiry_notification

from rate_limiter import limiter


logger = logging.getLogger(__name__)

router = APIRouter(
    prefix="/enquiries",
    tags=["Enquiries"]
)


@router.post(
    "/",
    response_model=EnquiryResponse,
    status_code=status.HTTP_201_CREATED
)
@limiter.limit("5/minute")
def create_enquiry(
    request: Request,
    enquiry: EnquiryCreate,
    db: Session = Depends(get_db)
    ):

    if enquiry.website:
        raise HTTPException(
        status_code=400,
        detail="Invalid submission"
    )

    new_enquiry = Enquiry(
        name=enquiry.name,
        email=enquiry.email,
        subject=enquiry.subject,
        message=enquiry.message
    )

    db.add(new_enquiry)
    db.commit()
    db.refresh(new_enquiry)

    try:
        response = send_enquiry_notification(new_enquiry)
        logger.info("Resend email response: %s", response)
    except Exception:
        logger.exception("Failed to send enquiry notification")

    return new_enquiry
