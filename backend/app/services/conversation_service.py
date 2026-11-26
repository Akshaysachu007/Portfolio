import uuid

from sqlalchemy import select, delete
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.models import Conversation, VisitorSession


async def create_conversation(
    db: AsyncSession,
    visitor_session: VisitorSession,
) -> Conversation:
    """Create a new conversation for a visitor."""

    conversation = Conversation(
        session_id=visitor_session.id,
    )

    db.add(conversation)
    await db.commit()
    await db.refresh(conversation)

    return conversation


async def get_visitor_conversations(
    db: AsyncSession,
    visitor_session_id: uuid.UUID,
) -> list[Conversation]:
    """Return conversations belonging to a visitor."""

    result = await db.execute(
        select(Conversation)
        .where(Conversation.session_id == visitor_session_id)
        .order_by(Conversation.updated_at.desc())
    )

    return list(result.scalars().all())


async def get_conversation(
    db: AsyncSession,
    conversation_id: uuid.UUID,
    visitor_session_id: uuid.UUID,
) -> Conversation | None:
    """Retrieve a conversation only if it belongs to the visitor."""

    result = await db.execute(
        select(Conversation).where(
            Conversation.id == conversation_id,
            Conversation.session_id == visitor_session_id,
        )
    )

    return result.scalar_one_or_none()


async def delete_conversation(
    db: AsyncSession,
    conversation_id: uuid.UUID,
    visitor_session_id: uuid.UUID,
) -> bool:
    """Delete a conversation belonging to the visitor."""

    result = await db.execute(
        delete(Conversation).where(
            Conversation.id == conversation_id,
            Conversation.session_id == visitor_session_id,
        )
    )

    await db.commit()

    return result.rowcount > 0
