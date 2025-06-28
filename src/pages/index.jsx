import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

import { Header, setupHeaderEvents } from '../components/Header/header';
import { Banner } from '../components/Banner/banner';
import { Menu } from '../components/Menu/menu';
import { Gallery } from '../components/Gallery/gallery';
import { Contact } from '../components/Contact/contact';
import { Footer } from '../components/Footer/footer';

fetch('http://localhost:4001/api/drinks')
  .then((response) => response.json())
  .then((data) => {
    console.log('Načtená data:', data);
    console.log('Počet nápojů:', data.length);
    console.log('DATA:', data);

  document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu drinks={data.data} />
      <Gallery />
      <Contact />    
    </main>
    <Footer />  
  </div>
);

setupHeaderEvents();
  })

.catch((err) => {
    console.error('Chyba při načítání dat:', err);
  });