const handleScrollToTop = (e) => {
  e.preventDefault();
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
export const ScrollToTop = () => (
  <a
    href="#top"
    onClick={handleScrollToTop}
    className="scrollToTop border p3 hidden md:block"
  >
    <img src="/images/uparrow.svg" width="32" alt="Up arrow" />
    Top
  </a>
);

export default ScrollToTop;
