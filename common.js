class SkillCreator {
  static initialize(container, groups) {
    groups.forEach((group) => {
      const cat = document.createElement("div");
      cat.className = "skill-cat";

      const label = document.createElement("span");
      label.className = "skill-cat-label no-select";
      label.textContent = group.group;
      cat.appendChild(label);

      const chips = document.createElement("span");
      chips.className = "chips";

      group.items.forEach((item) => {
        const chip = document.createElement("span");
        chip.className = item.tier === "Intermédiaire" ? "chip chip--soft" : "chip";
        chip.textContent = item.name;
        chips.appendChild(chip);
      });

      cat.appendChild(chips);
      container.appendChild(cat);
    });
  }
}

class FormationCreator {
  static initialize(container, list) {
    list.forEach((f) => {
      const item = document.createElement("div");
      item.className = "formation-item";

      const title = document.createElement("div");
      title.className = "formation-title";
      title.textContent = f.title;
      item.appendChild(title);

      const meta = document.createElement("div");
      meta.className = "formation-meta no-select";
      meta.textContent = [f.org, f.year].filter(Boolean).join(" · ");
      item.appendChild(meta);

      if (f.note) {
        const note = document.createElement("div");
        note.className = "formation-note";
        note.textContent = f.note;
        item.appendChild(note);
      }

      container.appendChild(item);
    });
  }
}

class TimelineEvents {
  constructor(targetElement, events = []) {
    this.targetElement = targetElement;
    this.events = events;

    this.render();
  }

  renderDescription(description) {
    const renderList = (element, children) => {
      return `<${element}>${children
        .map((child) => {
          if (typeof child === "string") {
            return `<li>${child}</li>`;
          } else {
            return `<li>${renderList(child.element, child.children)}</li>`;
          }
        })
        .join("")}</${element}>`;
    };

    return description
      .map((desc) => {
        if (desc.element === "custom") {
          return `${desc.content}`;
        } else if (desc.element === "p") {
          return `<p>${desc.content}</p>`;
        } else if (desc.element === "ul" || desc.element === "ol") {
          return renderList(desc.element, desc.children);
        }
        return "";
      })
      .join("");
  }

  renderEvent(event) {
    const locationLink = event.localize ? `<a href="#" onclick="GoogleMapModal.initialize('${event.localize.city}', '${event.localize.country}').openModal()">${event.location}</a>` : event.location || "";
    const companyContent = event.companyUrl ? `<a href="${event.companyUrl}" target="_blank">${event.company}</a>` : event.company || "";
    const dateRange = [event.startDate, event.endDate].filter(Boolean).join(" - ");

    const meta = [];
    if (event.company) meta.push(`<span class="xp-company">${companyContent}</span>`);
    if (event.location) meta.push(`<span class="xp-loc">${locationLink}</span>`);

    return `
      <article class="xp">
        <div class="xp-date no-select">${dateRange}</div>
        <div class="xp-body">
          ${event.title ? `<h3 class="xp-role">${event.title}</h3>` : ""}
          ${meta.length ? `<div class="xp-meta">${meta.join('<span class="sep">·</span>')}</div>` : ""}
          ${this.renderDescription(event.description)}
        </div>
      </article>
    `;
  }

  render() {
    this.events.forEach((event) => (this.targetElement.innerHTML += this.renderEvent(event)));
  }
}

class GoogleMapModal {
  constructor(city, country, location) {
    this.city = city;
    this.country = country;
    this.location = location;
    this.mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(this.city + ", " + this.country)}&output=embed&t=k`;
    this.modal = null;
    this.createModal();
  }

  createModal() {
    this.modal = document.createElement("div");
    this.modal.id = "myModal";
    this.modal.style.display = "none";
    this.modal.style.position = "fixed";
    this.modal.style.zIndex = "9999";
    this.modal.style.left = "0";
    this.modal.style.top = "0";
    this.modal.style.width = "100%";
    this.modal.style.height = "100vh";
    this.modal.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    this.modal.style.overflow = "auto";

    const modalContent = document.createElement("div");
    modalContent.style.backgroundColor = "#fefefe";
    modalContent.style.margin = "auto";
    modalContent.style.padding = "0.25em";
    modalContent.style.border = "1px solid #888";
    modalContent.style.width = "90%";
    modalContent.style.maxWidth = "1200px";
    modalContent.style.maxHeight = "90vh";
    modalContent.style.overflowY = "auto";
    modalContent.style.position = "relative";

    const closeContainer = document.createElement("div");
    closeContainer.style.textAlign = "right";
    closeContainer.style.marginRight = "0.5em";

    const closeButton = document.createElement("span");
    closeButton.innerHTML = "&times;";
    closeButton.style.color = "#333";
    closeButton.style.fontSize = "2em";
    closeButton.style.fontWeight = "bold";
    closeButton.style.cursor = "pointer";

    closeButton.onmouseover = () => {
      closeButton.style.color = "black";
      closeButton.style.textDecoration = "none";
    };

    closeButton.onmouseout = () => {
      closeButton.style.color = "#333";
    };

    closeContainer.appendChild(closeButton);

    const iframeContainer = document.createElement("div");
    iframeContainer.style.width = "100%";
    iframeContainer.style.height = "0";
    iframeContainer.style.paddingBottom = "56.25%"; /* 16:9 aspect ratio */
    iframeContainer.style.position = "relative";

    const iframe = document.createElement("iframe");
    iframe.id = "mapFrame";
    iframe.frameBorder = "0";
    iframe.style.border = "0";
    iframe.allowFullscreen = true;
    iframe.style.position = "absolute";
    iframe.style.top = "0";
    iframe.style.left = "0";
    iframe.style.width = "100%";
    iframe.style.height = "100%";

    iframeContainer.appendChild(iframe);
    modalContent.appendChild(closeContainer);
    modalContent.appendChild(iframeContainer);
    this.modal.appendChild(modalContent);
    document.body.appendChild(this.modal);

    closeButton.onclick = () => this.closeModal();
    window.onclick = (event) => {
      if (event.target == this.modal) {
        this.closeModal();
      }
    };
  }

  openModal() {
    this.modal.style.display = "block";
    this.modal.querySelector("#mapFrame").src = this.mapUrl;
  }

  closeModal() {
    this.modal.style.display = "none";
  }

  static initialize(city, country, location) {
    return new GoogleMapModal(city, country, location);
  }
}

function isMobile() {
  const userAgent = typeof window !== "undefined" ? window.navigator.userAgent : "";
  return /Mobi|Android/i.test(userAgent);
}

function printOrDownloadPDF() {
  const elements = document.querySelectorAll(".typing-effect, .typing-effect-delayed");
  elements.forEach((element) => {
    element.classList.forEach((className) => {
      if (className === "typing-effect" || className === "typing-effect-delayed") {
        element.classList.replace(className, `___${className}`);
      }
    });
  });

  if (isMobile()) {
    justDownloadPDF();
  } else {
    window.print();
  }

  elements.forEach((element) => {
    element.classList.forEach((className) => {
      if (className === "___typing-effect" || className === "___typing-effect-delayed") {
        element.classList.replace(className, className.substring(3));
      }
    });
  });
}

function justDownloadPDF() {
  const link = document.createElement("a");
  link.href = "./cv-julien-jean.pdf";
  link.download = `${document.title}.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function startTypingEffects() {
  function processTypingEffects() {
    const typingElements = document.querySelectorAll(".typing-effect");

    if (typingElements.length > 0) {
      typingElements.forEach((el) => el.classList.remove("typing-effect"));
    }

    const delayedElements = document.querySelectorAll(".typing-effect-delayed");
    if (delayedElements.length > 0) {
      delayedElements[0].classList.replace("typing-effect-delayed", "typing-effect");
      setTimeout(processTypingEffects, 3500);
    }
  }

  if ((document.querySelectorAll(".typing-effect")?.length ?? 0) === 0) {
    processTypingEffects();
  } else {
    setTimeout(() => processTypingEffects(), 3500);
  }
}

// github ribbon fork project
{
  const githubRibbon = document.createElement("a");
  githubRibbon.id = "fork-me-ongithub-id";
  githubRibbon.href = "https://github.com/padcmoi/Curriculum-Vitae";
  githubRibbon.target = "_blank";
  githubRibbon.style.position = "absolute";
  githubRibbon.style.top = "0";
  githubRibbon.style.right = "0";
  githubRibbon.style.border = "0";
  githubRibbon.style.zIndex = "1000";

  const githubImage = document.createElement("img");
  githubImage.src = "./github.forkme.svg";
  githubImage.alt = "Fork me on GitHub";

  githubRibbon.appendChild(githubImage);
  document.body.appendChild(githubRibbon);
}

function hiddenElements() {
  const hiddenElements = document.querySelectorAll(".hide-element-on-small-screen");
  hiddenElements.forEach((element) => {
    if (isMobile()) {
      element.style.display = "none";
    } else {
      element.style.display = "";
    }
  });
}

async function fetchLastCommitDate() {
  try {
    const response = await fetch("https://api.github.com/repos/padcmoi/Curriculum-Vitae/commits");
    const commits = await response.json();
    if (commits.length > 0) {
      const lastCommitDate = new Date(commits[0].commit.author.date);
      const lastCommitElement = document.getElementById("last-commit-id");
      if (lastCommitElement) {
        lastCommitElement.textContent = `Dernière mise à jour: ${lastCommitDate.toLocaleString()}`;
      }
    }
  } catch (error) {
    console.error("Error fetching last commit date:", error);
  }
}

window.addEventListener("resize", hiddenElements);
window.addEventListener("orientationchange", hiddenElements);

function runBinaryReveal() {
  document.querySelectorAll(".binary-reveal").forEach((el) => {
    const finalText = el.textContent;
    const len = finalText.length;
    const scrambleFrames = 12;
    const totalFrames = scrambleFrames + len * 2;
    let frame = 0;
    const tick = () => {
      const locked = Math.max(0, Math.floor((frame - scrambleFrames) / 2));
      let out = "";
      for (let i = 0; i < len; i++) {
        out += finalText[i] === " " ? " " : i < locked ? finalText[i] : Math.random() < 0.5 ? "0" : "1";
      }
      el.textContent = out;
      frame += 1;
      if (frame <= totalFrames) {
        setTimeout(tick, 45);
      } else {
        el.textContent = finalText;
      }
    };
    tick();
  });
}

function runBinaryWrite() {
  const lines = [document.querySelector(".head-name"), document.getElementById("header-title-id"), document.getElementById("header-description-id")].filter(Boolean);

  const STEP = 48;
  const TAIL = 6;
  const escapeChar = (ch) => (ch === "&" ? "&amp;" : ch === "<" ? "&lt;" : ch === ">" ? "&gt;" : ch);
  const bit = (ch) => (ch === " " ? " " : Math.random() < 0.5 ? "0" : "1");

  // Blank every line up-front so the final text never flashes before it is written.
  const finals = lines.map((el) => {
    const text = el.textContent.replace(/\s+/g, " ").trim();
    el.textContent = "";
    return text;
  });

  const animateLine = (el, finalText) =>
    new Promise((resolve) => {
      const len = finalText.length;
      let head = 0;
      const tick = () => {
        const locked = Math.max(0, head - TAIL);
        const edge = Math.min(head, len);
        let out = "";
        for (let i = 0; i < locked; i++) out += escapeChar(finalText[i]);
        for (let i = locked; i < edge; i++) out += bit(finalText[i]);
        el.innerHTML = out + (locked < len ? '<span class="bw-caret"></span>' : "");
        if (locked < len) {
          head += 1;
          setTimeout(tick, STEP);
        } else {
          el.textContent = finalText;
          resolve();
        }
      };
      tick();
    });

  lines.reduce((chain, el, i) => chain.then(() => animateLine(el, finals[i])), Promise.resolve());
}

document.addEventListener("DOMContentLoaded", function () {
  hiddenElements();
  fetchLastCommitDate();
  document.title = "CV_Julien_Jean_Developpeur_Fullstack_TypeScript";
});

// Make the content editable for title & description
const headerTitle = document.getElementById("header-title-id");
const headerDescription = document.getElementById("header-description-id");

let originalTitle = headerTitle.innerHTML;
let originalDescription = headerDescription.innerHTML;

function resetEditableElements() {
  if (headerTitle.isContentEditable || headerDescription.isContentEditable) {
    headerTitle.contentEditable = false;
    headerDescription.contentEditable = false;
    originalTitle = headerTitle.innerHTML;
    originalDescription = headerDescription.innerHTML;
  }
}

headerTitle.addEventListener("click", (event) => {
  event.stopPropagation();
  if (!headerTitle.isContentEditable) {
    resetEditableElements();
    headerTitle.contentEditable = true;
    headerTitle.focus();
  }
});

headerDescription.addEventListener("click", (event) => {
  event.stopPropagation();
  if (!headerDescription.isContentEditable) {
    resetEditableElements();
    headerDescription.contentEditable = true;
    headerDescription.focus();
  }
});

document.addEventListener("click", (event) => resetEditableElements());

// Kick off the load animations synchronously (before first paint) so the final
// text is never shown before it is written. Runs after the editable block above
// so the original header text is captured before the lines are blanked.
const cvShouldAnimate = () => !window.__CV_STATIC__ && !window.matchMedia("(max-width: 1200px)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (cvShouldAnimate()) {
  runBinaryWrite();
  runBinaryReveal();
  setInterval(runBinaryReveal, 15000);
}
