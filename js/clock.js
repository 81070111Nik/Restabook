// taimer
window.addEventListener('DOMContentLoaded',() => {
    const timeEnd = '2022-05-20';
    function getRemaning(endtime){
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t/(1000*60*60*24)),
            hours = Math.floor((t/(1000*60*60))%24),
            minutes = Math.floor((t/(1000*60))%60),
            seconds = Math.floor((t/1000)%60);
        return{
            'total':t,
            'days':days,
            'hours':hours,
            'minutes':minutes,
            'seconds':seconds
        };
    }
    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        
        updateClock();

        function updateClock() {
            const t =getRemaning(endtime);
            days.innerHTML = t.days;
            hours.innerHTML = t.hours
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
setClock('.countdown', timeEnd);
}) 


    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabParent = document.querySelector('.tabheader');
    
        function hideTabContent(){
            tabsContent.forEach(item=>{
                item.style.display = 'none';
            });
            tabs.forEach(item=>{
                item.classList.remove('tabheader__item_active');
            });
        }
        function showTabContent(i=0){
            tabsContent[i].style.display='block';
            tabs[i].classList.add('tabheader__item_active');
        }
        hideTabContent();
        showTabContent();
    
        tabParent.addEventListener('click',(event)=>{
            const target = event.target;
            if(target && target.classList.contains('tabheader__item')){
                tabs.forEach((item,i)=>{
                    if(target == item){
                        hideTabContent();
                        showTabContent(i);
                    }
                })
            }
        })