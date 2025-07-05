import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

import { Header, setupHeaderEvents } from '../components/Header/header';
import { Banner } from '../components/Banner/banner';
import { Menu } from '../components/Menu/menu';
import { Gallery } from '../components/Gallery/gallery';
import { Contact } from '../components/Contact/contact';
import { Footer } from '../components/Footer/footer';

fetch('http://localhost:4000/api/drinks')
  .then((response) => response.json())
  .then((data) => {
    console.log('Načtená data:', data);
    console.log('Počet nápojů:', Array.isArray(data.data) ? data.data.length : 'neznámá struktura');

    document.querySelector('#root').innerHTML = render(
      <div className="page">
        <header>
      <Header />
    </header>
        <main>
          <Banner />
          <Menu drinks={data.data} />
          <Gallery />
          <Contact />
        </main>
        <footer>
      <Footer />
    </footer>
      </div>
    );

    setupHeaderEvents();

    const orderForms = document.querySelectorAll('.drink__controls');
    console.log('Počet formulářů:', orderForms.length); // pro kontrolu

    orderForms.forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const id = form.dataset.id;
        const currentOrdered = form.dataset.ordered === 'true';
        const newOrdered = !currentOrdered;
        console.log('Kliknuto na nápoj s id:', id);

        fetch(`http://localhost:4000/api/drinks/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify([
         {
          op: 'replace',
          path: '/ordered',
          value: newOrdered,
    },
  ]),
})
  .then((response) => response.json())
  .then((updatedDrink) => {
    console.log('Odpověď z API:', updatedDrink);

     window.location.reload();
  })
  .catch((error) => {
    console.error('Chyba při PATCH:', error);
  });

      });
    });
  })
  .catch((err) => {
    console.error('Chyba při načítání dat:', err);
  });