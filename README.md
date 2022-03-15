Build a FullStack App with Next.js, Supabase & Prisma | The Modern Dev by
[AlterClass.io](https://alterclass.io).

- Learn to build this application step-by-step by following the FREE course on
  [The Modern Dev](https://themodern.dev/).

- Preview the app live [here](https://supa-vacation.vercel.app/).

- Deploy the same app using Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/AlterClassIO/supa-vacation&project-name=SupaVacation+by+The+Modern+Dev&repository-name=SupaVacation+by+The+Modern+Dev)

[![SupaVacation](https://user-images.githubusercontent.com/4352286/152961498-0e7d1575-a2a2-4aae-93e0-a75e701cef06.png)](https://supa-vacation.vercel.app/)

## Getting Started

### 1. Clone the repository and install dependencies

```
git clone https://github.com/AlterClassIO/supa-vacation
cd supa-vacation
npm install
```

### 2. Configure your local environment

Rename the `.env.example` file in this directory to `.env` (which
will be ignored by Git):

```
cp .env.local.example .env.local
```

Add your own values for all the environment variables.

### 3. Start the application

To run your site locally, use:

```
npm run dev
```

To run it in production mode, use:

```
npm run build
npm run start
```

## Notes

 Sync our Prisma schema to our database.
 ```
npx prisma db push or npx prisma migrate dev (this is better tho)
 ```
Prisma Studio, a database client to explore and manipulate your data.

```
npx prisma studio
```

Get the connection URL from supabase
* From your project's page, go to "Settings"
* Click the "Database" tab in the sidebar
* Scroll down to the bottom of the page and look for the "Connection string" section
* Choose "Nodejs" and copy the URL
```
DATABASE_URL="postgresql://postgres:<password>@db.<randomid>.supabase.co:5432/postgres"
```


## License

[MIT](https://github.com/AlterClassIO/supa-vacation/blob/master/LICENSE)
