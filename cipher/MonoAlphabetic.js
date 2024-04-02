const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const monoAlphabetic = (key, message, type) => {
  if (type !== "encrypt" && type !== "decrypt") {
    return "Type must be 'encrypt' or 'decrypt'!";
  }

  if (type === "decrypt") {
    if (!isValidKey(key)) return "Invalid key!";
    if (!isValidMessage(message)) return "Invalid message!";
  }

  let result = "";

  for (const s of message) {
    if (key.includes(s.toUpperCase())) {
      let index;
      switch (type) {
        case "encrypt":
          index = letters.indexOf(s.toUpperCase());
          result += key[index];
          break;
        case "decrypt":
          index = key.indexOf(s.toUpperCase());
          result += letters[index];
          break;
      }
    } else {
      result += s;
    }
  }

  return result;
};

const getRandomNumberInRange = (from, to) => {
  return Math.floor(Math.random() * (to - from + 1) + from);
};

const genRandKey = () => {
  const lettersArray = letters.split("");
  let randomKey = "";

  for (let i = 0; i <= 25; i++) {
    const randIndex = getRandomNumberInRange(0, lettersArray.length - 1);
    randomKey += lettersArray[randIndex];
    lettersArray.splice(randIndex, 1);
  }
  return randomKey;
};

const isValidKey = (key) => {
  if (key.length != 26) return false;

  const lettersArray = letters.split("");
  const keyCharArray = key.toUpperCase().split("");

  for (let i = 0; i <= 25; i++) {
    if (!lettersArray.includes(keyCharArray[i])) return false;
  }

  return true;
};

const isValidMessage = (message) => {
  let isValid = true;
  message.split("").forEach((s) => {
    if (
      ![32, 44, 46].includes(s.charCodeAt()) &&
      !(s.charCodeAt() >= 65 && s.charCodeAt() <= 90) &&
      !(s.charCodeAt() >= 97 && s.charCodeAt() <= 122)
    ) {
      isValid = false;
    }
  });
  return isValid;
};
