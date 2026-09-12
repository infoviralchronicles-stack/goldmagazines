import os, base64
def save(path, b64_data):
    d = os.path.dirname(path)
    if d:
        os.makedirs(d, exist_ok=True)
    with open(path, 'wb') as f:
        f.write(base64.b64decode(b64_data.strip()))
    print('Saved:', path)
