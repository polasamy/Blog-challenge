import { http, HttpResponse } from 'msw'

const demoBlogData = [
  {
    id: '1',
    title: 'Introduction to JavaScript',
    author: { id: 101, name: 'John Doe' },
    content: `JavaScript is a scripting language used to create and control dynamic web content.`,
    next: '/postsDetails/2',
    prev: null,
    createdAt: new Date('2023-01-01').toLocaleDateString(),
  },
  {
    id: '2',
    title: 'React Basics',
    author: { id: 102, name: 'Jane Smith' },
    content: '# Getting Started with ReactLearn the basics of React in this blog post.',
    next: '/postsDetails/3',
    prev: '/postsDetails/1',
    createdAt: new Date('2023-02-15').toLocaleDateString(),
  },
  {
    id: '3',
    title: 'Node.js and Express',
    author: { id: 103, name: 'Bob Johnson' },
    content: ' Building Web Servers with Node.js and Express Explore server-side development with Node.js and Express.',
    next: '/postsDetails/4',
    prev: '/postsDetails/2',
    createdAt: new Date('2023-03-10').toLocaleDateString(),
  },
  {
    id: '4',
    title: 'JavaScript Promises Explained',
    author: { id: 104, name: 'Alice Williams' },
    content: ' Demystifying JavaScript Promises Understand the concept of promises in JavaScript.',
    next: '/postsDetails/5',
    prev: '/postsDetails/3',
    createdAt: new Date('2023-04-05').toLocaleDateString(),
  },
  {
    id: '5',
    title: 'CSS Flexbox and Grid Layout',
    author: { id: 105, name: 'Charlie Brown' },
    content: ' Mastering CSS Layouts with Flexbox and Grid Learn how to create responsive layouts using Flexbox and Grid.',
    next: null,
    prev: '/postsDetails/4',
    createdAt: new Date('2023-05-20').toLocaleDateString(),
  },

];
const users = [
  {
    id: '0',
    userName: 'admin',
    password: 'admin'
  },
  {
    id: '2',
    userName: 'adsmin',
    password: 'admin'
  },
]
export default demoBlogData;


export const handlers = [

  http.get('/posts', () => {
    //get all of the posts
    return HttpResponse.json(demoBlogData)
  }),

  http.get('/postsDetails/:id', ({ params }) => {

    // get post according to id 
    const { id } = params
    const x = demoBlogData.filter((blog) => blog.id === id)
    return HttpResponse.json(x)
  }),


  http.post('/login', async ({ request }) => {
    const { userName, password } = await request.json()
    const response = users.filter((user) => { return user.userName === userName && user.password === password })
    const final = response[0] ? true : false
    return HttpResponse.json(final)
  }),
]