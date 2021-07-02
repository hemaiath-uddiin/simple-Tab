const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const article = document.querySelectorAll('.content');

    about.addEventListener('click',(e)=>{ 
      const id =e.target.dataset.id; 
         if(id){ 
             btns.forEach((btn)=>{ 
                btn.classList.remove('active')
             });
              e.target.classList.add('active')
            //hide other articles 
            article.forEach((article)=>{ 
              article.classList.remove('active')
            });
            
            const element = document.getElementById(id);
            element.classList.add('active')
         };

    
    });

