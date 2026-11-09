
from pydantic import BaseModel, EmailStr, ConfigDict, Field


class EnquiryCreate(BaseModel):
    model_config = ConfigDict(
        str_strip_whitespace=True,
        extra="forbid"
    )

    name: str = Field(
        min_length=2,
        max_length=150
    )

    email: EmailStr

    subject: str = Field(
        min_length=3,
        max_length=255
    )

    message: str = Field(
        min_length=10,
        max_length=5000
    )

    website: str = Field(
    default="",
    max_length=255
    )


class EnquiryResponse(BaseModel):
    id: int
    name: str
    email: str
    subject: str
    message: str
    status: str

    model_config = ConfigDict(from_attributes=True)


class EnquiryStatusUpdate(BaseModel):
    status: str = Field(
        min_length=1,
        max_length=50
    )
