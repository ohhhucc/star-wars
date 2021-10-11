import {useSelector} from "react-redux";
import {selectPeople} from "../redux/reducers/people/selectors";
import {Link} from "react-router-dom";
import loader from '../assets/tail-spin.svg';
import styles from '../styles.module.css';

export default function Table() {

    const people = useSelector(selectPeople);

    return (
        <>
            {people.loading ? (
                <img src={loader} alt={'loader'}/>
            ) : (
                <table>
                    <thead>
                    <tr>
                        <th>NAME</th>
                        <th>BIRTH YEAR</th>
                        <th>GENDER</th>
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
                                <td>{p.gender}</td>
                                <td>{p.height}</td>
                                <td>
                                    <Link to={`/people/${id}`}>Details</Link>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            )}
        </>
    )
}