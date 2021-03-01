# TimStewartJ.com

This is the repo for my personal website.

Currently it uses Jinja templating run on a Flask server.

## Testing locally

Make/enter a virtual environment and install everything in `requirements.txt`.

Then, run `run.py`.

## Deploying

Make/enter a virtual environment similar to how one would do it locally.

Then, run the flask server through whatever method is prefered.

Example with gunicorn: `gunicorn -b 127.0.0.1:8000 run:app`.