"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AdminAuthenticationServiceClient } from "@/protos/admin_service_grpc_web_pb";
import {AdminLoginRequest} from "@/protos/admin_pb"
import LottieLoader from "@/components/LottieLoader";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import common from '@/utils/index'


export default function Home() {
  const router =  useRouter();
  const [showLoader, setShowLoader] = useState("");
  const [token, setToken] = useState("")
  const [getKey, setKey] = useState("")

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
 
  const client = new AdminAuthenticationServiceClient(
    common.BaseUrl,
    null,
    null
  );

  useEffect(() => {
    getPublicToken();
  }, []);

  const getPublicToken = () => {
    
    const request = new proto.common.Empty();
    client.request_public_token(request, {}, (error, response) => {
      if (error) {
        console.error("Error:", error);
      } else {
          setToken(response.getToken())
           setKey(response.getKey())
      }

    });
  };

 

  const loginEventHandler = (data) => {
      console.log("remember me : ", data.remember_me)
     const request = new AdminLoginRequest();
       request.setUsername(data.username);
       request.setPassword(data.password);
       request.setRememberMe(true)
       setShowLoader(true)

       let authToken = {
        'Authorization':'Bearer ' + token,
        'x-afs-pub-key' :getKey    
       }

       client.login(request,authToken,(error, response) => {
        setShowLoader(false)
         if(error) {
          console.log(" error : ", error)
          return;
         }
          sessionStorage.setItem("token", response.getValue())
         // router.push('/dashboard')
         window.location.href = "/dashboard"

       })

  };

  return (
    <main className="flex min-h-screen flex-col items-center w-full justify-center bg-primary-color">
      <LottieLoader showLoader={showLoader} />
       <div className="bg-white py-10  flex flex-col px-8 w-[80%] md:px-8 md:py-16 md:w-[50%]  lg:px-10 lg:w-[28%]">
              <div className="mb-5 mx-auto">
              <Image src="/images/logo.png" alt="" height={80} width={80} />
              </div>
              <form onSubmit={handleSubmit(loginEventHandler)}>
              <h2 className="text-center text-2xl primary-text font-semibold mb-4 font-sans"> Login </h2>

              <div className="w-full mb-4">
                <label className="pb-1">Username</label>
                <input type="text" {...register("username", { required: true })} className="form-control" />
                {errors.username && <span className="error-message">Username is required</span>}
              </div>

              <div className="w-full mb-4">
                <label>Password</label>
                <input type="password" {...register("password", { required: true }) } className="form-control" />
                {errors.password && <span className="error-message">Password is required</span>}
              </div>
              <div className="flex mb-4">
                  <input type="checkbox" {...register("remember_me", { required: false }) }  />
                  <p className="px-2 text-[12px]">Keep me logged in</p>
              </div>

              <div className="w-full py-4">
                 <button type="submit" className="bg-primary-color text-white rounded-md py-2 w-full"> Login</button>
              </div>

              </form>
              
       </div>
    </main>
  );
}
