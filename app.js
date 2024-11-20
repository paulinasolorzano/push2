// Register the Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('service-worker.js')
    .then(() => console.log('Service Worker registered successfully'))
    .catch(err => console.error('Service Worker registration failed:', err));
}

// Request notification permissions and send a message to the Service Worker
document.getElementById('enableNotifications').addEventListener('click', () => {
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      console.log('Notification permission granted');

      navigator.serviceWorker.ready.then(registration => {
        const messageChannel = new MessageChannel();

        // Handle response from the service worker
        messageChannel.port1.onmessage = event => {
          console.log('Response from service worker:', event.data);
        };

        // Send the message to the service worker
        registration.active.postMessage(
          { action: 'simulatePush' },
          [messageChannel.port2]
        );
      });
    } else {
      console.error('Notification permission denied');
    }
  });
});

