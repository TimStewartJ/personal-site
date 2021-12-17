from flask import Flask, render_template, send_file
app = Flask(__name__)


@app.route("/")
def index():
    return render_template('index.html')

@app.route("/misc")
def misc():
    return render_template('misc.html')

@app.route("/misc/<misc_page>")
def misc_page(misc_page):
    return render_template('misc/' + misc_page + '.html')

@app.route("/portfolio")
def portfolio():
    return render_template('portfolio.html')

"""
@app.route("/portfolio/web")
def portfolio_web():
    return render_template('portfolio/web.html')

@app.route("/portfolio/design")
def portfolio_design():
    return render_template('portfolio/design.html')

@app.route("/portfolio/pics")
def portfolio_pics():
    return render_template('portfolio/pics.html')
"""

@app.route("/social")
def social():
    return render_template('social.html')

@app.route('/resume')
def show_static_pdf():
    return send_file('static/Resume.pdf', attachment_filename='resume.pdf')

if __name__ == '__main__':
    app.run(debug=True)
