const paypal = require("paypal-rest-sdk");
const {
  CLIENT_ID,
  CLIENT_SECRET,
  MODE,
  SERVER_URL,
} = require("../PayPal/credentials");

class PayPalManager {
  constructor() {
    this.configurePayPal();
  }

  configurePayPal() {
    paypal.configure({
      mode: MODE,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    });
  }

  createPaymentJSON(price, purchasedCoinsCount) {
    return {
      intent: "sale",
      payer: { payment_method: "paypal" },
      redirect_urls: {
        return_url: `${SERVER_URL}/success?price=${price}&purchasedCoinsCount=${purchasedCoinsCount}`,
        cancel_url: `${SERVER_URL}/cancel`,
      },
      transactions: [
        {
          item_list: {
            items: [
              {
                name: "Coins",
                sku: "ITEM",
                price: price,
                currency: "USD",
                quantity: 1,
              },
            ],
          },
          amount: {
            currency: "USD",
            total: price,
          },
          description: "Buying game coins",
        },
      ],
    };
  }

  createPayment(paymentJSON, cb) {
    paypal.payment.create(paymentJSON, async (error, payment) => {
      await cb(error, payment);
    });
  }

  executePaymentJSON(playerID, price) {
    return {
      payer_id: playerID,
      transactions: [
        {
          amount: {
            currency: "USD",
            total: price,
          },
        },
      ],
    };
  }

  executePayment(paymentId, executePaymentJSON, cb) {
    paypal.payment.execute(
      paymentId,
      executePaymentJSON,
      async (error, payment) => {
        cb(error, payment);
      }
    );
  }
}

const paypalManager = new PayPalManager();

module.exports = paypalManager;
