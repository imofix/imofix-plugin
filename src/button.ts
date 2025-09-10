import type { BannerConfig } from "./config.ts";
import "./button.css";
import { getT } from "./i18n.ts";

const DEFAULT_COLOR = "#FFFFFF";
const DEFAULT_BACKGROUND = "#068649";

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
  }

  if (config.buttonRight) {
    button.style.setProperty("--imofix-button-right", config.buttonRight);
  } else if (config.buttonLeft) {
    button.style.setProperty("--imofix-button-left", config.buttonLeft);
  }

  button.onclick = window.imofix!.openBanner

  document.body.appendChild(button);
}
