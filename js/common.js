const selectButton_0 = $("#select-btn-0");
const selectButton_1 = $("#select-btn-1");

const setActiveTab = (index) => {
  switch (index) {
    case 0:
      tabContainerMono.style.display = "block";
      tabContainerOTP.style.display = "none";

      selectButton_0.classList.add("select-tab-active");
      selectButton_1.classList.remove("select-tab-active");

      break;
    case 1:
      tabContainerMono.style.display = "none";
      tabContainerOTP.style.display = "block";

      selectButton_1.classList.add("select-tab-active");
      selectButton_0.classList.remove("select-tab-active");

      break;
  }
};

const copyBtns = $$(".copy-btn");

copyBtns.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.target.innerHTML = "Copied!";
    setTimeout(() => {
      e.target.innerHTML = "Copy";
    }, 4000);
  });
});

const init = () => {
  setActiveTab(0);

  setValidEncryptBtnMono(false);
  setShowEncryptResMono(false);
  setShowDecryptResMono(false);

  setShowEncryptResOTP(false);
  setShowDecryptResOTP(false);
};

init();
