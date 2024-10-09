window.addEventListener('scroll', () => {
    let header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 550); //754 
})

let switcher = document.querySelectorAll('.gallary ul li');
let projects = Array.from(document.getElementsByClassName('project'));
switcher.forEach((li) =>{
    li.addEventListener('click', (e) =>{
        switcher.forEach((el) =>{
            el.classList.remove('active')
        });
        e.target.classList.add('active');
        
        projects.forEach(p => {
            p.style.display = 'none';
        });
        document.querySelectorAll(e.target.dataset.cat).forEach(e => e.style.display = 'block');
    });
})