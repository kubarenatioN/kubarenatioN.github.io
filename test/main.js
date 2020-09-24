console.log('qweqwe')

function loadData(){
  let xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      document.getElementsByClassName('container')[0].innerHTML = this.responseText
    }
  }
  xhttp.open('GET', 'data.xml', true)
  xhttp.send()
}

//Валентина Владимировна