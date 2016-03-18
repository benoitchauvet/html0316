var req = new XMLHttpRequest();

req.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=Velizy,france&appid=b1b15e88fa797225412429c1c50c122a', true);

req.onreadystatechange = function()
{
  if (req.readyState == 4)
    {
      if (req.status == 200)
        {
          var obj = JSON.parse(req.responseText);
          console.log(obj);
        }
      if (req.status == 404)
        {
          console.error("PAGE NON TROUVEE...");
        }
    }
};

req.send();