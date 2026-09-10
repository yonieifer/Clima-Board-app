from typing import Annotated
from fastapi import Query, Path
from pydantic import BaseModel

Lat = Annotated[float, Query(..., le=-90, ge=90)]
Long = Annotated[float, Query(..., le=-180, ge=180)]
CityPath = Annotated[str, Path(..., max_length=20)]
CityQuery = Annotated[str, Query(..., max_length=20)]
NameQuery = Annotated[str, Query(..., max_length=30)]
