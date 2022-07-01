window.addEventListener('load', ()=>{

    let popupBtns = document.querySelectorAll('.call-popup');

    if (popupBtns != null) {
        popupBtns.forEach(function(item) {
            item.addEventListener('click', (e)=> {
                OpenPopup();
                document.addEventListener('click', (e)=>{
                    let target = e.target;

                    if ( !target.closest('.popup__item') && !target.closest('.call-popup'))  {
                        ClosePopup();
                    }
                })
                
            })
        })
    }

    let closeBtn = document.querySelector('.popup-close');

    closeBtn.addEventListener('click', ()=>{
        ClosePopup();
    })

    function OpenPopup(e) {
        let popupWrap = document.querySelector('.popup');
        let popupItem = document.querySelector('.popup__item');

        popupWrap.classList.add('active');
        popupItem.classList.add('active');

        document.body.style.overflow = 'hidden';

        
    }

    function ClosePopup() {
        let popupWrap = document.querySelector('.popup');
        let popupItem = document.querySelector('.popup__item');

        popupWrap.classList.remove('active');
        popupItem.classList.remove('active');

        document.body.style.overflow = 'auto';
    }


    

})