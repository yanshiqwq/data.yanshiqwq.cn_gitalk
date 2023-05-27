@echo off
for /f "usebackq delims=" %%i in (`powershell -Command "Get-Date -UFormat '%%Y/%%m/%%d %%H:%%M:%%S'"`) do set "date_str=%%i"
py e5_usage_sync.py --input README.template.md --output README.md
git add README.md
git commit -m "%date_str%"
git push
pause