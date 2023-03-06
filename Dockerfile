FROM python:3
RUN pip install django=3.2

COPY.
RUN python manage.py migrate
EXPOSE 8000

CMD ["js", "manage.py", "runserver", "0.0.0.0:8000"]