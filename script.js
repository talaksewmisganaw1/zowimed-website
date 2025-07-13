        const year = document.getElementById("year");       
        year.innerHTML=new Date().getFullYear();
        
        // Mobile Menu Toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        



        
        //each navlink
        const homeLink = document.querySelector(".home");
        const aboutLink = document.querySelector(".about");
        const servicesLink = document.querySelector(".services");
        const doctorsLink = document.querySelector(".doctors");
        const testimonialsLink = document.querySelector(".testimonials");
        const contactLink = document.querySelector(".contact");
        
        //all links
        const allLinks = document.querySelectorAll(".nav-link")
        
        
        window.addEventListener("scroll", () => {
            //distance of sections from the top
            const homeDistance = document.getElementById("home").getBoundingClientRect().top + window.scrollY - 100;
            const aboutDistance = document.getElementById("about").getBoundingClientRect().top + window.scrollY - 100;
            const serviceDistance = document.getElementById("services").getBoundingClientRect().top + window.scrollY - 100;
            const doctorsDistance = document.getElementById("doctors").getBoundingClientRect().top + window.scrollY - 100;
            const testimonialsDistance = document.getElementById("testimonials").getBoundingClientRect().top + window.scrollY - 100;
            const contactDistance = document.getElementById("contact").getBoundingClientRect().top + window.scrollY - 100;

            // const scrollHeight = window.scrollY;
            
            if (window.scrollY>=homeDistance && window.scrollY<aboutDistance) {
                
                allLinks.forEach(link => link.classList.remove("text-green-500"))
                homeLink.classList.add("text-green-500")
                
            } else if (window.scrollY>=aboutDistance && window.scrollY<serviceDistance) {
                
                allLinks.forEach(link => link.classList.remove("text-green-500"))
                aboutLink.classList.add("text-green-500")
            } else if (window.scrollY>=serviceDistance && window.scrollY<doctorsDistance) {
                
                allLinks.forEach(link => link.classList.remove("text-green-500"))
                servicesLink.classList.add("text-green-500")
            } else if (window.scrollY>=doctorsDistance && window.scrollY<testimonialsDistance){
                
                allLinks.forEach(link => link.classList.remove("text-green-500"))
                doctorsLink.classList.add("text-green-500")
            } else if (window.scrollY>=testimonialsDistance && window.scrollY<contactDistance) {
                
                allLinks.forEach(link =>link.classList.remove("text-green-500"))
                testimonialsLink.classList.add("text-green-500")
            }else if (window.scrollY>=contactDistance) {
                allLinks.forEach(link => link.classList.remove("text-green-500"))
                contactLink.classList.add("text-green-500")
            } 
        })

        // Smooth Scrolling for Navigation Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                // allLinks.forEach(l => {
                //     l.classList.remove("clicked")
                // })

                // e.currentTarget.classList.add("clicked")

                const targetId = e.currentTarget.getAttribute('href');
                const targetElement = document.querySelector(targetId);


                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (!mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                }
            });
        });
        
        // Back to Top Button
        const backToTopButton = document.getElementById('back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove('hidden');
            } else {
                backToTopButton.classList.add('hidden');
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Animation on Scroll
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const fadeInObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, { threshold: 0.1 });
        
        fadeElements.forEach(element => {
            fadeInObserver.observe(element);
        });