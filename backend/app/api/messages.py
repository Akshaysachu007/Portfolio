from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.dependencies import get_current_visitor
from app.db.session import get_db
from app.db.models import VisitorSession
from app.schemas.message import MessageCreate, MessageResponse
from app.services.conversation_service import get_conversation
from app.services.message_service import (
    create_message,
    get_conversation_messages,
)

router = APIRouter(
    prefix="/api/v1/conversations",
    tags=["Messages"],
)


@router.post(
    "/{conversation_id}/messages",
    response_model=MessageResponse,
    status_code=status.HTTP_201_CREATED,
)
async def send_user_message(
    conversation_id: UUID,
    payload: MessageCreate,
    db: AsyncSession = Depends(get_db),
    visitor: VisitorSession = Depends(get_current_visitor),
):
    conversation = await get_conversation(
        db,
        conversation_id,
        visitor.id,
    )

    if conversation is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Conversation not found.",
        )

    message = await create_message(
        db=db,
        conversation=conversation,
        role="user",
        content=payload.content.strip(),
    )

    return message


@router.get(
    "/{conversation_id}/messages",
    response_model=list[MessageResponse],
)
async def list_messages(
    conversation_id: UUID,
    db: AsyncSession = Depends(get_db),
    visitor: VisitorSession = Depends(get_current_visitor),
):
    conversation = await get_conversation(
        db,
        conversation_id,
        visitor.id,
    )

    if conversation is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Conversation not found.",
        )

    return await get_conversation_messages(
        db,
        conversation_id,
        visitor.id,
    )
