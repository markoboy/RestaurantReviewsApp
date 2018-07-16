var staticCacheName = 'restaurant-static-v1.9';

/**
 * Install the service worker.
 */
self.addEventListener('install', function(event) {
	console.log('Creating cache, ', staticCacheName);
	event.waitUntil(
		caches.open(staticCacheName).then(function(cache) {
			return cache.addAll([
				'/',
				'index.html',
				'restaurant.html',
				'css/normalize.css',
				'css/responsive.css',
				'data/restaurants.json',
				'js/dbhelper.js',
				'js/main.js',
				'js/restaurant_info.js',
				'img/1.jpg',
				'img/2.jpg',
				'img/3.jpg',
				'img/4.jpg',
				'img/5.jpg',
				'img/6.jpg',
				'img/7.jpg',
				'img/8.jpg',
				'img/9.jpg',
				'img/10.jpg'
			]);
		})
	);
});

/**
 * Activate the new cache and delete the old ones.
 */
self.addEventListener('activate', (event) => {
	event.waitUntil(
	  	caches.keys().then(function(cacheNames) {
	  		return Promise.all(
	  			cacheNames.filter(function(cacheName) {
	  				return cacheName.startsWith('restaurant-') && cacheName != staticCacheName;
	  			}).map(function(cacheName) {
	  				return caches.delete(cacheName);
	  			})
	  		);
	  	})
	);
});

/**
 * Fetch event in order to load from service worker if the request is there.
 */
self.addEventListener('fetch', function(event) {
	// Store the requested url.
	let requestUrl = event.request.url;

	event.respondWith(
		caches.match(event.request)
			.then( response => {
				return response || fetch(event.request);
			})
			.catch( error => {
				// Check if the FetchEvent got an error because of the restaurant.html?id*
				if (requestUrl.includes('restaurant.html')) {
					return caches.match('/restaurant.html'); // Return the cached version of the restaurant info page.
				}
			})
	);
});

// Listen for messages in order to skipWaiting.
self.addEventListener('message', (event) => {
	if (event.data.skipWaiting) {
		self.skipWaiting();
	}
});
