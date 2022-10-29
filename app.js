let homePage = document.querySelector('.homePage')
let taskPage = document.querySelector('.taskPage')
let notePage = document.querySelector('.notePage')
let note = document.querySelector('.note')
let task = document.querySelector('.ask')
let homePageInput =  document.querySelectorAll('fieldset')
let ADD =  document.querySelectorAll('.add div')
let addBtn =  document.querySelectorAll('fieldset button')


      homePage.scrollIntoView(true)  
      console.log('uit')
      notePage.classList.add('none')
      taskPage.classList.add('none')
      homePageInput[0].classList.add('none')
      homePageInput[1].classList.add('none')
     
    


note.addEventListener('touchmove' ,  () =>{
 notePage.classList.remove('none')
 notePage.scrollIntoView(true)
 note.scrollIntoView(true)
})

task.addEventListener('touchmove' ,  () =>{
 taskPage.classList.remove('none')
   })
   
   ADD[0].onclick = () => {
    homePageInput[0].classList.remove('none')
    document.querySelector('.add').style.filter = 'blur(10px)'
   }
   ADD[1].onclick = () => {
    homePageInput[1].classList.remove('none')
    document.querySelector('.add').style.filter = 'blur(10px)'
   }

   addBtn[0].onclick = () => {
  let listTask =  document.createElement("span")
  listTask.innerHTML = document.querySelector("#inputTask").value
  document.querySelector(".taskInput").append(listTask)
  homePageInput[0].classList.add('none')
  


   }