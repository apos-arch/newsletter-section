import logo from "./logo.svg";
import abstract from "./img/abstract.jpg";
import { SignPage } from "./SignPage";

export function Newsletter() {
  return (
    <div className="App-header grid grid-cols-2 grid-flow-col border-2 border-gray-700 ">
      <div className=" grid grid-rows-3 grid-flow-row w-full h-30">
        <h1 class="p-2 m-4 text-2xl font-medium leading-none tracking-normal text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Get the finest curated abstracts delivered weekly to your inbox
        </h1>

        <ul class=" p-3   max-w-lg space-y-3 text-gray-500 list-inside dark:text-gray-400 m-8">
          <li class="flex items-center">
            <svg
              class="w-3.5 h-3.5 me-2 text-indigo-500 dark:text-indigo-400 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Exclusive access to new abstract images and collections
          </li>
          <li class="flex items-center">
            <svg
              class="w-3.5 h-3.5 me-2 text-indigo-500 dark:text-indigo-400 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Unlock special promotions only for subscribers
          </li>
          <li class="flex items-center">
            <svg
              class="w-3.5 h-3.5 me-2 text-indigo-500 dark:text-indigo-400 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Regular doses of artistic inspiration
          </li>
        </ul>

        <SignPage />
      </div>{" "}
      <div className=" h-full w-full justify-items-center  p-4">
        <img
          src={abstract}
          className="h-6/6 w-6/6 rounded-2xl  m-7  items-center   "
          alt="logo"
        />
      </div>
    </div>
  );
}
