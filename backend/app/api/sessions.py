from fastapi import APIRouter, Depends, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_db
from app.schemas.session import SessionCreateResponse
from app.services.session_service import create_visitor_session

router = APIRouter(
    prefix="/api/v1/sessions",
    tags=["Sessions"],
)


@router.post(
    "",
    response_model=SessionCreateResponse,
    status_code=status.HTTP_201_CREATED,
)
async def create_session(
    db: AsyncSession = Depends(get_db),
):
    session, token = await create_visitor_session(db)

    return SessionCreateResponse(
        id=session.id,
        expires_at=session.expires_at,
        session_token=token,
    )
