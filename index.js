
bt2 = document.getElementById("send");
bt1 = document.getElementById("but");
cv = document.getElementById("cv");
bt1.onclick = function(){

    alert("Hi😃, contact me to join my team. I'm looking for your response.");
}

cv.onclick = function(){
    window.open("https://drive.google.com/file/d/1Pn7oVUkQcsp6x5gi-A4TQfkPNb9rNymI/view");
}

bt2.onclick = function()
{
    n = document.getElementById("n");
    let name = n.value;
    alert("Hey👋.."+name+" , Thanks for contacting me. I will respond you as soon as possible.")
}
bt.onclick=function(){
    
}
pr = document.getElementById("prof");
pr.onclick=function(){
    window.open("fresh1.jpg");
}

let sections = document.querySelectorAll('section');
let links = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            links.forEach(li => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
    };
        });
    
};

const type = new Typed('.t2',{
    strings:['Fronted Developer', '3D editor', 'Content creator'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});

ScrollReveal({
    reset: true ,
    distance: '80px',
    duration: 2000,
    delay: 200

});

ScrollReveal().reveal('.tagline', { origin: 'top' });
