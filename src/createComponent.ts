import FILEABLE_COMPONENT from './FILEABLE_COMPONENT.ts';
export default (component) => {
    component[FILEABLE_COMPONENT] = true;
    return component;
};
