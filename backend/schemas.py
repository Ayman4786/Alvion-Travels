
from pydantic import BaseModel, EmailStr, ConfigDict, Field


class EnquiryCreate(BaseModel):
    model_config = ConfigDict(
        str_strip_whitespace=True,
        extra="forbid"
    )

    name: str = Field(min_length=2, max_length=150)
    email: EmailStr
    phone: str = Field(min_length=7, max_length=20)
    subject: str = Field(min_length=3, max_length=255)
    message: str = Field(min_length=10, max_length=5000)
    website: str = Field(default="", max_length=255)
