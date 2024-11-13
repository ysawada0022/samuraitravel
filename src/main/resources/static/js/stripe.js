const stripe = Stripe('pk_test_51QJkdZL6HmUNqGHTj9vJidtKUm3fWJbtjxnm29QpWCBjR95UZiUvVpBtamw4YV24kVBtvrKwweXrKWocUm0BXlPV0098Lc3vHu');

const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
  stripe.redirectToCheckout({
    sessionId: sessionId
  })
});