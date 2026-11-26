import asyncio

from app.db.session import AsyncSessionLocal
from app.services.session_service import create_visitor_session
from app.services.conversation_service import (
    create_conversation,
    get_visitor_conversations,
    get_conversation,
    delete_conversation,
)


async def main():
    async with AsyncSessionLocal() as db:

        # Create a visitor session
        visitor, token = await create_visitor_session(db)

        # Create a conversation
        conversation = await create_conversation(db, visitor)

        print("Conversation created:", conversation.id)

        # Retrieve visitor conversations
        conversations = await get_visitor_conversations(
            db,
            visitor.id,
        )

        print("Conversation count:", len(conversations))

        # Verify ownership
        found = await get_conversation(
            db,
            conversation.id,
            visitor.id,
        )

        print("Ownership verification:", found is not None)

        # Verify another visitor cannot access it
        other_visitor, _ = await create_visitor_session(db)

        unauthorized = await get_conversation(
            db,
            conversation.id,
            other_visitor.id,
        )

        print("Other visitor access:", unauthorized is not None)

        # Delete conversation
        deleted = await delete_conversation(
            db,
            conversation.id,
            visitor.id,
        )

        print("Conversation deleted:", deleted)


if __name__ == "__main__":
    asyncio.run(main())
