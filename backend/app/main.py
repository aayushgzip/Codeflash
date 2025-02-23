from fastapi import FastAPI
from app.routes import snippets, utils

app = FastAPI()
app.include_router(snippets.router)
app.include_router(utils.router)

@app.get("/")
def root():
    return {"message": "Flashcard API for Code Snippets"}
