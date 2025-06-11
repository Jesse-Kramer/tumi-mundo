import { c as create_ssr_component, v as validate_component, e as escape, b as add_attribute, d as each, n as null_to_empty } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
/* empty css                                                      */
import { I as Input } from "../../../chunks/Input.js";
import { B as Back } from "../../../chunks/Back.js";
const css = {
  code: '.svelte-6pt67k.svelte-6pt67k{padding:0;margin:0}section.svelte-6pt67k.svelte-6pt67k,form.svelte-6pt67k.svelte-6pt67k,main.svelte-6pt67k.svelte-6pt67k{display:flex;flex-direction:column}main.svelte-6pt67k.svelte-6pt67k{align-items:center}section.svelte-6pt67k.svelte-6pt67k{padding:1.25em;max-width:30em ;height:100dvh}form.svelte-6pt67k.svelte-6pt67k{flex-grow:1}.heading.svelte-6pt67k.svelte-6pt67k{display:flex;align-items:center;justify-content:space-between;position:relative;height:5em;margin-bottom:1.8em;margin-top:.6em}.heading.svelte-6pt67k h1.svelte-6pt67k{position:absolute;left:50%;transform:translateX(-50%);margin:0;font-size:1.5rem}.heading.svelte-6pt67k a.svelte-6pt67k{text-decoration:none;margin-left:0;display:flex;align-items:center}.password-field-wrapper.svelte-6pt67k.svelte-6pt67k{position:relative;flex-direction:column;margin-bottom:0}.password-field-wrapper.svelte-6pt67k .toggle-password-btn.svelte-6pt67k{position:absolute;top:50%;right:1rem;border:none}.field-error.svelte-6pt67k.svelte-6pt67k{color:#d32f2f;margin-top:-0.8em;margin-bottom:0.8em}.terms-error.svelte-6pt67k.svelte-6pt67k{color:#d32f2f;margin-bottom:0.4em;margin-top:0.5em}.password-criteria.svelte-6pt67k.svelte-6pt67k{background:#f7fafd;border:1px solid #e2e8f0;border-radius:0.6em;padding:1em;flex-direction:column }.password-criteria.svelte-6pt67k h3.svelte-6pt67k{font-size:1em;margin-bottom:0.5em}.password-criteria.svelte-6pt67k li.valid.svelte-6pt67k{color:#2ecc40;font-weight:500}.password-criteria.svelte-6pt67k li.invalid.svelte-6pt67k{color:#d32f2f;font-weight:400}label.svelte-6pt67k.svelte-6pt67k{font-size:1.25em;margin-bottom:.6em}p.svelte-6pt67k.svelte-6pt67k{max-width:40ch}input.svelte-6pt67k.svelte-6pt67k{padding:1rem;background-color:var(--color-white);border:none;border-radius:.6em;margin-bottom:1.25em ;font-size:1em}label.svelte-6pt67k.svelte-6pt67k{margin-bottom:.6em}div.svelte-6pt67k.svelte-6pt67k{display:flex;flex-direction:row;margin-bottom:1.25em}.switch.svelte-6pt67k.svelte-6pt67k{position:absolute;display:inline-block;width:5em;height:1.25em;margin-right:.6em}.switch.svelte-6pt67k input.svelte-6pt67k{opacity:0;width:0;height:0}.toggle-row.svelte-6pt67k.svelte-6pt67k{position:relative;margin-bottom:1.25em}.toggle-row.svelte-6pt67k p.svelte-6pt67k{margin:0;margin-left:3.5em;line-height:1.4}.slider.svelte-6pt67k.svelte-6pt67k{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;width:2em;background-color:grey;-webkit-transition:.4s;transition:.4s}.slider.svelte-6pt67k.svelte-6pt67k:before{position:absolute;content:"";height:1em;width:1em;left:2px;bottom:3px;background-color:var(--color-white);-webkit-transition:.4s;transition:.4s}input.svelte-6pt67k:checked+.slider.svelte-6pt67k{background-color:hsla(217, 91%, 60%, 1)}input.svelte-6pt67k:focus+.slider.svelte-6pt67k{box-shadow:0 0 1px hsla(217, 91%, 60%, 1)}input.svelte-6pt67k:checked+.slider.svelte-6pt67k:before{-webkit-transform:translateX(1.25em);-ms-transform:translateX(1.25em);transform:translateX(0.80em)}.slider.round.svelte-6pt67k.svelte-6pt67k{border-radius:1em}.slider.round.svelte-6pt67k.svelte-6pt67k:before{border-radius:50%}.sign-upbtn.svelte-6pt67k.svelte-6pt67k{align-self:center;bottom:0;border-radius:.6em;width:95%;background-color:hsla(198, 43%, 41%, 1);padding:.6em;text-align:center;font-size:1em;color:var(--color-white);text-decoration:none;margin-top:auto;margin-bottom:3.75em;cursor:pointer}.sign-upbtn.svelte-6pt67k.svelte-6pt67k:hover{background-color:var(--color-login-bg-hover)}.click-here.svelte-6pt67k.svelte-6pt67k{color:hsla(217, 75%, 65%, 1)}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let password = "";
  const criteria = [
    {
      label: "A lowercase letter",
      test: (pw) => /[a-z]/.test(pw)
    },
    {
      label: "An uppercase letter",
      test: (pw) => /[A-Z]/.test(pw)
    },
    {
      label: "A number",
      test: (pw) => /\d/.test(pw)
    },
    {
      label: "Minimum 8 characters",
      test: (pw) => pw.length >= 8
    }
  ];
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<main class="svelte-6pt67k"><section class="svelte-6pt67k"><div class="heading svelte-6pt67k"><a href="/onboarding" class="svelte-6pt67k">${validate_component(Back, "Back").$$render($$result, { color: "black" }, {}, {})}</a> <h1 class="svelte-6pt67k" data-svelte-h="svelte-13vjqy4">Sign up</h1></div> <form method="POST" action="/sign-up" class="svelte-6pt67k">${validate_component(Input, "Input").$$render(
      $$result,
      {
        inputClass: form?.errors?.name ? "is-invalid" : "",
        type: "text",
        name: "name",
        placeholder: "Enter your full name",
        value: form?.values?.name ?? ""
      },
      {},
      {}
    )} ${form?.errors?.name ? `<div class="field-error svelte-6pt67k">${escape(form.errors.name)}</div>` : ``} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        inputClass: form?.errors?.email ? "is-invalid" : "",
        type: "email",
        name: "email",
        placeholder: "email@example.com",
        value: form?.values?.email ?? ""
      },
      {},
      {}
    )} ${form?.errors?.email ? `<div class="field-error svelte-6pt67k">${escape(form.errors.email)}</div>` : ``} <div class="password-field-wrapper svelte-6pt67k">${validate_component(Input, "Input").$$render(
      $$result,
      {
        inputClass: form?.errors?.password ? "is-invalid" : "",
        type: "password",
        name: "password",
        placeholder: "Enter your password",
        label: "Password",
        value: password
      },
      {
        value: ($$value) => {
          password = $$value;
          $$settled = false;
        }
      },
      {}
    )} <button type="button" class="toggle-password-btn svelte-6pt67k"${add_attribute("aria-label", "Show password", 0)}>${`<svg width="24" height="24" fill="none" viewBox="0 0 24 24" class="svelte-6pt67k"><path stroke="#444" stroke-width="2" d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z" class="svelte-6pt67k"></path><circle cx="12" cy="12" r="3" stroke="#444" stroke-width="2" class="svelte-6pt67k"></circle><line x1="4" y1="20" x2="20" y2="4" stroke="#444" stroke-width="2" class="svelte-6pt67k"></line></svg>`}</button></div> ${form?.errors?.password ? `<div class="field-error svelte-6pt67k">${escape(form.errors.password)}</div>` : ``} ${password.length > 0 ? `<div class="password-criteria svelte-6pt67k"><h3 class="svelte-6pt67k" data-svelte-h="svelte-b7jtfc">Password must contain the following:</h3> <ul class="svelte-6pt67k">${each(criteria, (item) => {
      return `<li class="${escape(null_to_empty(item.test(password) ? "valid" : "invalid"), true) + " svelte-6pt67k"}">${item.test(password) ? `<svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-6pt67k"><path d="M27 9L13 23L6 16" stroke="#2ecc40" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="svelte-6pt67k"></path></svg>` : `<svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-6pt67k"><path d="M6 6L14 14M14 6L6 14" stroke="#d32f2f" stroke-width="3" stroke-linecap="round" class="svelte-6pt67k"></path></svg>`} ${escape(item.label)} </li>`;
    })}</ul></div>` : ``} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        inputClass: form?.errors?.passwordConfirm ? "is-invalid" : "",
        type: "password",
        name: "passwordConfirm",
        placeholder: "Confirm your password",
        label: "Confirm password"
      },
      {},
      {}
    )} ${form?.errors?.passwordConfirm ? `<div class="field-error svelte-6pt67k">${escape(form.errors.passwordConfirm)}</div>` : ``} <article class="svelte-6pt67k">${form?.errors?.terms ? `<div class="terms-error svelte-6pt67k">${escape(form.errors.terms)}</div>` : ``} <div class="toggle-row svelte-6pt67k"><label class="${"switch " + escape(form?.errors?.terms ? "is-invalid" : "", true) + " svelte-6pt67k"}"><input type="checkbox" aria-label="toggle-button" name="terms" ${form?.values?.terms ? "checked" : ""} class="svelte-6pt67k"> <span class="slider round svelte-6pt67k"></span></label> <p class="svelte-6pt67k" data-svelte-h="svelte-jw9859">Agree to the terms of services and the privacy policy <a href="/click" class="click-here svelte-6pt67k">(click here for more information)</a>*</p></div> <div class="toggle-row svelte-6pt67k" data-svelte-h="svelte-1k75uj9"><label class="switch svelte-6pt67k"><input type="checkbox" aria-label="toggle-button" class="svelte-6pt67k"> <span class="slider round svelte-6pt67k"></span></label> <p class="svelte-6pt67k">Agree to share data with research universities and participate in research <a href="/" class="click-here svelte-6pt67k">(click here for more information)</a></p></div></article> <input type="submit" value="Sign up!" class="sign-upbtn svelte-6pt67k"></form></section> </main>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
