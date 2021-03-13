import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

const Home = () => {

  const [token] = useState<string | null>(localStorage.getItem("token"))

  const { user, success } = useSelector((state: any) => state.user)

  useEffect(() => {
    if(success === true){
      toast.success(`Seja bem-vindo(a), ${user.name}`)
    }
  }, [])
  
  return (
    <div>
      <Helmet>
        <title>Home | Empório da Cerveja</title>
      </Helmet>

      {!token && <Redirect to="/login" />}

      <Toaster />
    </div>
  )
}

export default Home