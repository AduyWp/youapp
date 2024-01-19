import { Inter } from "next/font/google";
import "../../../styles/globals.css";
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
const Message = dynamic(() => import('@/commons/Toast'), { ssr: false });

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {

  const [backdropLoader, setBackdropLoader] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState({
    open: false,
    variant: '',
    text: '',
  });

  const handleCloseMessage = () => {
    setToastMessage({ ...toastMessage, open: false });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.backdropLoader = setBackdropLoader;
      window.toastMessage = setToastMessage;
    }
  }, []);

  return (
    <>
      <Message open={toastMessage.open} variant={toastMessage.variant} setOpen={handleCloseMessage} message={toastMessage.text} />
      <div className={inter.className}>{children}</div>
    </>
  );
}
