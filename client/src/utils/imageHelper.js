export const getImageUrl = (item) => {
  const imageUrl = item?.attributes?.image?.data?.attributes?.url;
  const formats = item?.attributes?.image?.data?.attributes?.formats;

  if (formats?.medium?.url) {
    return formats.medium.url;
  }
  if (formats?.small?.url) {
    return formats.small.url;
  }
  if (formats?.thumbnail?.url) {
    return formats.thumbnail.url;
  }
  if (imageUrl) {
    return imageUrl;
  }

  return "/default-image.jpg";
};
