import Immutable from 'immutable';

export function getListObject(array) {
  return Immutable.List(array);
}

export function addElementToList(list, element) {
  return list.push(element);
}
