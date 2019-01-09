# Simax-Dev
[![CircleCI](https://circleci.com/gh/m31415/django-rest-react-redux-blueprint.svg?style=svg)](https://circleci.com/gh/m31415/django-rest-react-redux-blueprint)



# 1 Setup

1.1 pyenv
* Check if you have a pyenv version installed </br>
* Install Python 3.6.0 with ```pyenv install 3.6.0``` or set the local python verison you want to use with 
```pyenv local 3.X```
* Check if pyenv uses your local pytoon version (cd directory and typ ```python```)

1.2 virtualenv
* ```virtualenv --python=python virtual-env-blueprint```

1.3 requirements
* Activate virtualenv (PyCharm(preferred) or Terminal)
* ```pip install -r requirements.txt```

1.4 django-admin
* Make migrations, migrate and create superuser </br>
```python manage.py makemigrations``` </br>
```python manage.py migrate``` </br>
```python manage.py createsuperuser```

1.5 webpack
* Install ```npm```and ```node```
* Create FrontEnd Bundle with ```npm run dev```

# 2 Run & Develop
```python manage.py runserver```
```npm run dev

# 3 Task

-Functional:
The Class Component  ```Euro``` displays each balance received by it's property ```bankAccount```. What's missing is the functionality to convert those balances to GBP. Therefore, a Button "Show Balance in GBP" has been placed, which should trigger this functionality.

-Technical:
Please implement your solution with Redux (already installed) and transform the Component ```Euro``` into a Function Component, that solely displays the balances and calls your redux-actions. </br>
Use the API https://exchangeratesapi.io/ to retrieve the current exchange rate for GBP with https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
