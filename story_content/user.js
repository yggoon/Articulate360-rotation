function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6H8wqJqWlL1":
        Script1();
        break;
      case "5Uyf9T443DW":
        Script2();
        break;
      case "6nwWBwcmzSB":
        Script3();
        break;
      case "5W0R484rs11":
        Script4();
        break;
      case "6MireQSdKhP":
        Script5();
        break;
      case "5lDaAiMvu3A":
        Script6();
        break;
      case "5fnJSraCX0X":
        Script7();
        break;
      case "5qfIWal2vSv":
        Script8();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var player = GetPlayer();
var aktualny_kat = player.GetVar("aktualny_kat2");
aktualny_kat=aktualny_kat-90;
player.SetVar("aktualny_kat2",  aktualny_kat);

function rotateElement(element, targetAngle) {
  // Pobieramy aktualny obrót elementu
  var currentRotation = getComputedStyle(element).transform;
  
  
  // Jeśli element nie był wcześniej obracany, zastosujmy domyślną wartość 0
  currentRotation = currentRotation.includes('none') ? 'rotateY(0deg)' : currentRotation;
  element.style.transform = `${currentRotation} rotateY(${targetAngle}deg)`;

}

// Pobieramy referencję do elementu cardBack4
var cardBack4 = document.querySelector('[data-acc-text="cardonefront"]');

// Wywołujemy funkcję rotateElement z żądanym kątem (np. 90 stopni)
rotateElement(cardBack4, -90);
var currentAngle = parseInt(cardBack4.dataset.currentAngle);
console.log("Obecny kąt obrotu:", currentAngle);
}

window.Script2 = function()
{
  // Funkcja do obracania obiektu o określony kąt
function rotateElement(element, targetAngle) {
  // Pobieramy aktualny obrót elementu
  var currentRotation = getComputedStyle(element).transform;
  
  // Jeśli element nie był wcześniej obracany, zastosujmy domyślną wartość 0
  currentRotation = currentRotation.includes('none') ? 'rotateY(0deg)' : currentRotation;
  
  // Tworzymy animację za pomocą metody animate()
  var animation = element.animate(
    // Przekazujemy tablicę keyframes z dwoma klatkami: początkową i końcową
    [
      // Klatka początkowa
      { transform: `${currentRotation} rotateY(0deg)` },
  
      // Klatka końcowa
      { transform: `${currentRotation} rotateY(${targetAngle}deg)` }
    ],
  
    // Przekazujemy obiekt z opcjami animacji, takimi jak czas trwania i funkcja łagodzenia
    {
      duration: 1000, // czas trwania animacji w milisekundach (1 sekunda = 1000 milisekund)
      easing: 'ease-in-out' // funkcja łagodzenia
    }
  );
  
  // Po zakończeniu animacji, ustalamy transformację na końcową wartość
  animation.onfinish = function() {
    element.style.transform = `${currentRotation} rotateY(${targetAngle}deg)`;
  };
}

// Pobieramy referencję do elementu cardBack4
var cardBack4 = document.querySelector('[data-acc-text="cardonefront"]');

// Wywołujemy funkcję rotateElement z żądanym kątem (np. 90 stopni)
rotateElement(cardBack4, 90);

var player = GetPlayer();
let aktualny_kat = player.GetVar("aktualny_kat2");
aktualny_kat=aktualny_kat+90;
player.SetVar("aktualny_kat2",  aktualny_kat);
}

window.Script3 = function()
{
  var player = GetPlayer();
var aktualny_kat = player.GetVar("aktualny_kat2");
aktualny_kat=aktualny_kat-180;
player.SetVar("aktualny_kat2",  aktualny_kat);

function rotateElement(element, targetAngle) {
  // Pobieramy aktualny obrót elementu
  var currentRotation = getComputedStyle(element).transform;
  
  
  // Jeśli element nie był wcześniej obracany, zastosujmy domyślną wartość 0
  currentRotation = currentRotation.includes('none') ? 'rotateY(0deg)' : currentRotation;
  element.style.transform = `${currentRotation} rotateY(${targetAngle}deg)`;

}

// Pobieramy referencję do elementu cardBack4
var cardBack4 = document.querySelector('[data-acc-text="cardonefront"]');

// Wywołujemy funkcję rotateElement z żądanym kątem (np. 90 stopni)
rotateElement(cardBack4, -180);
var currentAngle = parseInt(cardBack4.dataset.currentAngle);
console.log("Obecny kąt obrotu:", currentAngle);
}

window.Script4 = function()
{
  // Funkcja do obracania obiektu o określony kąt
function rotateElement(element, targetAngle) {
  // Pobieramy aktualny obrót elementu
  var currentRotation = getComputedStyle(element).transform;
  
  // Jeśli element nie był wcześniej obracany, zastosujmy domyślną wartość 0
  currentRotation = currentRotation.includes('none') ? 'rotateY(0deg)' : currentRotation;
  
  // Tworzymy animację za pomocą metody animate()
  var animation = element.animate(
    // Przekazujemy tablicę keyframes z dwoma klatkami: początkową i końcową
    [
      // Klatka początkowa
      { transform: `${currentRotation} rotateY(0deg)` },
  
      // Klatka końcowa
      { transform: `${currentRotation} rotateY(${targetAngle}deg)` }
    ],
  
    // Przekazujemy obiekt z opcjami animacji, takimi jak czas trwania i funkcja łagodzenia
    {
      duration: 1000, // czas trwania animacji w milisekundach (1 sekunda = 1000 milisekund)
      easing: 'ease-in-out' // funkcja łagodzenia
    }
  );
  
  // Po zakończeniu animacji, ustalamy transformację na końcową wartość
  animation.onfinish = function() {
    element.style.transform = `${currentRotation} rotateY(${targetAngle}deg)`;
  };
}

// Pobieramy referencję do elementu cardBack4
var cardBack4 = document.querySelector('[data-acc-text="cardonefront"]');

// Wywołujemy funkcję rotateElement z żądanym kątem (np. 90 stopni)
rotateElement(cardBack4, 90);

var player = GetPlayer();
var aktualny_kat = player.GetVar("aktualny_kat2");
aktualny_kat=aktualny_kat+90;
player.SetVar("aktualny_kat2",  aktualny_kat);
}

window.Script5 = function()
{
  var player = GetPlayer();
var aktualny_kat = player.GetVar("aktualny_kat");
aktualny_kat=aktualny_kat-90;
player.SetVar("aktualny_kat",  aktualny_kat);

function rotateElement(element, targetAngle) {
  // Pobieramy aktualny obrót elementu
  var currentRotation = getComputedStyle(element).transform;
  
  
  // Jeśli element nie był wcześniej obracany, zastosujmy domyślną wartość 0
  currentRotation = currentRotation.includes('none') ? 'rotateY(0deg)' : currentRotation;
  element.style.transform = `${currentRotation} rotateY(${targetAngle}deg)`;

}

// Pobieramy referencję do elementu cardBack4
var cardBack4 = document.querySelector('[data-acc-text="cardoneback"]');

// Wywołujemy funkcję rotateElement z żądanym kątem (np. 90 stopni)
rotateElement(cardBack4, -90);
var currentAngle = parseInt(cardBack4.dataset.currentAngle);
console.log("Obecny kąt obrotu:", currentAngle);
}

window.Script6 = function()
{
  // Funkcja do obracania obiektu o określony kąt
function rotateElement(element, targetAngle) {
  // Pobieramy aktualny obrót elementu
  var currentRotation = getComputedStyle(element).transform;
  
  // Jeśli element nie był wcześniej obracany, zastosujmy domyślną wartość 0
  currentRotation = currentRotation.includes('none') ? 'rotateY(0deg)' : currentRotation;
  
  // Tworzymy animację za pomocą metody animate()
  var animation = element.animate(
    // Przekazujemy tablicę keyframes z dwoma klatkami: początkową i końcową
    [
      // Klatka początkowa
      { transform: `${currentRotation} rotateY(0deg)` },
  
      // Klatka końcowa
      { transform: `${currentRotation} rotateY(${targetAngle}deg)` }
    ],
  
    // Przekazujemy obiekt z opcjami animacji, takimi jak czas trwania i funkcja łagodzenia
    {
      duration: 1000, // czas trwania animacji w milisekundach (1 sekunda = 1000 milisekund)
      easing: 'ease-in-out' // funkcja łagodzenia
    }
  );
  
  // Po zakończeniu animacji, ustalamy transformację na końcową wartość
  animation.onfinish = function() {
    element.style.transform = `${currentRotation} rotateY(${targetAngle}deg)`;
  };
}

// Pobieramy referencję do elementu cardBack4
var cardBack4 = document.querySelector('[data-acc-text="cardoneback"]');

// Wywołujemy funkcję rotateElement z żądanym kątem (np. 90 stopni)
rotateElement(cardBack4, 90);

var player = GetPlayer();
var aktualny_kat = player.GetVar("aktualny_kat");
aktualny_kat=aktualny_kat+90;
player.SetVar("aktualny_kat",  aktualny_kat);
}

window.Script7 = function()
{
  var player = GetPlayer();
var aktualny_kat = player.GetVar("aktualny_kat");
aktualny_kat=aktualny_kat-180;
player.SetVar("aktualny_kat",  aktualny_kat);

function rotateElement(element, targetAngle) {
  // Pobieramy aktualny obrót elementu
  var currentRotation = getComputedStyle(element).transform;
  
  
  // Jeśli element nie był wcześniej obracany, zastosujmy domyślną wartość 0
  currentRotation = currentRotation.includes('none') ? 'rotateY(0deg)' : currentRotation;
  element.style.transform = `${currentRotation} rotateY(${targetAngle}deg)`;

}

// Pobieramy referencję do elementu cardBack4
var cardBack4 = document.querySelector('[data-acc-text="cardoneback"]');

// Wywołujemy funkcję rotateElement z żądanym kątem (np. 90 stopni)
rotateElement(cardBack4, -180);
var currentAngle = parseInt(cardBack4.dataset.currentAngle);
console.log("Obecny kąt obrotu:", currentAngle);
}

window.Script8 = function()
{
  // Funkcja do obracania obiektu o określony kąt
function rotateElement(element, targetAngle) {
  // Pobieramy aktualny obrót elementu
  var currentRotation = getComputedStyle(element).transform;
  
  // Jeśli element nie był wcześniej obracany, zastosujmy domyślną wartość 0
  currentRotation = currentRotation.includes('none') ? 'rotateY(0deg)' : currentRotation;
  
  // Tworzymy animację za pomocą metody animate()
  var animation = element.animate(
    // Przekazujemy tablicę keyframes z dwoma klatkami: początkową i końcową
    [
      // Klatka początkowa
      { transform: `${currentRotation} rotateY(0deg)` },
  
      // Klatka końcowa
      { transform: `${currentRotation} rotateY(${targetAngle}deg)` }
    ],
  
    // Przekazujemy obiekt z opcjami animacji, takimi jak czas trwania i funkcja łagodzenia
    {
      duration: 1000, // czas trwania animacji w milisekundach (1 sekunda = 1000 milisekund)
      easing: 'ease-in-out' // funkcja łagodzenia
    }
  );
  
  // Po zakończeniu animacji, ustalamy transformację na końcową wartość
  animation.onfinish = function() {
    element.style.transform = `${currentRotation} rotateY(${targetAngle}deg)`;
  };
}

// Pobieramy referencję do elementu cardBack4
var cardBack4 = document.querySelector('[data-acc-text="cardoneback"]');

// Wywołujemy funkcję rotateElement z żądanym kątem (np. 90 stopni)
rotateElement(cardBack4, 90);

var player = GetPlayer();
var aktualny_kat = player.GetVar("aktualny_kat");
aktualny_kat=aktualny_kat+90;
player.SetVar("aktualny_kat",  aktualny_kat);
}

};
