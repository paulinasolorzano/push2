self.addEventListener('install', event => {
    console.log('Service Worker installed');
    event.waitUntil(self.skipWaiting());
  });
  
  self.addEventListener('activate', event => {
    console.log('Service Worker activated');
    event.waitUntil(self.clients.claim());
  });
  
  self.addEventListener('message', event => {
    if (event.data && event.data.action === 'simulatePush') {
      console.log('Simulating push notification...');
      self.registration.showNotification('Test Notification', {
        body: 'This is a simulated push notification!',
      });
    }
  });
  
  // Handle notification click event
  self.addEventListener('notificationclick', event => {
    console.log('Notification clicked:', event.notification);
    event.notification.close();
  });
  