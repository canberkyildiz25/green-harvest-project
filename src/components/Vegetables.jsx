const vegetables = [
  { name: 'eggplant', price: 60 },
  { name: 'leek', price: 50 },
  { name: 'mushrooms', price: 40 },
  { name: 'corn', price: 60 },
  { name: 'sweet potatoes', price: 50, image: 'sweet-potatoes' },
  { name: 'carrot', price: 40 },
];

const Vegetables = () => {
  return (
    <section className="section section-vegetables" id="vegetables">
      <div className="container">
        <h2
          className="title-second vegetables-title"
          data-aos="fade-down"
        >
          organic
          <span className="vegetables-title-shadow"> vegetables</span>
        </h2>
        <p className="vegetables-text" data-aos="fade-up">
          Our organic vegetables are hand-picked from local farms and delivered
          straight to your doorstep, ensuring that you get the freshest and most
          nutritious produce possible.
        </p>
        <ul className="vegetables-list" data-aos="fade-left">
          {vegetables.map((veg) => (
            <li key={veg.name} className="vegetables-item">
              <h3 className="vegetables-name">{veg.name}</h3>
              <p className="vegetables-price">{veg.price} USD / kg</p>
              <img
                className="vegetables-image"
                srcSet={`
                  /img/vegetables/${veg.image || veg.name}@2x.webp 2x,
                  /img/vegetables/${veg.image || veg.name}@3x.webp 3x
                `}
                src={`/img/vegetables/${veg.image || veg.name}.webp`}
                alt={veg.name}
                width="282"
                height="243"
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Vegetables;
