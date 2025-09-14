# Cross-platform shell configuration
# Use PowerShell on Windows (higher precedence than shell setting)
set windows-shell := ["powershell.exe", "-NoLogo", "-Command"]
# Use sh on Unix-like systems
set shell := ["sh", "-c"]

src := "src"
out := "build"
static := "img,css,js"

build:
    uv run staticjinja build --srcpath {{src}} --outpath {{out}} --static {{static}}

serve:
    uv run staticjinja watch --srcpath {{src}} --outpath {{out}} --static {{static}}
