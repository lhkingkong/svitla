export const DEFAULT_PAGE_SIZE = 10;
/* export interface Photo {
  id: number;
  title: string;
  url: string;
} */

async function getAllPhotos() {
  return await (await fetch(
    "https://jsonplaceholder.typicode.com/photos"
  )).json();
}

let allPhotosPromise = getAllPhotos();

/**
 * @param index start index of items to be returned
 * @param pageSize number of items to return, default: 10
 */
export default async function getPhotos(
  index,
  pageSize = DEFAULT_PAGE_SIZE
) {
  return new Promise((resolve, reject) => {
    allPhotosPromise.then(allPhotos => {
      setTimeout(() => {
        resolve(allPhotos.slice(index, index + pageSize));
      }, Math.random() * 500);
    });
  });
}