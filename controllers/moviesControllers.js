
import connection from "../connection.js"


const index = (req, res) => {

    const sql = "SELECT * FROM `movies`"
    connection.query(sql, (err, results) => {

        if (err) {
            return res.status(500).json({
                error: "Database query failed",
                details: err.message
            });
        }

        res.json({
            count: results.length,
            items: results
        });

    })



}

const show = (req, res) => {

    const id = parseInt(req.params.id)
    const sql = "SELECT * FROM `movies` WHERE `id` = ? "
    connection.query(sql, [id], (err, results) => {

        if (err) {
            // Restituisci un errore se la query fallisce
            return res.status(500).json({ error: "Database error", details: err.message });
        }

        if (results.length > 0) {
            // Elemento trovato
            return res.json({ items: results[0] });
        } else {
            // Elemento non trovato
            return res.status(404).json({ error: "Element not found" });
        }

    })

}

const destroy = (req, res) => {

    const id = parseInt(req.params.id)
    const sql = "DELETE FROM `movies` WHERE `id` = ? "
    connection.query(sql, [id], (err, results) => {

        console.log(results)
        if (err)
            // Restituisci un errore se la query fallisce
            return res.status(400).json({ error: err.message });

        if (results.affectedRows > 0) {
            // Se almeno una riga è stata eliminata
            return res.status(200).json({ message: "Element deleted" });
        } else {
            // Nessuna riga trovata con quell'ID
            return res.status(404).json({ message: "Element not found" });
        }

    })

}

export { index, show, destroy } 