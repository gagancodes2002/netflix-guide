
document.getElementsByClassName("Button")[0].style.backgroundColor="#424242"
document.getElementsByClassName("Button")[1].style.backgroundColor="#141414"

document.getElementsByClassName("Button")[0].addEventListener("click", function(){ 
    
    var listOfButtons = document.getElementsByClassName("Button");
    for(var i = 0;i<listOfButtons.length;i++)
    {
        listOfButtons[i].style.backgroundColor = "#141414"
    }
    var listOftabs = document.getElementsByClassName("TabView")
    for(var i =0;i<listOftabs.length;i++)
    {
        listOftabs[i].style.display = "none";
    }
    document.getElementsByClassName("TabView")[0].style.display = "block";
    document.getElementsByClassName("Button")[0].style.backgroundColor = "#424242"
    

 });
 
document.getElementsByClassName("Button")[1].addEventListener("click", function(){ 
    var listOfButtons = document.getElementsByClassName("Button");
    for(var i = 0;i<listOfButtons.length;i++)
    {
        listOfButtons[i].style.backgroundColor = "#141414"
    }
    var listOftabs = document.getElementsByClassName("TabView")
    for(var i =0;i<listOftabs.length;i++)
    {
        listOftabs[i].style.display = "none";
    }
    document.getElementsByClassName("TabView")[1].style.display = "block";
    document.getElementsByClassName("Button")[1].style.backgroundColor = "#424242"
        
});
 
 
chrome.storage.sync.get(['True'], function(data) {
    console.log("these will get selected"+data.True);
   data.True.forEach(function(entry)
   {
       document.getElementsByTagName("input").namedItem(entry).checked = true;
       
   });
 

 });


let checkboxes = $("input[type=checkbox]");
let enabledSettings = [];
checkboxes.change(function () {
    enabledSettings = checkboxes
        .filter(":checked") // Filter out unchecked boxes.
        .map(function () { // Extract values using jQuery map.
            return this.name;
        })
        .get() // Get array.
    
        UpdateSettings(enabledSettings);

    console.log(enabledSettings);

});


function UpdateSettings(Config) {
    chrome.storage.sync.set({'True': Config}, function() {
        // Notify that we saved.
        console.log("saved ");
      });
     


}
