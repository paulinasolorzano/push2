// Register the Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./service-worker.js')
      .then(() => console.log('Service Worker registered successfully'))
      .catch(err => console.error('Service Worker registration failed:', err));
  }
  
  // Simulate Push Notifications
  document.getElementById('enableNotifications').addEventListener('click', () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(registration => {
        registration.active.postMessage({ action: 'simulatePush' });
      });
    }
  });
  
