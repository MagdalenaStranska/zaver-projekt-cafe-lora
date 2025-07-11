import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';

import { Header } from '../components/Header/header';
import { Footer } from '../components/Footer/footer';

document.querySelector('#root').innerHTML = render(
  
    <div className="page">
      <header>
   <Header showMenu={false} />
   </header>


      <main className="order">
        <div className="container order__content">
          <h1>Vaše objednávka</h1>
          <p className="empty-order">Zatím nemáte nic objednáno</p>
          <div className="order__items">
            <div className="order-item">
              <img
                src="/cups/espresso.png"
                className="order-item__image"
              />
              <div className="order-item__name">
                Espresso
              </div>
            </div>

            <div className="order-item">
              <img
                src="/cups/doppio.png"
                className="order-item__image"
              />
              <div className="order-item__name">
                Doppio
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
      <Footer />
    </footer>
    </div>
  );

