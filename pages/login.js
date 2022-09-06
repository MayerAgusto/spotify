import { getProviders } from 'next-auth/react';

function Login({ providers }) {
  console.log('ejecutnado proveedor');
  return (
    <div>
      <h1 className="text-purple-500">Inicio de sesion </h1>
      {Object.values(providers).map((provider) => {
        <div>
          <button> Log with </button>
        </div>;
      })}
    </div>
  );
}

export default Login;

export async function getServerSideProps(context) {
  console.log('backend running');
  const providers = await getProviders();
  console.log('backend, ', providers.spotify.name);
  return {
    props: {
      providers,
    },
  };
}
