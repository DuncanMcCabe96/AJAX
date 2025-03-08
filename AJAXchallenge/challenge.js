function loadContent() {
  const xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
          document.getElementById('contentArea').innerHTML = this.responseText;
      }
  };

  xhr.open('GET', 'content.html', true);
  xhr.send();
}