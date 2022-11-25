window.changeColour = function(value)
{
    var color = document.body.style.backgroundColor;

    switch(value)
    {
        case 'white':
            color = "#F0F8FF";
         
        break;
        case 'blue':
            color = "#6fa8dc";
            

        break;
        case 'pink':
            color = "#F2607B";
           
        break;
        case 'green':
            color = "#8fce00";
           
        break;
        case 'black':
            color = "#000000";  

        break;
    }
    document.body.style.backgroundColor = color;
    
}
 
 function loadMovie() {
    var name = document.getElementById('movie_name').value;
    document.getElementById('demo').innerHTML = '';
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200) 
      {
        var response = JSON.parse(this.responseText);
        for(var i = 0; i < response.length; i++)
        {
          let r = response[i].show.image.medium;
          document.getElementById('demo').innerHTML = document.getElementById('demo').innerHTML + `<img src ='${r}' />`;
        }
      }
    };
    xhttp.open("GET", `https://api.tvmaze.com/search/shows?q=${name}`, true);
    xhttp.send();
  }

 