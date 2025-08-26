const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

// Helper functions to read/write JSON files
function readData(file) {
    const data = fs.readFileSync(path.join(__dirname, file), 'utf8');
    return JSON.parse(data);
}
function writeData(file, data) {
    fs.writeFileSync(path.join(__dirname, file), JSON.stringify(data, null, 2));
}

// File paths
const usersFile = 'users.json';
const productsFile = 'products.json';
const ordersFile = 'orders.json';
const postsFile = 'posts.json';
const commentsFile = 'comments.json';

// --- API Endpoints ---

// GET /hello – simple endpoint
app.get('/hello', (req, res) => {
    res.json({ message: 'Hello! The API is running.' });
});

// --- Users Endpoints ---

// GET /users – list of users
app.get('/users', (req, res) => {
    res.json(readData(usersFile));
});

// GET /users/:id – get single user
app.get('/users/:id', (req, res) => {
    const users = readData(usersFile);
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: 'User not found.' });
    res.json(user);
});

// POST /users – add a new user
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) return res.status(400).json({ error: 'Name and email are required.' });
    const users = readData(usersFile);
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    writeData(usersFile, users);
    res.status(201).json(newUser);
});

// PUT /users/:id – update user
app.put('/users/:id', (req, res) => {
    const users = readData(usersFile);
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: 'User not found.' });
    const { name, email } = req.body;
    if (name) user.name = name;
    if (email) user.email = email;
    writeData(usersFile, users);
    res.json(user);
});

// DELETE /users/:id – delete user
app.delete('/users/:id', (req, res) => {
    let users = readData(usersFile);
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) return res.status(404).json({ error: 'User not found.' });
    const deletedUser = users.splice(userIndex, 1);
    writeData(usersFile, users);
    res.json({ message: 'User deleted.', user: deletedUser[0] });
});

// --- Products Endpoints ---

app.get('/products', (req, res) => {
    res.json(readData(productsFile));
});

app.get('/products/:id', (req, res) => {
    const products = readData(productsFile);
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ error: 'Product not found.' });
    res.json(product);
});

app.post('/products', (req, res) => {
    const { name, price } = req.body;
    if (!name || !price) return res.status(400).json({ error: 'Name and price are required.' });
    const products = readData(productsFile);
    const newProduct = { id: products.length + 1, name, price };
    products.push(newProduct);
    writeData(productsFile, products);
    res.status(201).json(newProduct);
});

app.put('/products/:id', (req, res) => {
    const products = readData(productsFile);
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ error: 'Product not found.' });
    const { name, price } = req.body;
    if (name) product.name = name;
    if (price) product.price = price;
    writeData(productsFile, products);
    res.json(product);
});

app.delete('/products/:id', (req, res) => {
    let products = readData(productsFile);
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
    if (productIndex === -1) return res.status(404).json({ error: 'Product not found.' });
    const deletedProduct = products.splice(productIndex, 1);
    writeData(productsFile, products);
    res.json({ message: 'Product deleted.', product: deletedProduct[0] });
});

// --- Orders Endpoints ---

app.get('/orders', (req, res) => {
    res.json(readData(ordersFile));
});

app.get('/orders/:id', (req, res) => {
    const orders = readData(ordersFile);
    const order = orders.find(o => o.id === parseInt(req.params.id));
    if (!order) return res.status(404).json({ error: 'Order not found.' });
    res.json(order);
});

app.post('/orders', (req, res) => {
    const { userId, productId, quantity } = req.body;
    if (!userId || !productId || !quantity) return res.status(400).json({ error: 'userId, productId, and quantity are required.' });
    const orders = readData(ordersFile);
    const newOrder = { id: orders.length + 100, userId, productId, quantity };
    orders.push(newOrder);
    writeData(ordersFile, orders);
    res.status(201).json(newOrder);
});

// --- Blog Example Endpoints ---

app.get('/posts', (req, res) => {
    res.json(readData(postsFile));
});

app.post('/posts', (req, res) => {
    const { title, content, userId } = req.body;
    if (!title || !content || !userId) return res.status(400).json({ error: 'title, content, and userId are required.' });
    const posts = readData(postsFile);
    const newPost = { id: posts.length + 1, title, content, userId };
    posts.push(newPost);
    writeData(postsFile, posts);
    res.status(201).json(newPost);
});

app.get('/posts/:id/comments', (req, res) => {
    const comments = readData(commentsFile);
    const postComments = comments.filter(c => c.postId === parseInt(req.params.id));
    res.json(postComments);
});

app.post('/posts/:id/comments', (req, res) => {
    const { text, userId } = req.body;
    if (!text || !userId) return res.status(400).json({ error: 'text and userId are required.' });
    const comments = readData(commentsFile);
    const newComment = { id: comments.length + 1, postId: parseInt(req.params.id), text, userId };
    comments.push(newComment);
    writeData(commentsFile, comments);
    res.status(201).json(newComment);
});

// --- Error Handling Example ---
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Server error occurred.' });
});

// --- Start the Server ---
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`API server is running: http://localhost:${PORT}`);
});


