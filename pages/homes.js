import { getSession } from 'next-auth/react';
import { prisma, serialize } from "@/prisma/index";

import Layout from '@/components/Layout';
import Grid from '@/components/Grid';

const Homes = ({ homes = [] }) => {
  return (
    <Layout>
      <h1 className="text-xl font-medium text-gray-800">Your listings</h1>
      <p className="text-gray-500">
        Manage your homes and update your listings
      </p>
      <div className="mt-8">
        <Grid homes={homes} />
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  // Check if user is authenticated
  const session = await getSession(context);

  // If not, redirect to the homepage
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  // Get all homes from the authenticated user
  const homes = await prisma.home.findMany({
    where: { User: { email: session.user.email } },
    orderBy: { createdAt: 'desc' },
  });

  // Pass the data to the Homes component
  return {
    props: {
      homes: serialize(homes),
    },
  };
}

export default Homes;
