from fastapi import FastAPI
from routes.weather_router import router as weather_router
from routes.favorites_router import router as favorites_router
from routes.atbash_router import router as atbash_router


app = FastAPI()


@app.get("/health")
def health_check():
    return {"message": "ok"}

app.include_router(weather_router)
app.include_router(favorites_router)
app.include_router(atbash_router)