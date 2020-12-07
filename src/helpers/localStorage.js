export const getItem = name => {
  try {
    return new Promise(resolve => {
      resolve(JSON.parse(localStorage.getItem(name)));
    });
  } catch (e) {
    console.log('Error geting data from localStorage', e);
    return null;
  }
};

export const setItem = (name, key) => {
  try {
    localStorage.setItem(name, JSON.stringify(key));
  } catch (e) {
    console.log('Error saving data in localStorage', e);
  }
};

export const editItem = (name, key, value) => {
  try {
    const arr = JSON.parse(localStorage.getItem(name));
    arr[key] = value;
    localStorage.setItem(name, JSON.stringify(arr));
  } catch (e) {
    console.log('Error edit data in localStorage', e);
  }
};

export const editInnerItem = (name, key, data) => {
  try {
    const arr = JSON.parse(localStorage.getItem(name));
    arr[key][data.key] = data.value;
    localStorage.setItem(name, JSON.stringify(arr));
  } catch (e) {
    console.log('Error edit data in localStorage', e);
  }
};

export const deleteInnerItem = (name, key, data) => {
  try {
    const arr = JSON.parse(localStorage.getItem(name));
    delete arr[key][data.key];
    localStorage.setItem(name, JSON.stringify(arr));
  } catch (e) {
    console.log('Error delete data in localStorage', e);
  }
};

export const deleteItem = (name, key) => {
  try {
    const arr = JSON.parse(localStorage.getItem(name));
    arr.splice(key, 1);
    localStorage.setItem(name, JSON.stringify(arr));
  } catch (e) {
    console.log('Error delete data in localStorage', e);
  }
};
