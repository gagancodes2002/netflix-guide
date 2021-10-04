class Queue {
  // Array is used to implement a Queue
  constructor() {
    this.CatHead = [];
    this.CatCont = [];
  }
  enqueue(element, element2) {
    // adding element to the queue
    this.CatHead.push(element);
    this.CatCont.push(element2);
  }
  dequeue() {
    // removing element from the queue
    // returns underflow when called 
    // on empty queue
    if (this.isEmpty())
      return "Underflow";
    return this.CatHead.shift();
  }
  front() {
    // returns the Front element of 
    // the queue without removing it.
    if (this.isEmpty())
      return "No elements in Queue";
    return this.CatHead[0];
  }
  end() {
    if (this.isEmpty())
      return "No elements in Queue";
    return this.CatHead[this.CatHead.length - 1]
  }
  // Functions to be implemented
  // enqueue(item)
  // dequeue()
  // front()
  // isEmpty()
  // printQueue()
  isEmpty() {
    // return true if the queue is empty.
    return this.CatHead.length == 0;
  }
  printQueue() {
    var str = "";
    for (var i = 0; i < this.CatHead.length; i++)
      str += this.CatHead[i] + " " + this.CatCont[i] + " ";
    return str;
  }
}



function TrimThisLine(str) {
  newStr = str.replace("Edit", " ");
  newStr = newStr.trim("");
  return newStr
}




chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {

    // console.log(sender.tab ?
    //             "from a content script:" + sender.tab.url :
    //             "from the extension");
    if (request.todo == "TitleName") {
      (async () => {
        var OMDBresponse = await fetch('http://www.omdbapi.com/?t=' + request.data + '&apikey=46926f92')
        var ApiJson = await OMDBresponse.json()
        //window.alert(ApiJson['Ratings'][0]["Source"]);
        if (ApiJson['Response'] == "True") {
          sendResponse({ todo: "TitleName", data: ApiJson['Ratings'] })
        }
        else {
          sendResponse({ todo: "TitleNameNotFound" })
        }

      })();







    }
    if (request.todo == "Advisories") {
      (async () => {
        var CategoryData = new Queue
        var OMDBresponse = await fetch('http://www.omdbapi.com/?t=' + request.data + '&apikey=46926f92')
        var ApiJson = await OMDBresponse.json()
        if (ApiJson['Response'] == "True") {
          let IMDBResponse = await fetch('https://www.imdb.com/title/' + ApiJson['imdbID'] + '/parentalguide?ref_=tt_stry_pg')
          // // Initialize the DOM parser
          var parser = new DOMParser();
          // Parse the text
          var doc = parser.parseFromString(await IMDBResponse.text(), "text/html");
          var Sex_Nudity = doc.getElementById("advisory-nudity")
          var Violence_Gore = doc.getElementById("advisory-violence")
          var Profanity = doc.getElementById("advisory-profanity")
          var Alcohol_Drugs_Smoking = doc.getElementById("advisory-alcohol")
          var Frightening_Intense_Scenes = doc.getElementById("advisory-frightening")
          //window.alert(doc.getElementById("advisory-nudity").querySelector("h4").innerText)
          var CatDiv = []
  
          CatDiv.push(Sex_Nudity)
          CatDiv.push(Violence_Gore)
          CatDiv.push(Profanity)
          CatDiv.push(Alcohol_Drugs_Smoking)
          CatDiv.push(Frightening_Intense_Scenes)
  
          //window.alert("CatDiv : "+CatDiv+"Cat Div Length : "+ CatDiv.length)
          for (var i = 0; i < CatDiv.length; i++) {
            var Heading = CatDiv[i].querySelector("h4").innerText
            var CatContent = [];
            for (var j = 0; j < CatDiv[i].querySelectorAll("li.ipl-zebra-list__item").length; j++) {
              CatContent.push(TrimThisLine(CatDiv[i].querySelectorAll("li.ipl-zebra-list__item")[j].innerText.toString()));
  
            }
            CategoryData.enqueue(Heading, CatContent);
  
          }
          //window.alert("Cat head : "+CategoryData.CatHead)
          sendResponse({ todo: "SetDivsForAdvisory", data: { CatPContent: CategoryData, Ratings2Send: ApiJson['Ratings'] } })
        }
        else {
          sendResponse({ todo: "AdvisoriesNotFound" })
        }
        
      })();

    }
    return true;
  });