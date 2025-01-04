      const ul = document.querySelector('.blog ul');
        const lis = document.querySelectorAll('.blog li');
        let index = 0;


        function autoScroll() {
            index = (index + 1) % lis.length;
            const targetScroll = lis[index].offsetLeft;
            ul.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }

        setInterval(autoScroll, 4000);