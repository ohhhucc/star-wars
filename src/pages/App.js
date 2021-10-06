import {useSelector} from "react-redux";
import {selectPeople} from "../redux/reducers/people/selectors";

function App() {

    const people = useSelector(selectPeople);

    console.log(people);

    return (
        <div className="App">
            <p>STAR WARS UI</p>
            {people.loading ? (
                <div>
                    Loading...
                </div>
            ) : (
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
            )}
        </div>
    );
}

export default App;
