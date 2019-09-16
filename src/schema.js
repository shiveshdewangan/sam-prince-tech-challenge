const schema = [
  {
    type: "text",
    label: "Name",
    name: "name"
  },
  {
    type: "date",
    label: "Birth Date",
    name: "birth_date"
  },
  {
    type: "select",
    label: "Gender",
    name: "gender",
    options: ["Male", "Female", ""]
  },
  {
    type: "tel",
    label: "Home Phone",
    name: "home_phone"
  },
  {
    type: "tel",
    label: "Mobile Phone",
    name: "mobile_phone"
  },
  {
    type: "select",
    label: "Guardian Consent",
    name: "guardian_consent",
    options: ["Yes", "No", ""]
  },
  {
    type: "text",
    label: "Guardian's Name",
    name: "guardian_name"
  },
  {
    type: "tel",
    label: "Guardian's Number",
    name: "guardian_number"
  }
];

export default schema;
