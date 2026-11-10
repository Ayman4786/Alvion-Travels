"""add phone to enquiries

Revision ID: e14a4fd0bca7
Revises: 356dfdb12824
Create Date: 2026-11-10 15:13:17.225983

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'e14a4fd0bca7'
down_revision: Union[str, Sequence[str], None] = '356dfdb12824'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.add_column(
        'enquiries',
        sa.Column(
            'phone',
            sa.String(length=20),
            nullable=True
        )
    )

    op.execute(
        "UPDATE enquiries SET phone = '' WHERE phone IS NULL"
    )

    op.alter_column(
        'enquiries',
        'phone',
        existing_type=sa.String(length=20),
        nullable=False
    )


def downgrade() -> None:
    op.drop_column('enquiries', 'phone')
