const tabs = document.getElementsByClassName('question_tab');

const content = document.querySelectorAll('content');

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click' , function(){
        this.classList.toggle('active')
    })
    
}