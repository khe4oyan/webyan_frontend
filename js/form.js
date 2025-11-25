{
  const form = document.querySelector('.feedBack .form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // отменяем стандартную отправку (без перезагрузки)

    const formData = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('https://carparts-t0mi.onrender.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const responseEl = document.querySelector('.response');
      console.log(res);

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
