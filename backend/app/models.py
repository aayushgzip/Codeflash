from pydantic import BaseModel

class CodeSnippet(BaseModel):
    title: str
    language: str
    code: str
    description: str = ""
