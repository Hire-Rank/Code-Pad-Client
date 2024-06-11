import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, SignupSchema } from "@/schemas";
import * as z from "zod";
import axios from "axios";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/HomeComponents/Navbar";
import Header from "@/components/Header";

export default function Dashboard() {
  const { toast } = useToast();
  const [isloginTab, setLoginTab] = useState<boolean>(true);
  const [isPending, startTransition] = useTransition();

  const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

  const handleSignInWithGoogle = () => {
    window.open(BASE_URL + "/auth/google", "_self");
  };

  const loginForm = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signupForm = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
  });

  const login = async (values: z.infer<typeof LoginSchema>) => {
    startTransition(() => {
      axios
        .post(
          BASE_URL + "/login",
          {
            email: values.email,
            password: values.password,
          },
          {
            withCredentials: true,
          }
        )
        .then((res: any) => {
          toast({
            title: res.error ? "Error" : "Success",
            description: res.error ?? res.success,
            variant: res.error ? "destructive" : "default",
          });
          sessionStorage.setItem(
            "HireRankCodePad_UserEmail",
            res.data.user.email
          );
          sessionStorage.setItem(
            "HireRankCodePad_UserName",
            res.data.user.name
          );

          window.location.href = "/";
        })
        .catch((e: any) => {
          toast({
            title: "Error",
            description: e.response.data.message,
            variant: "destructive",
          });
        });
    });
  };
  const signup = (values: z.infer<typeof SignupSchema>) => {
    startTransition(() => {
      axios
        .post(
          BASE_URL + "/signup",
          {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            password: values.password,
          },
          {
            withCredentials: true,
          }
        )
        .then((res: any) => {
          toast({
            title: res.error ? "Error" : "Success",
            description: res.error ?? res.success,
            variant: res.error ? "destructive" : "default",
          });

          sessionStorage.setItem(
            "HireRankCodePad_UserEmail",
            res.data.user.email
          );
          sessionStorage.setItem(
            "HireRankCodePad_UserName",
            res.data.user.name
          );
          window.location.href = "/";
        })
        .catch((e: any) => {
          console.log(e);
          toast({
            title: "Error",
            description: e.response.data.message,
            variant: "destructive",
          });
        });
    });
  };

  return (
    <>
      <div className="w-full min-h-full h-fit lg:grid lg:min-h-[600px] lg:h-screen lg:grid-cols-2 overflow-hidden bg-gradient-to-r from-accent to-white">
        <div className="flex flex-col items-center justify-between py-12">
          <Header />

          {isloginTab && (
            <div className="mx-auto grid w-[350px] gap-6 text-slate-700">
              <Form {...loginForm}>
                <form onSubmit={loginForm.handleSubmit(login)}>
                  <div className="grid gap-2 text-center">
                    <h1 className="text-3xl font-bold text-slate-700">Login</h1>
                  </div>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <FormField
                        control={loginForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="email"
                                placeholder="m@example.com"
                                disabled={isPending}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid gap-2">
                      <FormField
                        control={loginForm.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="password"
                                disabled={isPending}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-blue-500">
                      Login
                    </Button>
                  </div>
                  <div className="mt-2 text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Button
                      variant="link"
                      className="underline p-0"
                      type="submit"
                      onClick={() => setLoginTab(false)}
                    >
                      Sign up
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          )}

          {!isloginTab && (
            <div className="mx-auto grid w-[350px] gap-6 text-slate-700">
              <Form {...signupForm}>
                <form onSubmit={signupForm.handleSubmit(signup)}>
                  <div className="grid gap-2 text-center">
                    <h1 className="text-3xl py-2 font-bold text-slate-700">
                      Sign Up
                    </h1>
                  </div>
                  <div className="grid gap-4 pt-2">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <FormField
                          control={signupForm.control}
                          name="first_name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  type="text"
                                  placeholder="John"
                                  disabled={isPending}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid gap-2">
                        <FormField
                          control={signupForm.control}
                          name="last_name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  type="text"
                                  placeholder="Doe"
                                  disabled={isPending}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <FormField
                        control={signupForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>E-Mail</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="email"
                                placeholder="m@example.com"
                                disabled={isPending}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid gap-2">
                      <FormField
                        control={signupForm.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="password"
                                disabled={isPending}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-blue-500">
                      Create an account
                    </Button>
                  </div>
                  <div className="mt-1 text-center text-sm">
                    Already have an account?{" "}
                    <Button
                      variant="link"
                      className="underline p-0"
                      onClick={() => setLoginTab(true)}
                    >
                      Sign in
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          )}
          <button
            onClick={handleSignInWithGoogle}
            className="w-1/2 flex  justify-center items-center bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-3 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            <svg
              className="h-6 w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="800px"
              height="800px"
              viewBox="-0.5 0 48 48"
              version="1.1"
            >
              {" "}
              <title>Google-color</title> <desc>Created with Sketch.</desc>{" "}
              <defs> </defs>{" "}
              <g
                id="Icons"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                {" "}
                <g id="Color-" transform="translate(-401.000000, -860.000000)">
                  {" "}
                  <g id="Google" transform="translate(401.000000, 860.000000)">
                    {" "}
                    <path
                      d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                      id="Fill-1"
                      fill="#FBBC05"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                      id="Fill-2"
                      fill="#EB4335"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                      id="Fill-3"
                      fill="#34A853"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                      id="Fill-4"
                      fill="#4285F4"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </svg>
            <span>Continue with Google</span>
          </button>
        </div>

        <div className="hidden bg-muted lg:block ">
          <img
            src="/public/bgLanding.png"
            alt="Image"
            width="1920"
            height="1080"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </>
  );
}
