export const hideCarousels = (carousels) => {
  carousels.forEach((carousel) => {
    carousel.classList.add('d-none');
  });
};

export const removeClassActiveToCarouselTabs = (tabs, className) => {
  tabs.forEach((tab) => tab.classList.remove(`${className}`));
};
