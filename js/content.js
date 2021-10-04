class Queue {
    // Array is used to implement a Queue
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        // adding element to the queue
        this.items.push(element);
    }
    dequeue() {
        // removing element from the queue
        // returns underflow when called 
        // on empty queue
        if (this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }
    front() {
        // returns the Front element of 
        // the queue without removing it.
        if (this.isEmpty())
            return "No elements in Queue";
        return this.items[0];
    }
    end() {
        if (this.isEmpty())
            return "No elements in Queue";
        return this.items[this.items.length - 1]
    }
    // Functions to be implemented
    // enqueue(item)
    // dequeue()
    // front()
    // isEmpty()
    // printQueue()
    isEmpty() {
        // return true if the queue is empty.
        return this.items.length == 0;
    }
    printQueue() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const config = {
    childList: true,
    subtree: true,
    characterData: true
};

function RemoveLoader()
{
    var Box2AddAdvis = document.getElementsByClassName("previewModal--detailsMetadata-left")[0];
    Box2AddAdvis.removeChild(document.getElementsByClassName("loader")[0]);
}


function SetDivsForAdvisory(msg)
{
      console.log("Data : "+ msg.data);
        // console.log(msg.data);
        SetRatings("videoMetadata--container", msg.data['Ratings2Send'])
        var Box2AddAdvis = document.getElementsByClassName("previewModal--detailsMetadata-left")[0];
        Box2AddAdvis.removeChild(document.getElementsByClassName("loader")[0]);
        var AdvisoriesInfo = msg.data['CatPContent'];
        // console.log(AdvisoriesInfo.Cat.length);

        var len = AdvisoriesInfo.CatHead.length;
        for (var i = 0; i < len; i++) {
            var Heading = document.createElement("button");
            Heading.innerText = AdvisoriesInfo.CatHead[i];
            Heading.className = "accordion";
            Box2AddAdvis.appendChild(Heading);
            var panel = document.createElement("div");
            panel.className = "panel";
            AdvisoriesInfo.CatCont[i].forEach(function (Line) {
                var HeadingCont = document.createElement("p");
                HeadingCont.innerText = Line;
                HeadingCont.className = "titleCard-synopsis previewModal--small-text";
                panel.appendChild(HeadingCont);

            });
            Box2AddAdvis.appendChild(panel);


        }
        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
        // AdvisoriesInfo.Cat.forEach(function(entry)
        // {
        //     console.log(entry);


        // });
    

}






const observer = new MutationObserver(subscriber);
observer.observe(document, config);


function GetRatingsBlock(Ratings) {
    var RatingDivs = []
    var RatingBox = document.createElement("div");
    Ratings.forEach(function (entry) {
        RatingBox.style.marginTop = "20px"
        RatingBox.className = ""
        if (entry["Source"] == "Internet Movie Database") {
            var IMDBDiv = document.createElement("div");
            IMDBDiv.style.display = "inline-block";
            IMDBDiv.className = "Ratings"
            IMDBDiv.id = "IMDBRatings"
            IMDBDiv.innerHTML = '<svg style="display: inline-block; " id="home_img" class="ipc-logo" xmlns="http://www.w3.org/2000/svg" width="64" height="32" viewBox="0 0 64 32" version="1.1"><g fill="#F5C518"><rect x="0" y="0" width="100%" height="100%" rx="4"></rect></g><g transform="translate(8.000000, 7.000000)" fill="#000000" fill-rule="nonzero"><polygon points="0 18 5 18 5 0 0 0"></polygon><path d="M15.6725178,0 L14.5534833,8.40846934 L13.8582008,3.83502426 C13.65661,2.37009263 13.4632474,1.09175121 13.278113,0 L7,0 L7,18 L11.2416347,18 L11.2580911,6.11380679 L13.0436094,18 L16.0633571,18 L17.7583653,5.8517865 L17.7707076,18 L22,18 L22,0 L15.6725178,0 Z"></path><path d="M24,18 L24,0 L31.8045586,0 C33.5693522,0 35,1.41994415 35,3.17660424 L35,14.8233958 C35,16.5777858 33.5716617,18 31.8045586,18 L24,18 Z M29.8322479,3.2395236 C29.6339219,3.13233348 29.2545158,3.08072342 28.7026524,3.08072342 L28.7026524,14.8914865 C29.4312846,14.8914865 29.8796736,14.7604764 30.0478195,14.4865461 C30.2159654,14.2165858 30.3021941,13.486105 30.3021941,12.2871637 L30.3021941,5.3078959 C30.3021941,4.49404499 30.272014,3.97397442 30.2159654,3.74371416 C30.1599168,3.5134539 30.0348852,3.34671372 29.8322479,3.2395236 Z"></path><path d="M44.4299079,4.50685823 L44.749518,4.50685823 C46.5447098,4.50685823 48,5.91267586 48,7.64486762 L48,14.8619906 C48,16.5950653 46.5451816,18 44.749518,18 L44.4299079,18 C43.3314617,18 42.3602746,17.4736618 41.7718697,16.6682739 L41.4838962,17.7687785 L37,17.7687785 L37,0 L41.7843263,0 L41.7843263,5.78053556 C42.4024982,5.01015739 43.3551514,4.50685823 44.4299079,4.50685823 Z M43.4055679,13.2842155 L43.4055679,9.01907814 C43.4055679,8.31433946 43.3603268,7.85185468 43.2660746,7.63896485 C43.1718224,7.42607505 42.7955881,7.2893916 42.5316822,7.2893916 C42.267776,7.2893916 41.8607934,7.40047379 41.7816216,7.58767002 L41.7816216,9.01907814 L41.7816216,13.4207851 L41.7816216,14.8074788 C41.8721037,15.0130276 42.2602358,15.1274059 42.5316822,15.1274059 C42.8031285,15.1274059 43.1982131,15.0166981 43.281155,14.8074788 C43.3640968,14.5982595 43.4055679,14.0880581 43.4055679,13.2842155 Z"></path></g></svg>   <div style=" padding-top:8px; margin-right:10px; display: block; position:relative; bottom:0.5em; left:0.3em" >' + entry["Value"] + ' </div>'
            RatingBox.appendChild(IMDBDiv);
            RatingDivs.push(IMDBDiv);
        }
        if (entry["Source"] == "Rotten Tomatoes") {
            //console.log("tamatar mila tha");
            var RTDiv = document.createElement("div");
            RTDiv.style.display = "inline-block";
            RTDiv.className = "Ratings"
            RTDiv.id = "RTRatings"
            if (parseInt(entry["Value"].replace("%", "")) >= 60) {
                RTDiv.innerHTML = '<img style="display: inline-block; position:relative; bottom:0px; " src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5LjEgKDg2MTQ0KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5JY29ucy9Ub21hdG9tZXRlciAmYW1wOyBBUy9mcmVzaDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxwb2x5Z29uIGlkPSJwYXRoLTEiIHBvaW50cz0iMC4wMDAxMDkxMDAxMDIgMC4yNDY5NzA5NTQgNzcuMDgyNzgzNyAwLjI0Njk3MDk1NCA3Ny4wODI3ODM3IDYzLjcxNDUyMjggMC4wMDAxMDkxMDAxMDIgNjMuNzE0NTIyOCI+PC9wb2x5Z29uPgogICAgPC9kZWZzPgogICAgPGcgaWQ9Ikljb25zL1RvbWF0b21ldGVyLSZhbXA7LUFTL2ZyZXNoIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR3JvdXAiPgogICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLUNvcHktMiIgZmlsbD0iIzAwMDAwMCIgb3BhY2l0eT0iMCIgeD0iMCIgeT0iMCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIj48L3JlY3Q+CiAgICAgICAgICAgIDxnIGlkPSJSVF9GcmVzaF9Ub21hdG9fUkdCLSgxKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS4zMjc4MDEsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDE2LjI2NTU2MCkiPgogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkNsaXAtMiI+PC9nPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik03Ny4wMTM3NzU5LDI3LjA0MjY1NTYgQzc2LjI0MjMyMzcsMTQuNjc0MTkwOSA2OS45NTIxOTkyLDUuNDIwNDE0OTQgNjAuNDg3NjM0OSwwLjI0Njk3MDk1NCBDNjAuNTQxNDEwOCwwLjU0ODM4MTc0MyA2MC4yNzMxOTUsMC45MjUxNDUyMjggNTkuOTY3ODAwOCwwLjc5MTcwMTI0NSBDNTMuNzc3MjYxNCwtMS45MTYzNDg1NSA0My4yNzUzNTI3LDYuODQ3ODAwODMgMzUuOTM2NTk3NSwyLjI1ODI1NzI2IEMzNS45OTE3MDEyLDMuOTA1Mzk0MTkgMzUuNjcwMDQxNSwxMS45NDAyNDkgMjQuMzUxNTM1MywxMi40MDYzMDcxIEMyNC4wODQzMTU0LDEyLjQxNzI2MTQgMjMuOTM3MjYxNCwxMi4xNDQzOTgzIDI0LjEwNjIyNDEsMTEuOTUxMjAzMyBDMjUuNjE5OTE3LDEwLjIyNDczMDMgMjcuMTQ4MjE1OCw1Ljg1MzYwOTk2IDI0Ljk1MDcwNTQsMy41MjMzMTk1IEMyMC4yNDQ2NDczLDcuNzQwNDE0OTQgMTcuNTExNzAxMiw5LjMyNzQ2ODg4IDguNDg4Mjk4NzYsNy4yMzMxOTUwMiBDMi43MTEwMzczNCwxMy4yNzQwMjQ5IC0wLjU2MjY1NTYwMiwyMS41NDE5MDg3IDAuMDgsMzEuODQxMzI3OCBDMS4zOTEyMDMzMiw1Mi44NjYzOSAyMS4wODQ4MTMzLDY0Ljg4NDY0NzMgNDAuOTE2NTE0NSw2My42NDcxMzY5IEM2MC43NDY4ODgsNjIuNDEwNjIyNCA3OC4zMjUzMTEyLDQ4LjA2NzcxNzggNzcuMDEzNzc1OSwyNy4wNDI2NTU2IiBpZD0iRmlsbC0xIiBmaWxsPSIjRkEzMjBBIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00MC44NzE3MDEyLDExLjQ2NDg5NjMgQzQ0Ljk0NjcyMiwxMC40OTM2MSA1Ni42Njc4ODM4LDExLjM3MDI5MDUgNjAuNDIzMjM2NSwxNi4zNTE4NjcyIEM2MC42NDg2MzA3LDE2LjY1MDYyMjQgNjAuMzMxMjg2MywxNy4yMTU5MzM2IDU5Ljk2NzgwMDgsMTcuMDU3MjYxNCBDNTMuNzc3MjYxNCwxNC4zNDkyMTE2IDQzLjI3NTM1MjcsMjMuMTEzMzYxIDM1LjkzNjU5NzUsMTguNTIzODE3NCBDMzUuOTkxNzAxMiwyMC4xNzA5NTQ0IDM1LjY3MDA0MTUsMjguMjA1ODA5MSAyNC4zNTE1MzUzLDI4LjY3MTg2NzIgQzI0LjA4NDMxNTQsMjguNjgyODIxNiAyMy45MzcyNjE0LDI4LjQwOTk1ODUgMjQuMTA2MjI0MSwyOC4yMTY3NjM1IEMyNS42MTk5MTcsMjYuNDkwMjkwNSAyNy4xNDc4ODM4LDIyLjExOTE3MDEgMjQuOTUwNzA1NCwxOS43ODg4Nzk3IEMxOS44MjQzOTgzLDI0LjM4MjczODYgMTcuMDQ1MzExMiwyNS44NTg5MjEyIDUuOTE5MDA0MTUsMjIuODUxNDUyMyBDNS41NTQ4NTQ3NywyMi43NTMxOTUgNS42NzkwMDQxNSwyMi4xNjc5NjY4IDYuMDY2MzkwMDQsMjIuMDIwMjQ5IEM4LjE2OTI5NDYxLDIxLjIxNjU5NzUgMTIuOTMzNDQ0LDE3LjY5NjU5NzUgMTcuNDQwNjYzOSwxNi4xNDUwNjIyIEMxOC4yOTg3NTUyLDE1Ljg0OTk1ODUgMTkuMTU0MTkwOSwxNS42MjA5MTI5IDE5Ljk4OTA0NTYsMTUuNDg3ODAwOCBDMTUuMDI2MzksMTUuMDQ0MzE1NCAxMi43ODkzNzc2LDE0LjM1NDE5MDkgOS42MzI4NjMwNywxNC44MzAyMDc1IEM5LjI4Njk3MDk1LDE0Ljg4MjMyMzcgOS4wNTE5NTAyMSwxNC40Nzk2NjggOS4yNjYzOTAwNCwxNC4yMDM0ODU1IEMxMy41MTkzMzYxLDguNzI1MzExMiAyMS4zNTQwMjQ5LDcuMDcwODcxMzcgMjYuMTg3ODgzOCw5Ljk4MTA3ODg0IEMyMy4yMDgyOTg4LDYuMjg5MTI4NjMgMjAuODc0MzU2OCwzLjM0NDczMDI5IDIwLjg3NDM1NjgsMy4zNDQ3MzAyOSBMMjYuNDA0NjQ3MywwLjIwMzQ4NTQ3NyBDMjYuNDA0NjQ3MywwLjIwMzQ4NTQ3NyAyOC42ODk0NjA2LDUuMzA4MjE1NzcgMzAuMzUxODY3Miw5LjAyMzQwMjQ5IEMzNC40NjU3MjYxLDIuOTQ1MDYyMjQgNDIuMTE5ODM0LDIuMzg0MDY2MzkgNDUuMzUzNjkyOSw2LjY5Njc2MzQ5IEM0NS41NDU1NjAyLDYuOTUzMDI5MDUgNDUuMzQ1MDYyMiw3LjMxNzUxMDM3IDQ1LjAyNDczMDMsNy4zMDk4NzU1MiBDNDIuMzkyNjk3MSw3LjI0NTgwOTEzIDQwLjk0MzQwMjUsOS42Mzk4MzQwMiA0MC44MzM1MjcsMTEuNDYwNTgwOSBMNDAuODcxNzAxMiwxMS40NjQ4OTYzIiBpZD0iRmlsbC00IiBmaWxsPSIjMDA5MTJEIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" alt="star" width="35" height="35"> <div style=" padding-top:5px; margin-right:10px; display: block; position:relative; bottom:0.5em; left:0.3em" >' + entry["Value"] + ' </div>'
            }
            else {
                RTDiv.innerHTML = '<img style="display: inline-block; position:relative; bottom:0px; " src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5LjEgKDg2MTQ0KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5JY29ucy9Ub21hdG9tZXRlciAmYW1wOyBBUy9yb3R0ZW48L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cG9seWdvbiBpZD0icGF0aC0xIiBwb2ludHM9IjAgMC4xNjE5NTA0NjUgNzkuNzQxNzA3NSAwLjE2MTk1MDQ2NSA3OS43NDE3MDc1IDc3LjUyMjgwNyAwIDc3LjUyMjgwNyI+PC9wb2x5Z29uPgogICAgPC9kZWZzPgogICAgPGcgaWQ9Ikljb25zL1RvbWF0b21ldGVyLSZhbXA7LUFTL3JvdHRlbiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ikdyb3VwLTUiPgogICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLUNvcHkiIGZpbGw9IiMwMDAwMDAiIG9wYWNpdHk9IjAiIHg9IjAiIHk9IjAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCI+PC9yZWN0PgogICAgICAgICAgICA8ZyBpZD0iUlRfUm90dGVuX1NwbGF0X1JHQi0oMSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAxLjIyODA3MCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTMiPgogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkNsaXAtMiI+PC9nPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik03MS40NjM4NTk2LDcwLjIyNTYxNCBDNTYuMzQ1OTY0OSw3MS4wMTkyOTgyIDUzLjI1Njg0MjEsNTMuNzIwMzUwOSA0Ny4zMjU2MTQsNTMuODQzNTA4OCBDNDQuNzk4MjQ1Niw1My44OTY0OTEyIDQyLjgwNjMxNTgsNTYuNTM4OTQ3NCA0My42ODEwNTI2LDU5LjYxODU5NjUgQzQ0LjE2MjEwNTMsNjEuMzExNTc4OSA0NS40OTY0OTEyLDYzLjc5NDM4NiA0Ni4zMzcxOTMsNjUuMzM1MDg3NyBDNDkuMzAyODA3LDcwLjc3MTkyOTggNDQuOTE4NTk2NSw3Ni45MjQ1NjE0IDM5Ljc4ODA3MDIsNzcuNDQ0OTEyMyBDMzEuMjYyMTA1Myw3OC4zMDk4MjQ2IDI3LjcwNTYxNCw3My4zNjM4NTk2IDI3LjkyNTYxNCw2OC4zMDA3MDE4IEMyOC4xNzI5ODI1LDYyLjYxNjg0MjEgMzIuOTkyMjgwNyw1Ni44MDkxMjI4IDI4LjA0OTQ3MzcsNTQuMzM3ODk0NyBDMjIuODY5NDczNyw1MS43NDgwNzAyIDE4LjY1ODU5NjUsNjEuODc1NDM4NiAxMy43MDE3NTQ0LDY0LjEzNTc4OTUgQzkuMjE1NDM4Niw2Ni4xODE3NTQ0IDIuOTg3NzE5Myw2NC41OTU0Mzg2IDAuNzczNjg0MjExLDU5LjYxMzY4NDIgQy0wLjc4MTQwMzUwOSw1Ni4xMTI5ODI1IC0wLjQ5ODU5NjQ5MSw0OS4zNzIyODA3IDYuNDI1MjYzMTYsNDYuODAwMzUwOSBDMTAuNzUwMTc1NCw0NS4xOTQwMzUxIDIwLjM4ODA3MDIsNDguOTAxMDUyNiAyMC44ODI0NTYxLDQ0LjIwNTYxNCBDMjEuNDUyMjgwNywzOC43OTI5ODI1IDEwLjc1NzU0MzksMzguMzM2NDkxMiA3LjUzNzU0Mzg2LDM3LjAzODU5NjUgQzEuODQsMzQuNzQyNDU2MSAtMS41MjI4MDcwMiwyOS44MjkxMjI4IDEuMTExOTI5ODIsMjQuNTU4MjQ1NiBDMy4wODg3NzE5MywyMC42MDQ1NjE0IDguOTA1MjYzMTYsMTguOTk1Nzg5NSAxMy4zNDQ5MTIzLDIwLjcyNzcxOTMgQzE4LjY2MzUwODgsMjIuODAyNDU2MSAxOS41MTcxOTMsMjguMzE4OTQ3NCAyMi4yNDIxMDUzLDMwLjYxMjk4MjUgQzI0LjU4OTQ3MzcsMzIuNTkwMTc1NCAyNy44MDIxMDUzLDMyLjgzNzU0MzkgMjkuOTAzMTU3OSwzMS40NzgyNDU2IEMzMS40NTI2MzE2LDMwLjQ3NTQzODYgMzEuOTY4NDIxMSwyOC4yNzI5ODI1IDMxLjM4Mzg1OTYsMjYuMjYxMDUyNiBDMzAuNjA4NDIxMSwyMy41OTAxNzU0IDI4LjU1MDUyNjMsMjEuOTIzNTA4OCAyNi41NDI4MDcsMjAuMjkwNTI2MyBDMjIuOTY5ODI0NiwxNy4zODU5NjQ5IDE3LjkyNTYxNCwxNC44ODg0MjExIDIwLjk3Njg0MjEsNi45NjAzNTA4OCBDMjMuNDc3ODk0NywwLjQ2MzE1Nzg5NSAzMC44MTMzMzMzLDAuMjI5MTIyODA3IDMwLjgxMzMzMzMsMC4yMjkxMjI4MDcgQzMzLjcyNzcxOTMsLTAuMDk4NTk2NDkxMiAzNi4zMzc1NDM5LDAuNzgxNDAzNTA5IDM4LjQ2NDIxMDUsMi42ODE0MDM1MSBDNDEuMzA3MzY4NCw1LjIyMTQwMzUxIDQxLjg2MTA1MjYsOC42MTY0OTEyMyA0MS4zODUyNjMyLDEyLjIzODU5NjUgQzQwLjk1MDUyNjMsMTUuNTQ0OTEyMyAzOS43ODAzNTA5LDE4LjQ0MDcwMTggMzkuMTcwMTc1NCwyMS43MTY0OTEyIEMzOC40NjIxMDUzLDI1LjUxOTY0OTEgNDAuNDk0NzM2OCwyOS4zNTE5Mjk4IDQ0LjM2MDM1MDksMjkuNTAxMDUyNiBDNDkuNDQ0OTEyMywyOS42OTc1NDM5IDUwLjk2OTQ3MzcsMjUuNzg5NDczNyA1MS41OTE1Nzg5LDIzLjMxMjI4MDcgQzUyLjUwMjQ1NjEsMTkuNjg3NzE5MyA1My42OTc4OTQ3LDE2LjMyMjgwNyA1Ny4wNjE3NTQ0LDE0LjIwMzUwODggQzYxLjg4OTQ3MzcsMTEuMTYxNzU0NCA2OC41OTU0Mzg2LDExLjgyODQyMTEgNzEuNzA2NjY2NywxNy42NzQzODYgQzc0LjE2NzcxOTMsMjIuMyA3My4zNzc1NDM5LDI4LjY2NzcxOTMgNjkuNjAyNDU2MSwzMi4xNDQ5MTIzIEM2Ny45MDg3NzE5LDMzLjcwNDU2MTQgNjUuODcyMjgwNywzNC4yNTQzODYgNjMuNjY5NDczNywzNC4yNjk4MjQ2IEM2MC41MTA1MjYzLDM0LjI5MjI4MDcgNTcuMzUyOTgyNSwzNC4yMTQ3MzY4IDU0LjQyMDcwMTgsMzUuNjkyOTgyNSBDNTIuNDI0NTYxNCwzNi42OTg5NDc0IDUxLjU1NDczNjgsMzguMzM4MjQ1NiA1MS41NTUwODc3LDQwLjUzNTQzODYgQzUxLjU1NTA4NzcsNDIuNjc2ODQyMSA1Mi42Njk4MjQ2LDQ0LjA3NTQzODYgNTQuNDc2MTQwNCw0NC45ODU2MTQgQzU3Ljg3ODI0NTYsNDYuNzAwMzUwOSA2MS42MzM2ODQyLDQ3LjA1MDg3NzIgNjUuMzA4NzcxOSw0Ny42OTQzODYgQzcwLjYzODI0NTYsNDguNjI3NzE5MyA3NS4zMjQyMTA1LDUwLjUwNDkxMjMgNzguMzMyNjMxNiw1NS40NTA1MjYzIEM3OC4zNTk2NDkxLDU1LjQ5NDAzNTEgNzguMzg1OTY0OSw1NS41Mzc4OTQ3IDc4LjQxMTU3ODksNTUuNTgyMTA1MyBDODEuODY2NjY2Nyw2MS40Mzc1NDM5IDc4LjI1MzMzMzMsNjkuODY4NzcxOSA3MS40NjM4NTk2LDcwLjIyNTYxNCIgaWQ9IkZpbGwtMSIgZmlsbD0iIzBBQzg1NSIgbWFzaz0idXJsKCNtYXNrLTIpIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" alt="star" width="35" height="35"> <div style="  padding-top:5px;margin-right:10px; display: block; position:relative; bottom:0.5em; left:0.3em" >' + entry["Value"] + ' </div>'
            }
            RatingDivs.push(RTDiv);
            RatingBox.appendChild(RTDiv);
        }




    });

    return RatingDivs;

}

function AddDivs(mutation) {
    let titleCardContainers = $(mutation["target"]).find("div.title-card-container");

    titleCardContainers.each((i, titleCardContainer) => {

        if (titleCardContainer.querySelectorAll(".bob-container")[0].innerHTML == "") {
            var Title = titleCardContainer.querySelector("a").getAttribute("aria-label")
            var TestTitle = document.createElement("div");
            TestTitle.innerText = ".";
            TestTitle.style.display = "none";
            titleCardContainer.querySelectorAll(".bob-container")[0].appendChild(TestTitle);
            if(Title.includes("Marvel's"))
                {
                    Title = Title.toString().replace("Marvel's","")
                   
                }
            chrome.runtime.sendMessage({ todo: "TitleName", data: Title }, function (response) {
                //console.log(response.data);
                //console.log("CEHCK : "+GetRatingsBlock(response.data))
                var RatingBox = document.createElement("div");
                RatingBox.className = "previewModal--info"
                RatingBox.innerHTML =  ' <div class="NotAvailable"> <div  class="Text" id="IMDB">  <div class="NA"> N/A </div>           </div>            <div   class="Text" id="RT"> <div class="NA"> N/A </div>  </div>        </div>'
                if (response.todo != "TitleNameNotFound" )
                {
                    var RatingDivs = GetRatingsBlock(response.data)

                    RatingDivs.forEach(function (entry) {
                        if(entry.id == "IMDBRatings")
                        {
                            RatingBox.querySelector("#IMDB").innerHTML = entry.innerHTML
                        }
                        if(entry.id == "RTRatings")
                        {
                            RatingBox.querySelector("#RT").innerHTML = entry.innerHTML
                        }
    
                    });
                }
               
                // if (RatingDivs.length == 2)
                // {
                //     RatingBox.innerHTML = ' <div class="NotAvailable"> <div  class="Text">                N/A        <div id="IMDB">'+RatingDivs[0].innerHTML+' </div>    </div>            <div   class="Text">    N/A   <div id="IMDB">'+RatingDivs[1].innerHTML+' </div>  </div>        </div>'
                // }
                // else if (RatingDivs.length == 1)
                // {

                // }

                titleCardContainer.querySelectorAll(".bob-container")[0].appendChild(RatingBox);

            });
        }

    });

}

function Rasterize(TitleStr)
{  
    var TitleName = ""
    if(TitleStr.includes("Marvel's"))
    {
      
        TitleStr = TitleStr.toString().replace("Marvel's","")
      
    }
    return TitleStr;
}




var q = new Queue
function subscriber(mutations) {
    if (document.getElementsByClassName("previewModal--container mini-modal has-smaller-buttons").length == 0) {
        q = new Queue
    }
    mutations.forEach((mutation) => {
        AddDivs(mutation)
        //console.log("Target : " + $(mutation["target"]).attr("class"))

        Muts = $(mutation["target"])
        if (Muts.attr("class") == "videoMerchPlayer--boxart-wrapper") {

            if (Muts.attr("style").includes("static")) {
                var TitleName = $(".previewModal--boxart").attr("alt");
                //console.log("TITI0" + TitleName);
                //console.log("Print : " + q.printQueue() + "First Elem : " + q.end())
                TitleName = Rasterize(TitleName);
              

                if (q.end() != TitleName) {
                    // port.postMessage({ todo: "TitleName",position:"hover" ,data: TitleName });
                    
                    chrome.runtime.sendMessage({ todo: "TitleName", data: TitleName }, function (response) {
                        //console.log(response.data);
                        if (response.todo == "TitleNameNotFound" )
                        {
                      
                        }
                        else
                        {
                            SetRatings("previewModal--metadatAndControls-container", response.data)
                        }
                    });
                }

                q.enqueue(TitleName);
            }
            if (Muts.attr("style").includes("absolute")) {
                var TitleName = $(".previewModal--boxart").attr("alt");

                TitleName = Rasterize(TitleName);
                //console.log("Dibbe Wala : " + TitleName);
                //port.postMessage({ todo: "advisories", data: TitleName });
                var Loader = document.createElement("div");
                Loader.style.cssFloat = "left";
                Loader.className = "loader";
                document.getElementsByClassName("previewModal--detailsMetadata-left")[0].appendChild(Loader);
                chrome.runtime.sendMessage({ todo: "Advisories", data: TitleName }, function (response) {
                  if (response.todo == "AdvisoriesNotFound")
                  {
                  
                    RemoveLoader()
                  }
                  else
                  {
                    console.log("FOUND")
                    SetDivsForAdvisory(response)
                  }
                  console.log("OUT")
                  
                 
                });
            }





        }

        // if( $(mutation["target"]).attr("class") == "videoMerchPlayer--boxart-wrapper")
        // {
        //     console.log("Testing : "+ $(mutation["target"]).attr("style"))
        // }
        // if ( $(mutation["target"]).attr("class") == "videoMerchPlayer--boxart-wrapper" && $(mutation["target"]).attr("style").includes("absolute")) {
        //     console.log("Inside")
        //     var titleName = Muts.attr("title");
        //     console.log("dabbe wlaa" + titleName);
        //     port.postMessage({ todo: "advisories", data: titleName });
        //     var Loader = document.createElement("div");
        //     Loader.style.cssFloat = "left";
        //     Loader.attr("class") = "loader";
        //     document.getElementsByClassName("previewModal--detailsMetadata-left")[0].appendChild(Loader);
        // }

    });
};


// chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
//     console.log(response.farewell);
// });



function SetRatings(containerClass, Ratings) {

    //"previewModal--metadatAndControls-container"
    var WorkSpace = document.getElementsByClassName(containerClass)[0];
    var spaceMaker = document.createElement("div");
    var RatingBox = document.createElement("div");
    RatingBox.className = "RatingsIncluded";
    // WorkSpace.appendChild(spaceMaker);
    if ($(WorkSpace).find(".RatingsIncluded").length === 0) {
        //         WorkSpace.appendChild(Head);
        //msg.data.forEach(function (entry) {
        Ratings.forEach(function (entry) {
            if (entry["Source"] == "Internet Movie Database") {
                var IMDBDiv = document.createElement("div");
                IMDBDiv.style.display = "inline-block";
                IMDBDiv.innerHTML = '<svg style="display: inline-block; " id="home_img" class="ipc-logo" xmlns="http://www.w3.org/2000/svg" width="64" height="32" viewBox="0 0 64 32" version="1.1"><g fill="#F5C518"><rect x="0" y="0" width="100%" height="100%" rx="4"></rect></g><g transform="translate(8.000000, 7.000000)" fill="#000000" fill-rule="nonzero"><polygon points="0 18 5 18 5 0 0 0"></polygon><path d="M15.6725178,0 L14.5534833,8.40846934 L13.8582008,3.83502426 C13.65661,2.37009263 13.4632474,1.09175121 13.278113,0 L7,0 L7,18 L11.2416347,18 L11.2580911,6.11380679 L13.0436094,18 L16.0633571,18 L17.7583653,5.8517865 L17.7707076,18 L22,18 L22,0 L15.6725178,0 Z"></path><path d="M24,18 L24,0 L31.8045586,0 C33.5693522,0 35,1.41994415 35,3.17660424 L35,14.8233958 C35,16.5777858 33.5716617,18 31.8045586,18 L24,18 Z M29.8322479,3.2395236 C29.6339219,3.13233348 29.2545158,3.08072342 28.7026524,3.08072342 L28.7026524,14.8914865 C29.4312846,14.8914865 29.8796736,14.7604764 30.0478195,14.4865461 C30.2159654,14.2165858 30.3021941,13.486105 30.3021941,12.2871637 L30.3021941,5.3078959 C30.3021941,4.49404499 30.272014,3.97397442 30.2159654,3.74371416 C30.1599168,3.5134539 30.0348852,3.34671372 29.8322479,3.2395236 Z"></path><path d="M44.4299079,4.50685823 L44.749518,4.50685823 C46.5447098,4.50685823 48,5.91267586 48,7.64486762 L48,14.8619906 C48,16.5950653 46.5451816,18 44.749518,18 L44.4299079,18 C43.3314617,18 42.3602746,17.4736618 41.7718697,16.6682739 L41.4838962,17.7687785 L37,17.7687785 L37,0 L41.7843263,0 L41.7843263,5.78053556 C42.4024982,5.01015739 43.3551514,4.50685823 44.4299079,4.50685823 Z M43.4055679,13.2842155 L43.4055679,9.01907814 C43.4055679,8.31433946 43.3603268,7.85185468 43.2660746,7.63896485 C43.1718224,7.42607505 42.7955881,7.2893916 42.5316822,7.2893916 C42.267776,7.2893916 41.8607934,7.40047379 41.7816216,7.58767002 L41.7816216,9.01907814 L41.7816216,13.4207851 L41.7816216,14.8074788 C41.8721037,15.0130276 42.2602358,15.1274059 42.5316822,15.1274059 C42.8031285,15.1274059 43.1982131,15.0166981 43.281155,14.8074788 C43.3640968,14.5982595 43.4055679,14.0880581 43.4055679,13.2842155 Z"></path></g></svg>   <div style=" margin-right:10px; display: inline-block; position:relative; bottom:0.5em; left:0.3em" >' + entry["Value"] + ' </div>'
                RatingBox.appendChild(IMDBDiv);
            }
            else if (entry["Source"] == "Rotten Tomatoes") {
                //console.log("tamatar mila tha");
                var RTDiv = document.createElement("div");
                RTDiv.style.display = "inline-block";
                if (parseInt(entry["Value"].replace("%", "")) >= 60) {
                    RTDiv.innerHTML = '<img style="display: inline-block; position:relative; bottom:0px; " src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5LjEgKDg2MTQ0KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5JY29ucy9Ub21hdG9tZXRlciAmYW1wOyBBUy9mcmVzaDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxwb2x5Z29uIGlkPSJwYXRoLTEiIHBvaW50cz0iMC4wMDAxMDkxMDAxMDIgMC4yNDY5NzA5NTQgNzcuMDgyNzgzNyAwLjI0Njk3MDk1NCA3Ny4wODI3ODM3IDYzLjcxNDUyMjggMC4wMDAxMDkxMDAxMDIgNjMuNzE0NTIyOCI+PC9wb2x5Z29uPgogICAgPC9kZWZzPgogICAgPGcgaWQ9Ikljb25zL1RvbWF0b21ldGVyLSZhbXA7LUFTL2ZyZXNoIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR3JvdXAiPgogICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLUNvcHktMiIgZmlsbD0iIzAwMDAwMCIgb3BhY2l0eT0iMCIgeD0iMCIgeT0iMCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIj48L3JlY3Q+CiAgICAgICAgICAgIDxnIGlkPSJSVF9GcmVzaF9Ub21hdG9fUkdCLSgxKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS4zMjc4MDEsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDE2LjI2NTU2MCkiPgogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkNsaXAtMiI+PC9nPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik03Ny4wMTM3NzU5LDI3LjA0MjY1NTYgQzc2LjI0MjMyMzcsMTQuNjc0MTkwOSA2OS45NTIxOTkyLDUuNDIwNDE0OTQgNjAuNDg3NjM0OSwwLjI0Njk3MDk1NCBDNjAuNTQxNDEwOCwwLjU0ODM4MTc0MyA2MC4yNzMxOTUsMC45MjUxNDUyMjggNTkuOTY3ODAwOCwwLjc5MTcwMTI0NSBDNTMuNzc3MjYxNCwtMS45MTYzNDg1NSA0My4yNzUzNTI3LDYuODQ3ODAwODMgMzUuOTM2NTk3NSwyLjI1ODI1NzI2IEMzNS45OTE3MDEyLDMuOTA1Mzk0MTkgMzUuNjcwMDQxNSwxMS45NDAyNDkgMjQuMzUxNTM1MywxMi40MDYzMDcxIEMyNC4wODQzMTU0LDEyLjQxNzI2MTQgMjMuOTM3MjYxNCwxMi4xNDQzOTgzIDI0LjEwNjIyNDEsMTEuOTUxMjAzMyBDMjUuNjE5OTE3LDEwLjIyNDczMDMgMjcuMTQ4MjE1OCw1Ljg1MzYwOTk2IDI0Ljk1MDcwNTQsMy41MjMzMTk1IEMyMC4yNDQ2NDczLDcuNzQwNDE0OTQgMTcuNTExNzAxMiw5LjMyNzQ2ODg4IDguNDg4Mjk4NzYsNy4yMzMxOTUwMiBDMi43MTEwMzczNCwxMy4yNzQwMjQ5IC0wLjU2MjY1NTYwMiwyMS41NDE5MDg3IDAuMDgsMzEuODQxMzI3OCBDMS4zOTEyMDMzMiw1Mi44NjYzOSAyMS4wODQ4MTMzLDY0Ljg4NDY0NzMgNDAuOTE2NTE0NSw2My42NDcxMzY5IEM2MC43NDY4ODgsNjIuNDEwNjIyNCA3OC4zMjUzMTEyLDQ4LjA2NzcxNzggNzcuMDEzNzc1OSwyNy4wNDI2NTU2IiBpZD0iRmlsbC0xIiBmaWxsPSIjRkEzMjBBIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00MC44NzE3MDEyLDExLjQ2NDg5NjMgQzQ0Ljk0NjcyMiwxMC40OTM2MSA1Ni42Njc4ODM4LDExLjM3MDI5MDUgNjAuNDIzMjM2NSwxNi4zNTE4NjcyIEM2MC42NDg2MzA3LDE2LjY1MDYyMjQgNjAuMzMxMjg2MywxNy4yMTU5MzM2IDU5Ljk2NzgwMDgsMTcuMDU3MjYxNCBDNTMuNzc3MjYxNCwxNC4zNDkyMTE2IDQzLjI3NTM1MjcsMjMuMTEzMzYxIDM1LjkzNjU5NzUsMTguNTIzODE3NCBDMzUuOTkxNzAxMiwyMC4xNzA5NTQ0IDM1LjY3MDA0MTUsMjguMjA1ODA5MSAyNC4zNTE1MzUzLDI4LjY3MTg2NzIgQzI0LjA4NDMxNTQsMjguNjgyODIxNiAyMy45MzcyNjE0LDI4LjQwOTk1ODUgMjQuMTA2MjI0MSwyOC4yMTY3NjM1IEMyNS42MTk5MTcsMjYuNDkwMjkwNSAyNy4xNDc4ODM4LDIyLjExOTE3MDEgMjQuOTUwNzA1NCwxOS43ODg4Nzk3IEMxOS44MjQzOTgzLDI0LjM4MjczODYgMTcuMDQ1MzExMiwyNS44NTg5MjEyIDUuOTE5MDA0MTUsMjIuODUxNDUyMyBDNS41NTQ4NTQ3NywyMi43NTMxOTUgNS42NzkwMDQxNSwyMi4xNjc5NjY4IDYuMDY2MzkwMDQsMjIuMDIwMjQ5IEM4LjE2OTI5NDYxLDIxLjIxNjU5NzUgMTIuOTMzNDQ0LDE3LjY5NjU5NzUgMTcuNDQwNjYzOSwxNi4xNDUwNjIyIEMxOC4yOTg3NTUyLDE1Ljg0OTk1ODUgMTkuMTU0MTkwOSwxNS42MjA5MTI5IDE5Ljk4OTA0NTYsMTUuNDg3ODAwOCBDMTUuMDI2MzksMTUuMDQ0MzE1NCAxMi43ODkzNzc2LDE0LjM1NDE5MDkgOS42MzI4NjMwNywxNC44MzAyMDc1IEM5LjI4Njk3MDk1LDE0Ljg4MjMyMzcgOS4wNTE5NTAyMSwxNC40Nzk2NjggOS4yNjYzOTAwNCwxNC4yMDM0ODU1IEMxMy41MTkzMzYxLDguNzI1MzExMiAyMS4zNTQwMjQ5LDcuMDcwODcxMzcgMjYuMTg3ODgzOCw5Ljk4MTA3ODg0IEMyMy4yMDgyOTg4LDYuMjg5MTI4NjMgMjAuODc0MzU2OCwzLjM0NDczMDI5IDIwLjg3NDM1NjgsMy4zNDQ3MzAyOSBMMjYuNDA0NjQ3MywwLjIwMzQ4NTQ3NyBDMjYuNDA0NjQ3MywwLjIwMzQ4NTQ3NyAyOC42ODk0NjA2LDUuMzA4MjE1NzcgMzAuMzUxODY3Miw5LjAyMzQwMjQ5IEMzNC40NjU3MjYxLDIuOTQ1MDYyMjQgNDIuMTE5ODM0LDIuMzg0MDY2MzkgNDUuMzUzNjkyOSw2LjY5Njc2MzQ5IEM0NS41NDU1NjAyLDYuOTUzMDI5MDUgNDUuMzQ1MDYyMiw3LjMxNzUxMDM3IDQ1LjAyNDczMDMsNy4zMDk4NzU1MiBDNDIuMzkyNjk3MSw3LjI0NTgwOTEzIDQwLjk0MzQwMjUsOS42Mzk4MzQwMiA0MC44MzM1MjcsMTEuNDYwNTgwOSBMNDAuODcxNzAxMiwxMS40NjQ4OTYzIiBpZD0iRmlsbC00IiBmaWxsPSIjMDA5MTJEIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" alt="star" width="35" height="35"> <div style=" margin-right:10px; display: inline-block; position:relative; bottom:0.5em; left:0.3em" >' + entry["Value"] + ' </div>'
                }
                else {
                    RTDiv.innerHTML = '<img style="display: inline-block; position:relative; bottom:0px; " src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5LjEgKDg2MTQ0KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5JY29ucy9Ub21hdG9tZXRlciAmYW1wOyBBUy9yb3R0ZW48L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cG9seWdvbiBpZD0icGF0aC0xIiBwb2ludHM9IjAgMC4xNjE5NTA0NjUgNzkuNzQxNzA3NSAwLjE2MTk1MDQ2NSA3OS43NDE3MDc1IDc3LjUyMjgwNyAwIDc3LjUyMjgwNyI+PC9wb2x5Z29uPgogICAgPC9kZWZzPgogICAgPGcgaWQ9Ikljb25zL1RvbWF0b21ldGVyLSZhbXA7LUFTL3JvdHRlbiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ikdyb3VwLTUiPgogICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLUNvcHkiIGZpbGw9IiMwMDAwMDAiIG9wYWNpdHk9IjAiIHg9IjAiIHk9IjAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCI+PC9yZWN0PgogICAgICAgICAgICA8ZyBpZD0iUlRfUm90dGVuX1NwbGF0X1JHQi0oMSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAxLjIyODA3MCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTMiPgogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkNsaXAtMiI+PC9nPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik03MS40NjM4NTk2LDcwLjIyNTYxNCBDNTYuMzQ1OTY0OSw3MS4wMTkyOTgyIDUzLjI1Njg0MjEsNTMuNzIwMzUwOSA0Ny4zMjU2MTQsNTMuODQzNTA4OCBDNDQuNzk4MjQ1Niw1My44OTY0OTEyIDQyLjgwNjMxNTgsNTYuNTM4OTQ3NCA0My42ODEwNTI2LDU5LjYxODU5NjUgQzQ0LjE2MjEwNTMsNjEuMzExNTc4OSA0NS40OTY0OTEyLDYzLjc5NDM4NiA0Ni4zMzcxOTMsNjUuMzM1MDg3NyBDNDkuMzAyODA3LDcwLjc3MTkyOTggNDQuOTE4NTk2NSw3Ni45MjQ1NjE0IDM5Ljc4ODA3MDIsNzcuNDQ0OTEyMyBDMzEuMjYyMTA1Myw3OC4zMDk4MjQ2IDI3LjcwNTYxNCw3My4zNjM4NTk2IDI3LjkyNTYxNCw2OC4zMDA3MDE4IEMyOC4xNzI5ODI1LDYyLjYxNjg0MjEgMzIuOTkyMjgwNyw1Ni44MDkxMjI4IDI4LjA0OTQ3MzcsNTQuMzM3ODk0NyBDMjIuODY5NDczNyw1MS43NDgwNzAyIDE4LjY1ODU5NjUsNjEuODc1NDM4NiAxMy43MDE3NTQ0LDY0LjEzNTc4OTUgQzkuMjE1NDM4Niw2Ni4xODE3NTQ0IDIuOTg3NzE5Myw2NC41OTU0Mzg2IDAuNzczNjg0MjExLDU5LjYxMzY4NDIgQy0wLjc4MTQwMzUwOSw1Ni4xMTI5ODI1IC0wLjQ5ODU5NjQ5MSw0OS4zNzIyODA3IDYuNDI1MjYzMTYsNDYuODAwMzUwOSBDMTAuNzUwMTc1NCw0NS4xOTQwMzUxIDIwLjM4ODA3MDIsNDguOTAxMDUyNiAyMC44ODI0NTYxLDQ0LjIwNTYxNCBDMjEuNDUyMjgwNywzOC43OTI5ODI1IDEwLjc1NzU0MzksMzguMzM2NDkxMiA3LjUzNzU0Mzg2LDM3LjAzODU5NjUgQzEuODQsMzQuNzQyNDU2MSAtMS41MjI4MDcwMiwyOS44MjkxMjI4IDEuMTExOTI5ODIsMjQuNTU4MjQ1NiBDMy4wODg3NzE5MywyMC42MDQ1NjE0IDguOTA1MjYzMTYsMTguOTk1Nzg5NSAxMy4zNDQ5MTIzLDIwLjcyNzcxOTMgQzE4LjY2MzUwODgsMjIuODAyNDU2MSAxOS41MTcxOTMsMjguMzE4OTQ3NCAyMi4yNDIxMDUzLDMwLjYxMjk4MjUgQzI0LjU4OTQ3MzcsMzIuNTkwMTc1NCAyNy44MDIxMDUzLDMyLjgzNzU0MzkgMjkuOTAzMTU3OSwzMS40NzgyNDU2IEMzMS40NTI2MzE2LDMwLjQ3NTQzODYgMzEuOTY4NDIxMSwyOC4yNzI5ODI1IDMxLjM4Mzg1OTYsMjYuMjYxMDUyNiBDMzAuNjA4NDIxMSwyMy41OTAxNzU0IDI4LjU1MDUyNjMsMjEuOTIzNTA4OCAyNi41NDI4MDcsMjAuMjkwNTI2MyBDMjIuOTY5ODI0NiwxNy4zODU5NjQ5IDE3LjkyNTYxNCwxNC44ODg0MjExIDIwLjk3Njg0MjEsNi45NjAzNTA4OCBDMjMuNDc3ODk0NywwLjQ2MzE1Nzg5NSAzMC44MTMzMzMzLDAuMjI5MTIyODA3IDMwLjgxMzMzMzMsMC4yMjkxMjI4MDcgQzMzLjcyNzcxOTMsLTAuMDk4NTk2NDkxMiAzNi4zMzc1NDM5LDAuNzgxNDAzNTA5IDM4LjQ2NDIxMDUsMi42ODE0MDM1MSBDNDEuMzA3MzY4NCw1LjIyMTQwMzUxIDQxLjg2MTA1MjYsOC42MTY0OTEyMyA0MS4zODUyNjMyLDEyLjIzODU5NjUgQzQwLjk1MDUyNjMsMTUuNTQ0OTEyMyAzOS43ODAzNTA5LDE4LjQ0MDcwMTggMzkuMTcwMTc1NCwyMS43MTY0OTEyIEMzOC40NjIxMDUzLDI1LjUxOTY0OTEgNDAuNDk0NzM2OCwyOS4zNTE5Mjk4IDQ0LjM2MDM1MDksMjkuNTAxMDUyNiBDNDkuNDQ0OTEyMywyOS42OTc1NDM5IDUwLjk2OTQ3MzcsMjUuNzg5NDczNyA1MS41OTE1Nzg5LDIzLjMxMjI4MDcgQzUyLjUwMjQ1NjEsMTkuNjg3NzE5MyA1My42OTc4OTQ3LDE2LjMyMjgwNyA1Ny4wNjE3NTQ0LDE0LjIwMzUwODggQzYxLjg4OTQ3MzcsMTEuMTYxNzU0NCA2OC41OTU0Mzg2LDExLjgyODQyMTEgNzEuNzA2NjY2NywxNy42NzQzODYgQzc0LjE2NzcxOTMsMjIuMyA3My4zNzc1NDM5LDI4LjY2NzcxOTMgNjkuNjAyNDU2MSwzMi4xNDQ5MTIzIEM2Ny45MDg3NzE5LDMzLjcwNDU2MTQgNjUuODcyMjgwNywzNC4yNTQzODYgNjMuNjY5NDczNywzNC4yNjk4MjQ2IEM2MC41MTA1MjYzLDM0LjI5MjI4MDcgNTcuMzUyOTgyNSwzNC4yMTQ3MzY4IDU0LjQyMDcwMTgsMzUuNjkyOTgyNSBDNTIuNDI0NTYxNCwzNi42OTg5NDc0IDUxLjU1NDczNjgsMzguMzM4MjQ1NiA1MS41NTUwODc3LDQwLjUzNTQzODYgQzUxLjU1NTA4NzcsNDIuNjc2ODQyMSA1Mi42Njk4MjQ2LDQ0LjA3NTQzODYgNTQuNDc2MTQwNCw0NC45ODU2MTQgQzU3Ljg3ODI0NTYsNDYuNzAwMzUwOSA2MS42MzM2ODQyLDQ3LjA1MDg3NzIgNjUuMzA4NzcxOSw0Ny42OTQzODYgQzcwLjYzODI0NTYsNDguNjI3NzE5MyA3NS4zMjQyMTA1LDUwLjUwNDkxMjMgNzguMzMyNjMxNiw1NS40NTA1MjYzIEM3OC4zNTk2NDkxLDU1LjQ5NDAzNTEgNzguMzg1OTY0OSw1NS41Mzc4OTQ3IDc4LjQxMTU3ODksNTUuNTgyMTA1MyBDODEuODY2NjY2Nyw2MS40Mzc1NDM5IDc4LjI1MzMzMzMsNjkuODY4NzcxOSA3MS40NjM4NTk2LDcwLjIyNTYxNCIgaWQ9IkZpbGwtMSIgZmlsbD0iIzBBQzg1NSIgbWFzaz0idXJsKCNtYXNrLTIpIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" alt="star" width="35" height="35"> <div style=" margin-right:10px; display: inline-block; position:relative; bottom:0.5em; left:0.3em" >' + entry["Value"] + ' </div>'
                }

                RatingBox.appendChild(RTDiv);
            }




        });
        WorkSpace.appendChild(RatingBox);
    }
}