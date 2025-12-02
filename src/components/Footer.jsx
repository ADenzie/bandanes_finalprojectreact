const Footer = () => {
  return (
    <footer className="mt-24 py-12 text-center border-t bg-gray-50">
      <p className="text-gray-700 font-semibold">
        © {new Date().getFullYear()} Allen Daniel Bandanes • BSIT 3A
      </p>
      <p className="text-sm text-gray-500 mt-2">
        Final Project: Keshi Biography & Discography • React + Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;