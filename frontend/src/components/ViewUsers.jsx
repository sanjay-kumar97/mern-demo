import React, { useEffect, useState } from "react";
import { readUser } from "../utils/crud";
import Table from "./ui/Table";
import { getGenderLabel } from "../utils/helperFunctions";

const ViewUsers = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () =>
      await readUser()
        .then((res) => setUserData(res.data))
        .catch((err) => console.log("Error reading data", err));

    fetchUserData();
  }, []);

  const TableData = {
    TableHeads: [
      "ID",
      "User Name",
      "User Age",
      "User Gender",
      "User Profession",
    ],
    TableRows: userData.map((item, index) => [
      { type: "text", label: index + 1 },
      { type: "text", label: item.name },
      { type: "text", label: item.age },
      { type: "text", label: getGenderLabel(item.gender) },
      { type: "text", label: item.profession },
    ]),
  };

  const styles = {
    root: "max-w-2xl md:max-h-96 mx-auto",
  };

  return (
    <section className="grid place-items-center min-h-main m-3 overflow-hidden">
      <Table TableData={TableData} classNames={styles} />
    </section>
  );
};

export default ViewUsers;
