
import os
import html
import logging

import resend
from dotenv import load_dotenv

load_dotenv()

logger = logging.getLogger(__name__)

resend.api_key = os.getenv("RESEND_API_KEY")


def send_enquiry_notification(enquiry):

    recipient = os.getenv("RESEND_TEST_EMAIL")
    sender = os.getenv(
        "RESEND_FROM_EMAIL",
        "Alvion Travels <onboarding@resend.dev>"
    )

    if not resend.api_key:
        raise ValueError("RESEND_API_KEY is missing")

    if not recipient:
        raise ValueError("RESEND_TEST_EMAIL is missing")

    name = html.escape(enquiry.name)
    email = html.escape(enquiry.email)
    subject = html.escape(enquiry.subject)
    message = html.escape(enquiry.message).replace("\n", "<br>")

    params = {
        "from": sender,
        "to": [recipient],
        "reply_to": enquiry.email,
        "subject": f"New Travel Enquiry: {subject}",
        "html": f"""
            <h2>New Enquiry Received</h2>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Subject:</strong> {subject}</p>
            <h3>Message:</h3>
            <p>{message}</p>
        """
    }

    response = resend.Emails.send(params)

    logger.info("Resend API response: %s", response)

    return response
