import express from 'express';
import dotenv from 'dotenv';
import transactionRoutes from './routes/transactionRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Routing transaksi
app.use('/api/transaction', transactionRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Merchant server running on http://localhost:${PORT}`);
});
