
import os, base64

def write_b64(path, b64_data):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'wb') as f:
        f.write(base64.b64decode(b64_data.strip()))
    print('Created:', path)

