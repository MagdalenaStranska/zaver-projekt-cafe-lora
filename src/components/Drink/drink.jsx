import './drink.css';
import { Layer } from '../Layer/layer';

export const Drink = ({ id, name, ordered, image, layers }) => {
  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={image} alt={name} />
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
      {/* Tlačítko objednání (zatím nefunkční) */}
      <div className="drink__controls">
        <button className='order-btn'>Objednat</button>
      </div>
    </div>
  );
};