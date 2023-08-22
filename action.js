
const navlink = document.querySelectorAll('.nav-link');
const section = document.querySelectorAll('.sections');

// window.onscroll = () => {
//     let current = "";
  
//     section.forEach((sec) => {
//       const sectionTop = sec.offsetTop;
//       if (window.scrollY >= sectionTop ) {
//         current = sec.getAttribute("id"); }
//     });
  
//     navlink.forEach((li) => {
//       li.classList.remove(".active");
//       if (li.classList.contains(current)) {
//         li.classList.add(".active");
//         }
//     });
//   };

let currentSection = '';
window.addEventListener('scroll', () => {
    section.forEach(sec => {
        if(window.scrollY >= (sec.offsetTop - 150)){
            currentSection = sec.id;
            console.log(currentSection)
        }
    })

    navlink.forEach(li  => {
        if(li.href.includes(currentSection)) {
            document.querySelector('.active').classList.remove('active')
            li.classList.add('active')
            console.log(li.href)

        }
    })
})




