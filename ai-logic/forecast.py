import os
from pathlib import Path
from typing import Any

from dotenv import load_dotenv

# Load the root .env when running locally outside Docker.
load_dotenv(dotenv_path=Path(__file__).resolve().parents[1] / ".env")

API_KEY = os.getenv("DEEPSEEK_API_KEY")
BASE_URL = os.getenv("DEEPSEEK_BASE_URL", "https://api.deepseek.com")


def generate_revenue_forecast(factory_data: dict[str, Any] | None = None) -> dict[str, Any]:
    """
    Return a placeholder forecast payload until the model integration is added.
    """
    payload = factory_data or {}

    if not API_KEY:
        return {
            "status": "warning",
            "message": "DeepSeek API key not found. Returning placeholder forecast data.",
            "forecast": "Forecast Engine: Offline until DEEPSEEK_API_KEY is configured.",
            "input": payload,
        }

    print("Analyzing factory data for revenue trends...")
    return {
        "status": "online",
        "message": "FastAPI forecast endpoint is ready for data input.",
        "forecast": "Forecast Engine: Online. DeepSeek integration placeholder response.",
        "provider_base_url": BASE_URL,
        "input": payload,
    }


if __name__ == "__main__":
    print("--- FactoryOS AI Logic Module ---")
    print(generate_revenue_forecast())
