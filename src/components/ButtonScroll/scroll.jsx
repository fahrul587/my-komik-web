export const scroll = (toTop) => {
    toTop.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
};
