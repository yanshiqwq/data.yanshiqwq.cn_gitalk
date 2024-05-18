@echo off
python e5_usage_sync.py --input %cd%\README.template.md --output %cd%\README.md
::python upload.py
set dtTmp=%date:~0,4%-%date:~5,2%-%date:~8,2%_%time:~0,2%-%time:~3,2%-%time:~6,2%
set dt=%dtTmp: =0%
git add *
git commit -m %dt%
git push