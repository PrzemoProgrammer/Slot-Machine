const databaseManager = require("../../MongoDB/DatabaseManager");
const payPalManager = require("../../PayPal/PayPalManager");

async function success(req, res) {
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;
  const price = req.query.price;
  const purchasedCoinsCount = req.query.purchasedCoinsCount;

  const executePaymentJSON = payPalManager.executePaymentJSON(payerId, price);

  payPalManager.executePayment(
    paymentId,
    executePaymentJSON,
    async (error, payment) => {
      if (error) {
        console.log(error.response);
        throw error;
      } else {
        const orderingPlayer = await databaseManager.downloadPlayer({
          paymentId,
        });
        const { money, accountID } = orderingPlayer;
        const updatedMoney = money + Number(purchasedCoinsCount);
        await updatePlayerData(accountID, updatedMoney);
        console.log("PAYMENT SUCCESS");
      }
    }
  );
}

async function updatePlayerData(accountID, money) {
  await databaseManager.updatePlayer({ accountID, money });
}

module.exports = success;
