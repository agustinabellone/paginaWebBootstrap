((d) => {
    d.addEventListener('DOMContentLoaded', e => {
        
        //Actualizar año en el Footer:
        const copy = d.querySelector ('.Footer small')
        copy.innerHTML = `&copy; ${new Date().getFullYear()} @agustinabellone`

        //Efecto Menu Responsive:
        $('.navbar-nav>li>a').on('click', ( )=> $('.navbar-collapse').collapse('hide'))

        //Efecto Scroll:
        const scroll = new SmoothScroll ('a[href*="#"]');
    })
})(document);