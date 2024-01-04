const dbconn = require('../db/mysql.config')

async function create_employees(req, res) {
    try {

        const name = req.body.name;
        const salary = req.body.salary;
        const department = req.body.department;

        if (!name || !salary || !department) {
            return res.status(400).json({
                message: "kindly fill all the fields",

            })
        }

        const [result] = await dbconn.query(`INSERT INTO employees (full_name,salary,department) VALUES(?,?,?)`, [name, salary, department])
        return res.status(200).json({
            message: "sucess",
            data: result
        })
    }
    catch (e) {
        return res.status(500).json({
            message: "server issue" + e
        })
    }
}

async function edit_employee(req, res) {
    try {

        const id = req.body.id;

        const salary = req.body.salary

        if (!id || !salary) {
            return res.status(400).json({
                message: "kindly fill all the fields"
            })
        }
        const [result] = await dbconn.query('UPDATE employees SET salary =? where empid =?', [salary, id])

        return res.status(200).json({
            message: "sucess",
            data: result
        })

    }
    catch (e) {
        return res.status(500).json({
            message: "server issue" + e
        })
    }
}

async function get_all_employees(req, res) {
    try {

        const [result] = await dbconn.query(`SELECT * FROM employees where status= active`)

        return res.status(200).json({
            message: "sucess",
            data: result
        })
    }
    catch (e) {
        return res.status(500).json({
            message: "server issue" + e
        })
    }
}

async function soft_delete(req, res) {
    try {
        const id = req.body.id;
        const status = req.body.status;

        if (!id || !status) {
            return res.status(400).json({
                message: "kindly fill all the fields"
            })
        }

        const [result] = await dbconn.query(`UPDATE employees set status = ? where empid =?`, [status, id])
        return res.status(200).json({
            message: "sucess",
            data: result
        })
    }
    catch (e) {
        return res.status(500).json({
            message: "server issue" + e
        })
    }
}
module.exports = { create_employees, edit_employee, get_all_employees, soft_delete }