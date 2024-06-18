import Item from './Item.js';
import { getShoppingList, getCompletedList } from './model.js';

const shoppingListDiv = document.querySelector('.shopping-list');
const completedDiv = document.querySelector('.completed');

export const renderShoppingList = () => {
  const shoppingList = getShoppingList();
  shoppingListDiv.innerHTML = shoppingList.map(({ item, priority, id }) => {
    return Item(item, priority, id);
  }).join('');
};

export const renderCompletedList = () => {
  const completedList = getCompletedList();
  completedDiv.innerHTML = completedList.map(({ item, priority, id }) => {
    return Item(item, priority, id);
  }).join('');
};
