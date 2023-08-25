const User = require('../models/user');
const mongoose = require('mongoose');

exports.getUsers = async (req, res) => {

    const page = parseInt(req.query.page) || 1;
    const limit = 20;
    const offset = (page - 1) * limit;

    try {
        const users = await User.find().skip(offset).limit(limit);  
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios', error });
    }
};

exports.createUser = async (req, res) => {
    try {
        req.body["_id"] = new mongoose.Types.ObjectId();
        const newUser = new User(req.body);
        await newUser.save();  
        res.status(201).json({ message: 'Usuario creado exitosamente', user: newUser });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al crear el usuario', error });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const userId = req.params.id;  
        const user = await User.findById(userId);  

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el usuario', error });
    }
};

