const tabs = document.querySelectorAll('.tabheader');
const tabsContent = document.querySelectorAll('.tab-content');
const tabParent = document.querySelector('.hero-menu_header');
    
    function hideTabContent(){
        tabsContent.forEach(item=>{
            item.style.display = 'none';
        });
        tabs.forEach(item=>{
            item.classList.remove('current');
        });
    }
    function showTabContent(i=0){
        tabsContent[i].style.display='block';
        tabs[i].classList.add('current');
    }
    hideTabContent();
    showTabContent();
    
    tabParent.addEventListener('click',(event)=>{
        const target = event.target;
        if(target && target.classList.contains('tabheader')){
            tabs.forEach((item,i)=>{
                if(target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })
