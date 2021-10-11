import styles from "../styles.module.css";
import {useDispatch, useSelector} from "react-redux";
import {selectPeople} from "../redux/reducers/people/selectors";
import {LOAD_PEOPLE} from "../redux/reducers/people/actions";

export default function TableSearch() {

    const people = useSelector(selectPeople);

    const dispatch = useDispatch();

    const search = (event) => dispatch({
        type: LOAD_PEOPLE,
        payload: {
            page: 1,
            search: event.target.value
        }
    })

    return (
        <form className={styles.search}>
            <input
                type={'text'}
                placeholder={'SEARCH'}
                value={people.search}
                onChange={search}
            />
        </form>
    )
}