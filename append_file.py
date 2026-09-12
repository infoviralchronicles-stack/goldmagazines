import sys, os, base64
d = os.path.dirname(sys.argv[1])
if d:
    os.makedirs(d, exist_ok=True)
open(sys.argv[1], 'ab').write(base64.b64decode(sys.argv[2]))
print('Appended:', sys.argv[1])
