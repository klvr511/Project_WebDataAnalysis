from flask import Flask, render_template, request, redirect, url_for # type: ignore
import sqlite3
import os

app = Flask(__name__)

def init_db():
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS suggestions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            idea TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

@app.route('/submit', methods=['POST'])
def submit():
    if request.method == 'POST':
        name = request.form.get('username')
        email = request.form.get('email')
        idea = request.form.get('idea')
        
        try:
            conn = sqlite3.connect('database.db')
            cursor = conn.cursor()
            cursor.execute('INSERT INTO suggestions (name, email, idea) VALUES (?, ?, ?)', 
                           (name, email, idea))
            conn.commit()
            conn.close()
            return "<h1>تم استلام فكرتك بنجاح! شكراً لك.</h1><a href='/'>العودة للرئيسية</a>"
        except Exception as e:
            return f"حدث خطأ أثناء حفظ البيانات: {e}"
if __name__ == '__main__':
    init_db()
    import os
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
