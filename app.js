let homePage = document.querySelector('.homePage')
let taskPage = document.querySelector('.taskPage')
let notePage = document.querySelector('.notePage')
let note = document.querySelector('.note')
let task = document.querySelector('.ask')
 
document.onreadystatechange = () => {
    if (document.onreadystatechange = 'complete') {
      homePage.scrollIntoView(true)  
      console.log('uit')
      notePage.classList.add('none')
      taskPage.classList.add('none')
    }
}

note.addEventListener('touchmove' ,  () =>{
 notePage.classList.remove('none')
 notePage.scrollIntoView(true)
 note.scrollIntoView(true)
})

task.addEventListener('touchmove' ,  () =>{
 taskPage.classList.remove('none')
   })
   