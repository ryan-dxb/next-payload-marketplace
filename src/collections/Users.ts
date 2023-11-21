// import { PrimaryActionEmailHtml } from '../components/emails/PrimaryActionEmail'
import { Access, CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
  slug: "users",

  auth: true,
  access: {
    read: () => true,
    create: () => true,
    // update: ({ req }) => req.user.role === "admin",
    // delete: ({ req }) => req.user.role === "admin",
  },
  admin: {
    hidden: ({ user }) => user.role !== "admin",
    defaultColumns: ["id", "email"],
  },
  fields: [
    {
      name: "role",
      defaultValue: "user",
      required: true,

      type: "select",
      options: [
        { label: "Admin", value: "admin" },
        { label: "User", value: "user" },
      ],
    },
  ],
};
