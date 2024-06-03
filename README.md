# Jazz Wiki

## Getting Started

After `yarn install | npm install`, run the development server with:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to launch the app locally.

If you want some data pre-populated, open [http://localhost:3000/populate](http://localhost:3000/populate) which will add some documents for you.

### Preamble

I did consider using Create React App with React Router.

The latter's [tutorial](https://reactrouter.com/en/main/start/tutorial) was VERY similar to this task, so I shied away from it, lest it influence me too much.

So I scaffolded the app in [Next.js](https://nextjs.org/), which I use on a day to day basis.

I guess it's not that much different to how it could have looked in CRA - aside from Next's app route file conventions.

## Tasks

### ability to create a "document" consisting of a title and rich text content in a WYSIWYG-style editor

Opted to use the suggested Quill editor (as I hadn't before) and dangerously set the html in the DOM 💀

### ability to list existing documents

Decided to use `localStorage` to persist the documents (as I'm most familiar with it, over `indexedDB`).

A bit of a blunt instrument, in that I unpack and pack them again with `JSON.parse|stringify` respectively each time. I guess one wouldn't store this kind of data normally in `localStorage` and I'd expect it to reach it's limits fairly quickly.

I used `useSyncExternalStore` to keep the sidebar in sync with `localStorage` after update(s).

I guess another option could have been to dispatch the update event via context.

### ability to filter the list by searching for a part of the title

Added a basic regex filter before rendering the list items.

If it was hitting an endpoint, perf considerations could be made with the use of debounce.

### ability to view a document and its rich text content

Documents can be viewed on `/{{id}}`.

Using the `uuid` in the url _vaguely_ ensures each has a unique url.

An improvement on this could be to slugify the `title` and store it as a `slug` property on each doc, so the app could have human readable / nicer urls.

### ability to edit a document

Documents can be edited on `/{{id}}/edit` or by clicking the "Edit" button.

### ability to delete a document

Documents can be removed with the "Delete" button.

This currently happens immediately, wheras you'd likely ask the user are they sure first!
