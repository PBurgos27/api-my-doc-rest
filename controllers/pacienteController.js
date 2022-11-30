import { pool } from "../db.js";

import { json } from "express"
import { citasPacienteSeparado } from "../data/CitasPacienteSeparado.js"
import { USERS } from "../data/Users.js"
import {citasDisponibles} from '../data/CitasDisponibles.js'
import {citasPacienteAtendidas} from '../data/CitasPacienteAtendidas.js'
import { RECLAMOS_DATA } from "../data/ReclamosPaciente.js"


export const getProfile = async (req, res) => {
    try {
        const id = req.params.id;
        const [result] = await pool.query(
            "SELECT * FROM usuario WHERE id_usuario = ?",
            [id]
        );
        //const data = USERS.find((item) => item.id == id)
        if (result.length > 0) {
            return res.status(200).json(result[0])
        } else {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
export const changeProfile = async (req, res) => {
    console.log(req.body)
    infoUser = req.body
    const data = infoUser
    return res.status(200).json(data)
}

export const setCitaSeparada = async (req, res) => {
    
    const data = req.body
    console.log(data)
    return res.status(200)
}

export const getCitasSeparadas = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM cita WHERE estado = 'Separado'");
        //const data = citasPacienteSeparado
        if (result.length > 0) {
            return res.status(200).json(result)
        } else {
            return res.status(404).json({ message: "No hay citas separadas registradas" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
export const getCitasSeparadaById = async (req, res) =>{
    try {
        const id = req.params.id;
        const [result] = await pool.query(
            "SELECT * FROM cita WHERE estado = 'Separado' AND id_cita = ?",
            [id]
        );
        //const data = citasPacienteSeparado.find((item)=>item.id == id)
        if (result.length > 0) {
            return res.status(200).json(result[0])
        } else {
            return res.status(404).json({ message: "Cita no encontrada" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getCitasDisponibles = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM cita WHERE estado = 'Disponible'");
        //const data = citasDisponibles
        if (result.length > 0) {
            return res.status(200).json(result)
        } else {
            return res.status(404).json({ message: "No hay citas disponible" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
export const getCitasDisponibleById = async (req, res) => {
    try {
        const id = req.params.id;
        const [result] = await pool.query(
            "SELECT * FROM cita WHERE estado = 'Disponible' AND id_cita = ?",
            [id]
        );
        //const data = citasDisponibles.find((item)=>item.id == id)
        if (result.length > 0) {
            return res.status(200).json(result[0])
        } else {
            return res.status(404).json({ message: "Cita no encontrada" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getCitasAtendidas = async (req, res) => {
    try {
        const id = req.params.id;
        const [result] = await pool.query("SELECT * FROM cita WHERE estado = 'Atendido' AND id_usuario = ?",[id]);
        //const data = citasPacienteAtendidas
        if (result.length > 0) {
            return res.status(200).json(result)
        } else {
            return res.status(404).json({ message: "No hay citas atendidas" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getReclamos = async (req, res) =>{
    try {
        const id = req.params.id;
        const [result] = await pool.query("SELECT * FROM reclamo WHERE id_usuario = ?",[id]);
        //const data = RECLAMOS_DATA
        if (result.length > 0) {
            return res.status(200).json(result)
        } else {
            return res.status(404).json({ message: "No hay reclamos registrados" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

