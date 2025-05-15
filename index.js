function getCardIssuer(cardNumber) {
  const cardPatterns = {
    Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    MasterCard: /^5[1-5][0-9]{14}$/,
    "American Express": /^3[47][0-9]{13}$/,
    Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    JCB: /^(?:2131|1800|35\d{3})\d{11}$/,
    "Diners Club": /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/
  };

  for (const [issuer, pattern] of Object.entries(cardPatterns)) {
    if (pattern.test(cardNumber)) {
      return issuer;
    }
  }

  return "Unknown";
}

// Exemplo de uso
const cardNumber = "4111111111111111"; // Número fictício
console.log(`Bandeira do cartão: ${getCardIssuer(cardNumber)}`);
