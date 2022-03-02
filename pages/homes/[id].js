// pages/homes/[id].js

import Image from 'next/image';
import Layout from '@/components/Layout';

import { prisma, serialize } from "../../prisma";

export async function getStaticPaths() {
  // Get all the homes IDs from the database
  const homes = await prisma.home.findMany({
    select: { id: true },
  });

  return {
    paths: homes.map(home => ({
      params: { id: home.id },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Get the current home from the database
  const home = await prisma.home.findUnique({
    where: { id: params.id },
  });

  if (home) {
    return {
      props: { home: serialize(home) },
    };
  }

  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
}

const ListedHome = ({home = null}) => {
  return (
    <Layout>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:space-x-4 space-y-4">
          <div>
            <h1 className="text-2xl font-semibold truncate">
              {home?.title ?? ''}
            </h1>
            <ol className="inline-flex items-center space-x-1 text-gray-500">
              <li>
                <span>{home?.guests ?? 0} guests</span>
                <span aria-hidden="true"> · </span>
              </li>
              <li>
                <span>{home?.beds ?? 0} beds</span>
                <span aria-hidden="true"> · </span>
              </li>
              <li>
                <span>{home?.baths ?? 0} baths</span>
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-6 relative aspect-video bg-gray-200 rounded-lg shadow-md overflow-hidden">
          {home?.image ? (
            <Image
              src={home.image}
              alt={home.title}
              layout="fill"
              objectFit="cover"
            />
          ) : null}
        </div>

        <p className="mt-8 text-lg">{home?.description ?? ''}</p>
      </div>
    </Layout>
  );
};

export default ListedHome;