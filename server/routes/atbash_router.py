from fastapi import APIRouter
from services.atbash_service import get_atbash

router = APIRouter()


@router.get("/atbash")
def atbash(word: str):
    result = get_atbash(word)
    return {"result": result}
