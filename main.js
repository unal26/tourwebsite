const menuBtn=document.querySelector('.navbar-menu-btn')
console.log(menuBtn)

const menuLink=document.querySelector('.navbar-list')
console.log(menuLink)

menuBtn.addEventListener('click', ()=> {
    menuLink.classList.toggle('mobile-menu')  //menu btn ye her basıldığında .navar-list clasına sahip elementin clasları içerisine ekleme yapıyor
    //toogle ekli ise çıkarma ekli değil ise ekleme yapar çift yönlü çalışır
})