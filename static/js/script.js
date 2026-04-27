const projects = [
    {
        level: "مبتدئ",
        name: "نظام ري النباتات التلقائي",
        description: "حساس يقيس رطوبة التربة ويشغل مضخة الماء عند الحاجة.",
        components: ["Arduino Uno", "حساس رطوبة تربة", "ريليه", "مضخة صغيرة"],
        code: "void loop() { if(analogRead(A0) < 500) { digitalWrite(8, HIGH); } }"
    },
    {
        level: "متوسط",
        name: "قفل الباب برقم سري",
        description: "استخدام لوحة مفاتيح (Keypad) لفتح قفل إلكتروني.",
        components: ["Arduino Nano", "Keypad", "Servo Motor", "شاشة LCD"],
        code: "if (enteredCode == secretCode) { myServo.write(90); }"
    },
    {
        level: "متقدم",
        name: "روبوت التحكم عبر الواي فاي",
        description: "تحكم في حركة الروبوت من خلال تطبيق هاتف باستخدام ESP8266.",
        components: ["Arduino Uno", "ESP8266 Module", "L298N Motor Driver", "محركات DC"],
        code: "WiFiServer server(80); // إعداد خادم للتحكم"
    }
];

function generateIdea() {
    const selectedLevel = document.getElementById('level').value;
    const resultDiv = document.getElementById('result');
    
    const filteredProjects = projects.filter(p => p.level === selectedLevel);
    const randomProject = filteredProjects[Math.floor(Math.random() * filteredProjects.length)];

    if (randomProject) {
        resultDiv.innerHTML = `
            <h3>${randomProject.name}</h3>
            <p>${randomProject.description}</p>
            <p><strong>القطع المطلوبة:</strong> ${randomProject.components.join(' - ')}</p>
            <pre dir="ltr"><code>${randomProject.code}</code></pre>
        `;
        resultDiv.classList.remove('hidden');
    }
}

function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const idea = document.getElementById('idea').value;

    if (username.length < 3) {
        alert("يرجى إدخال اسم صحيح (أكثر من 3 أحرف)");
        return false;
    }

    if (!email.includes('@') || !email.includes('.')) {
        alert("يرجى إدخال بريد إلكتروني صحيح");
        return false;
    }

    if (idea.trim() === "") {
        alert("يرجى كتابة تفاصيل الفكرة");
        return false;
    }

    return true;
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const btn = document.getElementById('themeToggle');
    if (document.body.classList.contains('dark-mode')) {
        btn.innerText = "☀️ Light Mode";
    } else {
        btn.innerText = "🌙 Dark Mode";
    }
}