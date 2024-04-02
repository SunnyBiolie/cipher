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

  if (key.length < message.length)
    return {
      success: false,
      result: "Length of key must be more than or equal to message!",
    };

  key = key.toUpperCase();
  message = message.toUpperCase();

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
