import asyncio

from app.db.session import AsyncSessionLocal
from app.services.session_service import (
    create_visitor_session,
    get_valid_visitor_session,
)


async def main():
    async with AsyncSessionLocal() as db:
        session, token = await create_visitor_session(db)

        print("Session created:", session.id)
        print("Token generated:", bool(token))
        print("Token hash stored:", session.session_token_hash)
        print("Token stored directly:", token == session.session_token_hash)

        verified = await get_valid_visitor_session(db, token)

        print("Session verification:", verified is not None)


if __name__ == "__main__":
    asyncio.run(main())
