/* react */
import React, { useState,lazy, Suspense } from "react";
import { Link } from "react-router-dom";
/* redux  */
import { useSelector } from 'react-redux';
/* css  */
import style from '../ListEmployeePage/ListEmployeePage.module.css';
/**
 * Const Table import the component table with lazy for optimize perf.
 *  Lazy call the component when is necessary
 */
const DataTable = lazy(() => import("../../components/Table/DataTable"));
const selectEmployees = (state) => state.employees;

/**
 * @function ListEmployeePage
 * @export
 * @description List employee page
 * @return {HTMLElement} component generated HTML
 */
export default function ListEmployeePage() {
  //// Use Selector for extract: employee (state)
  const employees = useSelector(selectEmployees);
  /* hook useMemo for optimize the react speed. useMemo store
    a value in the memory and not re-excute if the value not change */
  const data = React.useMemo(() => employees , [employees ]);
  const [dataToDisplay, setDataToDisplay] = useState(data);
  const [itemsShow, setItemsShow] = useState(10);
  const handleSearch = (event) => {
    let dataFilter = []
    dataFilter =  data.filter((row) => {
      return Object.values(row).some((s) =>
        ("" + s).toLowerCase().trim().includes(event.toLowerCase().trim())
      )
    })
    setDataToDisplay(dataFilter);
  }
  const handleShow = (event) => {
    setItemsShow(event);
  }
  return (
    <main>
      <div className={style.tableContainer}>
        <h2 className={style.list_title}>- Current Employees -</h2>
        <div className={style.containerFilter}>
          <div className={style.filter}>
            <label  htmlFor={style.search}>Search: </label>
            <input className={style.searchInput} type="search" id="search" name="search" aria-label="search" placeholder="search..." onChange={(event) => handleSearch(event.target.value)} />
          </div>
          <div className={style.containerFilter_show}>
            <label>Rows per page: </label>
            <select className={style.selectShowRows} id="show" name="show" aria-label="show" defaultValue={10} onChange={(event) => handleShow(event.target.value)}>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>
        </div>
        <Suspense fallback={<p>Loading...</p>}>
          <DataTable products={dataToDisplay} rowsPerPage={itemsShow} />
        </Suspense>
      </div>
      <div className={style.btnContainer}>
        <Link to="/"><button>Home</button></Link>
      </div>
    </main>
  )
}