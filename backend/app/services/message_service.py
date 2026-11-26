import uuid

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.models import Message, Conversation


async def create_message(
    db: AsyncSession,
    conversation: Conversation,
    role: str,
    content: str,
    message_metadata: dict | None = None,
) -> Message:
    """Save a user or assistant message."""

    if role not in {"user", "assistant"}:
        raise ValueError("Invalid message role")

    message = Message(
        conversation_id=conversation.id,
        role=role,
        content=content,
        message_metadata=message_metadata,
    )

    db.add(message)

    conversation.updated_at = __import__("datetime").datetime.now(
        __import__("datetime").timezone.utc
    )

    await db.commit()
    await db.refresh(message)

    return message


async def get_conversation_messages(
    db: AsyncSession,
    conversation_id: uuid.UUID,
    visitor_session_id: uuid.UUID,
) -> list[Message]:
    """Retrieve messages only from the visitor's own conversation."""

    result = await db.execute(
        select(Message)
        .join(Conversation)
        .where(
            Message.conversation_id == conversation_id,
            Conversation.session_id == visitor_session_id,
        )
        .order_by(Message.created_at.asc())
    )

    return list(result.scalars().all())
