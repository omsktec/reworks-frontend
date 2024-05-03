import { atom } from "recoil";

const _ = atom({
  key: "mainStorage",
  default: {
    something: "1",
  },
});

export default _;
