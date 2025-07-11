import './drink.css';
import { Layer } from '../Layer/layer';

export const Drink = ({ id, name, ordered, image, layers }) => {
  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={`http://localhost:4000${image}`} alt={name} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
          {layers.map((layer, index) => (
    <Layer
      key={index}
      color={layer.color}
      label={layer.label}
    />
  ))}
        </div>
      </div>
        <form className="drink__controls" 
        data-id={id}
        data-ordered={ordered}
        >
        <button className={`order-btn ${ordered ? 'order-btn--ordered' : ''}`}>
          {ordered ? 'Zrušit' : 'Objednat'}
        </button>
      </form>
    </div>
  );
};