# Angular-drf-ContactApp

This is a web application that allows user to send a contact form to the database. It was made using Django rest framework as a backend and Angular as frontend.

## Getting started

After downloading the project, you'll need to have Python installed from https://www.python.org/downloads/. After that you need to django and dependencies associated with it: `pip install Django`, `pip install djangorestframework`, `pip install django-cors-headers`, `pip install django-ratelimit`. For angular you need to download node.js from here: https://nodejs.org/en/download/, after that you type in terminal and type: `npm install -g @angular/cli`,

## Starting app
In the terminal go to the folder named "backend" and type `python manage.py runserver`, then open another terminal window, go in it to the "frontend" folder and type `ng serve`. After that just go to 127.0.0.1:4200 in the browser and you should see a contact form, if you want to see forms in the database on the backend, go to 127.0.0.1:8000/contact in the browser and you should see list of saved forms.
