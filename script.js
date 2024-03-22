document.getElementById('contactForm').addEventListener('submit', function(event) {

  event.preventDefault();

  const formData = {
      names: [
          document.getElementById('name1').value,

          document.getElementById('name2').value,

          document.getElementById('name3').value,

          document.getElementById('name4').value,

          document.getElementById('name5').value

      ],

      message: document.getElementById('message').value
  };



 

  const url = "https://fsdt-contact-acf4ab9867a7.herokuapp.com/contact";

  const requestConfig = {

    method: 'POST',

    headers: {

        'Content-Type': 'application/json'

    },

    body: JSON.stringify(formData)

};





fetch(url, requestConfig)

    .then(response => response.json())

    .then(data => console.log('Resposta da API:', data))

    .catch(error => console.error('Erro ao enviar POST:', error));

});
