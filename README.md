# learningReact-pokedex
 
Pokédex

This project is a simple **Pokédex** web application built with **React** and **Vite**. It allows users to browse through the first 151 Pokémon, view their stats, types, moves, and images, and search for specific Pokémon by name or Pokédex number. Learnt to build this with the help of [Smoljames' Tutorial](https://www.youtube.com/@Smoljames)

## Features

- **Search Functionality**: Search for Pokémon by name or Pokédex number.
- **Pokémon Details**: View detailed information about each Pokémon, including stats, types, and available moves.
- **Move Descriptions**: Fetch and display detailed descriptions of Pokémon moves.
- **Responsive Design**: Works on both desktop and mobile devices.
- **Caching**: Uses `localStorage` to cache Pokémon and move data for faster subsequent loads.

---

## Project Structure


### Key Files and Directories

- **`src/`**: Contains the main source code for the application.
  - **`App.jsx`**: The root component that combines the header, side navigation, and Pokémon details.
  - **`components/`**: Contains reusable React components:
    - **`Header.jsx`**: Displays the app's header with a toggle button for the side navigation.
    - **`SideNav.jsx`**: Implements the side navigation menu for browsing Pokémon.
    - **`PokeCard.jsx`**: Displays detailed information about the selected Pokémon.
    - **`TypeCard.jsx`**: Displays the type of a Pokémon with styled colors.
    - **`Modal.jsx`**: Used to display move descriptions in a modal.
  - **`utils/`**: Contains utility functions and constants:
    - **`index.js`**: Includes the list of the first 151 Pokémon, type colors, and helper functions for formatting Pokédex numbers.
  - **`fanta.css`** and **`index.css`**: Stylesheets for the application.
- **`public/`**: Contains static assets like Pokémon images.
- **`index.html`**: The main HTML file for the app.
- **`vite.config.js`**: Configuration file for Vite.
- **`.vscode/settings.json`**: VS Code-specific settings.

---

## How It Works

1. **Side Navigation**: 
   - The side navigation lists all 151 Pokémon.
   - Users can search for Pokémon by name or Pokédex number.
   - Clicking on a Pokémon updates the main view with its details.

2. **Pokémon Details**:
   - Displays the Pokémon's name, types, stats, and available moves.
   - Clicking on a move fetches its description from the PokéAPI and displays it in a modal.

3. **Caching**:
   - Pokémon data and move descriptions are cached in `localStorage` to reduce API calls and improve performance.

---
