function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">
        AI Career Guidance
      </h1>
      <div className="space-x-4">
        <button>Login</button>
        <button>Register</button>
      </div>
    </nav>
  );
}

export default Navbar;