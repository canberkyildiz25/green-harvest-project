const How = () => {
  return (
    <section className="section-how section" id="how-link">
      <h2 className="visually-hidden">Easy steps</h2>
      <div className="container container-how">
        <div className="how-img" data-aos="fade-right">
          <div className="how-img-container">
            <picture>
              <source
                srcSet="/img/how/HowDesctop.webp 1x, /img/how/HowDesctop@2x.webp 2x"
                media="(min-width: 1280px)"
                width="430"
                height="559"
              />
              <source
                srcSet="/img/how/HowTab.webp 1x, /img/how/HowTab@2x.webp 2x"
                media="(min-width: 768px)"
                width="640"
                height="640"
              />
              <source
                srcSet="/img/how/HowMob.webp 1x, /img/how/HowMob@2x.webp 2x"
                media="(max-width: 767px)"
                width="335"
                height="450"
              />
              <img
                className="how-img-mob"
                src="/img/how/HowMob.webp"
                alt="Woman cooking vegetables"
                loading="lazy"
              />
            </picture>
          </div>
        </div>
        <div className="easy-steps" data-aos="fade-left">
          <p className="cta-text">
            To order your <span className="transparent-text">vegetable</span> basket,
            simply follow these <span className="transparent-text">easy steps</span>
          </p>
          <p className="descr-text">
            Our baskets are assembled with care and delivered straight to your
            doorstep, so you can enjoy the taste of fresh fruit without ever leaving
            your home.
          </p>
          <ol className="steps-list">
            <li className="steps-item">
              <span className="li-wrapper-1">
                Just choose <span className="bold">the vegetable</span> you want to
                order by clicking on the checkboxes
                <span className="bold">next to it</span>.
              </span>
            </li>
            <li className="steps-item">
              <span className="li-wrapper-2">
                Click on <span className="bold">the basket</span> and fill out the form.
              </span>
            </li>
            <li className="steps-item">
              <span className="li-wrapper-3">
                Sit back and relax! Your
                <span className="bold">fresh vegetables</span> basket will be delivered.
              </span>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default How;
