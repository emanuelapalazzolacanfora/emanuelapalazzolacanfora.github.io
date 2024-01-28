(() => {
    const buttons = document.querySelectorAll('.btn__projects');
    const items = document.querySelectorAll('.card__projects');
    const img = document.querySelectorAll('.img__projects');  
      console.log(img);
      for(let i = 0; i < img.length; i++ ) {
      }
      
      buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
          e.preventDefault();
          const filter = e.target.dataset.filter;
          items.forEach((item) => {
            if(filter === 'all') {
               item.style.display = 'block';
            } else {
              if(item.classList.contains(filter)) {
                item.style.display = 'block';
              } else {
                item.style.display = 'none';
              }
            }
          });
        });
      })
    })();