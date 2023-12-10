import {
  Card,
  Input,
  Select,
  Option,
  Button,
  Typography,
} from "@material-tailwind/react";
import { genderList } from "../../lib/constants";

const Form = (props) => {
  const {
    formValues: { values = {}, setValues, errors = {}, setErrors } = {},
    formLabel = "",
    buttonLabel,
    submitCallback,
  } = props;

  return (
    <Card
      color="transparent"
      shadow={false}
      className="w-full md:w-fit mx-auto p-5 md:shadow-[rgba(0,0,0,0.15)_0px_5px_15px_0px] rounded"
    >
      {formLabel && (
        <Typography variant="h4" color="blue-gray" className="text-center">
          Fill in the Details!
        </Typography>
      )}
      <form className="mt-8 mb-2 w-full max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Input
            size="lg"
            label="Name"
            required
            error={errors.name}
            onInput={(e) => {
              let { value } = e.target;
              setErrors((prev) => ({ ...prev, name: false }));
              setValues((prev) => ({ ...prev, name: value }));
            }}
            value={values.name}
          />
          <Input
            size="lg"
            label="Age"
            type="number"
            required
            error={errors.age}
            onInput={(e) => {
              let { value } = e.target;
              setErrors((prev) => ({ ...prev, age: false }));
              setValues((prev) => ({ ...prev, age: value }));
            }}
            value={values.age}
          />
          <Select
            label="Gender"
            value={values.gender}
            error={errors.gender}
            onChange={(selected) => {
              setErrors((prev) => ({ ...prev, gender: false }));
              setValues((prev) => ({ ...prev, gender: selected }));
            }}
          >
            {genderList.map((item, index) => (
              <Option key={index} value={item.value} name={item.label}>
                {item.label}
              </Option>
            ))}
          </Select>
          <Input
            size="lg"
            label="Profession"
            required
            error={errors.profession}
            onInput={(e) => {
              let { value } = e.target;
              setErrors((prev) => ({ ...prev, profession: false }));
              setValues((prev) => ({ ...prev, profession: value }));
            }}
            value={values.profession}
          />
        </div>
        <Button size="lg" className="mt-6" fullWidth onClick={submitCallback}>
          {buttonLabel || "Submit"}
        </Button>
      </form>
    </Card>
  );
};

export default Form;
