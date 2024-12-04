import { auth, signIn, signOut } from "@/auth";

export default function Page() {
  const session = auth();
  console.log(session);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 sm:p-8 md:p-12 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome back</h2>
        <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 mb-6">
          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <button className="flex items-center justify-center w-full sm:w-auto py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 mb-4 sm:mb-0">
              <img
                alt="Google logo"
                className="mr-2"
                height={20}
                src="/assets/google.png"
                width={20}
              />
              Log in with Google
            </button>
          </form>
          <form
            action={async () => {
              "use server";
              await signIn("github");
            }}
          >
            <button className="flex items-center justify-center w-full sm:w-auto py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <img
                alt="Apple logo"
                className="mr-2"
                height={20}
                src="/assets/github.png"
                width={20}
              />
              Log in with Github
            </button>
          </form>
        </div>
        <div className="flex items-center justify-center mb-6">
          <div className="border-t border-gray-300 w-full"></div>
          <span className="px-2 text-gray-500">or</span>
          <div className="border-t border-gray-300 w-full"></div>
        </div>
        <form>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              id="email"
              placeholder="Enter your email"
              type="email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              id="password"
              placeholder="••••••••"
              type="password"
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                id="remember_me"
                type="checkbox"
              />
              <label
                className="ml-2 block text-sm text-gray-900"
                htmlFor="remember_me"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a
                className="font-medium text-blue-600 hover:text-blue-500"
                href="#"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <div>
            <button
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              type="submit"
            >
              Sign in to your account
            </button>
          </div>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account yet?
          <a className="font-medium text-blue-600 hover:text-blue-500" href="#">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
}
