from fastapi import APIRouter, HTTPException
from app.config import db
from app.models import CodeSnippet

router = APIRouter()

@router.post("/snippets/")
def create_snippet(snippet: CodeSnippet):
    doc_ref = db.collection("snippets").document(snippet.title)
    if doc_ref.get().exists:
        raise HTTPException(status_code=400, detail="Snippet already exists")
    doc_ref.set(snippet.dict())
    return {"message": "Snippet added successfully"}

@router.get("/snippets/{title}")
def get_snippet(title: str):
    doc = db.collection("snippets").document(title).get()
    if not doc.exists:
        raise HTTPException(status_code=404, detail="Snippet not found")
    return doc.to_dict()

@router.get("/snippets/")
def list_snippets():
    return {doc.id: doc.to_dict() for doc in db.collection("snippets").stream()}

@router.delete("/snippets/{title}")
def delete_snippet(title: str):
    doc_ref = db.collection("snippets").document(title)
    if not doc_ref.get().exists:
        raise HTTPException(status_code=404, detail="Snippet not found")
    doc_ref.delete()
    return {"message": "Snippet deleted successfully"}
