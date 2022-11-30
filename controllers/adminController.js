import { pool } from "../db.js";

import { json, response } from "express"
import { ESPECIALIDADES } from "../data/Especialdiades.js"
import { PROFESIONALES_LIST } from "../data/ProfesionalesList.js"
import { RECLAMOS_DATA } from "../data/ReclamosPaciente.js"
import { SOLICITUDES } from '../data/Solicitudes.js'
import { USERS } from "../data/Users.js"



export const getEspecialidades = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM especialidad");
        //const data = ESPECIALIDADES
        if (result.length > 0) {
            return res.status(200).json(result)
        } else {
            return res.status(404).json({ message: "No hay especialidades registradas" });
        }        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
export const setEspecialidad = async (req, res) => {
    try {
        //console.log(req.body)
        //const [result] = await pool.query("INSERT INTO especialidad SET ?", [data]);        
        //if (result.affectedRows === 1) {
            return res.status(200)
        //}
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getProfesionales = async (req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT * FROM medico WHERE estado = 'Habilitado'"
        );
        //const data = PROFESIONALES_LIST
        if (result.length > 0) {
            return res.status(200).json(result)
        } else {
            return res.status(404).json({ message: "No hay medicos registrados" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
export const getProfesionalesById = async (req, res) => {
    try {
        const id = req.params.id
        //const data = PROFESIONALES_LIST.find((item) => item.id == id)
        const [result] = await pool.query("SELECT * FROM medico WHERE estado = 'Habilitado' AND id_medico = ?", [id]);
        if (result.length > 0) {            
            return res.status(200).json(result[0])
        } else {
            return res.status(404).json({ message: "Medico no encontrada" });
        }        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getSolicitudes = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM medico WHERE estado = 'Requiere revisión'");
        //const data = SOLICITUDES
        if (result.length > 0) {
            return res.status(200).json(result)
        } else {
            return res.status(404).json({ message: "No hay solicitudes registradas" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
export const getSolicitudesById = async (req, res) => {
    try {
        const id = req.params.id;
        const [result] = await pool.query("SELECT * FROM medico WHERE estado = 'Requiere revisión' AND id_medico = ?", [id]);
        //const data = SOLICITUDES.find((item) => item.id == id)
        if (result.length > 0) {
            return res.status(200).json(result[0])
        } else {
            return res.status(404).json({ message: "Solicitud no encontrada" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
export const updateSolicitud = async (req, res) => {
    try {
        //console.log(req.body)
        //const [result] = await pool.query("UPDATE medico SET ? WHERE id_medico = ?", [req.body, req.params.id]);
        //if (result.affectedRows === 1) {
            return res.status(200)
        //}
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getQuejasPacientes = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM reclamo WHERE estado = 'Enviado'");                    
        //const data = RECLAMOS_DATA
        if (result.length > 0) {
            return res.status(200).json(result)
        } else {
            return res.status(404).json({ message: "No hay reclamaciones registradas" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
export const getQuejasPacientesById = async (req, res) => {
    try {        
        const id = req.params.id
        const [result] = await pool.query(
            "SELECT * FROM reclamo WHERE estado = 'Enviado' AND id_reclamo = ?",
            [id]
        );
        //const data = RECLAMOS_DATA.find((item) => item.id == id)
        if (result.length > 0) {            
            return res.status(200).json(result[0])
        } else {
            return res.status(404).json({ message: "Reclamacion no encontrada" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    
}
export const updateQueja = async (req, res) => {
    try {
        //console.log(req.body)
        //const [result] = await pool.query("UPDATE reclamo SET ? WHERE id_reclamo = ?", [req.body, req.params.id]);
        //if (result.affectedRows === 1) {
            return res.status(200)
        //}
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getPacientes = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM usuario");                    
        //const data = USERS
        if (result.length > 0) {
            return res.status(200).json(result)
        } else {
            return res.status(404).json({ message: "No hay pacientes registradas" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
export const getPacienteById = async (req, res) => {
    try {
        const id = req.params.id;
        const [result] = await pool.query(
            "SELECT * FROM usuario WHERE id_usuario = ?",
            [id]
        );
        //const data = USERS.find((item) => item.id === id)
        if (result.length > 0) {
            return res.status(200).json(result[0])
        } else {
            return res.status(404).json({ message: "Paciente no encontrado" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}