window.onload = () => {
  
  function showAndHidePassword() {
    const icon = document.querySelectorAll('.icon');
    icon.forEach(i => {
      i.addEventListener('click', function(event) {
        const input = event.target.parentElement.previousElementSibling;
        
        if (event.target.id == 'eye') {
          input.setAttribute('type', 'text')
          event.target.nextElementSibling.style.display = 'block';
        } else {
          input.setAttribute('type', 'password')
          event.target.previousElementSibling.style.display = 'block';
        }
        
        event.target.style.display = 'none';
      });
    });
  }
  
  showAndHidePassword();
  
}