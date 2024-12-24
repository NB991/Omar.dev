const form = document.getElementById('contact-me');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.textContent = 'جارِ الإرسال...'; 
    submitBtn.disabled = true; 

    try {
        const formData = new FormData(form);
        const response = await fetch('https://getform.io/f/alllvvya', { 
            method: 'POST',
            body: formData,
        });

        if (response.ok) { 
            alert('لقد استقبل عمر رسالتك، سيقوم بالتواصل معك عن طريق الواتساب قريبا');
            form.reset(); 
        } else {
            alert('فشل إرسال الرسالة، حاول مجددًا.');
        }
    } catch (error) {
        alert('حدث خطأ أثناء الإرسال.'); 
    } finally {
        submitBtn.textContent = 'إرسال'; 
        submitBtn.disabled = false;
    }
});
