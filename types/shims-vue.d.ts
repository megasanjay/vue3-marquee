/* eslint-disable */
declare module "*.vue" {
  import type {
    DefineComponent,
    PropType,
    ref,
    onMounted,
    computed,
    watch,
  } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
