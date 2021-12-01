import requests

r = requests.get("http://127.0.0.1:8000/littered-points")
print(r.json())


r = requests.post("http://127.0.0.1:8000/fill_with_dummy_data")
print(r.json())

r = requests.post("http://127.0.0.1:8000/add_garbage_info", json={
    "camera_id": 1,
    "garbage_index": 5,
    "created_at": 0,
    "updated_at": 0,
})
print(r)