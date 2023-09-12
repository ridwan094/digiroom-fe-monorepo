export default function breadCrumbsPath(namePath) {
  return [
    { name: 'Home', path: '/' },
    { name: 'Berita dan Tips', path: '/berita-dan-tips' },
    { name: namePath.title },
  ];
}
