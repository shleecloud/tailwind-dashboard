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
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);

const formSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8).max(16),
    confirmPassword: z.string().min(8).max(16),
    phone: z.string().min(10).regex(phoneRegex, "Invalid Number!"),
    approve: z.boolean(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password does not match",
    path: ["confirmPassword"],
  })
  .refine((data) => data.approve === true, {
    message: "You must agree to the terms",
    path: ["approve"],
  });

export default function Register() {
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      approve: false,
    },
  });

  function handleSubmit(data) {
    console.log(data);
    navigate("/dashboard");
  }

  return (
    <div className="h-full relative items-center justify-center grid">
      <div className="">
        <div className="flex flex-col space-y-3 text-center">
          <h1 className="text-5xl font-bold">Register</h1>
          <p className="text-sm text-slate-600">
            Test email, password, phone resolver from zod!
          </p>
        </div>
        <Form {...form}>
          <form
            className="flex flex-col gap-2 my-3 w-full"
            onSubmit={form.handleSubmit(handleSubmit)}
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
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      id="confirmPassword"
                      placeholder="Confirm your password"
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
                <FormItem className="relative mt-1">
                  <FormLabel className="mr-1">
                    I Agree to the use demo service
                  </FormLabel>
                  <FormControl className="absolute -top-1">
                    <Checkbox
                      id="approve"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />

                  <FormDescription className="">
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

            <Button className="mt-2" type="submit">
              Sign Up
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                navigate("/login");
              }}
            >
              Cancel
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
