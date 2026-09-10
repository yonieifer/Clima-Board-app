import time
from fastapi import FastAPI, Request, Response
from fastapi.middleware.cors import CORSMiddleware
from routes.weather_router import router as weather_router
from routes.favorites_router import router as favorites_router
from routes.atbash_router import router as atbash_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.middleware("http")
async def counter(req: Request, call_next):
    start = time.time()
    res = await call_next(req)
    long = time.time() - start
    print(long)
    return res


@app.get("/health")
def health_check():
    return {"message": "ok"}


app.include_router(weather_router)
app.include_router(favorites_router)
app.include_router(atbash_router)


@app.exception_handler(Exception)
def except_error(req: Request, exc: Exception):
    return Response(status_code=500, content=type(exc).__name__)
