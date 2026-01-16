import { useState } from 'react';

const Order = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your order! We will contact you soon.');
    setFormData({ name: '', email: '', comment: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="section order-section" id="section-order">
      <div className="container">
        <h2
          className="title-second title-order"
          data-aos="fade-down"
        >
          fresh <span className="accent-title-order">harvest</span> box has got you
          covered
        </h2>
        <p className="content-order" data-aos="fade-up">
          Our boxes are packed with delicious, nutritious vegetables, perfect for
          anyone looking to eat healthier or support local farmers. Order your box
          today and start enjoying the best that nature has to offer!
        </p>
        <div className="form-social-wrapper">
          <div
            className="contact-block-order"
            data-aos="fade-right"
          >
            <p className="slogan-block-order">
              Ordering <span className="accntred-slogan-order">from us</span> is quick
              and easy! Fill out
              <span className="accntgreen-slogan-order"> the form</span> below and we
              will contact you!
            </p>
            <form className="form-block-order" onSubmit={handleSubmit}>
              <div className="form-wrapper-field-order">
                <label className="visually-hidden" htmlFor="user-name">Full Name</label>
                <input
                  className="form-input-order"
                  maxLength="32"
                  id="user-name"
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-wrapper-field-order">
                <label className="visually-hidden" htmlFor="user-email">Email</label>
                <input
                  className="form-input-order"
                  maxLength="32"
                  id="user-email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-wrapper-field-order text-area-order">
                <label className="visually-hidden" htmlFor="user-comment">Comment</label>
                <textarea
                  className="form-comment-order"
                  maxLength="500"
                  name="comment"
                  id="user-comment"
                  placeholder="Comment"
                  value={formData.comment}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button className="form-order-btn" type="submit">Send</button>
            </form>
          </div>
          <div
            className="social-block-order"
            data-aos="fade-left"
          >
            <div className="img-wrapper-social-order">
              <picture>
                <source
                  srcSet="
                    /img/order/order-img.webp 1x,
                    /img/order/order-img@2x.webp 2x,
                    /img/order/order-img@3x.webp 3x
                  "
                  media="(min-width: 1280px)"
                  width="427"
                  height="273"
                />
                <source
                  srcSet="
                    /img/order/order-img-tab.webp 1x,
                    /img/order/order-img-tab@2x.webp 2x
                  "
                  media="(min-width: 768px)"
                  width="528"
                  height="273"
                />
                <source
                  srcSet="
                    /img/order/order-img-mob.webp 1x,
                    /img/order/order-img-mob@2x.webp 2x
                  "
                  media="(max-width: 767px)"
                  width="295"
                  height="167"
                />
                <img
                  className="img-social-order"
                  src="/img/order/order-img-mob.webp"
                  alt="Fresh vegetables basket"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
