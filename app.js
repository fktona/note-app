//import   anime from "animejs/lib/anime.es.js";
let homePage = document.querySelector(".homePage");
let taskPage = document.querySelector(".taskPage");
let notePage = document.querySelector(".notePage");
let note = document.querySelector(".note");
let task = document.querySelector(".ask");
let homePageInput = document.querySelectorAll("fieldset");
let inadd = document.querySelector(".add");
let ADD = document.querySelectorAll(".add div");
let addBtn = document.querySelectorAll("fieldset button");
let close = document.querySelectorAll(".cancel");
console.log(close);
let addBTN2 = document.querySelectorAll("aside");
let notedetails;
notePage.classList.add("none");
taskPage.classList.add("none");
homePageInput[0].classList.add("none");
homePageInput[1].classList.add("none");

function open(a, b, c) {
  if (a.classList.contains("none")) {
    a.classList.remove("none");
    b.classList.add("none");
    c.classList.add("none");
    a.scrollIntoView(true);
  } else {
    a.classList.add("none");
    b.classList.remove("none");
  }
}
task.addEventListener("click", () => {
  open(taskPage, homePage, notePage);
});

note.addEventListener("click", () => {
  open(notePage, homePage, taskPage);
});

function Add(a) {
  a.classList.remove("none");
}

ADD[0].onclick = () => {
  Add(homePageInput[0]);
  inadd.style.filter = "blur(10px)";
};

ADD[1].onclick = () => {
  Add(homePageInput[1]);
  inadd.style.filter = "blur(10px)";
};
function closed(a) {
  a.classList.add("none");
  inadd.style.filter = "blur(0px)";
}
close[0].onclick = () => {
  closed(homePageInput[0]);
};

close[1].onclick = () => {
  closed(homePageInput[1]);
};

addBtn[0].onclick = (event) => {
  if ( document.querySelector("#inputTask").value != "") {
    
  
  homePageInput[0].classList.add("none");
  inadd.style.filter = "blur(0px)";
  let radio = document.createElement("input");
  radio.setAttribute("type", "radio");
  let taskwrite = document.createElement("span");
  taskwrite.innerHTML = document.querySelector("#inputTask").value;
  let taskarr = document.createElement("div");
  document.querySelector(".dailyTasks").append(taskarr);
  taskarr.setAttribute("class", "taskInput");
  let taskarr1 = Array.from(document.querySelectorAll(".dailyTasks div"));
  taskarr1.forEach((taskarr) => {
    taskarr.append(radio, taskwrite);
    document.querySelector("#inputTask").value = '';
    
  });
}
else{
  document.querySelector("#inputTask").classList.add('validationb')
}
}



addBtn[1].onclick = () => {
  if (document.querySelector(".txt").value != "") {
    homePageInput[1].classList.add("none");
    inadd.style.filter = "blur(0px)";
    Array.from(document.querySelectorAll(".listNote div")).map(
      (x) => (x.style.filter = "blur(0px)")
    );
    pp = document.querySelector(".listNote div");
    notedetails = pp.cloneNode(true);
    notedetails.setAttribute("class", "noteDetails");
    document.querySelector(".listNote").append(notedetails);
    notedetails.querySelector("h3").innerHTML = document.querySelector(".noteTitle").value;
    notedetails.querySelector(".details").innerHTML = document.querySelector(".txt").value;
    let bgc = Math.floor(Math.random() * 0xffffff).toString(16);
    let buc = Math.floor(Math.random() * 0xffffff).toString(16);
    notedetails.style.background = `linear-gradient(#${bgc} , #${buc})`;
    // cv.querySelector('.date').innerHTML = new Date()
  } else {
    document.querySelector(".txt").classList.add("validation");
  }
  document.querySelector(".txt").value = "";
  if (document.querySelector(".noteDetails")) {
        let sh = Array.from(document.querySelectorAll(".noteDetails"))
        sh.reduce((a , b) => {
          b.onclick = () => {
            console.log('kkkk')
        b.classList.add('displayNote')
        
        
          }
        },0)
     
    
    }
};

function addBTN(d, e) {
  d.classList.remove("none");
  d.setAttribute("class", "inn");
  e.append(d);
}

addBTN2[1].onclick = () => {
  addBTN(homePageInput[0], document.querySelector(".taskPage"));
  Array.from(document.querySelectorAll(".dailyTask div")).map(
    (x) => (x.style.filter = "blur(7px)")
  );
};
addBTN2[0].onclick = () => {
  addBTN(homePageInput[1], document.querySelector(".listNote"));
  Array.from(document.querySelectorAll(".listNote div")).map(
    (x) => (x.style.filter = "blur(7px)")
  );
 };