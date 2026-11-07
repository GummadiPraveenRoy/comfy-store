import PageHero from '../components/PageHero';
import "./About.css"

export default function About() {
  return (
    <>
      <PageHero title="Home / About" />
      <section className="section section-center about-page">
        <div className="title">
          <h2>
            <span>/</span> about comfy
          </h2>
        </div>

        <p className="about-text">
          At Comfy, we believe that furniture is more than just a
          part of your home. It creates comfort, reflects your
          personality, and makes every space special. Our goal is
          to bring together style, quality, and comfort through
          a carefully selected collection of furniture.

          <br /><br />

          From elegant sofas to beautiful tables and modern home
          essentials, Comfy offers furniture designed to complement
          different lifestyles and make everyday living more
          enjoyable. We focus on providing a simple and convenient
          online shopping experience.

          <br /><br />

          Our vision is to make comfortable and stylish furniture
          accessible to everyone. We aim to help people transform
          their houses into welcoming homes with products that
          combine functionality, design, and affordability.
        </p>
      </section>
      {/* Product image showcase */}
      <section className="section">
        <div className="container">
          <div className="head">
            <h2>Explore Our Furniture Collection</h2>
            <p>
              Discover beautiful designs, modern furniture, and
              comfortable spaces with Comfy.
            </p>
          </div>

          <div className="blog-carousel">
            <div className="blog-carousel-box">

              <div className="blog-carousel-card">
                <img
                  src="https://images.pexels.com/photos/5998030/pexels-photo-5998030.jpeg"
                  alt="Modern comfortable sofa"
                />
              </div>

              <div className="blog-carousel-card">
                <img
                  src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600"
                  alt="Modern living room furniture"
                />
              </div>

              <div className="blog-carousel-card">
                <img
                  src="https://images.pexels.com/photos/8141962/pexels-photo-8141962.jpeg"
                  alt="Elegant home interior"
                />
              </div>

              <div className="blog-carousel-card">
                <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600"
                  alt="Stylish bedroom furniture"
                />
              </div>

              <div className="blog-carousel-card">
                <img
                  src="https://images.unsplash.com/photo-1499933374294-4584851497cc?w=600"
                  alt="Modern wooden furniture"
                />
              </div>

              <div className="blog-carousel-card">
                <img
                  src="https://images.pexels.com/photos/5712528/pexels-photo-5712528.jpeg"
                  alt="Minimalist home decor"
                />
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}