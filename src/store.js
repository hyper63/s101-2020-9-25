import { writable } from "svelte/store";

export const store = writable({
  current: "Charleston, SC",
});

export const dispatch = (action) =>
  new Promise((resolve) =>
    store.update((state) => {
      resolve();
      if (action.type === "SET_CURRENT") {
        return { ...state, current: action.payload };
      }
      return state;
    })
  );
