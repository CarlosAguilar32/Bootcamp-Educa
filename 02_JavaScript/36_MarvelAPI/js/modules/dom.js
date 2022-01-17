const DOM = {
  find: (query, from) => {
    return from.querySelector(query);
  },

  create: (tag) => {
    return document.createElement(tag);
  },
};
export default DOM;
