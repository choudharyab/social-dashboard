import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
  --limegreen: hsl(163, 72%, 41%);
  --brightred: hsl(356, 69%, 56%);
  --facebook: hsl(208, 92%, 53%);
  --twitter: hsl(203, 89%, 53%);
  --instagram-start: hsl(37, 97%, 70%);
  --instagram-middle: hsl(5, 77%, 71%);
  --instagram-end: hsl(329, 70%, 58%);
  --youtube: hsl(348, 97%, 39%);
  --toggle-bg-light: hsl(230, 22%, 74%);
  --toggle-bg-start: hsl(210, 78%, 56%);
  --toggle-bg-end: hsl(146, 68%, 55%);
  --toggle-light: hsl(230, 19%, 60%);
  --toggle-button-light: hsl(228, 46%, 96%);
  --dark-bg: hsl(230, 17%, 14%);
  --dark-top-bg: hsl(232, 19%, 15%);
  --dark-card: hsl(228, 28%, 20%);
  --dark-card-hover: hsl(228, 25%, 27%);
  --dark-text1: hsl(228, 34%, 66%);
  --dark-text2: hsl(0, 0%, 100%);
  --light-bg: hsl(0, 0%, 100%);
  --light-top-bg: hsl(225, 100%, 98%);
  --light-card: hsl(227, 47%, 96%);
  --light-card-hover: hsl(228, 33%, 91%);
  --light-text1: hsl(230, 12%, 44%);
  --light-text2: hsl(230, 17%, 14%);
  --background: var(--light-bg);
  --text-color: var(--light-text2);
  --text-color2: var(--light-text1);
  --card-bg: var(--light-card);
  --card-hover: var(--light-card-hover);
  --toggle: var(--toggle-light);
  --toggle-bg: var(--toggle-bg-light);
  --toggle-button: var(--toggle-button-light);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: var(--dark-bg);
    --text-color: var(--dark-text2);
    --text-color2: var(--dark-text1);
    --card-bg: var(--dark-card);
    --card-hover: var(--dark-card-hover);
    --toggle: var(--light-bg);
    --toggle-bg: linear-gradient(
      225deg,
      var(--toggle-bg-end) 0%,
      var(--toggle-bg-start) 98.02%
    );
    --toggle-button: var(--dark-bg);
  }
}

body.light {
  --background: var(--light-bg);
  --text-color: var(--light-text2);
  --text-color2: var(--light-text1);
  --card-bg: var(--light-card);
  --card-hover: var(--light-card-hover);
  --toggle: var(--toggle-light);
  --toggle-bg: var(--toggle-bg-light);
  --toggle-button: var(--toggle-button-light);
}

body.dark {
  --background: var(--dark-bg);
  --text-color: var(--dark-text2);
  --text-color2: var(--dark-text1);
  --card-bg: var(--dark-card);
  --card-hover: var(--dark-card-hover);
  --toggle: var(--light-bg);
  --toggle-bg: linear-gradient(
    225deg,
    var(--toggle-bg-end) 0%,
    var(--toggle-bg-start) 98.02%
  );
  --toggle-button: var(--dark-bg);
}

`;

export default GlobalStyles;
