import TablePagination from "./TablePagination";
import {useDispatch, useSelector} from "react-redux";
import {LOAD_PEOPLE} from "../redux/reducers/people/actions";
import {selectPeople} from "../redux/reducers/people/selectors";
import {Link} from "react-router-dom";

export default function () {

    const people = useSelector(selectPeople);

    const dispatch = useDispatch();

    const changePage = newPage => dispatch({
        type: LOAD_PEOPLE,
        payload: {
            page: newPage,
            search: people.search
        }
    })

    const search = (event) => dispatch({
        type: LOAD_PEOPLE,
        payload: {
            page: 1,
            search: event.target.value
        }
    })

    return (
        <>

            <form>
                <input
                    type={'text'}
                    placeholder={'SEARCH'}
                    value={people.search}
                    onChange={search}
                />
            </form>

            {people.loading ? (
                <p>Loading...</p>
            ) : (
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
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {people?.data?.results.map(p => {

                            const id = p.url.replaceAll(/\D/g, '');

                            return (
                                <tr key={p.name}>
                                    <td>{p.name}</td>
                                    <td>{p.birth_year}</td>
                                    <td>{p.eye_color}</td>
                                    <td>{p.gender}</td>
                                    <td>{p.hair_color}</td>
                                    <td>{p.height}</td>
                                    <td>
                                        <Link to={`/people/${id}`}>Details</Link>
                                    </td>
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
            )}
        </>
    )
}