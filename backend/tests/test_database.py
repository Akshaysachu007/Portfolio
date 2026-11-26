import asyncio

from sqlalchemy import text
from app.db.session import engine


async def test_connection():
    try:
        async with engine.connect() as connection:
            result = await connection.execute(text("SELECT 1"))
            print("Database connection successful!")
            print("Test result:", result.scalar())

    except Exception as error:
        print("Database connection failed!")
        print("Error:", error)

    finally:
        await engine.dispose()


if __name__ == "__main__":
    asyncio.run(test_connection())
