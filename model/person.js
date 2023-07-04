    const mongoose = require('mongoose');

    const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number },
    });


    // Create a new user object
    async function newUser(req, res) {
    const user = newUser({
    name: 'Ogah vincent',
    email: 'john@example.com',
    age: 30
    });

    try {
    const newUser = await user.save();
    res.status(201).json(newUser);
    } catch (error) {
    res.status(400).json({ message: error.message });
    }
    }



    const User = mongoose.model('User', userSchema);

    module.exports = User;
    module.exports = newUser;