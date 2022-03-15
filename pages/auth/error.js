import { getProviders } from "next-auth/react"
import { useRouter } from "next/router";

const errors = {
  Signin: "Try signing with a different account.",
  OAuthSignin: "Try signing with a different account.",
  OAuthCallback: "Try signing with a different account.",
  OAuthCreateAccount: "Try signing with a different account.",
  EmailCreateAccount: "Try signing with a different account.",
  Callback: "Try signing with a different account.",
  OAuthAccountNotLinked:
    "To confirm your identity, sign in with the same account you used originally.",
  EmailSignin: "Check your email address.",
  CredentialsSignin:
    "Sign in failed. Check the details you provided are correct.",
  default: "Unable to sign in.",
};

const SignInError = ({ error }) => {
  const errorMessage = error && (errors[error] ?? errors.default);
  return <div>{errorMessage}</div>;
};

export async function getServerSideProps(context) {
  return { props: { providers: await getProviders() } };
}

export default function Error ({ providers }) {
  const { error } = useRouter().query;
  return (
    <>
      <h1>Login</h1>
      {/* Error message */}
      {error && <SignInError error={error} />}
      {/* Login options */}
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>...</div>
      ))}
    </>
  );
};