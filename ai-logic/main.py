import os
from typing import Any
from fastapi import FastAPI
from pydantic import BaseModel, Field

# استيراد الـ collection الجاهزة بالصلاحيات من فايل الـ database
from database import collection 
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


# الـ Endpoint الأساسية لاستقبال الداتا وحفظها وعمل التوقع
@app.post("/forecast")
async def forecast_revenue(payload: ForecastRequest) -> dict[str, Any]:
    # 1. تشغيل نموذج التوقعات الحالي (DeepSeek)
    result = generate_revenue_forecast(payload.factory_data)
    
    # 2. تجهيز البيانات المراد حفظها في الداتا بيز بنفس الهيكل المطلوب
    document_to_save = {
        "input_data": payload.factory_data,
        "forecast_result": result,
        "timestamp": os.getenv("CURRENT_TIME", "2026-06-14")  # تسجيل وقت العملية تلقائياً
    }
    
    # 3. حفظ البيانات في الـ MongoDB واستقبال حالة الحفظ للتأكد
    try:
        await collection.insert_one(document_to_save)
        db_status = "Saved successfully"
    except Exception as e:
        db_status = f"Failed to save: {str(e)}"

    # 4. إرجاع النتيجة النهائية مع إضافة حالة مزامنة قاعدة البيانات (database_sync)
    return {
        "service": "factoryos-fastapi",
        "database_sync": db_status,
        **result,
    }
