import TablePagination from "./TablePagination";
import {useDispatch, useSelector} from "react-redux";
import {LOAD_PEOPLE} from "../redux/reducers/people/actions";
import {selectPeople} from "../redux/reducers/people/selectors";

export default function (props) {

    const people = useSelector(selectPeople);

    const dispatch = useDispatch();

    const changePage = newPage => dispatch({
        type: LOAD_PEOPLE,
        payload: {
            page: newPage,
            search: people.search
        }
    })

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
                {people?.data?.results.map(p => {
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
                page={people.page}
                total={people.data.count}
                onChange={changePage}
            />
        </>
    )
}