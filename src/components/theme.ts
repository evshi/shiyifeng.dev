import { writable } from 'svelte/store';

export interface Theme {
  background: string;
  text: string;
  accent: string;
  highlight: string;
  contour: string;
}

export const redBlack: Theme = {
  text: "#2b2d42",
  contour: "#8d99ae",
  background: "#edf2f4",
  highlight: "#ef233c",
  accent: "#d90429",
}

export const redBlue: Theme = {
  text: "#1D3557",
  contour: "#A8DADC",
  background: "#F1FAEE",
  highlight: "#457B9D",
  accent: "#E63946",
}

export const horizon: Theme = {
  text: "#2F2C40",
  contour: "#7686A6",
  background: "#E38C8A",
  highlight: "#A66370",
  accent: "#FFB7AD"
}

export const fuji: Theme = {
  text: "#595EA0",
  contour: "#9675AD",
  background: "#B47AAF",
  highlight: "#E18BAE",
  accent: "#F0A7AB"
}

export const theme = writable(redBlack);
