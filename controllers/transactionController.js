import midtransClient from 'midtrans-client';
import dotenv from 'dotenv';

dotenv.config();

const snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY,
});

export const createTransaction = async (req, res) => {
    try {
        const { orderId, grossAmount, customerName, customerEmail } = req.body;

        const parameter = {
            transaction_details: {
                order_id: orderId,
                gross_amount: grossAmount,
            },
            customer_details: {
                first_name: customerName,
                email: customerEmail,
            },
        };

        const transaction = await snap.createTransaction(parameter);

        res.status(200).json({
            message: 'Transaksi berhasil dibuat',
            token: transaction.token,
            redirect_url: transaction.redirect_url,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Gagal membuat transaksi',
            error: error.message,
        });
    }
};
