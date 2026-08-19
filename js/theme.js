const body = document.body;
if (!body) {
  throw new Error('Body not found for theme setup');
}

const fileName = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
const themeMap = {
  'index.html': 'home-page',
  'chven.html': 'page-about',
  'service.html': 'page-service',
  'swavla.html': 'page-study',
  'learn.html': 'page-learn',
  'english.html': 'page-english',
  'serviceeng.html': 'page-service-eng',
  'us.html': 'page-us',
  'armpits.html': 'page-armpits',
  'back.html': 'page-back',
  'bikini.html': 'page-bikini',
  'bikinieng.html': 'page-bikini-eng',
  'breast.html': 'page-breast',
  'fexi.html': 'page-fexi',
  'heand.html': 'page-heand',
  'iglia.html': 'page-iglia',
  'kheli.html': 'page-kheli',
  'legs.html': 'page-legs',
  'lips.html': 'page-lips',
  'mkerdi.html': 'page-mkerdi',
  'tuchi.html': 'page-tuchi',
  'zurgi.html': 'page-zurgi'
};

const themeName = themeMap[fileName] || 'page-default';
body.classList.add(themeName);
