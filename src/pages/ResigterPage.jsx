import React from "react";


const Register = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
        <hr className="mx-[100px] border-gray-300" />
      <main className="flex-grow flex items-start justify-center px-4 pt-12">
        <div className="bg-white text-black p-8 rounded-2xl shadow-lg w-full max-w-md border border-black">
          <h2 className="text-3xl font-bold mb-6">Register</h2>
          <form>
            <div className="mb-4">
              <label className="block mb-1 font-medium">User name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter user name"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter email"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Register
            </button>
          </form>

          <p className="text-sm text-center mt-4">
          Already have an account?{" "}
            <a href="/login" className="text-black font-medium underline">
            Sign in
            </a>
          </p>
        </div>
      </main>

    </div>
  );
};

export default Register;
