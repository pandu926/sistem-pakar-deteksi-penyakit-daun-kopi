import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen capitalize">
      <div className="bg-white p-8 sm:p-10 md:p-16 rounded-lg  w-full max-w-3xl">
        <h2 className="md:text-3xl text-2xl font-bold mb-20 text-center">
          selamat datang kembali
        </h2>
        <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 mb-8">
          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <button className="flex items-center justify-center w-full sm:w-auto py-3 px-5 border border-gray-300 rounded-md shadow-sm text-lg font-medium text-gray-700 bg-white hover:bg-gray-50 mb-4 sm:mb-0">
              <Image
                alt="Google logo"
                className="mr-3"
                height={30}
                src="/icon/google.png"
                width={30}
              />
              Masuk Dengan Google
            </button>
          </form>
          <form
            action={async () => {
              "use server";
              await signIn("github");
            }}
          >
            <button className="flex items-center justify-center w-full sm:w-auto py-3 px-5 border border-gray-300 rounded-md shadow-sm text-lg font-medium text-gray-700 bg-white hover:bg-gray-50">
              <Image
                alt="Github logo"
                className="mr-3"
                height={30}
                src="/icon/github.png"
                width={30}
              />
              Masuk Dengan Github
            </button>
          </form>
        </div>
        <div className="flex items-center justify-center mb-8">
          <div className="border-t border-gray-300 w-full"></div>
          <span className="px-2 text-gray-500 text-lg">or</span>
          <div className="border-t border-gray-300 w-full"></div>
        </div>
        <form>
          <div className="mb-6">
            <label
              className="block text-lg font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-lg"
              id="email"
              placeholder="Enter your email"
              type="email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-lg font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-lg"
              id="password"
              placeholder="••••••••"
              type="password"
            />
          </div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <input
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                id="remember_me"
                type="checkbox"
              />
              <label
                className="ml-2 block text-lg text-gray-900"
                htmlFor="remember_me"
              >
                Simpan
              </label>
            </div>
          </div>
          <div>
            <button
              className="w-full flex justify-center py-3 px-5 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue- 500"
              type="submit"
            >
              Masuk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
