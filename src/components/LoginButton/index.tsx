'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';

interface ILoginButton {
  title: string;
  className?: string;
}

const LoginButton = ({ title, className }: ILoginButton) => {
  return (
    <button onClick={() => signIn('google', { callbackUrl: '/dashboard' })} className={className}>
      <Image
        src="/assets/google-icon-logo-svgrepo-com.svg"
        width={20}
        height={20}
        alt="ícone do Google"
      />
      {title}
    </button>
  );
};

export default LoginButton;
