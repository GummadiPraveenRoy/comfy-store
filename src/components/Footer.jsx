export default function Footer() {
  return (
    <footer className="site-footer">
      <p>
        &copy; {new Date().getFullYear()} <span className="text-slanted">Comfy</span>. All rights
        reserved.
      </p>
    </footer>
  );
}
