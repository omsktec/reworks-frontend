import { selector } from "recoil";
import _ from "/src/storage/atoms/main";

export const getSomething = selector({
  key: "getSomething",
  get: ({ get }) => get(_).something,
  set: ({ set }, value) => set(_, { something: value }),
});
