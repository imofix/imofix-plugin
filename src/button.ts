import type { BannerConfig } from "./config.ts";
import "./button.css";
import { getT } from "./i18n.ts";

const DEFAULT_COLOR = "#FFFFFF";
const DEFAULT_BACKGROUND = "#068649";
const DEFAULT_RIGHT = "24px";
const DEFAULT_BOTTOM = "24px";

export function showButton(config: BannerConfig) {
  const t = getT(config.lang);
  const button = document.createElement("button");

  button.id = "imofix-banner-button";
  button.textContent = config.buttonText || t("buttonTitle");

  button.style.setProperty(
    "--imofix-button-background",
    config.buttonBackground || DEFAULT_BACKGROUND,
  );

  button.style.setProperty(
    "--imofix-button-color",
    config.buttonColor || DEFAULT_COLOR,
  );

  if (config.buttonTop) {
    button.style.setProperty("--imofix-button-top", config.buttonTop);
  } else if (config.buttonBottom) {
    button.style.setProperty("--imofix-button-bottom", config.buttonBottom);
  } else {
    button.style.setProperty("--imofix-button-bottom", DEFAULT_BOTTOM);
  }

  if (config.buttonRight) {
    button.style.setProperty("--imofix-button-right", config.buttonRight);
  } else if (config.buttonLeft) {
    button.style.setProperty("--imofix-button-left", config.buttonLeft);
  } else {
    button.style.setProperty("--imofix-button-right", DEFAULT_RIGHT);
  }

  button.onclick = window.imofix!.openBanner;

  document.body.appendChild(button);
}
