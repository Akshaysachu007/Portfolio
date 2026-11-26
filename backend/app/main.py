from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.sessions import router as sessions_router
from app.api.conversations import router as conversations_router
from app.api.messages import router as messages_router

app = FastAPI(
    title="Ask My Ai API",
    description="AI-powered portfolio assistant for Akshay",
    version="1.0.0",
)

# Development frontend origin
origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=[
        "Content-Type",
        "Authorization",
        "X-Session-Token",
    ],
)


@app.get("/")
async def root():
    return {
        "success": True,
        "message": "Ask My Ai API is running",
    }


@app.get("/api/v1/health")
async def health_check():
    return {
        "success": True,
        "status": "healthy",
        "service": "ask-my-ai",
    }


app.include_router(sessions_router)
app.include_router(conversations_router)
app.include_router(messages_router)
