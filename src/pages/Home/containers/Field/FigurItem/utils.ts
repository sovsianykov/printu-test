import { Item } from "@pages/Home/containers/Field/FigurItem/models";

export const positionCalc = (item: Item) => {
  const cosinusOne = Math.abs(Math.cos(item.rotation * (Math.PI / 180.0)));

  const cosinusTwo = Math.abs(
    Math.cos((90 - item.rotation) * (Math.PI / 180.0))
  );

  const sinusOne = Math.abs(Math.sin(item.rotation * (Math.PI / 180.0)));

  const sinusTwo = Math.abs(Math.sin((90 - item.rotation) * (Math.PI / 180.0)));
  const w = item.width * cosinusOne + item.height * cosinusTwo;
  const h = item.width * sinusOne + item.height * sinusTwo;
  const b = (h - item.height) / 2;
  const r = (w - item.width) / 2;

  return { w, h, b, r };
};
