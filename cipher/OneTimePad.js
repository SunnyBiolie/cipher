const oneTimePad = (key, message, type) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if (!key || !message)
    return {
      success: false,
      result: "The message and key fields cannot be empty!",
    };

  if (!isValidOTP(message))
    return {
      success: false,
      result: "Invalid message!",
    };

  if (!isValidOTP(key))
    return {
      success: false,
      result: "Invalid key!",
    };

  if (key.length < message.length) {
    message = message.toUpperCase();
    const ratio = Math.ceil(message.length / key.length);
    for (let i = 1; i < ratio; i++) {
      key += key;
    }
    console.log(ratio);

    if (key.length > message.length) {
      key = key.substring(0, message.length);
    }
  } else if (key.length > message.length) {
    message = message.toUpperCase();
    key = key.substring(0, message.length);
  } else {
    key = key.toUpperCase();
    message = message.toUpperCase();
  }

  let result = "";

  switch (type) {
    case "encrypt":
      for (const i in message) {
        const messageIndex = letters.indexOf(message[i]);
        const keyIndex = letters.indexOf(key[i]);

        let resIndex = messageIndex + keyIndex;
        if (resIndex >= 26) {
          resIndex = resIndex - 26;
        }

        result += letters[resIndex];
      }
      break;
    case "decrypt":
      for (const i in message) {
        const decryptIndex = letters.indexOf(message[i]);
        const keyIndex = letters.indexOf(key[i]);

        let resIndex = decryptIndex - keyIndex;
        if (resIndex < 0) {
          resIndex = resIndex + 26;
        }

        result += letters[resIndex];
      }
      break;
  }

  return {
    success: true,
    key: key,
    result: type === "encrypt" ? result.toUpperCase() : result.toLowerCase(),
  };
};

const isValidOTP = (message) => {
  let isValid = true;
  message.split("").forEach((s) => {
    if (
      !(s.charCodeAt() >= 65 && s.charCodeAt() <= 90) &&
      !(s.charCodeAt() >= 97 && s.charCodeAt() <= 122)
    ) {
      isValid = false;
    }
  });
  return isValid;
};
