// import React from 'react'

// const AdminModal = () => {
//   const [showModal, setShowModal] = useState(false);

//   const handleModalChange = () => {
//     setShowModal(true);
//   };

//   const handleModalClose = () => {
//     setShowModal(false);
//   };

//   return (
//     <div class="fixed inset-0 flex items-center justify-center z-50">
//           <div class="relative p-4 w-full max-w-4xl max-h-full">
//             <div class="bg-white rounded-lg shadow">
//               <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
//                 <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
//                   Add your jobs data here
//                 </h3>
//                 <button
//                   onClick={handleModalClose}
//                   type="button"
//                   class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
//                   data-modal-hide="authentication-modal"
//                 >
//                   <svg
//                     class="w-3 h-3"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 14 14"
//                   >
//                     <path
//                       stroke="currentColor"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       stroke-width="2"
//                       d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//                     />
//                   </svg>
//                   <span class="sr-only">Close modal</span>
//                 </button>
//               </div>
//               {/* <!-- Modal body --> */}
//               <div class="p-4 md:p-5">
//                 <form className="flex gap-4 flex-col items-center mt-5">
//                   <div class="relative w-5/6">
//                     <input
//                       type="text"
//                       id="post_name"
//                       class={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none peer ${
//                         errors.post_name
//                           ? "border-red-500 focus:border-red-600"
//                           : "focus:ring-0 focus:border-blue-600"
//                       }`}
//                       placeholder=" "
//                       name="post_name"
//                       onChange={hanldeInputChange}
//                       value={cardsData.post_name}
//                     />
//                     <label
//                       for="post_name"
//                       class={`absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-5 bg-gray-100 z-10 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 ${
//                         errors.fullName
//                           ? "peer-focus:px-2 peer-focus:text-red-600"
//                           : "peer-focus:px-2 peer-focus:text-blue-600"
//                       }`}
//                     >
//                       Post Name
//                     </label>
//                   </div>
//                   <div class="relative w-5/6">
//                     <input
//                       type="text"
//                       id="positions"
//                       class={`${
//                         errors.positions
//                           ? "border-red-500 focus:border-red-600"
//                           : ""
//                       } block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none peer `}
//                       placeholder=" "
//                       name="positions"
//                       value={cardsData.positions}
//                       onChange={hanldeInputChange}
//                     />
//                     <label
//                       for="positions"
//                       class={`${
//                         errors.positions
//                           ? "peer-focus:px-2 peer-focus:text-red-600"
//                           : "peer-focus:px-2 peer-focus:text-blue-600"
//                       } absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 bg-gray-100`}
//                     >
//                       Position
//                     </label>
//                   </div>
//                   <div class="relative w-5/6">
//                     <input
//                       type="text"
//                       id="department"
//                       class={`${
//                         errors.department
//                           ? "border-red-500 focus:border-red-600"
//                           : "focus:ring-0"
//                       } block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none peer`}
//                       placeholder=" "
//                       name="department"
//                       value={cardsData.department}
//                       onChange={hanldeInputChange}
//                     />
//                     <label
//                       for="department"
//                       class={`${
//                         errors.department
//                           ? "peer-focus:px-2 peer-focus:text-red-600"
//                           : "peer-focus:px-2 peer-focus:text-blue-600"
//                       } bg-gray-100 absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
//                     >
//                       Department
//                     </label>
//                   </div>
//                   <div class="relative w-5/6">
//                     <input
//                       type="text"
//                       id="address"
//                       class={`${
//                         errors.address
//                           ? "border-red-500 focus:border-red-600"
//                           : "focus:ring-0 focus:border-blue-600"
//                       } block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none peer`}
//                       placeholder=" "
//                       name="address"
//                       value={cardsData.address}
//                       onChange={hanldeInputChange}
//                     />
//                     <label
//                       for="address"
//                       class={`${
//                         errors.address
//                           ? "peer-focus:px-2 peer-focus:text-red-600"
//                           : "peer-focus:px-2 peer-focus:text-blue-600"
//                       } bg-gray-100 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
//                     >
//                       Address
//                     </label>
//                   </div>
//                   <button
//                     onClick={handleSubmit}
//                     type="submit"
//                     className="bg-[#3AD8B6] text-sm font-semibold px-8 py-2 rounded cursor-pointer"
//                     disabled={loading}
//                   >
//                     {loading ? "Loading..." : "Save"}
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//   )
// }

// export default AdminModal