import {LOAD_PEOPLE} from "../redux/reducers/people/actions";
import {useDispatch, useSelector} from "react-redux";
import {selectPeople} from "../redux/reducers/people/selectors";

const LIMIT = 10;

export default function TablePagination() {

    const people = useSelector(selectPeople);

    const dispatch = useDispatch();

    const pagesCount = Math.ceil(people?.data?.count / LIMIT);

    const changePage = newPage => dispatch({
        type: LOAD_PEOPLE,
        payload: {
            page: newPage,
            search: people.search
        }
    })

    return (
        <div>
            {
                Array
                    .from({length: pagesCount}, (_, index,) => index + 1)
                    .map(pageIndex => {
                        const isActive = pageIndex === people.page;
                        const action = () => {
                            if(pageIndex !== people.page) {
                                changePage(pageIndex);
                            }
                        }
                        return isActive ? (
                            <b key={pageIndex} onClick={action}>
                                {' |'}{pageIndex}{'| '}
                            </b>
                        ) : (
                            <span key={pageIndex} onClick={action}>
                                {' '}{pageIndex}{' '}
                            </span>
                        )
                    })
            }
        </div>
    )
}