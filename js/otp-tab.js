const tabContainerOTP = $("#tab-container-otp");
const encryptInputMessOTP = $("#encrypt-input-mess-otp");
const encryptInputKeyOTP = $("#encrypt-input-key-otp");
const encryptBtnOTP = $("#encrypt-btn-otp");
const resFromEncryptOTP = $(".res-from-en-otp");
const encryptResOTP = $("#encrypt-result-otp");

encryptInputMessOTP.onkeydown = (e) => {
  if (e.code === "Space") e.preventDefault();
};
encryptInputMessOTP.oninput = (e) => {
  encryptInputMessOTP.value = e.target.value.toLowerCase();
};

encryptInputKeyOTP.onkeydown = (e) => {
  if (e.code === "Space") e.preventDefault();
};
encryptInputKeyOTP.oninput = (e) => {
  encryptInputKeyOTP.value = e.target.value.toUpperCase();
};

const encryptBtnOTPOnClick = () => {
  const message = encryptInputMessOTP.value;
  const key = encryptInputKeyOTP.value;

  const { success, result } = oneTimePad(key, message, "encrypt");

  encryptResOTP.innerHTML = result;

  if (!success) {
    resFromEncryptOTP.querySelector(".copy-btn").classList.add("hidden");
    resFromEncryptOTP.classList.remove("pr-1");
    resFromEncryptOTP.classList.add("pr-2");
  } else {
    resFromEncryptOTP.querySelector(".copy-btn").classList.remove("hidden");
    resFromEncryptOTP.classList.add("pr-1");
    resFromEncryptOTP.classList.remove("pr-2");
  }

  setShowEncryptResOTP(true);
};

const setShowEncryptResOTP = (isShow) => {
  if (isShow) {
    resFromEncryptOTP.classList.remove("hidden");
  } else {
    resFromEncryptOTP.classList.add("hidden");
  }
};

const copyKeyOTP = () => {
  navigator.clipboard.writeText(encryptInputKeyOTP.value);
};

const copyEncryptResOTP = () => {
  navigator.clipboard.writeText(encryptResOTP.innerHTML);
};

// Decrypt:

const decryptInputMessOTP = $("#decrypt-input-mess-otp");
const decryptInputKeyOTP = $("#decrypt-input-key-otp");
const decryptBtnOTP = $("#decrypt-btn-otp");
const decryptResOTP = $("#decrypt-result-otp");

decryptInputMessOTP.onkeydown = (e) => {
  if (e.code === "Space") e.preventDefault();
};
decryptInputMessOTP.oninput = (e) => {
  decryptInputMessOTP.value = e.target.value.toUpperCase();
};

decryptInputKeyOTP.onkeydown = (e) => {
  if (e.code === "Space") e.preventDefault();
};
decryptInputKeyOTP.oninput = (e) => {
  decryptInputKeyOTP.value = e.target.value.toUpperCase();
};

const decryptBtnOTPOnClick = () => {
  const message = decryptInputMessOTP.value;
  const key = decryptInputKeyOTP.value;

  const { success, result } = oneTimePad(key, message, "decrypt");

  decryptResOTP.innerHTML = result;

  setShowDecryptResOTP(true);
};

const resFromDecryptOTP = $(".res-from-de-otp");

const setShowDecryptResOTP = (isShow) => {
  if (isShow) {
    resFromDecryptOTP.classList.remove("hidden");
  } else {
    resFromDecryptOTP.classList.add("hidden");
  }
};
