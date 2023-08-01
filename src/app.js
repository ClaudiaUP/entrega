import express from 'express';
import productsRoutes from '../src/routes/products.router.js';
import cartsRoutes from '../src/routes/carts.router.js';
import __dirname from './utils.js';




const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/static', express.static(`${__dirname}/public/img`));

app.use("/api/products", productsRoutes);
app.use("/api/carts", cartsRoutes);


app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)})

