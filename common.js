class SkillCreator {
  constructor(name, level = "", stars = "", dots = false, { uppercase = false, italic = false } = {}, children = []) {
    this.name = name;
    this.level = level;
    this.stars = stars;
    this.dots = dots;
    this.uppercase = uppercase;
    this.italic = italic;
    this.children = children;
  }

  createSkillItem() {
    const li = document.createElement("li");
    li.className = "skill-item";

    const nameSpan = document.createElement("span");
    nameSpan.className = "name";
    nameSpan.textContent = this.name;
    if (this.uppercase) nameSpan.style.textTransform = "uppercase";
    if (this.italic) nameSpan.style.fontStyle = "italic";

    li.appendChild(nameSpan);

    if (this.dots) {
      const dotsSpan = document.createElement("span");
      dotsSpan.className = "dots";
      li.appendChild(dotsSpan);
    }

    if (this.level) {
      const levelSpan = document.createElement("span");
      levelSpan.className = "level";
      levelSpan.textContent = this.level;
      levelSpan.classList.add("no-select");
      li.appendChild(levelSpan);
    }

    if (this.stars) {
      const starsDiv = document.createElement("div");
      starsDiv.className = "stars";
      starsDiv.textContent = this.stars;
      starsDiv.classList.add("no-select");
      li.appendChild(starsDiv);
    }

    return li;
  }

  static createSkillsList(skills, parentUl) {
    skills.forEach((skill) => {
      const skillItem = skill.createSkillItem();
      parentUl.appendChild(skillItem);

      if (skill.children.length > 0) {
        const childUl = document.createElement("ul");
        childUl.className = "skills-list child";
        SkillCreator.createSkillsList(skill.children, childUl);
        parentUl.appendChild(childUl);
      }
    });
  }

  static initialize(container, skillsData) {
    const createSkill = (skill) => {
      const options = { uppercase: skill.uppercase, italic: skill.italic };
      return new SkillCreator(skill.name, skill.level, skill.stars, skill.dots, { ...options }, (skill.children || []).map(createSkill));
    };

    const skills = skillsData.map(createSkill);

    const skillsList = document.createElement("ul");
    skillsList.className = "skills-list margin-right";
    container.appendChild(skillsList);
    SkillCreator.createSkillsList(skills, skillsList);
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
    const locationLink = event.localize ? `<a href="#" onclick="GoogleMapModal.initialize('${event.localize.city}', '${event.localize.country}').openModal()">${event.location}</a>` : event.location;
    const companyContent = event.companyUrl ? `<a href="${event.companyUrl}" target="_blank">${event.company}</a>` : event.company;

    return `
      <article class="timeline-event">
        <div class="timeline-event-content three-rows" data-start="${event.startDate}" data-end="${event.endDate}" data-separator="-">
          ${event.title ? `<h3>${event.title}</h3>` : ""}

          ${
            event.legalStatus || event.company || event.location
              ? `<div ${event.descriptionClasses && event.descriptionClasses.length > 0 ? `class="${event.descriptionClasses.join(" ")}"` : ""}>
                  ${event.legalStatus ? `[<abbr>${event.legalStatus}</abbr>]` : ""}
                  ${event.company ? `<span>${companyContent}</span>` : ""}
                  ${event.company && event.location ? `<small>-</small>` : ""}
                  ${event.location ? `<address>${locationLink}</address>` : ""}
                </div>`
              : ""
          }
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
if (window.location.hostname.includes("netlify.app")) {
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

window.addEventListener("resize", hiddenElements);
window.addEventListener("orientationchange", hiddenElements);

document.addEventListener("DOMContentLoaded", function () {
  startTypingEffects();
  hiddenElements();

  document.title = "CV_Julien_Jean_developer_fullstack_JavaScript";
});
