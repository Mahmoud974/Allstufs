import express from 'express';
import { createUser, getUserByEmail } from '../db/db';
import { authentication, random } from '../../helper';


export const register = async (req:express.Request, res:express.Response) => {
try{
    const {password, username, email} = req.body
if(!password && !username && !email) res.status(400).send('Bad request')

const findUserEmail = await getUserByEmail(email)

if(findUserEmail) res.status(400).send('Email already exists')

const salt = random()
const userNew = await createUser({username, email, authentication:{ salt,password:authentication(salt,  password)}})
if(password && username && email) res.status(201).json(userNew).end()
}catch(error){
    res.status(500).send('Internal server error')
    
}}


export const login = async  (req:express.Request, res:express.Response) => {
try {
        const { email, password } = req.body;
        if (!email || !password) return res.sendStatus(400);

        const user = await getUserByEmail(email).select('+authentication.salt +authentication.password');


        // Vérifier si l'utilisateur existe
        if (!user || !user.authentication) {
            return res.sendStatus(400);
        }

        // Vérifier si user.authentication.salt et user.authentication.password existent
        if (!user.authentication.salt || !user.authentication.password) {
            return res.sendStatus(400);
        }

        const expectedHash = authentication(user.authentication.salt, password);
console.log(expectedHash);
        if (user.authentication.password !== expectedHash) {
            return res.sendStatus(403);
        }

        const salt = random();
        user.authentication.sessionToken = authentication(salt, user._id.toString());

        await user.save();

        res.cookie('ANTONIO-AUTH', user.authentication.sessionToken, { domain: 'localhost', path: '/' });

        return res.status(200).json(user).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}