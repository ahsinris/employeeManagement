const dbconn = require('../db/mysql.config')

async function add_attedence(req, res) {
    try {
        const empid = req.body.id;
        const joining_date = req.body.joining_date;
        const status = req.body.status

        if (!empid || !joining_date || !status) {
            return res.status(400).json({
                message: "kindky fill all the fields"
            })
        }
        const [result] = await dbconn.query(`INSERT INTO attendence_log (empid,joining_date,status) VALUES (?,?,?)`, [empid, joining_date, status])
        return res.status(200).json({
            message: "sucess",
            data: result
        })


    }
    catch (e) {
        res.status(500).json({
            message: "server issue" + e
        })
    }
}

module.exports = { add_attedence }