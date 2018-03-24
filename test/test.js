import { capitalize, mapModelsToState, updateModel } from '../src';

process.chdir(__dirname);

describe('vuex-bound', () => {
  it('should handle capitalize', () => {
    expect(capitalize('foo')).toBe('Foo');
  });

  it('should handle mapModelsToState for module name', () => {
    const MODULE_NAME = 'foo';
    const computed = { ...mapModelsToState(MODULE_NAME, ['modelName1', 'modelName2']) };

    expect(computed).toMatchSnapshot();
  });

  it('should handle mapModelsToState for sub-module name', () => {
    const MODULE_NAME = 'foo.bar';
    const computed = { ...mapModelsToState(MODULE_NAME, ['modelName1', 'modelName2']) };

    expect(computed).toMatchSnapshot();
  });

  it('should handle mapModelsToState for sub-sub-module name', () => {
    const MODULE_NAME = 'foo.bar.baz';
    const computed = { ...mapModelsToState(MODULE_NAME, ['modelName1', 'modelName2', 'modelName3']) };

    expect(computed).toMatchSnapshot();
  });

  it('should handle updateModel for module name', () => {
    const mutations = { ...updateModel() };
    expect(mutations).toMatchSnapshot();
  });
});
