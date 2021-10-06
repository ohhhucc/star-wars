import {useSelector} from "react-redux";
import {selectPeople} from "../redux/reducers/people/selectors";
import Table from "../components/Table";

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
                <Table people={people}/>
            )}
        </div>
    );
}

export default App;
