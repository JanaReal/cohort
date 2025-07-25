import { atom, selector } from 'recoil';

export const inputTodoTitle = atom({
  key: 'inputTodoTitle',
  default: '',
});

export const inputTodoDesc = atom({
  key: 'inputTodoDesc',
  default: '',
});

export const isOddEvenSelector = selector({
  key:'isOddEvenSelector',
  get: ({get}) => {
    const count = get(todos);
    return count % 2 == 0;
  },
  
})
