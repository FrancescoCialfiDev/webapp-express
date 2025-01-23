
import connection from "../connection.js"


const index = (req, res) => {

    const sql = "SELECT * FROM `movies`"
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({
            error: "Database query failed"
        })
        res.json({

            length: results.length,
            items: results

        })

    })


}

const show = (req, res) => {

    const id = parseInt(req.params.id)
    const sql = "SELECT * FROM `movies` WHERE `id` = ? "
    connection.query(sql, [id], (err, results) => {

        if (results[0])
            return res.json({ items: results[0] })

        if (!results[0])

            return res.status(500).json({ error: "element not found" })

    })

}

const destroy = (req, res) => {

    const id = parseInt(req.params.id)
    const sql = "DELETE FROM `movies` WHERE `id` = ? "
    connection.query(sql, [id], () => {

        return res.json({ message: "element deleted" })


    })

}

export { index, show, destroy } 