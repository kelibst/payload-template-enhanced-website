import type { CollectionConfig } from "payload";

import { authenticated } from "../../access/authenticated";
import { isAdmin } from "@/access/isAdmin";
import { anyone } from "@/access/anyone";
import { isAdminOrSelf } from "@/access/adminOrSelf";
import { only } from "node:test";
import { onlyAdmins } from "@/access/onlyAdmin";
import { isAdminOrEditor } from "@/access/isAdminOrEditor";

export const Users: CollectionConfig = {
  slug: "users",
  access: {
    admin: isAdminOrEditor,
    create: anyone,
    delete: onlyAdmins,
    read: authenticated,
    update: isAdminOrSelf,
  },
  admin: {
    defaultColumns: ["firstName", "lastName", "email"],
    useAsTitle: "firstName",
  },
  auth: {
    tokenExpiration: 7200, // How many seconds to keep the user logged in
    verify: true, // Require email verification before being allowed to authenticate
    maxLoginAttempts: 5, // Automatically lock a user out after X amount of failed logins
    lockTime: 600 * 1000, // Time period to allow the max login attempts
    // More options are available
  },

  fields: [
    {
      name: "email",
      type: "email",
      required: true,
      unique: true,
    },
    {
      name: "firstName",
      type: "text",
      required: true,
    },
    {
      name: "lastName",
      type: "text",
      required: true,
    },
    {
      name: "newsletter",
      type: "checkbox",
      defaultValue: true,
      label: "Newsletter subscription",
    },
    {
      name: "roles",
      label: "Role",
      saveToJWT: true,
      type: "select",
      required: true,
      access: {
        create: onlyAdmins,
        update: onlyAdmins,
      },
      options: [
        { label: "Admin", value: "admin" },
        { label: "subscriber", value: "subscriber" },
        { label: "Editor", value: "editor" },
      ],
      defaultValue: "subscriber",
    },
  ],
  timestamps: true,
};
