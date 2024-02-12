export default function Login() {
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
        className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]"
      >
        <div className="mx-auto flex flex-col items-center justify-center space-y-4">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-sm text-slate-600">Login to your account</p>
          </div>
        </div>
      </div>
    </div>
  );
}
