/* document.getElementById('contactForm').addEventListener('submit', function(event) {
	event.preventDefault(); // Предотвращаем отправку формы

	const formData = new FormData(this);

	fetch('send_mail.php', {
		 method: 'POST',
		 body: formData
	})
	.then(response => response.json())
	.then(data => {
		 if (data.status === 'success') {
			  alert('Message has been sent successfully!');
		 } else {
			  alert('Error: ' + data.message);
		 }
	})
	.catch(error => {
		 console.error('Error:', error);
		 alert('An error occurred while sending the message.');
	});
}); */