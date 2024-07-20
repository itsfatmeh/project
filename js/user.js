document.addEventListener('DOMContentLoaded', function(){
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});



         
     const Adduserbutton= document.getElementById("add-user-button")
     Adduserbutton.addEventListener("click" , ()=>{
         document.querySelector(".add-user-modal").classList.add("show")
         document.querySelector(".add-user-modal-back").classList.remove("dis-none")
      })

      document.querySelector(".add-user-modal-back").addEventListener("click" , ()=>{
         document.querySelector(".add-user-modal").classList.remove("show")
         document.querySelector(".add-user-modal-back").classList.add("dis-none")
      })

});