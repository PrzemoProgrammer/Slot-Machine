const orderData = require("../../game/orderData");
// const loginToken = require("../../LoginToken/LoginToken");
// const JWT = require("../../JWT/JWTManager");
const payPalManager = require("../../PayPal/PayPalManager");
const databaseManager = require("../../MongoDB/DatabaseManager");

function createPayment(req, res) {
  const { clientToken, orderNumber } = req.body;
  const { price, purchasedCoinsCount } = getOrderData(orderNumber);
  const decodedToken = loginToken.decode(clientToken).accountID;

  const paymentJSON = payPalManager.createPaymentJSON(
    price,
    purchasedCoinsCount
  );

  payPalManager.createPayment(paymentJSON, async (error, payment) => {
    if (error) {
      console.error(error);
    } else {
      const approvalUrl = payment.links.find(
        (link) => link.rel === "approval_url"
      ).href;

      const paymentId = payment.id;

      await databaseManager.updatePaymentId({
        decodedToken,
        paymentId,
      });

      res.json({ redirectUrl: approvalUrl });
    }
  });
}

function getOrderData(orderNumber) {
  if (!orderData.has(orderNumber)) {
    throw new Error("Invalid order number");
  }

  return orderData.get(orderNumber);
}

module.exports = createPayment;
