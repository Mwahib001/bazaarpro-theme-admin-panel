import { Block } from "payload";

export const DealsOfTheDay: Block = {
  slug: "deals-of-the-day",
  labels: {
    singular: "Deals of the Day",
    plural: "Deals of the Day Sections",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      defaultValue: "Deals of the Day",
    },
    {
      name: "products",
      label: "Select Products",
      type: "relationship",
      relationTo: "products", // Make sure your collection slug is 'products'
      hasMany: true,
      required: true,
    },
  ],
};
