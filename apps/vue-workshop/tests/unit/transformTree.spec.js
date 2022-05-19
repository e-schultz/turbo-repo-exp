import transformTree from '../../src/workshop01/utils/transformTree';
/**
 *
 * vuetify v-treeview - https://vuetifyjs.com/en/api/v-treeview/#props
 *
 * by default, expects to be passed in
 * an array of objects that has an id, name and children
 *
 * the data that we have - either it be from an API response,
 * vuex store, etc - might not match this.
 *
 * so we want to map it to the shape that v-tree-view expects
 * let items = {
 *  id: 1,
 *  name: 'Applications :',
 * children: [
 *  { id: 2, name: 'Calendar : app' },
 *  { id: 3, name: 'Chrome : app' },
 *  { id: 4, name: 'Webstorm : app' }]
 * };
 *
 * For the purposes of this demo - I've come up with a schema
 * that is similar, but not exactly the same as the JSONSchema
 * used in the application, where we have an object with keys,
 * the 'label' is the name, and the children for the child nodes are
 * under properties
 */
const INITIAL_TREE = {
  item1: {
    id: 0,
    label: 'Parent 1',
    type: 'object',
    properties: {
      child1: {
        id: 1,
        label: 'Child 1-1',
      },
      child2: {
        id: 2,
        label: 'Child 1-2',
      },
    },
  },
  item3: {
    id: 6,
    label: 'Parent 3',
    properties: {
      child1: {
        id: 7,
        label: 'Child 3-1',
      },
      child2: {
        id: 8,
        label: 'Child 3-2',
      },
      child3: {
        id: 9,
        label: 'Nested Child',
        properties: {
          child4: {
            id: 10,
            label: 'child 3-2-1',
          },
        },
      },
    },
  },
};
describe('stuff', () => {
  let initialSchema;
  beforeEach(() => {
    // avoid any accidental mutation by creating
    // a deep copy
    initialSchema = JSON.parse(JSON.stringify(INITIAL_TREE));
  });
  // it should have a better unit test name
  it('should transform the object into an array of objects matching what v-treeview expects', () => {
    let expected = [
      {
        id: 0,
        key: 'item1',
        name: 'Parent 1',
        type: 'object',
        children: [
          { children: undefined, id: 1, key: 'child1', name: 'Child 1-1' },
          { children: undefined, id: 2, key: 'child2', name: 'Child 1-2' },
        ],
      },
      {
        id: 6,
        key: 'item3',
        name: 'Parent 3',
        children: [
          { children: undefined, id: 7, key: 'child1', name: 'Child 3-1' },
          { children: undefined, id: 8, key: 'child2', name: 'Child 3-2' },
          {
            children: [{ children: undefined, id: 10, key: 'child4', name: 'child 3-2-1' }],
            id: 9,
            key: 'child3',
            name: 'Nested Child',
          },
        ],
      },
    ];
    let actual = transformTree(initialSchema);
    expect(actual).toEqual(expected);
  });
  it('should map the label property to the name property', () => {
    /**
     * Partial Object Matching - if we only care about certian properties,
     * we don't need to mock out the entire object
     * - https://jestjs.io/docs/expect#expectobjectcontainingobject
     * https://codewithhugo.com/jest-array-object-match-contain/
     */

    let actual = transformTree(initialSchema);
    expect(actual[0]).toEqual(expect.objectContaining({ name: 'Parent 1' }));
    expect(actual).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: 'Parent 1' }),
        expect.objectContaining({ name: 'Parent 3' }),
      ])
    );
  });

  it('should use the provided itemText property instead of children', () => {
    let actual = transformTree(initialSchema, { itemText: 'displayValue' });

    expect(actual).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ displayValue: 'Parent 1', key: 'item1' }),
        expect.objectContaining({ displayValue: 'Parent 3', key: 'item3' }),
      ])
    );
  });

  it('should use the provided itemText property on the children items', () => {
    let actual = transformTree(initialSchema, { itemText: 'displayValue' });

    expect(actual[0].children).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ displayValue: 'Child 1-1', key: 'child1' }),
        expect.objectContaining({ displayValue: 'Child 1-2', key: 'child2' }),
      ])
    );
  });
});
