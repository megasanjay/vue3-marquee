/* eslint-disable */
declare module "*.vue" {
  import type {
    defineProps,
    PropType,
    ref,
    onMounted,
    computed,
    watch,
  } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
