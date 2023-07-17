# What's for lunch? 🧀 🍞 🥩 🍇 🥕 🍫

Generate items for your Adult Lunchable, I mean.. Charcuterie.

https://darnocer.github.io/lunch/

## Motivation

A lil app I made to help my partner and I with our meal prep. And also to make sure I remembered VanillaJS. Making continuous updates to practice some fundamental concepts and experiement with refacoring in various ways.

## Usage

- Click "Generate" to generate a random food item for each category.
- Click the checkbox to "lock" an item and regenerate items for the other catgories.

## Setup

- Clone to your local machine
- Update items in `data.json`
- In `index.js`, update `fetch` to pull from `data.json` for local usage
- Use hosted URL if deployed to Github Pages, eg.

```js
fetch("https://darnocer.github.io/lunch/data.json");
```

## ToDo

- [ ] Implement CRUD:
  - [ ] Add/remove categories
  - [ ] Edit data from front-end
- [ ] Make prettier
- [ ] Logic for food pairings
