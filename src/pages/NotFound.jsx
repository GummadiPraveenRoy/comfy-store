import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

export default function NotFound() {
  return (
    <>
      <PageHero title="Home / 404" />
      <section className="section section-center" style={{ textAlign: 'center' }}>
        <h3 className="error">page not found</h3>
        <Link to="/" className="btn">
          back home
        </Link>
      </section>
    </>
  );
}
