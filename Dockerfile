FROM ubuntu:20.04

LABEL maintainer="Tim Stewart"

RUN apt update -y && \
    apt install -y python3-pip python3

COPY ./requirements.txt /app/requirements.txt

WORKDIR /app

RUN pip install -r requirements.txt

RUN pip install gunicorn

COPY ./ /app

CMD [ "gunicorn", "-b 0.0.0.0:8000", "run:app"]