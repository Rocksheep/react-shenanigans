console.log('loaded service-worker');
self.addEventListener('install', (event) => {
    console.log('installed');
})

self.addEventListener('fetch', (event) => {
    console.log('doing fetch');
    if (event.request.method != 'GET') {
      return;
    }
  
    console.log(event);
  });