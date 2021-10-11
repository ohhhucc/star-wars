import Table from "../components/Table";
import TableSearch from "../components/TableSearch";
import TablePagination from "../components/TablePagination";
import Header from "../components/Header";

import styles from '../styles.module.css';

export default function App() {
    return (
        <div className={styles.app}>
            <Header/>
            <TableSearch/>
            <Table/>
            <TablePagination/>
        </div>
    );
}