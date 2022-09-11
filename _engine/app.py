import sys

#ano = sys.argv[1]

from pathlib import Path

directory = Path('_engine')

if directory.exists():
    file = directory / 'egg.txt'
    file.touch()