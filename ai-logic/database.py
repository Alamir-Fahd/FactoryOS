import os
from motor.motor_asyncio import AsyncIOMotorClient

# جلب رابط الاتصال الكامل شامل الأدمين والباسورد من ملف الـ .env
# إذا لم يجد الرابط، سيستخدم الرابط الافتراضي المكتوب بالأسفل كاحتياط
MONGO_URI = os.getenv(
    "MONGODB_URI", 
    "mongodb://admin:innovera123@mongodb:27017/factory_db?authSource=admin"
)

client = AsyncIOMotorClient(MONGO_URI)

# استخدام اسم الداتا بيز الصحيح المكتوب في ملف الـ .env الخاص بكم وهو factory_db
db = client["factory_db"]          
collection = db["forecast_history"] # اسم الجدول الذي ستُحفظ فيه البيانات
