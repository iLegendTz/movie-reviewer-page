export const removeClassActiveToCarouselTabs = (tabs, className) => {
  tabs.forEach((tab) => tab.classList.remove(`${className}`));
};
