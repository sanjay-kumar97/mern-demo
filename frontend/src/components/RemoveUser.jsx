import React, { useEffect, useState } from "react";
import { deleteUser, readUser } from "../utils/crud";
import Table from "./ui/Table";
import { IconStore } from "../lib/iconStore";
import ConfirmationModal from "./ui/ConfirmationModal";
import { getGenderLabel } from "../utils/helperFunctions";

const RemoveUser = () => {
  const [userData, setUserData] = useState([]);
  const [tableData, setTableData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [targetIndex, setTargetIndex] = useState({});

  useEffect(() => {
    const fetchUserData = async () =>
      await readUser()
        .then((res) => setUserData(res.data))
        .catch((err) => console.log("Error reading data", err));

    fetchUserData();
  }, []);

  useEffect(() => {
    if (userData.length > 0) {
      setTableData({
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
            label: IconStore.trashIcon,
            onClick: handleRemoveClick,
          },
        ]),
      });
    }
  }, [userData]);

  const handleRemoveClick = (selectedIndex) => {
    setTargetIndex(selectedIndex);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal((prev) => !prev);
  };

  const confirmationCallback = async () => {
    const selectedUser = userData[targetIndex];

    await deleteUser({ userId: selectedUser._id }).then(() => {
      console.log("User Removed Successfully!");
      handleModalClose();
      const newArray = [...userData];
      newArray.splice(targetIndex, 1);
      setUserData(newArray);
    });
  };

  const styles = {
    root: "max-w-5xl md:max-h-96 mx-auto",
  };

  return (
    <section className="grid place-items-center min-h-main m-3 overflow-hidden">
      <Table TableData={tableData} classNames={styles} />
      <ConfirmationModal
        show={showModal}
        close={handleModalClose}
        onConfirm={confirmationCallback}
        onReject={handleModalClose}
        message={`Are you sure want to delete user ${userData[targetIndex]?.name} ?`}
      />
    </section>
  );
};

export default RemoveUser;
