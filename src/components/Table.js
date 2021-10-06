import TablePagination from "./TablePagination";

export default function (props) {
    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>NAME</th>
                    <th>BIRTH YEAR</th>
                    <th>EYE COLOR</th>
                    <th>GENDER</th>
                    <th>HAIR COLOR</th>
                    <th>HEIGHT</th>
                </tr>
                </thead>
                <tbody>
                {props.people?.data?.results.map(p => {
                    return (
                        <tr key={p.name}>
                            <td>{p.name}</td>
                            <td>{p.birth_year}</td>
                            <td>{p.eye_color}</td>
                            <td>{p.gender}</td>
                            <td>{p.hair_color}</td>
                            <td>{p.height}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <TablePagination
                page={props.people.page}
                total={props.people.data.count}
                onChange={(currentPage) => {
                    console.log('Current page: ', currentPage)
                }}
            />
        </>
    )
}