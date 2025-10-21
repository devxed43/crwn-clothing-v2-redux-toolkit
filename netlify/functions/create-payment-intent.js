// the moment this mounts, we require the dotenv to access our secret data
// after we access the data in the dotenv file, we configure
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// old school way to export
exports.handler = async (event) => {
  // to make payment intent, need details
  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });

    return {
      status: 400,
      body: JSON.stringify({ error }),
    };
  }
};
