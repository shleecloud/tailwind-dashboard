import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function Register() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      phone: "",
      approve: false,
    },
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="h-full relative items-center justify-center grid">
      <div className="">
        <div className="flex flex-col space-y-1 text-center">
          <h1 className="text-3xl font-bold">Register</h1>
          <p className="text-sm text-slate-600">
            Test email, password, phone resolver from zod!
          </p>
        </div>
        <Form {...form}>
          <form
            className="flex flex-col gap-2 my-3 w-full"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="email"
              label="Email"
              type="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      id="email"
                      placeholder="Enter your email address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
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
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      id="password"
                      placeholder="Enter your password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              label="phone"
              type="tel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone number</FormLabel>
                  <FormControl>
                    <Input
                      id="phone"
                      placeholder="Enter your phone number"
                      type="tel"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="approve"
              label="approve"
              type="checkbox"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel className="mr-1">
                    I Agree to the use demo service
                  </FormLabel>
                  <FormControl className="absolute -top-1">
                    <Checkbox {...field} />
                  </FormControl>
                  <FormDescription>
                    You agree to our{" "}
                    <span className="underline cursor-pointer">
                      Terms of Service
                    </span>
                    {" and "}
                    <span className="underline cursor-pointer">
                      Privacy Policy
                    </span>
                  </FormDescription>
                </FormItem>
              )}
            />

            <Button className="w-full mt-2" type="submit">
              Sign Up
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}