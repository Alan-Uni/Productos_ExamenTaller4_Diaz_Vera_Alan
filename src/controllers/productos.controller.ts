import express from 'express';

type Request = express.Request;
type Response = express.Response;
import connection from '../db.ts';

export const getAll = (req: Request, res: Response) => {
    connection.query('SELECT * FROM producto', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
};

export const insertProducto = (req: Request, res: Response) => {
 const { id, nombre, precio, descripcion, categoria } = req.body;

    if (!id || !nombre || !precio || !descripcion || !categoria) {
        return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    const query = 'INSERT INTO producto (id, nombre, precio, descripcion, categoria) VALUES (?, ?, ?, ?, ?)';
    connection.query(query, [id, nombre, precio, descripcion, categoria], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Producto insertado correctamente' });
    });
};

export const updateProducto = (req: Request, res: Response) => {
    const { id } = req.params;
    const { nombre, precio, descripcion, categoria } = req.body; 

    if (!nombre || !precio || !descripcion || !categoria) {
        return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    const query = 'UPDATE producto SET nombre = ?, precio = ?, descripcion = ?, categoria = ? WHERE id = ?';
    connection.query(query, [nombre, precio, descripcion, categoria, id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        
        res.status(200).json({ message: 'Producto actualizado correctamente' });
    });
};

export const deleteProducto = (req: Request, res: Response) => {
    const { id } = req.params; 

    const query = 'DELETE FROM producto WHERE id = ?';
    connection.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        
        res.status(200).json({ message: 'Producto eliminado correctamente' });
    });
};