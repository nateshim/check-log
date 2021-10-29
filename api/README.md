### Getting Set Up
```
pyenv virtualenv 3.8.6 check-log

pyenv activate check-log

pip3 install flask flask-bcrypt flask-login peewee psycopg2 flask-cors

createdb check_log_db

python3 app.py to run server
```