import React from 'react'

const Dropdown = (props) => {
  const{show, myRef} = props
  return (
<> 
{show && <div
      ref={myRef}
      id="dropdown"
      class={`absolute right-5 top-16 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-38 dark:bg-gray-700
      `}
    >
      <ul
        class="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDefaultButton"
      >
        <li>
          <a
            href="#"
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            My Application
          </a>
        </li>
        <li>
          <a
            href="#"
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Profile
          </a>
        </li>
        <li>
          <a
            href="#"
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Logout
          </a>
        </li>
      </ul>
    </div>}
</>  )
}

export default Dropdown