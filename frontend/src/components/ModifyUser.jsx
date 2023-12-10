import React, { useEffect, useState } from "react";
import { readUser } from "../utils/crud";
import Table from "./ui/Table";
import { IconStore } from "../lib/iconStore";
import { getGenderLabel } from "../utils/helperFunctions";

const ModifyUser = () => {
  const [userData, setUserData] = useState([]);
  const [modifiedData, setModifiedData] = useState({});

  useEffect(() => {
    const fetchUserData = async () =>
      await readUser()
        .then((res) => setUserData(res.data))
        .catch((err) => console.log("Error reading data", err));

    fetchUserData();
  }, []);

  const handleModifyClick = (selectedIndex) => {
    const selectedUser = userData[selectedIndex];
    console.log("Modified", selectedUser.name);
    // const response = confirm(
    //   `Modify ${selectedUser.name} with ${selectedUser._id}`
    // );
    // if (response) {
    //   console.log("Modified");
    // }
  };

  const TableData = {
    TableHeads: [
      "ID",
      "User Name",
      "User Age",
      "User Gender",
      "User Profession",
      "",
    ],
    TableRows: userData.map((item, index) => [
      { type: "text", label: index + 1 },
      { type: "text", label: item.name },
      { type: "text", label: item.age },
      { type: "text", label: getGenderLabel(item.gender) },
      { type: "text", label: item.profession },
      {
        type: "button",
        label: IconStore.pencilIcon,
        onClick: handleModifyClick,
      },
    ]),
  };

  const styles = {
    root: "max-w-5xl md:max-h-96 mx-auto",
  };

  return (
    <section className="grid place-items-center min-h-main m-3 overflow-hidden">
      <Table TableData={TableData} classNames={styles} />
    </section>
  );
};

export default ModifyUser;
