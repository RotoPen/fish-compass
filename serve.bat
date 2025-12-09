@echo off
REM Quick local server for Fish Compass (Windows)
REM Requires Node.js; npx will fetch serve if not installed.

npx --yes serve . --listen 3000
