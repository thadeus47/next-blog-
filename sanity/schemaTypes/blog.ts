export default {
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
  {
    name:'title',
    type:'string',
    title: 'Blog Title',
  },
  {
    name:'slug',
    type: 'slug',
    title: 'Slug Title',
    options: {
        source:'title',
    }
  },
  {
    name:'titleimage',
    type: 'image',
    title: 'Image Title',
  },
  {
    name:'description',
    type: 'text',
    title: 'Description Title',
  },
  {
    name:'content',
    type: 'array',
    title: 'Content',
    of: [
        {
            type:'block',

        }
    ]
  }
 ],
}