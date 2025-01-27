
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
    const sql = `SELECT *  FROM movies
    WHERE id = ?`
    connection.query(sql, [id], (err, results) => {

        if (err)
            return res.status(500).json({ error: err })

        if (results[0]) {
            const sql2 = `SELECT reviews.* FROM reviews
            JOIN movies ON movies.id = reviews.movie_id
            WHERE movies.id = ?`;
            const item = results[0]
            connection.query(sql2, [id], (err, results2) => {

                if (err)
                    return res.status(500).json({ error: err })

                item.reviews = results2
                return res.json({ item: item })

            })
        } else {
            return res.status(404).json({ error: "element not found" })
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