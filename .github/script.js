//indexof 
{
    var meinArray = ["Frühling", "Sommer", "Herbst", "Winter"];
    var gesuchtesElement = "Herbst";
    var index = meinArray.indexOf(gesuchtesElement);

  
  if (index !== -1) {
    console.log(gesuchtesElement + " wurde im Array gefunden. Index: " + index);
  } else {
    console.log(gesuchtesElement + " wurde nicht im Array gefunden.");
  }
}

//push/unshift arr.push
{
    var meinArray = [1, 2, 3, 4, 5];
    meinArray.push(6);
    meinArray.unshift(0);
    console.log("Aktualisiertes Array:", meinArray);

}

//pop/shift
{
    var meinArray = [1, 2, 3, 4, 5];
    var entferntesElementPop = meinArray.pop();
    var entferntesElementShift = meinArray.shift();

  console.log("Entferntes Element mit pop:", entferntesElementPop);
  console.log("Entferntes Element mit shift:", entferntesElementShift);
  console.log("Aktualisiertes Array:", meinArray);
}