
import connection from "../connection.js"


const index = (req, res) => {

    const sql = "SELECT * FROM `books`"
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
    const sql = `SELECT books.* FROM books
    WHERE books.id = ?`
    connection.query(sql, [id], (err, results) => {

        if (err)
            return res.status(500).json({ error: err })

        if (!results[0])
            return res.status(404).json({ error: "element not found" })

        if (results[0]) {
            const sql2 = `SELECT reviews.*
                          FROM reviews
                          JOIN movies ON reviews.movie_id = movies.id
                          WHERE movies.id = 1`;
            const item = results[0]
            connection.query(sql2, [id], (err, results2) => {

                if (err)
                    return res.status(500).json({ error: err })

                const reviews = results2
                console.log(results2)
                return res.json({ item: item, reviews: reviews })

            })
        }

    })

}

const destroy = (req, res) => {

    const id = parseInt(req.params.id)
    const sql = "DELETE FROM `books` WHERE `id` = ? "
    connection.query(sql, [id], () => {

        return res.json({ message: "element deleted" })


    })

}

export { index, show, destroy } 