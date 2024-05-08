import { ref, watch } from "vue";

export const useLocalStorage = (key, defaultValue) => {
  const storageValue = localStorage.getItem(key);

  const data = ref(storageValue ? JSON.parse(storageValue) : defaultValue);

  watch(data, (newValue) => {
    // 데이터에 변화(newValue)가 생기면 storage에 덮어씌움(setItem)
    localStorage.setItem(key, JSON.stringify(newValue));
  });

  return { data };
};
