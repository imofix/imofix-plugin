import "./main.css";
import { showButton } from "./button.ts";
import { getBannerConfig } from "./config.ts";
import { createOpenIFrame, setupIFrameMessaging } from "./iframe.ts";

declare global {
  // noinspection JSUnusedGlobalSymbols
  interface Window {
    imofix?: {
      openBanner: () => void;
    };
  }
}

function getStringMapConfig() {
  // when the script is loaded without type="module"
  const script = document.currentScript as HTMLScriptElement | null;

  if (script) {
    return script.dataset;
  }

  const url = new URL(import.meta.url, document.baseURI).href;
  let scriptEl: HTMLScriptElement | null = null;
  for (const s of Array.from(document.getElementsByTagName("script"))) {
    if (s.src === url) {
      scriptEl = s as HTMLScriptElement;
      break;
    }
  }

  if (scriptEl) {
    return scriptEl.dataset;
  }
}

const bannerConfig = getBannerConfig(getStringMapConfig());

if (bannerConfig) {
  const openIFrame = createOpenIFrame(bannerConfig);

  window.imofix = {
    ...window.imofix,
    openBanner: openIFrame,
  };

  if (bannerConfig.autoOpen) {
    openIFrame();
  }

  if (bannerConfig.showButton) {
    showButton(bannerConfig);
  }

  setupIFrameMessaging(bannerConfig);
}
