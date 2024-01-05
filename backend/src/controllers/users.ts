import express from 'express';
import { getUsers, deleteUserById } from '../db/db';


export const getAllUsers = async (req:express.Request, res:express.Response) => {
    try{
        const allUsers = await getUsers()
        !allUsers && res.status(400).send('Bad request')
        allUsers && res.status(200).json(allUsers).end()
    }catch(error){
        res.status(500).send('Internal server error')
        
    }
}
export const deleteUser = async (req:express.Request, res:express.Response) => {
try{
const {id} = req.params
const deleteOneUser = await deleteUserById(id)
!deleteOneUser && res.status(400).json({message: "No id correspondant"})
deleteOneUser && res.status(200).json(deleteOneUser).end()
}catch(error){
    res.status(500).send('Internal server error')
}
}