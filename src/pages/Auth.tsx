import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, SignupSchema } from "@/schemas";
import * as z from "zod";
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
  const [isloginTab, setLoginTab] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();

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
      fetch("localhost:8080/v1/login", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((res: any) => {
          toast({
            title: res.error ? "Error" : "Success",
            description: res.error ?? res.success,
            variant: res.error ? "destructive" : "default",
          });
          window.location.href = "/";
        })
        .catch((e: any) => {
          toast({
            title: "Error",
            description: "Something went wrong please try again",
            variant: "destructive",
          });
        });
    });
  };
  const signup = (values: z.infer<typeof SignupSchema>) => {
    startTransition(() => {
      fetch("localhost:8080/v1/signup", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((res: any) => {
          toast({
            title: res.error ? "Error" : "Success",
            description: res.error ?? res.success,
            variant: res.error ? "destructive" : "default",
          });
          window.location.href = "/auth";
        })
        .catch((e: any) => {
          toast({
            title: "Error",
            description: "Something went wrong please try again",
            variant: "destructive",
          });
        });
    });
  };

  return (
    <>
      <div className="w-full lg:grid lg:min-h-[600px] lg:h-screen lg:grid-cols-2 overflow-hidden bg-gradient-to-r from-accent to-white">
        <div className="flex flex-col items-center justify-between py-12">
          <Header />

          {isloginTab && (
            <div className="mx-auto grid w-[350px] gap-6">
              <Form {...loginForm}>
                <form onSubmit={loginForm.handleSubmit(login)}>
                  <div className="grid gap-2 text-center">
                    <h1 className="text-3xl font-bold">Login</h1>
                    <p className="text-balance text-muted-foreground">
                      Enter your email below to login to your account
                    </p>
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
                  <div className="mt-4 text-center text-sm">
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
            <div className="mx-auto grid w-[350px] gap-6">
              <Form {...signupForm}>
                <form onSubmit={signupForm.handleSubmit(signup)}>
                  <div className="grid gap-2 text-center">
                    <h1 className="text-3xl font-bold">Sign Up</h1>
                    <p className="text-balance text-muted-foreground">
                      Enter your information to create an account
                    </p>
                  </div>
                  <div className="grid gap-4">
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
                  <div className="mt-4 text-center text-sm">
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
