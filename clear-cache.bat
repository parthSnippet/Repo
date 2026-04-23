@echo off
echo Clearing all caches and restarting...
echo.

REM Kill any running dev server
taskkill /F /IM node.exe 2>nul

REM Clear Vite cache
if exist .vite rmdir /S /Q .vite
if exist node_modules\.vite rmdir /S /Q node_modules\.vite

echo Cache cleared!
echo.
echo Now run: npm run dev
echo Then in browser: Ctrl + Shift + R (hard refresh)
pause
