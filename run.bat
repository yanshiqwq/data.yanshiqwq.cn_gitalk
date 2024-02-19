@echo off
python e5_usage_sync.py --input %cd%\README.template.md --output %cd%\README.md
::python upload.py

pause