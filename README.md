# What's for lunch? 🧀 🍞 🥩 🍇 🥕 🍫

An Adult Lunchable (er.. Charcuterie) generator. 

A simple app I made with VanillaJS to help my partner and I with ideas for our weekly meal prep. 

https://darnocer.github.io/lunch/

## Usage

1. Click "Generate" to generate a random food item for each category.
2. Click the checkbox to "lock" an item you like
3. Click "Generate" again to re-generate items for the unlocked catgeories 

## Setup

- Clone to your local machine
- Update food items in `data.json`
- In `index.js`, update `fetch` to pull from `data.json` for local usage
- Use hosted URL if deployed to Github Pages, eg.

```js
fetch("https://darnocer.github.io/lunch/data.json");
```


