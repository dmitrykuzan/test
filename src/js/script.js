"use strict";

// Connecting vendors (plugins)
import "./_vendor";

// Functions
import { box, burger, mobileCheck } from "./functions/";

// Components
// import { formValidation } from "./components/";

window.addEventListener("DOMContentLoaded", () => {
  mobileCheck();
  box();
  burger();
});
