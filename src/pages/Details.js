import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectDetails} from "../redux/reducers/details/selectors";
import loader from '../assets/tail-spin.svg';
import styles from '../styles.module.css';

export default function Details() {

    const details = useSelector(selectDetails);
    console.log(details);

    return (
        <div>
            {details.loading ? (
                <img src={loader} alt={'loader'}/>
            ) : (
                <div>
                    <h1>{details.data.name}</h1>
                    <p>Birth year: {details.data.birth_year}</p>
                    <p>Gender: {details.data.gender}</p>
                    <p>Height: {details.data.height}</p>
                    <p>Mass: {details.data.mass}</p>
                    <p>Skin color: {details.data.skin_color}</p>
                    <p>Eye color: {details.data.eye_color}</p>
                    <p>Hair color: {details.data.hair_color}</p>
                </div>
            )}
            <Link to={'/'}>Back</Link>
        </div>
    );
}