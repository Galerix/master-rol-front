import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
  const { url } = media.data ? media.data.attributes : media.attributes;
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}

export function getImageUrl(item) {
  return getStrapiMedia(item.attributes.images.data[0]);
}
