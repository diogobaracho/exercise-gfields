import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import GeoJSONArea from "@mapbox/geojson-area"

import Flag from "react-world-flags"

export function Field() {
    let { id } = useParams<any>()

    const [field, setField] = useState<any>()

    useEffect(() => {
        const apiURl = `http://localhost:8000/fields/${id}?fast`

        axios.get(apiURl).then(({ data }) => {
            console.log(data)
            setField(data)
        })
    }, [id])

    if (!field) return <p>loading...</p>

    const areaInSquaredMeters = GeoJSONArea.geometry(field.geoData.geometry)

    const areaInAcres = areaInSquaredMeters / 4047

    return (
        <>
            <h1>{field.name}</h1>
            <div>
                <Flag code={field.countryCode} height={40} />
            </div>
            <ul>
                <li>owner: {field.owner}</li>
                <li>type: {field.type}</li>

                <li>{areaInAcres.toFixed(2)} ac</li>
            </ul>
        </>
    )
}
