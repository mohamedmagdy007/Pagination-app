export default function Paginate(followers) {
  const items = 10;
  const pages = Math.ceil(followers.length / items);
  const newFollowers = Array.from({ length: pages }, (k, index) => {
    const start = index * items;
    return followers.slice(start, start + items);
  });
  return newFollowers;
}
