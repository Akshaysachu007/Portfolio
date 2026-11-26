from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.dependencies import get_current_visitor
from app.db.session import get_db
from app.db.models import VisitorSession
from app.schemas.conversation import ConversationResponse
from app.services.conversation_service import (
    create_conversation,
    get_visitor_conversations,
    get_conversation,
    delete_conversation,
)

router = APIRouter(
    prefix="/api/v1/conversations",
    tags=["Conversations"],
)


@router.post(
    "",
    response_model=ConversationResponse,
    status_code=status.HTTP_201_CREATED,
)
async def create_new_conversation(
    db: AsyncSession = Depends(get_db),
    visitor: VisitorSession = Depends(get_current_visitor),
):
    conversation = await create_conversation(db, visitor)
    return conversation


@router.get(
    "",
    response_model=list[ConversationResponse],
)
async def list_conversations(
    db: AsyncSession = Depends(get_db),
    visitor: VisitorSession = Depends(get_current_visitor),
):
    return await get_visitor_conversations(db, visitor.id)


@router.get(
    "/{conversation_id}",
    response_model=ConversationResponse,
)
async def retrieve_conversation(
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

    return conversation


@router.delete("/{conversation_id}")
async def remove_conversation(
    conversation_id: UUID,
    db: AsyncSession = Depends(get_db),
    visitor: VisitorSession = Depends(get_current_visitor),
):
    deleted = await delete_conversation(
        db,
        conversation_id,
        visitor.id,
    )

    if not deleted:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Conversation not found.",
        )

    return {
        "success": True,
        "message": "Conversation deleted successfully.",
    }
