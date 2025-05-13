import type { CollectionConfig } from "payload";

import { anyone } from "../access/anyone";
import { authenticated } from "../access/authenticated";
import { slugField } from "@/fields/slug";
import { isAdminOrEditor } from "@/access/isAdminOrEditor";
import { onlyAdmins } from "@/access/onlyAdmin";

export const Categories: CollectionConfig = {
  slug: "categories",
  access: {
    create: isAdminOrEditor,
    delete: onlyAdmins,
    read: anyone,
    update: isAdminOrEditor,
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    ...slugField(),
  ],
};
