import React from 'react'
import { getProviders, signIn } from 'next-auth/react'
import Logo from '../../src/images/Instagram_logo.png'
import Header from '../../components/Header'
import Image from 'next/image'
const signin = ({ providers }) => {
  return (
    <div>
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <div className="w-80">
          <Image src={Logo} />
        </div>
        <p className="font-xs italic">
          This is not a Real app, it is built for educational purposes only.
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="rounded-lg bg-blue-500 p-3 text-white"
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}

export default signin
