"use strict";

let items = {};
let incrementId = 1;

function create(item) {
  item.id = incrementId++;
  items[item.id] = item;
  return item.id;
}

function fetchAll() {
  return items;
}

function reset() {
  items = {};
  incrementId = 1;
}

module.exports = {
  create: create,
  fetchAll: fetchAll,
  reset: reset
};
