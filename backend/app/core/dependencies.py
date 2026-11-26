from fastapi import Depends, Header, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_db
from app.db.models import VisitorSession
from app.services.session_service import get_valid_visitor_session


async def get_current_visitor(
    x_session_token: str | None = Header(default=None),
    db: AsyncSession = Depends(get_db),
) -> VisitorSession:

    if not x_session_token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Visitor session token is required.",
        )

    visitor = await get_valid_visitor_session(
        db,
        x_session_token,
    )

    if visitor is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or expired visitor session.",
        )

    return visitor
