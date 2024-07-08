import sys

def get_python_path():
    python_path = sys.executable
    print(f"Current Python interpreter path: {python_path}")

if __name__ == "__main__":
    get_python_path()