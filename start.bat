@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo.
echo   3D-konfigurator "Kreslo Larisel"
echo   http://127.0.0.1:8123/
echo.
echo   Lokalnyy server. Zakroyte okno - sayt ostanovitsya.
echo   (index.html otkryvaetsya i prostym dvoynym klikom)
echo.
start "" http://127.0.0.1:8123/
python -m http.server 8123 --bind 127.0.0.1
