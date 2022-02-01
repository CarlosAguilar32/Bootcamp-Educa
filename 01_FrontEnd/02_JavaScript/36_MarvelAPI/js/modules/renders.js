function getPrice(price) {
  const original = price == 0 ? 2.99 : price;
  const sale = (original - 2.0).toFixed(2);
  return { original, sale };
}

function getImage({ path, extension }) {
  //return path + "." + extension
  return `${path}.${extension}`;
}
function getFormat(format) {
  return format == "" ? "Comic" : format;
}

const comicRender = (data) => {
  const obj = data[0];

  const comic = {
    id: obj.id,
    title: obj.title,
    price: 0,
    description: obj.description,
    stocks: obj.stories.available,
    creators: obj.creators.items,
    image: getImage(obj.thumbnail),
    format: getFormat(obj.format),
  };
  return comic;
};

export { comicRender };
