let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(copyMe = {}, arrayX = []) {
  if (arrayX.length === 0) {
    console.log(copyMe);
  } else {
    copyMe= {};
    for (i = 0; i < arrayX.length; i++) {
      for (let obj in objToCopy) {
        if (arrayX[i] === obj) {
          copyMe[obj] = objToCopy[obj];
          }
        }
      }
      console.log(copyMe);
    }
  };

copyObj(objToCopy);
copyObj(objToCopy, ['foo', 'qux']);
copyObj(objToCopy, ['bar']);
