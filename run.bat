@echo off
for /f "usebackq delims=" %%i in (`powershell -Command "Get-Date -UFormat '%%Y/%%m/%%d %%H:%%M:%%S'"`) do set "date_str=%%i"
cd ..
py e5_usage_sync.py --input README.template.md --output README.md
cd %~dp0
git add README.md
git commit -m "%date_str%"
git push
pause