function sendCustomMessage() {
    let parms={
        message:document.getElementById('customMessage').value
    }
  emailjs.send("service_df5jg5c", "template_ah9f9k8",parms).then(function(response) {
    alert("Message sent successfully!");
  }, function(error) {
    alert("Failed to send message: " + JSON.stringify(error));
  });
  }
  
  const acceptButton = document.getElementById('acceptButton');
  const declineButton = document.getElementById('declineButton');
  const message = document.getElementById('message');
  
  acceptButton.addEventListener('click', () => {
    message.textContent = "You've made me the happiest person alive! 💖 I promise to cherish and love you forever.";
  });
  
  declineButton.addEventListener('click', () => {
    message.textContent = "You mean everything to me. Will you be mine forever?";
    acceptButton.textContent = "I'm waiting for your answer...";
    declineButton.style.display = 'none';
  });
  