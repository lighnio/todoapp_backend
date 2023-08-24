const User = require('../models/user');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();  
        res.status(200).json(users);
        // console.log("Obteniendo usuarios...");
        // console.log(users);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios', error });
    }
};

exports.createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();  
        res.status(201).json({ message: 'Usuario creado exitosamente', user: newUser });
    } catch (error) {
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

