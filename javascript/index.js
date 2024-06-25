// contact 주소 복사 기능 구현
const contactModal = document.querySelector("#contactModal");
const contactModalBtn = document.querySelector("#contactModal button");

const setupClipboard = (selector) => {
  const clipboard = new ClipboardJS(selector);
  clipboard.on("success", (e) => {
    console.log(e.text + " 주소가 복사되었습니다.");
    contactModal.classList.add("d-block");
  });
  clipboard.on("error", (e) => {
    console.log("Clipboard에러 : " + e);
  });
};

setupClipboard(".mailBtn");
setupClipboard(".gitBtn");

contactModalBtn.addEventListener("click", () => {
  contactModal.classList.remove("d-block");
});

// scroll animation
const sections = document.querySelectorAll("section");

function scrollAppear() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  if (sections) {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add("show");
      } else {
        section.classList.remove("show");
      }
    });
  }
}

window.addEventListener("scroll", scrollAppear);

scrollAppear();
