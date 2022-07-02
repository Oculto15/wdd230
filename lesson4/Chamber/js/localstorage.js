let lastVisitDate;
        const today = Date.now();

        if (window.localStorage.getItem('last-visit-date')){
            lastVisitDate = window.localStorage.getItem('last-visit-date');
        } else{
            lastVisitDate = today;
        }

        window.localStorage.setItem('last-visit-date', today);

        const secondsSinceLastVisit = Math.floor((today - lastVisitDate) /1000);
        const daysSinceLastVisit = Math.floor(secondsSinceLastVisit / (60*60*24));



        
      

        // document.querySelector('#seconds-ago').textContent = secondsSinceLastVisit
        document.querySelector('#days-ago').textContent = daysSinceLastVisit