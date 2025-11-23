import axios from "axios";
import timestamp from "";

const mpesa_safaricom_url = process.env.MPESA_SANDBOX_URL;

const payload = {
    BusinessShortCode: BUSINESS_SHORT_CODE,
    Password: password,
    Timestamp: timestamp,
    TransactionType: "CustomerPayBillOnline",
    Amount: amount,
    PartyA: phone,
    PartyB: process.env.MPESA_BUSINESS_SHORT_CODE,
    PhoneNumber: phone,
    CallBackURL: "https://buysasaOnline.com/",
    AccountReference: "BuySasa online shop",
    TransactionDesc: "Payment",
};

const lipaController = async (req, res) => {
    const { phoneNumber, amount } = req.body;
    if (!phoneNumber || !amount) {
        return res.json({
            succcess: false,
            msg: "Please provide all the fields"
        });
    }
    axios.post(mpesa_safaricom_url, payload);
}

export default lipaController;