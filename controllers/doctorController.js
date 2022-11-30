import { pool } from "../db.js";

import { json } from "express"
import { citasPacienteSeparado } from "../data/CitasPacienteSeparado.js"
import { USERS } from "../data/Users.js"
import {citasDisponibles} from '../data/CitasDisponibles.js'
import {citasPacienteAtendidas} from '../data/CitasPacienteAtendidas.js'
import { RECLAMOS_DATA } from "../data/ReclamosPaciente.js"

let horario = []

export const getProfile = async (req, res) => {
    try {
        //const [result] = await pool.query("SELECT * FROM usurio WHERE tipo = 0");  
        const id = req.params.id
        const data = USERS.find((item) => item.id == id)
        if (data.length > 0) {
            return res.status(200).json(data)
        } else {
            return res.status(404).json({ message: "No hay pacientes registradas" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getHorario = async (req, res) => {
    const data = horario
    console.log("Horari0: ", horario)
    return res.status(200).json(data)
}

export const setHorario = async (req, res) => {
    const data = req.body;
    console.log("El Horario : ", data)
    horario = data.slice()
    return res.status(200)
}