{
  const form = document.querySelector('.feedBack .form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // отменяем стандартную отправку (без перезагрузки)

    const formData = new FormData(form);

    try {
      const res = await fetch('/send-message', { // адрес обработчика
        method: 'POST',
        body: formData
      });

      const responseEl = document.querySelector('.response');

      if (res.ok) {
        responseEl.textContent = '✅ Thanks for message!';
        form.reset();
      } else {
        responseEl.textContent = '❌ Server is not working';
      }
    } catch (err) {
      responseEl.textContent = '⚠️ Server not response';
    }
  });
}
