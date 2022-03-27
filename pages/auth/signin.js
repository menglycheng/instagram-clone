import React from 'react'
import { getProviders, signIn } from 'next-auth/react'
import Logo from '../../src/images/Instagram_logo.png'
import Image from 'next/image'
const signin = ({ providers }) => {
  return (
    <div>
      <div>
        <Image src={Logo} layout="fill" objectFit="contain" />
      </div>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
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
