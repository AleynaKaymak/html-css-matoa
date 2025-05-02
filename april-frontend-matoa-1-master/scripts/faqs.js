const questions = document.querySelectorAll(".button");
const answerBox = document.querySelector(".answer-box");

answerBox.innerHTML = "";
const answers = {
  "How to buy?":
    "Click the product you want, take a look at if it is the one for you then add it to your cart. After that go to your cart and make the payment.",
  "Do I have problem with your cart?":
    "Please try refreshing the page or switching to a different browser. If the problem persists, feel free to contact our support team.",
  "How to find the best watch for you?":
    "Use our filtering tools and recommendations to find a watch that fits your style, needs, and budget.",
  "Do you have problem with your credit card?":
    "Double-check your card information and make sure your bank allows online purchases. If issues continue, contact your bank.",
  "My question isn't listed here (Send us feedback)":
    "Please send us your question through our contact form. We will get back to you as soon as possible!",
};

questions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const questionText = btn.textContent;
    const answer = answers[questionText];
    answerBox.innerHTML = `<p>${answer}</p>`;
  });
});