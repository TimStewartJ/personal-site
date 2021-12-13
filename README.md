# TimStewartJ.com

This is the repo for my personal website.

Currently it uses Jinja templating run on a Flask server.

## Testing locally

Make/enter a virtual environment and install everything in `requirements.txt`.

Then, run `run.py`.

Alternatively, build and run the docker image:

`docker build -t timstewartj/personal-site . ; docker run -p 8000:8000 timstewartj/personal-site`

## Deploying

Build and use the docker image. Website will be run on port 8000.
