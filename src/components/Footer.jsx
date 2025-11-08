const Footer = () => {
  return (
    <div className="relative mt-32 py-4 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">
      <p className="py-4 md:absolute left-6 bottom-4 md:bottom-auto">
        &copy; 2025 <span className="font-bold">Carmenita Lamba. </span>All
        rights reserved.
      </p>

      <div className="flex gap-7 justify-center">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Projects">Projects</a>
      </div>

      <div className="flex items-center gap-3 md:absolute right-6 bottom-4 md:bottom-auto">
        <a
          href="https://github.com/carmenitarosalinee"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-github-fill ri-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/carmenita-lamba-6a7555220/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-linkedin-fill ri-2x"></i>
        </a>
        <a
          href="https://www.instagram.com/carmenitarosaline_?igsh=MXJsZmkxNmR6cWRkYQ=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-instagram-fill ri-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
