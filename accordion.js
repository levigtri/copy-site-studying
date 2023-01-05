
    function clickAccordion(t){
    let  pai = document.getElementsByClassName('titulo')
    [t].parentElement;
    let img = document.getElementsByClassName('fa-sharp fa-solid fa-chevron-down')[t];
    let conteudo = pai.lastElementChild.classList.contains('hide');
    // let margem = document.getElementsByClassName('container')[t].parentElement;

    if(conteudo == true){
      pai.lastElementChild.className ="show";
      img.style.transform = "rotate("+180+"deg)";
      // margem.style.marginBottom = "margin("+10+"px)";

    }else{
        
      pai.lastElementChild.className = "hide";
      img.style.transform = "rotate("+0+"deg)";
      // margem.style.marginBottom = "margin("+0+"px)";
    }
  }
  