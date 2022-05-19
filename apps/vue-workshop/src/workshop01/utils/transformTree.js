export default function transformTree(tree, options = {}) {
  const { itemKey = 'id', itemText = 'name', itemChildren = 'children' } = options;
  return Object.entries(tree).reduce((acc, currentItem) => {
    let [key, value] = currentItem;
    let { label, properties, id, ...rest } = value;

    let children = properties
      ? transformTree(properties, { itemKey, itemText, itemChildren })
      : undefined;

    return [...acc, { key, [itemKey]: id, [itemText]: label, [itemChildren]: children, ...rest }];
  }, []);
}

/*
before changes:
export default function transformTree(tree) {
  return Object.entries(tree).reduce((acc, currentItem) => {
    let [key, value] = currentItem;
    let { label, properties, id, ...rest } = value;

    let children = properties ? transformTree(properties) : undefined;

    ///  let id = value.id;
    // console.log({ key, value });

    return [...acc, { key, id, name: label, children: children, ...rest }];
  }, []);
}
*/

/* after changes */
/*
export default function transformTree(tree, options = {}) {
  const { itemKey = 'id', itemText = 'name', itemChildren = 'children' } = options;
  return Object.entries(tree).reduce((acc, currentItem) => {
    let [key, value] = currentItem;
    let { label, properties, id, ...rest } = value;

    let children = properties ? transformTree(properties) : undefined;

    ///  let id = value.id;
    // console.log({ key, value });

    return [...acc, { key, [itemKey]: id, [itemText]: label, [itemChildren]: children, ...rest }];
  }, []);
}
*/

/*
refactor to apply to children 
export default function transformTree(tree, options = {}) {
  const { itemKey = 'id', itemText = 'name', itemChildren = 'children' } = options;
  return Object.entries(tree).reduce((acc, currentItem) => {
    let [key, value] = currentItem;
    let { label, properties, id, ...rest } = value;

    let children = properties
      ? transformTree(properties, { itemKey, itemText, itemChildren })
      : undefined;

    return [...acc, { key, [itemKey]: id, [itemText]: label, [itemChildren]: children, ...rest }];
  }, []);
}

*/
