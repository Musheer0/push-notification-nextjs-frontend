self.addEventListener('push', (event) => {
    if (event.data) {
        const data = event.data.json();
        const options = {
            body: data.body,
            icon: data.icon,
            badge: '/badge.png',
            vibrate: [100, 50, 100],
            data: {
                dateOfArrival: Date.now(),
                primaryKey: data.prkey,
            },
        };
        event.waitUntil(self.registration.showNotification(data.title, options)); // Fix here
    }
});

self.addEventListener('notificationclick', (event) => {
    const data = event.notification.data; // Corrected to access data from event.notification

    console.log('Notification clicked');
    event.notification.close();
    event.waitUntil(clients.openWindow(data.url));
});
