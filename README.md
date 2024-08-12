# BIN Checker Web App

## Overview

The BIN Checker Web App is a simple tool that allows users to check the details of a Bank Identification Number (BIN). It provides information about the card's brand, issuing bank, and country. This web app is built using HTML5, CSS, and JavaScript, and it implements various modern features such as SVG icons, a responsive design, and dynamic content handling through a ViewModel.

## Features

- **BIN Lookup**: Check the brand, issuing bank, and country of a BIN.
- **Search History**: Automatically saves and displays past BIN checks.
- **Dark/Light Theme Toggle**: Switch between dark and light themes.
- **History Management**: Filter, sort, and export the history of BIN checks.
- **Responsive Design**: Fully responsive layout that works across different devices.
- **SVG Icons**: Scalable vector graphics for crisp and clear icons at any size.
- **Animations**: Smooth transitions and animations between sections.

## Directory Structure

```plaintext
BinChecker-WebApp/
├── index.html
├── styles.css
├── script.js
├── viewModel.js
└── icons/
    ├── ic_credit_card.svg
    ├── ic_favorite.svg
    └── ic_settings.svg
```

## Technologies Used

- **HTML5**: Markup language used to structure the content of the web app.
- **CSS3**: Stylesheet language used for styling the web app and providing smooth animations.
- **JavaScript**: Programming language used for dynamic content handling and ViewModel management.
- **SVG**: Scalable Vector Graphics used for icons to ensure they look sharp on all devices.
- **JavaScript (ES6+)**: For functionality and API integration.
- **Knockout.js**: For implementing the ViewModel architecture.

## Known Issues

- The app relies on the availability of the BIN List API service. If the API is down or unreachable, the app will not function correctly.
- Certain older browsers may not fully support the features used in the app, such as SVG icons or certain JavaScript functions.

## Special Thanks

- **[BIN List API](https://binlist.net/)**: A free and easy-to-use API service that provides BIN lookup data.
- **[Knockout.js](https://knockoutjs.com/)**: A powerful JavaScript library used to implement the ViewModel architecture in the app.

## Author
[PaPaGuyCodes](https://github.com/PaPaGuyCodes)

## License

This project is licensed under the [MIT License](LICENSE).
