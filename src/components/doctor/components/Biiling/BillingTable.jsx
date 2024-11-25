import React, { useState } from "react";
import Filters from "./Filters";
import FilterTags from "./FilterTags";
import Table from "./Table";
import BillingData from "./BillingData";

const BillingTable = () => {
  const [filterStatus, setFilterStatus] = useState([]);
  const [filterUrgency, setFilterUrgency] = useState([]);
  const [filterDepartment, setFilterDepartment] = useState([]);
  const [filterTestType, setFilterTestType] = useState([]);

  const filteredData = BillingData.filter((item) => {
    const matchesStatus =
      filterStatus.length === 0 || filterStatus.includes(item.status);
    const matchesDepartment =
      filterDepartment.length === 0 ||
      filterDepartment.includes(item.department);
    const matchesUrgency =
      filterUrgency.length === 0 || filterUrgency.includes(item.urgency);
    const matchesTestType =
      filterTestType.length === 0 ||
      item.testType.some((test) => filterTestType.includes(test));
    return (
      matchesStatus && matchesUrgency && matchesDepartment && matchesTestType
    );
  });

  return (
    <>
      <Filters
        filteredData={filteredData}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        filterDepartment={filterDepartment}
        setFilterDepartment={setFilterDepartment}
        filterUrgency={filterUrgency}
        setFilterUrgency={setFilterUrgency}
        filterTestType={filterTestType}
        setFilterTestType={setFilterTestType}
      />
      <FilterTags
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        filterDepartment={filterDepartment}
        setFilterDepartment={setFilterDepartment}
        filterUrgency={filterUrgency}
        setFilterUrgency={setFilterUrgency}
        filterTestType={filterTestType}
        setFilterTestType={setFilterTestType}
      />
      <Table data={filteredData} />
    </>
  );
};

export default BillingTable;
