from fastapi import FastAPI, UploadFile, File, Form
from pydantic import BaseModel
import uuid

app = FastAPI()

# مصفوفة مؤقتة لتخزين الطلبات (بالواقع نستخدم قاعدة بيانات)
orders = []

@app.get("/api/config")
async def get_config():
    return {
        "asia_cell_number": "0770XXXXXXX",  # اكتب رقمك هنا
        "packages": [
            {"id": 1, "uc": 60, "price_iqd": 1250, "popular": False},
            {"id": 2, "uc": 325, "price_iqd": 6250, "popular": True},
            {"id": 3, "uc": 660, "price_iqd": 12500, "popular": False},
        ]
    }

@app.post("/api/orders")
async def create_order(
    player_name: str = Form(...),
    player_id: str = Form(...),
    package_id: int = Form(...),
    receipt: UploadFile = File(...)
):
    # إنشاء رقم طلب عشوائي
    order_id = str(uuid.uuid4())[:8]
    
    new_order = {
        "order_id": order_id,
        "player_name": player_name,
        "player_id": player_id,
        "package_id": package_id,
        "receipt_name": receipt.filename
    }
    
    orders.append(new_order)
    
    return {
        "status": "success",
        "order_id": order_id,
        "message": "وصلنا طلبك بنجاح، جاري التدقيق وشحن الشدات!"
    }

