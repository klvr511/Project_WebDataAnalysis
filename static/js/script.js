const projects = [
    { level: "مبتدئ", name: "إشارة مرور بسيطة", description: "محاكاة لإشارات المرور باستخدام LEDs.", components: ["LEDs", "Resistors"], code: "// Code for traffic light" },
    { level: "مبتدئ", name: "مؤشر مستوى المياه", description: "تنبيه عند امتلاء الخزان.", components: ["Ultrasonic Sensor", "Buzzer"], code: "if(dist < 10) beep();" },
    { level: "مبتدئ", name: "منبه الضوء", description: "يصدر صوتاً عند شروق الشمس.", components: ["LDR", "Buzzer"], code: "if(light > 500) sound();" },
    { level: "مبتدئ", name: "عداد الضغطات", description: "يحسب عدد مرات الضغط على زر.", components: ["Push Button", "Serial Monitor"], code: "count++;" },
    { level: "مبتدئ", name: "تنبيه رطوبة التربة", description: "يخبرك متى تسقي نبتتك.", components: ["Soil Sensor", "LED"], code: "if(dry) lightOn();" },
    { level: "مبتدئ", name: "مروحة تعمل بالحرارة", description: "تشتغل المروحة إذا زادت الحرارة.", components: ["LM35", "DC Motor"], code: "if(temp > 30) fanOn();" },
    { level: "مبتدئ", name: "جهاز التحكم بالسطوع", description: "تغيير قوة الإضاءة بمقاومة متغيرة.", components: ["Potentiometer", "LED"], code: "analogWrite(led, val);" },
    { level: "مبتدئ", name: "ميزان حرارة بسيط", description: "عرض درجة الحرارة على الحاسب.", components: ["DHT11", "USB Cable"], code: "Serial.print(temp);" },
    { level: "مبتدئ", name: "كاشف المسافة", description: "يضيء LED إذا اقترب جسم ما.", components: ["Ultrasonic", "LED"], code: "if(dist < 20) on();" },
    { level: "مبتدئ", name: "زر الطوارئ", description: "إرسال إشارة استغاثة ضوئية.", components: ["Button", "LED"], code: "sos_blink();" },
    { level: "مبتدئ", name: "لعبة رد الفعل", description: "قياس سرعة ضغطك على الزر.", components: ["Button", "LCD"], code: "measure_time();" },
    { level: "مبتدئ", name: "مصباح الخزانة", description: "يضيء عند فتح الباب.", components: ["Magnetic Switch", "LED"], code: "if(open) on();" },
    { level: "مبتدئ", name: "بيانو إلكتروني", description: "أزرار تصدر نغمات موسيقية.", components: ["Buttons", "Speaker"], code: "tone(pin, freq);" },
    { level: "مبتدئ", name: "عداد خطوات بسيط", description: "يحسب الحركات الاهتزازية.", components: ["Tilt Switch", "Arduino"], code: "steps++;" },
    { level: "مبتدئ", name: "مؤشر شحن البطارية", description: "يعرض مستوى البطارية بـ LEDs.", components: ["Resistors", "LEDs"], code: "showLevel();" },

    { level: "متوسط", name: "قفل باب برقم سري", description: "فتح القفل عبر لوحة مفاتيح.", components: ["Keypad", "Servo"], code: "checkPass();" },
    { level: "متوسط", name: "محطة أرصاد مصغرة", description: "عرض الحرارة والرطوبة والضغط.", components: ["DHT22", "LCD 16x2"], code: "lcd.print(t);" },
    { level: "متوسط", name: "رادار كشف الأجسام", description: "رسم الخريطة باستخدام السونار.", components: ["Ultrasonic", "Servo"], code: "sweep();" },
    { level: "متوسط", name: "جهاز تتبع الشمس", description: "تحريك الألواح الشمسية مع الضوء.", components: ["2 LDRs", "Servo"], code: "followLight();" },
    { level: "متوسط", name: "عداد الزوار الرقمي", description: "حساب الداخلين والخارجين.", components: ["2 IR Sensors", "LCD"], code: "peopleCount++;" },
    { level: "متوسط", name: "سيارة يتم التحكم بها بـ BT", description: "تحكم عبر تطبيق الهاتف.", components: ["HC-05", "L298N Motor Driver"], code: "readBT();" },
    { level: "متوسط", name: "نظام الري الذكي", description: "سقي آلي بناءً على الرطوبة والوقت.", components: ["Soil Sensor", "Relay", "Pump"], code: "waterPlant();" },
    { level: "متوسط", name: "ساعة رقمية مع منبه", description: "عرض الوقت والتاريخ بدقة.", components: ["RTC Module", "LCD"], code: "displayTime();" },
    { level: "متوسط", name: "ميزان مطبخ رقمي", description: "قياس الأوزان الخفيفة بدقة.", components: ["Load Cell", "HX711"], code: "getWeight();" },
    { level: "متوسط", name: "جهاز مراقبة جودة الهواء", description: "كشف الغازات والدخان.", components: ["MQ-135", "Buzzer"], code: "checkAir();" },
    { level: "متوسط", name: "تحكم بالإضاءة عبر الصوت", description: "تشغيل النور بالتصفيق.", components: ["Sound Sensor", "Relay"], code: "if(clap) toggle();" },
    { level: "متوسط", name: "ذراع روبوتية بسيطة", description: "تحكم بـ 3 محركات سيرفو.", components: ["3 Servos", "Joysticks"], code: "moveArm();" },
    { level: "متوسط", name: "مشغل موسيقى MP3", description: "قراءة ملفات صوتية من SD Card.", components: ["DFPlayer Mini", "SD Card"], code: "playMusic();" },
    { level: "متوسط", name: "نظام ركن السيارة", description: "تنبيه المسافة الخلفية.", components: ["Ultrasonic", "Buzzer", "LEDs"], code: "alertDist();" },
    { level: "متوسط", name: "جهاز إرسال مورس", description: "تحويل النص إلى شفرة مورس ضوئية.", components: ["LED", "Arduino"], code: "blinkMorse();" },

    { level: "متقدم", name: "منزل ذكي عبر الواي فاي", description: "تحكم بالأجهزة عبر الإنترنت.", components: ["ESP8266", "Relays", "Web Server"], code: "handleRoot();" },
    { level: "متقدم", name: "روبوت تتبع المسار", description: "يسير فوق خط أسود بدقة عالية.", components: ["IR Array", "PID Controller"], code: "calcPID();" },
    { level: "متقدم", name: "جهاز حضور وانصراف RFID", description: "تسجيل الموظفين ببطاقات ممغنطة.", components: ["RFID RC522", "SD Card"], code: "logID();" },
    { level: "متقدم", name: "طائرة درون صغيرة", description: "التحكم بالتوازن والمحركات.", components: ["MPU6050", "Brushless Motors"], code: "stabilize();" },
    { level: "متقدم", name: "نظام التعرف على البصمة", description: "فتح الصناديق بالبصمة.", components: ["Fingerprint Sensor", "Solenoid"], code: "scanFinger();" },
    { level: "متقدم", name: "روبوت تجنب العوائق", description: "ذكاء اصطناعي بسيط لتجاوز الحواجز.", components: ["Ultrasonic", "Servo", "Chassis"], code: "findPath();" },
    { level: "متقدم", name: "جهاز رسم رقمي (CNC)", description: "يرسم الصور باستخدام الأقلام.", components: ["Stepper Motors", "GRBL"], code: "processGcode();" },
    { level: "متقدم", name: "نظام زراعة مائية ذكي", description: "مراقبة الـ pH والمغذيات.", components: ["pH Sensor", "Water Pump", "IoT Cloud"], code: "syncCloud();" },
    { level: "متقدم", name: "لوحة مفاتيح مخصصة (Macro)", description: "اختصارات للكمبيوتر عبر USB.", components: ["Arduino Pro Micro", "Mechanical Switches"], code: "Keyboard.press();" },
    { level: "متقدم", name: "نظام كشف الزلازل", description: "إرسال رسالة تنبيه عند الاهتزاز.", components: ["Accelerometer", "GSM Module"], code: "sendSMS();" },
    { level: "متقدم", name: "روبوت توازن ذاتي", description: "روبوت يقف على عجلتين فقط.", components: ["Gyroscope", "Stepper Motors"], code: "balance();" },
    { level: "متقدم", name: "جهاز تتبع المواقع GPS", description: "إرسال الموقع للخريطة.", components: ["Neo-6M GPS", "GPRS Module"], code: "getCoords();" },
    { level: "متقدم", name: "نظام مراقبة بالتحليل البصري", description: "ربط الأردوينو بكاميرا تتبع.", components: ["Pixy Camera", "Arduino"], code: "trackObject();" },
    { level: "متقدم", name: "شاحن بطاريات ذكي", description: "شحن وفصل تلقائي مع شاشة.", components: ["Voltage Sensor", "Relay"], code: "stopCharge();" },
    { level: "متقدم", name: "روبوت العنكبوت (Hexapod)", description: "تحكم بـ 12 محرك سيرفو للمشي.", components: ["12 Servos", "PCA9685 Driver"], code: "walkCycle();" }
];

function generateIdea() {
    const selectedLevel = document.getElementById('level').value;
    const resultDiv = document.getElementById('result');
    
    const filteredProjects = projects.filter(p => p.level === selectedLevel);
    const randomProject = filteredProjects[Math.floor(Math.random() * filteredProjects.length)];

    if (randomProject) {
        resultDiv.innerHTML = `
            <div class="card-content">
                <h3>${randomProject.name}</h3>
                <p><strong>الوصف:</strong> ${randomProject.description}</p>
                <p><strong>القطع الأساسية:</strong> ${randomProject.components.join(' - ')}</p>
                <div class="code-box">
                    <small>مثال برمجي مبسط:</small>
                    <pre dir="ltr"><code>${randomProject.code}</code></pre>
                </div>
            </div>
        `;
        resultDiv.style.display = "block";
        

    }
}

function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    if (username.length < 3) {
        alert("يرجى إدخال اسم صحيح");
        return false;
    }
    if (!email.includes('@')) {
        alert("يرجى إدخال بريد إلكتروني صحيح");
        return false;
    }
    return true;
}
