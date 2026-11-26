import asyncio

from app.db.session import AsyncSessionLocal
from app.services.session_service import create_visitor_session
from app.services.conversation_service import create_conversation
from app.services.message_service import (
    create_message,
    get_conversation_messages,
)


async def main():
    async with AsyncSessionLocal() as db:

        visitor, _ = await create_visitor_session(db)

        conversation = await create_conversation(db, visitor)

        # Save visitor question
        user_message = await create_message(
            db,
            conversation,
            "user",
            "What projects has Akshay built?",
        )

        # Save assistant response
        assistant_message = await create_message(
            db,
            conversation,
            "assistant",
            "Akshay has worked on several AI and full-stack projects.",
            {
                "model": "test-model",
                "sources": ["Portfolio"],
            },
        )

        print("User message saved:", user_message.id)
        print("Assistant message saved:", assistant_message.id)

        messages = await get_conversation_messages(
            db,
            conversation.id,
            visitor.id,
        )

        print("Total messages:", len(messages))

        for message in messages:
            print(message.role, ":", message.content)


if __name__ == "__main__":
    asyncio.run(main())
