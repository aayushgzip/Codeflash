import json
from fastapi import APIRouter, HTTPException

router = APIRouter()

@router.post("/format-json/")
def format_json(data: dict):
    try:
        return {"formatted_json": json.dumps(data, indent=4)}
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Invalid JSON: {str(e)}")
