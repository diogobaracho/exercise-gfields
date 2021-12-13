import { useEffect, useState } from "react"
import axios from "axios"
import { Table } from "reactstrap"
import { Link } from "react-router-dom"

export function Fields() {
    const [fields, setFields] = useState([])
    useEffect(() => {
        const apiURl = `http://localhost:8000/fields?fast`

        axios.get(apiURl).then(({ data }) => {
            const { fields } = data
            setFields(fields)
        })
    }, [])

    const fieldTypeIcon = (fieldType: string) => {
        if (fieldType === "corporate") return <span>🏦</span>
        if (fieldType === "collective") return <span>👥</span>
        if (fieldType === "individual") return <span>👤</span>
    }

    return (
        <>
            <h2>Fields</h2>
            <div>
                <p>
                    The total number of Fields:{" "}
                    <strong>
                        {fields.reduce<any>((acc: any, c) => (acc += 1), 0)}
                    </strong>
                </p>
            </div>

            <Table striped>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {fields.map((field: any) => (
                        <tr key={field.id}>
                            <td>
                                <Link to={`/fields/${field.id}`}>
                                    {field.name}
                                </Link>

                                {/* <a href={`/fields/${field.id}`}>{field.name}</a> */}
                            </td>
                            <td>{fieldTypeIcon(field.type)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}
