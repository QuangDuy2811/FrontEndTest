import React from "react";


const Login = () => {
  return (
    <div className=" text-white min-h-screen flex flex-col">
        <hr className="mx-[100px] border-gray-300" />
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white text-black p-8 rounded-2xl shadow-lg w-full max-w-md border border-black  ">
          <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
            <a href="/register" className="text-black font-medium underline">
                Sign up
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;
