import logging

from fastapi import APIRouter, HTTPException, Request, status

from schemas import EnquiryCreate
from services.email_service import send_enquiry_notification
from rate_limiter import limiter


logger = logging.getLogger(__name__)

router = APIRouter(
    prefix="/enquiries",
    tags=["Enquiries"]
)


@router.post(
    "/",
    status_code=status.HTTP_201_CREATED
)
@limiter.limit("5/minute")
def create_enquiry(
    request: Request,
    enquiry: EnquiryCreate
):

    try:
        response = send_enquiry_notification(enquiry)

        logger.info(
            "Resend email response: %s",
            response
        )

    except Exception:
        logger.exception("Failed to send enquiry notification")

        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Unable to submit your enquiry right now. Please try again later."
        )

    return {
        "message": "Your enquiry has been submitted successfully."
    }
