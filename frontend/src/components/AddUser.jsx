import { Button, Card } from "@material-tailwind/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../utils/crud";
import { SchemaValidator } from "../utils/helperFunctions";
import Form from "./ui/Form";
import Modal from "./ui/Modal";
import ProgressSpinner from "./ui/ProgressSpinner";

const AddUser = () => {
  const [showModal, setShowModal] = useState(false);
  const [progress, setProgress] = useState(false);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    name: "",
    age: "",
    gender: "",
    profession: "",
  });

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    await SchemaValidator(values)
      .then(async (validData) => {
        setProgress(false);
        setShowModal(true);

        await createUser({
          userName: validData.name,
          userAge: validData.age,
          userGender: validData.gender,
          userProfession: validData.profession,
        })
          .then(() => {
            setValues({ name: "", age: "", gender: "", profession: "" });
            setTimeout(setProgress(true), 1000);
            console.log("From Submitted", validData);
          })
          .catch((err) => console.log("Error creating User", err));
      })
      .catch((err) => {
        console.log("Error", err.message);
        setErrors(Object.fromEntries(err.fields.map((key) => [key, true])));
      });
  };

  return (
    <section className="grid place-items-center min-h-main">
      <Form
        formValues={{ values, setValues, errors, setErrors }}
        formLabel={"Fill in the Details!"}
        buttonLabel={"Create User"}
        submitCallback={handleFormSubmit}
      />
      <Modal
        show={showModal}
        handler={() => {
          if (progress) setShowModal((prev) => !prev);
        }}
      >
        <Card
          color="transparent"
          shadow={false}
          className="p-5 gap-3 items-center"
        >
          <div className="flex justify-center items-center gap-5">
            <ProgressSpinner showLoader={!progress} />
            <p>
              {progress
                ? "User Created Successfully!"
                : "Please wait while we burry your data into our Database"}
            </p>
          </div>
          <Button size="sm" className="w-fit" onClick={() => navigate("/")}>
            Go to Home Page
          </Button>
        </Card>
      </Modal>
    </section>
  );
};

export default AddUser;
