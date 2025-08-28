// payload/collections/Products.ts
import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  labels: { singular: 'Product', plural: 'Products' },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'price', 'currency'],
  },
  versions: {
    drafts: true,
  },
  fields: [
    // Core
    { name: 'name', type: 'text', required: true, localized: true },
    {
      name: 'slug',
      type: 'text',
      required: true,
      localized: true,
      unique: true,
      admin: { position: 'sidebar', description: 'URL slug per locale' },
    },
    { name: 'price', type: 'number', required: true, min: 0, admin: { step: 1 } },
    {
      name: 'currency',
      type: 'select',
      required: true,
      defaultValue: 'USD',
      options: [
        { label: 'USD', value: 'USD' },
        { label: 'EUR', value: 'EUR' },
        { label: 'EGP', value: 'EGP' },
        { label: 'GBP', value: 'GBP' },
      ],
    },
    { name: 'description', type: 'textarea', localized: true },

    // Media
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media', // make sure you have a `media` collection
    },

    // Page Content (localizable)
    {
      name: 'specChips',
      label: 'Spec Chips',
      type: 'array',
      localized: true,
      minRows: 0,
      fields: [{ name: 'label', type: 'text', required: true, localized: true }],
    },
    {
      name: 'reassurance',
      label: 'Reassurance Items',
      type: 'array',
      localized: true,
      fields: [
        { name: 'label', type: 'text', required: true, localized: true },
        {
          name: 'iconKey',
          type: 'select',
          defaultValue: 'truck',
          options: [
            { label: 'Truck', value: 'truck' },
            { label: 'Shield', value: 'shield' },
            { label: 'CheckCircle2', value: 'check-circle-2' },
          ],
          admin: { description: 'Icon to render on the product page' },
        },
      ],
    },
    {
      name: 'details',
      label: 'Details Cards',
      type: 'array',
      localized: true,
      fields: [
        { name: 'title', type: 'text', required: true, localized: true },
        { name: 'body', type: 'textarea', required: true, localized: true },
      ],
    },
    { name: 'shippingNote', type: 'text', localized: true },

    // UI Labels (to avoid hardcoded strings in the page)
    {
      name: 'ui',
      type: 'group',
      localized: true,
      fields: [
        { name: 'homeLabel', type: 'text', required: true, defaultValue: 'Home' },
        { name: 'productsLabel', type: 'text', required: true, defaultValue: 'Products' },
        { name: 'backToProductsLabel', type: 'text', required: true, defaultValue: 'Back to products' },
        { name: 'addToCartLabel', type: 'text', required: true, defaultValue: 'Add to cart' },
        { name: 'buyNowLabel', type: 'text', required: true, defaultValue: 'Buy Now' },
        { name: 'productDetailsHeading', type: 'text', required: true, defaultValue: 'Product details' },
      ],
    },

    // Optional: SEO
    {
      name: 'seo',
      type: 'group',
      localized: true,
      fields: [
        { name: 'metaTitle', type: 'text' },
        { name: 'metaDescription', type: 'textarea' },
      ],
    },
  ],
}

