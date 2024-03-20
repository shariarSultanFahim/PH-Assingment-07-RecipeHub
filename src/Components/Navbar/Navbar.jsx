
const Navbar = () => {
  return (
    <div className="container mx-auto my-4 navbar justify-between bg-base-100">
      <div className="">
        <a className="btn btn-ghost text-xl">RecipeHub</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          <li>
          <a className="border border-emerald-500 bg-emerald-500 hover:bg-transparent hover:text-emerald-500 ">Home</a>
          </li>
          <li>
            <a className="border border-emerald-500 bg-emerald-500 hover:bg-transparent hover:text-emerald-500">Recipes</a>
          </li>
          <li>
          <a className="border border-emerald-500 bg-emerald-500 hover:bg-transparent hover:text-emerald-500 ">About</a>
          </li>
          <li>
          <a className="border border-emerald-500 bg-emerald-500 hover:bg-transparent hover:text-emerald-500 ">Search</a>
          </li>
        </ul>
      </div>

      <div className="flex-none gap-2">

      <div className="form-control relative">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-24 md:w-auto pl-10"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500 ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

      </div>
    </div>


        
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <svg
                width="40"
                height="40"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="32" fill="#1E1E1E" />
                <g id="Landing Page UI Design">
                  <rect
                    width="1600"
                    height="1807"
                    transform="translate(-1420 -58)"
                    fill="white"
                  />
                  <g id="Frame 10">
                    <g id="Frame 9">
                      <g id="Frame 8">
                        <g id="Frame 5">
                          <rect
                            x="-8"
                            y="-8"
                            width="48"
                            height="48"
                            rx="24"
                            fill="#0BE58A"
                          />
                          <g id="Frame">
                            <path
                              id="Vector"
                              d="M23.9761 24.9668C23.0444 23.7333 21.8391 22.7329 20.455 22.0446C19.0709 21.3562 17.5459 20.9987 16.0001 21.0001C14.4543 20.9987 12.9292 21.3562 11.5451 22.0446C10.1611 22.7329 8.95571 23.7333 8.02406 24.9668M23.9761 24.9668C25.7941 23.3497 27.0762 21.2182 27.655 18.8549C28.2337 16.4916 28.0804 14.0082 27.2153 11.7341C26.3503 9.45992 24.8144 7.50246 22.8113 6.12129C20.8081 4.74012 18.4325 4.00049 15.9994 4.00049C13.5663 4.00049 11.1906 4.74012 9.18753 6.12129C7.18443 7.50246 5.6485 9.45992 4.78344 11.7341C3.91838 14.0082 3.76506 16.4916 4.34382 18.8549C4.92257 21.2182 6.20606 23.3497 8.02406 24.9668M23.9761 24.9668C21.7814 26.9243 18.9409 28.0043 16.0001 28.0001C13.0588 28.0046 10.219 26.9246 8.02406 24.9668M20.0001 13.0001C20.0001 14.061 19.5786 15.0784 18.8285 15.8285C18.0783 16.5787 17.0609 17.0001 16.0001 17.0001C14.9392 17.0001 13.9218 16.5787 13.1716 15.8285C12.4215 15.0784 12.0001 14.061 12.0001 13.0001C12.0001 11.9392 12.4215 10.9218 13.1716 10.1717C13.9218 9.42152 14.9392 9.00009 16.0001 9.00009C17.0609 9.00009 18.0783 9.42152 18.8285 10.1717C19.5786 10.9218 20.0001 11.9392 20.0001 13.0001Z"
                              stroke="#150B2B"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
