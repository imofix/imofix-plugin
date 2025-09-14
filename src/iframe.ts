import type { BannerConfig } from "./config.ts";

const VITE_BANNER_PATH = "/banner";

let initialDocumentOverflow = "";
let initialBodyOverflow = "";

function closeIFrame(): void {
  const root = document.getElementById("imofix-modal-root");

  if (!root) {
    return;
  }

  document.getElementById("imofix-modal-iframe")?.setAttribute("src", "");
  root.className = "";
  document.documentElement.style.overflow = initialDocumentOverflow;
  document.body.style.overflow = initialBodyOverflow;

  setTimeout(() => {
    root.remove();
  }, 400);
}

export function createOpenIFrame(config: BannerConfig) {
  return function openIFrame() {
    if (document.getElementById("imofix-modal-root")) {
      return;
    }

    const modalRoot = document.createElement("div");
    modalRoot.id = "imofix-modal-root";

    const modalBackdrop = document.createElement("div");
    modalBackdrop.id = "imofix-modal-backdrop";
    modalBackdrop.addEventListener("click", () => {
      closeIFrame();
    });

    const modalContent = document.createElement("div");
    modalContent.id = "imofix-modal-content";

    const skeleton = document.createElement("div");
    skeleton.id = "imofix-skeleton";
    skeleton.innerHTML =
      '<div id="imofix-skeleton-toolbar"></div><div id="imofix-skeleton-button"></div>';
    modalContent.appendChild(skeleton);

    const iframe = document.createElement("iframe");
    iframe.setAttribute(
      "sandbox",
      "allow-same-origin allow-popups allow-scripts allow-top-navigation-by-user-activation",
    );
    iframe.id = "imofix-modal-iframe";
    iframe.tabIndex = 0;
    iframe.onload = function () {
      const i = document.getElementById(iframe.id);

      setTimeout(() => {
        modalRoot.className = "open";
        i && i.focus();
      }, 400);
    };

    modalContent.appendChild(iframe);

    modalRoot.appendChild(modalBackdrop);
    modalRoot.appendChild(modalContent);

    const spacer = document.createElement("div");
    spacer.id = "imofix-spacer";
    modalRoot.appendChild(spacer);

    document.body.appendChild(modalRoot);
    initialDocumentOverflow = document.documentElement.style.overflow;
    initialBodyOverflow = document.body.style.overflow;

    // e.g. some websites set overflow-y: hidden on their html tag 🤷‍
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const root = document.getElementById("imofix-modal-root");
    const origin = config.imofixUrl;

    if (!origin || !root) {
      return;
    }

    root.className = "open";
    iframe.setAttribute(
      "src",
      `${origin}${VITE_BANNER_PATH}?tenantId=${config.imofixId}&lng=${config.lang}`,
    );
  };
}

export function setupIFrameMessaging(config: BannerConfig) {
  window.addEventListener(
    "message",
    (e) => {
      const origin = config.imofixUrl;

      if (!origin || e.origin !== origin) {
        return;
      }

      switch (e.data.type) {
        case "imofix-modal-close":
          closeIFrame();
          break;
      }
    },
    false,
  );
}
