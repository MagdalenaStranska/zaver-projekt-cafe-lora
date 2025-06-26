import './header.css';

export const Header = () => {
    return(
        <div className="header__content container">
            <div className="site-logo"></div>

            <div className="navigation">
          <button className="nav-btn"></button>
         <nav className=" rollout-nav nav-closed">
            <a href="#home">domů</a>
            <a href="#menu">menu</a>
            <a href="#gallery">galerie</a>
            <a href="#contact">kontakt</a>
          </nav>
        </div>
        </div>
    )
}

export const setupHeaderEvents = () => {
    const navBtn = document.querySelector('.nav-btn');
    const nav = document.querySelector('.rollout-nav');

    if (navBtn && nav) {
        navBtn.addEventListener('click', () => {
           nav.classList.toggle('nav-closed');
    });

        nav.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                nav.classList.add('nav-closed');
            }
        })
    }
}