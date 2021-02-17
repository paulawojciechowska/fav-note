export const removeItem = (itemType, id) => ({
  type: 'REMOVE_ITEM',
  payload: {
    itemType,
    id,
  },
});

export const addItem = (itemType, itemContent) => {
  const getId = () => `_${Math.random().toString(36).substr(2, 9)}`;
  return {
    type: 'ADD_ITEM',
    payload: {
      itemType,
      item: {
        id: getId(),
        ...itemContent,
      },
    },
  };
};

// id: 1,
// title: 'Test Note',
// created: '2 days ago',
// content:
//   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
// articleUrl: 'https://youtube.com/helloroman',
// twitterUrl: 'https://pbs.twimg.com/profile_images/1173367116562685954/k-MYyrws_400x400.jpg',
