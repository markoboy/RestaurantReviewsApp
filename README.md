# Udacity FEND - Restaurant Reviews Project

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

---

# Table of Contents

- [Project Overview](#project-overview)
- [Installation](#installation)
	- [Live demo](#live-demo)
	- [Local installation](#local-installation)
- [Browsers tested](#browsers-tested)
- [Tools used](#tools-used)
	- [Resources used](#resources-used)
- [Author](#author)
- [Contribution](#contribution)
- [License](#license)

# Project Overview

[(Back to top)](#table-of-contents)

For the **Restaurant Reviews** project my goal was to convert a static webpage to a mobile-ready web application. Through the course I was given a static design that lacks accessibility in order to convert the design to be responsive on different sized displays and to make it accessible for screen reader users. In addition, I had to add a service worker in order to create an offline experience for the users of the app.

# Installation

### Live Demo

[(Back to top)](#table-of-contents)

You can view a live demo on this [git page](https://markoboy.github.io/RestaurantReviewsApp/). You can only view the page layout as because the route of the server is `markoboy.github.io/` the data is not fetched because they are on the `RestaurantReviewsApp`. In order to make it work I have to change all the code to fetch from `RestaurantReviewsApp/` but then it will not work locally. So I decided to let it as it is in order to view the layout and the map :).

### Local Installation

[(Back to top)](#table-of-contents)

- Download the repository from the download button.
- Or clone the repository with Git.
- `git clone https://github.com/markoboy/RestaurantReviewsApp.git`
- Open the terminal into the project directory and spin up the server with `python -m SimpleHTTPServer 8000`. You need to have [Python](https://www.python.org) installed in order to run the server.
- Once you run the server, visit the site: [http://localhost:8000](http://localhost:8000)

# Browsers Tested

[(Back to top)](#table-of-contents)

- [**Google Chrome**](https://www.google.com/chrome/) - Version 67, Windows 10 x64
	- [**ChromeVox**](https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en) - Test screen reader
- [**Firefox**](https://www.mozilla.org/en-GB/firefox/new/) - Version 61, Windows 10 x64
- [**Android Google Chrome**](https://play.google.com/store/apps/details?id=com.android.chrome&hl=en_GB) - Version 64, Redmi Note 3 Pro

# Tools Used

[(Back to top)](#table-of-contents)

- [*Git version control*](https://git-scm.com/)
- [*Sublime text editor 3*](https://www.sublimetext.com/)
- [*Js Hint*](http://jshint.com/)

### Resources Used

[(Back to top)](#table-of-contents)

- **Styles**
	- [normalize.css v8.0.0](github.com/necolas/normalize.css)
- **API**
	- [Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript/tutorial)

# Author

[(Back to top)](#table-of-contents)

- _Responsive Design, Accessibilty and ServiceWorker_ - [Athanasios Markou](https://www.linkedin.com/in/a-markou/)
- _Initial work_ - [Udacity](https://github.com/udacity/mws-restaurant-stage-1)

# Contribution

[(Back to top)](#table-of-contents)

Pull requests are not welcomed, as this is a project to test my skills in `Responsive layout`, `Accessibilty features` and `ServiceWorker API`.

# License

[(Back to top)](#table-of-contents)

This project is licensed under the [MIT License](/LICENSE)
