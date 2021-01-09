import React from "react";
import postcards from "../../assets/postcards/postcards";
import fire from "../../utils/firebase/firebase";
// import { db } from "../../utils/firebase/firebase";
// import useSWR from "swr";
import { initiateCheckout } from "../../stripe/payments";

export default function MainForm() {
  const [selected, setSelected] = React.useState("");
  console.log(
    "%c price id from Postcard set to State:",
    "color:cornflowerblue",
    selected
  );
  console.log("%c typeof selected:", "color:yellow", typeof selected);

  return (
    <div className="py--16 bg-white  lg:py--24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-pink-600 sm:text-4xl">
            Send A Postcard!
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
            Pick any one of our postcard, write your message, and we'll take
            care of the rest! We'll hand write your message and ship it to your
            loved one!
          </p>
        </div>

        <div class="bg-white">
          <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <div class="space-y-12">
              <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl text-center text-pink-600">
                  Step 1!
                </h2>
                <p class="text-xl text-gray-500 text-center">
                  The hard part... Pick a card
                </p>
              </div>
              <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
                {postcards.map((card) => {
                  return (
                    <button
                      key={card.id}
                      className=" rounded-lg focus:outline-none focus:ring-4 focus:ring-pink-500  focus:rounded-sm"
                      onClick={() => setSelected(card.id)}
                    >
                      <li key={card.id}>
                        <div className="space-y-4 ">
                          <div className="aspect-w-3 aspect-h-2 ">
                            <img
                              className="object-cover shadow-lg rounded-lg"
                              src={card.image}
                              alt={card.alt}
                            />
                          </div>
                        </div>
                      </li>
                    </button>
                  );
                })}
                {/* <!-- More people... --> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-pink-500 tracking-tight sm:text-3xl">
              Step 1. Pick Your Cake
            </h3>
            <div className="bg-white">
              <div className="mx-auto py-2 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-2 mt-4">
                <div className="space-y-12">
                  <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
                    {postcards.map((card) => {
                      return (
                        <button
                          key={card.id}
                          className=" rounded-lg focus:outline-none focus:ring-4 focus:ring-pink-500  focus:rounded-sm"
                          onClick={() => setSelected(card.id)}
                        >
                          <li key={card.id}>
                            <div className="space-y-4 ">
                              <div className="aspect-w-3 aspect-h-2 ">
                                <img
                                  className="object-cover shadow-lg rounded-lg"
                                  src={card.image}
                                  alt={card.alt}
                                />
                              </div>
                            </div>
                          </li>
                        </button>
                      );
                    })}
                    {/* <!-- More people... --> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div>
<form
  action="#"
  method="POST"
  className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
>
  <div>
    <label
      htmlFor="first_name"
      className="block text-sm font-medium text-gray-700"
    >
      First name
    </label>
    <div className="mt-1">
      <input
        type="text"
        name="first_name"
        id="first_name"
        autoComplete="given-name"
        className="py-3 px-4 block w-full shadow-sm focus:ring-pink-500 focus:border-pink-500 border-gray-300 rounded-md"
        // required
      />
    </div>
  </div>
  <div>
    <label
      htmlFor="last_name"
      className="block text-sm font-medium text-gray-700"
    >
      Last name
    </label>
    <div className="mt-1">
      <input
        type="text"
        name="last_name"
        id="last_name"
        autoComplete="family-name"
        className="py-3 px-4 block w-full shadow-sm focus:ring-pink-500 focus:border-pink-500 border-gray-300 rounded-md"
        // required
      />
    </div>
  </div>

  <div className="sm:col-span-2">
    <label
      htmlFor="email"
      className="block text-sm font-medium text-gray-700"
    >
      Email
    </label>
    <div className="mt-1">
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        className="py-3 px-4 block w-full shadow-sm focus:ring-pink-500 focus:border-pink-500 border-gray-300 rounded-md"
        // required
      />
    </div>
  </div>
  <div className="sm:col-span-2">
    <label
      htmlFor="message"
      className="block text-sm font-medium text-gray-700"
    >
      Message
    </label>
    <div className="mt-1">
      <textarea
        id="message"
        name="message"
        rows="4"
        className="py-3 px-4 block w-full shadow-sm focus:ring-pink-500 focus:border-pink-500 border-gray-300 rounded-md"
        // required
      ></textarea>
    </div>
  </div>

  <div className="sm:col-span-2 flex ">
    <button
      onClick={() => {
        initiateCheckout({
          lineItems: [
            {
              price: selected,
              quantity: 1,
            },
          ],
        });
      }}
      className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-pink-500 hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
    >
      Checkout with
      <span className="text-gray-600 ml-1 ">Stripe!</span>
    </button>
    <div className="w-full text-right self-center text-gray-800">
      <p>Total: $10</p>
    </div>
  </div>
</form>
</div> */
}
