from typing import Annotated
from fastapi import Query, Path

Lat = Annotated[float, Query(..., le=-90, ge=90)]
Long = Annotated[float, Query(..., le=-180, ge=180)]
CityPath = Annotated[str, Path(..., max_length=20)]
CityQuery = Annotated[str, Query(..., max_length=20)]
