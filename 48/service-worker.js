if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(function(registration) {
      console.log('Service Worker зареєстровано:', registration);
    })
    .catch(function(error) {
      console.log('Помилка при реєстрації Service Worker:', error);
    });
}