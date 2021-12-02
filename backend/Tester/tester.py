import requests
from sqlalchemy.exc import ObjectNotExecutableError

only_backend = True
port = 8000
if only_backend:
    port = 3000

r = requests.post("http://127.0.0.1:8000/api/fill-dummy-data")
print(r.json())

r = requests.post("http://127.0.0.1:8000/api/add-garbage-info", json={
    "cameraId": 1,
    "garbageIndex": 5,
})
print(r)

r = requests.get("http://127.0.0.1:8000/api/littered-points")
print(r.json())