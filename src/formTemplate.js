export const formData = [
  {
    component: "page",
    label: "Personal Details",
    uuid: "1233fd6f-6c57-457b-87aa-63ec399178c8",
    fields: [
      {
        component: "text",
        label: "First Name", 
        type: "text", 
        uuid: "43b2628c-cbb3-4974-9bf0-9fda9b97dc6f",
      },
      {
        component: "text",
        label: "Last Name",
        type: "text",
        uuid: "9f5c346e-5278-4f78-899f-3ce7f1dda975",
      },
      {
        component: "text",
        label: "Email",
        type: "email",
        uuid: "f9d62eba-76a1-405e-ab82-047ee3b8c503",
      },
      {
        component: "text",
        label: "Phone",
        type: "text",
        uuid: "62489731-7608-4c0d-8dd1-d58186fd8d75",
      },
      {
        component: "options",
        label: "Gender",
        type: "radio",
        uuid: "7dbca8dc-0806-463b-97da-364d915058be",
        options: [
          {
            component: "option",
            label: "Male",
            value: "male",
          },
          {
            component: "option",
            label: "Female",
            value: "female",
          },
        ],
      },
      {
        component: "text",
        label: "Comments",
        type: "text",
        uuid: "f5af1b94-70d6-4818-a901-68fc15c8c9ba",
      },
    ],
  },
];
