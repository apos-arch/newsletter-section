import { useForm } from "react-hook-form";

export function SignPage() {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <form className="grid grid-cols-2 w-11/12 h-3/6 py-5 ml-8">
      <input
        {...register("email", {
          required: "Email Address is required",

          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Please Enter a valid email address!",
          },
        })}
        type="email"
        id="email"
        className=" m-2 bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg  w-6/6 h-6/6 p-2.5 input-email focus:ring-gray-500 disabled:text-gray-300 disabled:cursor-not-allowed invalid:ring-red-30"
        placeholder="Enter your email"
      />

      {/* <div class="mb-6">
        <label
          for="success"
          class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">
          Your name
        </label>
        <input
          type="text"
          id="success"
          class="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
          placeholder="Success input"
        />
        <p class="mt-2 text-sm text-green-600 dark:text-green-500">
          <span class="font-medium">Well done!</span> Some success message.
        </p>
      </div> */}
      {/* <div>
        <label
          for="error"
          class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">
          Your name
        </label>
        <input
          type="text"
          id="error"
          class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
          placeholder="Error input"
        />
        <p class="mt-2 text-sm text-red-600 dark:text-red-500">
          <span class="font-medium">Oh, snapp!</span> Some error message.
        </p>
      </div> */}
      <button
        type="submit"
        className=" w-2/6 m-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Subscribe
      </button>
      <p className="error-message">{errors.email?.message}</p>
      <p> We only send you the best! No spam.</p>
    </form>
  );
}
