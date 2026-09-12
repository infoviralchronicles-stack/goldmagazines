import sys, os, base64

def write_b64_file(rel_path, b64_str):
    os.makedirs(os.path.dirname(rel_path), exist_ok=True)
    content = base64.b64decode(b64_str.strip()).decode('utf-8')
    with open(rel_path, 'w', encoding='utf-8') as out:
        out.write(content)
    print(f'Wrote: {rel_path} ({len(content)} chars)')

if __name__ == '__main__':
    if len(sys.argv) >= 3:
        write_b64_file(sys.argv[1], sys.argv[2])
