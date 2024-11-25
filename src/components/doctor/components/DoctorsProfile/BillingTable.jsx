import React, { useState } from "react";
import Filters from "./Filters";
import FilterTags from "./FilterTags";
import Table from "./Table";
import BillingData from "./BillingData";

const BillingTable = () => {
  const [filterDepartment, setFilterDepartment] = useState([]);
  const [filterSchedule, setFilterSchedule] = useState([]);

  const filteredData = BillingData.filter((item) => {
    const matchesDepartment =
      filterDepartment.length === 0 ||
      filterDepartment.includes(item.department);
    const matchesSchedule =
      filterSchedule.length === 0 || filterSchedule.includes(item.schedule);
    return matchesDepartment && matchesSchedule;
  });

  return (
    <>
      {/* Filters Component */}
      <Filters
        filteredData={filteredData}
        filterDepartment={filterDepartment}
        setFilterDepartment={setFilterDepartment}
        filterSchedule={filterSchedule}
        setFilterSchedule={setFilterSchedule}
      />

      {/* Filter Tags Component */}
      <FilterTags
        filterDepartment={filterDepartment}
        setFilterDepartment={setFilterDepartment}
        filterSchedule={filterSchedule}
        setFilterSchedule={setFilterSchedule}
      />

      {/* Table Component */}
      <Table data={filteredData} />
    </>
  );
};

export default BillingTable;
