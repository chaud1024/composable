import { onBeforeMount, onBeforeUnmount, ref } from "vue";

export const useMouse = () => {
  const x = ref(0);
  const y = ref(0);

  const update = (event) => {
    x.value = event.pageX;
    y.value = event.pageY;
  };

  onBeforeMount(() => {
    window.addEventListener("mousemove", update);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("mousemove", update);
  });

  return { x, y };
};
