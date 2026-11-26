import hashlib
import secrets

from datetime import datetime, timedelta, timezone

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.models import VisitorSession

SESSION_DURATION_HOURS = 24


def generate_session_token() -> str:
    """Generate a secure random visitor token."""
    return secrets.token_urlsafe(32)


def hash_session_token(token: str) -> str:
    """Hash the visitor token before storing it."""
    return hashlib.sha256(token.encode("utf-8")).hexdigest()


async def create_visitor_session(
    db: AsyncSession,
) -> tuple[VisitorSession, str]:
    """Create a new visitor session."""

    token = generate_session_token()
    token_hash = hash_session_token(token)

    expires_at = datetime.now(timezone.utc) + timedelta(hours=SESSION_DURATION_HOURS)

    session = VisitorSession(
        session_token_hash=token_hash,
        expires_at=expires_at,
    )

    db.add(session)
    await db.commit()
    await db.refresh(session)

    return session, token


async def get_valid_visitor_session(
    db: AsyncSession,
    token: str,
) -> VisitorSession | None:
    """Retrieve a visitor session if its token is valid and unexpired."""

    token_hash = hash_session_token(token)

    result = await db.execute(
        select(VisitorSession).where(
            VisitorSession.session_token_hash == token_hash,
            VisitorSession.expires_at > datetime.now(timezone.utc),
        )
    )

    return result.scalar_one_or_none()
