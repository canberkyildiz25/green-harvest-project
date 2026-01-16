const reviews = [
  {
    name: 'John Wax',
    text: 'These vegetables are my secret to delicious and healthy meals. The quality is always at the highest level, the aroma and taste are enchanting. I advise every fan of real products!',
    image: 'review-1'
  },
  {
    name: 'Victoria Romashenko',
    text: 'I love how fast and fresh the vegetables are delivered. Salads always turn out so appetizing, and soups are real masterpieces. The quality is impeccable!',
    image: 'review-2'
  },
  {
    name: 'Ihor Trachuk',
    text: 'Recently tried my fresh tomatoes and peppers - amazing! The authenticity of the taste, as if from the garden directly to my table. It is now my main vegetable supplier.',
    image: 'review-3'
  }
];

const Reviews = () => {
  return (
    <section className="review section" id="review">
      <div className="container">
        <h2
          className="review-title title-second"
          data-aos="fade-down"
        >
          Reviews from our <span className="accent-color">Customers</span>
        </h2>
        <p className="review-text" data-aos="fade-up">
          Words of our customers: impressions and opinions about the quality of our
          services and the freshness of our products.
        </p>
        <ul className="review-list" data-aos="fade-right">
          {reviews.map((review, index) => (
            <li key={review.name} className={`review-item ${index > 0 ? 'hidden-one' : ''} ${index > 1 ? 'hidden-two' : ''}`}>
              <img
                className="review-list-avatar"
                srcSet={`
                  /img/reviews/${review.image}@2x.jpg 2x,
                  /img/reviews/${review.image}@3x.jpg 3x
                `}
                src={`/img/reviews/${review.image}.jpg`}
                alt={`${review.name} avatar`}
                width="56"
                height="56"
                loading="lazy"
              />
              <h3 className="review-list-fullname">{review.name}</h3>
              <p className="review-list-text">{review.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Reviews;
