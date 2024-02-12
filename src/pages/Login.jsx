import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";

export default function Login() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div
      title="container"
      className="h-full relative flex-col items-center justify-center grid" // lg:max-w-none lg:grid-cols-2 lg:px-0"
    >
      <a
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 absolute right-4 top-4 md:right-8 md:top-8"
        href="/login"
      >
        Login
      </a>
      {/* <div title="side-image" className="bg-slate-200 w-half">
        image plate
      </div> */}
      <div
        title="login"
        className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[375px]"
      >
        <div className="mx-auto flex flex-col items-center justify-center space-y-4">
          <div className="p-8">
            <div className="flex flex-col space-y-3 text-center">
              <h1 className="text-3xl font-bold">Welcome Back</h1>
              <p className="text-sm text-slate-600">
                Enter your email below to Login to your account
              </p>
            </div>
            <Form {...form}>
              <form
                className="flex flex-col gap-2 my-5"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  control={form.control}
                  name="email"
                  label="Email"
                  type="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          id="email"
                          placeholder="Enter your email address"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  label="Password"
                  type="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          id="password"
                          placeholder="Enter your password"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button className="w-full mt-2" type="submit">
                  Sign In with Email
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
