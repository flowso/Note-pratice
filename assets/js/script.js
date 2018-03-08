console.log("hahah");

function setLocal(localNotes)
{
  var jsonData = JSON.stringify(localNotes);

  localStorage.setItem("notes", jsonData);
}

function getLocal()
{
  var notes = localStorage.getItem("notes");

  if (notes == null)
    {
      return [];
    }
    else
    {
      return JSON.parse(notes);
    }
}

function submitNote()
{
  var origNotes = getLocal();

  var newNote = {
    text:       "Hey",
    dueDate:    "2018-03-08 13:00:00",
    important:  true
  };

  origNotes.push(newNote);

  setLocal(origNotes);
}

function buildList()
{
  var noteList = getLocal();
  var ulElm = document.querySelector("ul");

  for(var i = 0; i < noteList.length; i++)
  {

    //blockscope kodeblog med en ekstra indention
    var liElm = document.createElement("li");
    var pElm = document.createElement("p");

    pElm.innerHTML = "HI";

    liElm.appendChild(pElm);

    ulElm.appendChild(liElm);
  }

  console.log(ulElm);

}

window.onload = function()
{
  buildList();

}
