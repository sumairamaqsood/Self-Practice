const socials = ['Twitter', 'Facebook', 'Instagram', 'Youtube'];
// socials.forEach(function (item) {
//   console.log(item);
// });
// OR
// socials.forEach((item, index, arr) => console.log(`${index}- ${item}`));
//OR
function logsocials(social) {
  console.log(social);
}
socials.forEach(logsocials);

const links = [
  { name: 'Insta', Url: 'http://instagram.com' },
  { name: 'Facebook', Url: 'http://facebook.com' },
  { name: 'Youtube', Url: 'http://youtube.com' },
  { name: 'Twitter', Url: 'http://twitter.com' },
];
links.forEach((item) => console.log(item.Url));
