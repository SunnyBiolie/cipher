const tabContainerMono = $("#tab-container-mono");

const encryptInputMono = $("#encrypt-input-mono");
const encryptBtnMono = $("#encrypt-btn-mono");

const encryptKeyMono = $("#encrypt-key-mono");
const encryptResultMono = $("#encrypt-result-mono");

const decryptInputMono = $("#decrypt-input-mono");
const decryptKeyMono = $("#decrypt-key-mono");
const decryptBtnMono = $("#decrypt-btn-mono");
const decryptResultMono = $("#decrypt-result-mono");

const encryptBtnMonoOnClick = () => {
  const message = encryptInputMono.value;
  const key = genRandKey();

  encryptKeyMono.innerHTML = key;
  encryptResultMono.innerHTML = monoAlphabetic(key, message, "encrypt");

  setShowEncryptResMono(true);
};

const decryptBtnMonoOnClick = () => {
  const message = decryptInputMono.value;
  const key = decryptKeyMono.value;

  if (message && key)
    decryptResultMono.innerHTML = monoAlphabetic(key, message, "decrypt");
  else
    decryptResultMono.innerHTML = "The message and key fields cannot be empty!";

  setShowDecryptResMono(true);
};

const copyKeyMono = () => {
  navigator.clipboard.writeText(encryptKeyMono.innerText);
};

const copyResultMono = () => {
  navigator.clipboard.writeText(encryptResultMono.innerText);
};

// check valid when inputing
encryptInputMono.addEventListener("input", (e) => {
  if (e.target.value.length === 0) return setValidEncryptBtnMono(false);
  let isValid = true;

  e.target.value.split("").forEach((s) => {
    if (
      ![32, 44, 46].includes(s.charCodeAt()) &&
      !(s.charCodeAt() >= 65 && s.charCodeAt() <= 90) &&
      !(s.charCodeAt() >= 97 && s.charCodeAt() <= 122)
    ) {
      return (isValid = false);
    }
  });

  return setValidEncryptBtnMono(isValid);
});

const setValidEncryptBtnMono = (isValid) => {
  if (isValid) {
    encryptBtnMono.disabled = false;
    encryptBtnMono.classList.remove("cursor-not-allowed", "bg-opacity-60");
  } else {
    encryptBtnMono.disabled = true;
    encryptBtnMono.classList.add("cursor-not-allowed", "bg-opacity-60");
  }
};

const resFromEncryptMono = $$(".res-from-en-mono");

const setShowEncryptResMono = (isShow) => {
  resFromEncryptMono.forEach((element) => {
    if (isShow) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  });
};

const resFromDecryptMono = $(".res-from-de-mono");

const setShowDecryptResMono = (isShow) => {
  if (isShow) resFromDecryptMono.classList.remove("hidden");
  else resFromDecryptMono.classList.add("hidden");
};
