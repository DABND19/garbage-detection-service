from typing import Optional
from pydantic import BaseModel

class SingleCameraInfo(BaseModel):
    camera_id: int
    garbage_index: int
    created_at: int
    updated_at: Optional[int] = None