import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function handleSubmit(data) {
    console.log(data);
    toast({
      description: "Check your Email and Password",
    });
  }

  function handleGuestLogin() {
    navigate("/dashboard");
  }

  return (
    <div
      className="h-full relative items-center justify-center grid" // lg:max-w-none lg:grid-cols-2 lg:px-0"
    >
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[375px]">
        <div className="flex flex-col space-y-3 text-center">
          <h1 className="text-5xl font-bold">Welcome Back</h1>
          <p className="text-sm text-slate-600">
            Enter your email below to Login to your account
          </p>
        </div>
        <Form {...form}>
          <form
            className="flex flex-col gap-2 my-5 w-full"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <FormField
              control={form.control}
              name="email"
              label="Email"
              type="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>email</FormLabel>
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
                  <FormLabel>password</FormLabel>
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
            <p className="text-sm text-center text-slate-600">
              {"Don't have an account? "}
              <a
                className="underline"
                href="/register"
                title="register"
                aria-label="register"
              >
                Register
              </a>
            </p>
          </form>
        </Form>
        <div className="relative w-full py-3">
          <div className="absolute inset-0 flex items-center">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div className="relative w-full group">
          <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt" />
          <Button
            className="relative w-full hover:bg-white"
            variant="outline"
            type="button"
            onClick={handleGuestLogin}
          >
            Guest Login
          </Button>
        </div>
      </div>
    </div>
  );
}
