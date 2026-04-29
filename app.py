from flask import Flask, render_template, request
import psycopg2
import os

app = Flask(__name__)

DB_URL = "postgresql://postgres:Meshary511%40@db.difpnyzysgndmabnpyod.supabase.co:6543/postgres?sslmode=require"

def get_db_connection():
        
        conn = psycopg2.connect(DB_URL)    
        
        return conn

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
    try:
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute('SELECT * FROM suggestions ORDER BY id DESC;')
        data = cur.fetchall()
        cur.close()
        conn.close()
        return render_template('dashboard.html', suggestions=data)
    except Exception as e:
        return f"حدث خطأ في قاعدة البيانات: {e}"

@app.route('/submit', methods=['POST'])
def submit():
    if request.method == 'POST':
        name = request.form.get('username')
        email = request.form.get('email')
        idea = request.form.get('idea')
        
        try:
            conn = get_db_connection()
            cur = conn.cursor()
            cur.execute('INSERT INTO suggestions (name, email, idea) VALUES (%s, %s, %s)',
                        (name, email, idea))
            conn.commit()
            cur.close()
            conn.close()
            return "<h1>تم استلام فكرتك بنجاح! شكراً لك.</h1><a href='/'>العودة للرئيسية</a>"
        except Exception as e:
            return f"حدث خطأ أثناء حفظ البيانات: {e}"

if __name__ == '__main__':
    # Render يطلب تشغيل التطبيق على المنفذ الذي يحدده هو
    # وإلا سيعطيك خطأ "No open ports"
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
