from typing import Any

from fastapi import FastAPI
from pydantic import BaseModel, Field

from forecast import generate_revenue_forecast

app = FastAPI(
    title="FactoryOS AI API",
    description="FastAPI service for FactoryOS forecasting endpoints.",
    version="1.0.0",
)


class ForecastRequest(BaseModel):
    factory_data: dict[str, Any] = Field(
        default_factory=dict,
        description="Structured production or revenue inputs for forecasting.",
    )


@app.get("/")
def read_root() -> dict[str, str]:
    return {
        "service": "factoryos-fastapi",
        "status": "online",
        "docs": "/docs",
    }


@app.get("/health")
def read_health() -> dict[str, str]:
    return {
        "service": "factoryos-fastapi",
        "status": "online",
    }


@app.post("/forecast")
def forecast_revenue(payload: ForecastRequest) -> dict[str, Any]:
    result = generate_revenue_forecast(payload.factory_data)
    return {
        "service": "factoryos-fastapi",
        **result,
    }
