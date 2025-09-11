import { detectBrowserLanguage } from "./i18n.ts";

export interface BannerConfig {
  imofixId: string;
  imofixUrl: string;
  lang: string;
  autoOpen: boolean;
  showButton: boolean;
  buttonText?: string;
  buttonColor?: string;
  buttonBackground?: string;
  buttonTop?: string;
  buttonRight?: string;
  buttonBottom?: string;
  buttonLeft?: string;
}

export function getBannerConfig(
  stringMap: DOMStringMap | undefined,
): BannerConfig {
  function parseBoolean(dataAttr: string | undefined) {
    return dataAttr !== undefined && dataAttr !== "false";
  }

  if (!stringMap) {
    throw Error("[imofix-banner] Script configuration was not found.");
  }

  if (!stringMap.imofixId) {
    throw Error(
      "[imofix-banner] Script tag is missing required attribute `data-imofix-id`",
    );
  }

  if (!stringMap.imofixUrl) {
    throw Error(
      "[imofix-banner] Script tag is missing required attribute `data-imofix-url`",
    );
  }

  return {
    imofixId: stringMap.imofixId,
    imofixUrl: stringMap.imofixUrl,
    lang: stringMap.lang || detectBrowserLanguage(),
    autoOpen: parseBoolean(stringMap.autoOpen),
    showButton: parseBoolean(stringMap.showButton),
    buttonColor: stringMap.buttonColor,
    buttonBackground: stringMap.buttonColor,
  };
}
