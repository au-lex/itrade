import { useState } from "react";
import { ArrowDown2, Eye, EyeSlash, Link2, Lock, Sms, Sound } from "iconsax-reactjs";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GoArrowUpRight } from "react-icons/go";
import { SiBinance } from "react-icons/si";
import AuthHero from "../AuthHero";

const socials = [
  { label: "Binance", icon: <SiBinance className="text-xl text-amber-400" /> },
  { label: "Google", icon: <FcGoogle className="text-xl" /> },
  { label: "Apple", icon: <FaApple className="text-xl" /> },
];

const sources = [
  "Twitter / X",
  "Instagram",
  "LinkedIn",
  "YouTube",
  "Friend or family",
  "Google search",
  "Other",
];

const inputBase =
  "w-full rounded-full bg-[#f8f9fa] py-4 pl-12 text-sm outline-none ring-1 ring-transparent transition placeholder:text-[#B3BBC8] focus:ring-[#003df6]";

export default function Signup() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    referralId: "",
    source: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // TODO: call signup API with form
  };

  return (
    <main className="min-h-screen bg-[#f8f9fa] mp-4 lg:p-6">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)]  max-w-[80rem] gap-6">
        {/* left: hero */}
        <AuthHero className="hidden w lg:flex lg:w-[55%] lg:shrink-0" />

        {/* right: signup + join cards */}
        <div className="flex w-full flex-col gap-4 lg:min-w-[26rem] lg:flex-1">
          <section className="flex flex-1 flex-col rounded-2xl bg-white px-4 lg:px-10 py-9">
            <div className="mb-6">
              <img
                src="https://res.cloudinary.com/dmhvsyzch/image/upload/v1792962104/Logo_fvenhh.png"
                alt="PopTrade"
                className="h-9 object-contain"
              />
            </div>

            <h2 className="text-2xl font-medium text-slate-900">Welcome Back!</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Let's navigate the cryptoverse together — PopTrade is ready to
              launch you into a world of limitless possibilities.
            </p>

            {/* socials */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {socials.map((s) => (
                <button
                  key={s.label}
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white py-3 text-sm text-slate-800 transition hover:bg-gray-50"
                >
                  {s.icon}
                  {s.label}
                </button>
              ))}
            </div>

            <p className="my-5 text-center text-sm font-light text-slate-400">
              Or signup with Email
            </p>

            <form onSubmit={handleSubmit} className="flex flex-1 flex-col">
              <div className="space-y-3">
                {/* email */}
                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center">
                    <Sms size="20" color="#B3BBC8" variant="Linear" />
                  </span>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                    className={`${inputBase} pr-5`}
                  />
                </div>

                {/* password */}
                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center">
                    <Lock size="20" color="#B3BBC8" variant="Linear" />
                  </span>
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                    className={`${inputBase} pr-12`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute inset-y-0 right-4 flex items-center"
                  >
                    {showPassword ? (
                      <EyeSlash size="20" color="#B3BBC8" variant="Linear" />
                    ) : (
                      <Eye size="20" color="#B3BBC8" variant="Linear" />
                    )}
                  </button>
                </div>

                {/* confirm password */}
                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center">
                    <Lock size="20" color="#B3BBC8" variant="Linear" />
                  </span>
                  <input
                    name="confirmPassword"
                    type={showConfirm ? "text" : "password"}
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    required
                    className={`${inputBase} pr-12`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm((v) => !v)}
                    aria-label={showConfirm ? "Hide password" : "Show password"}
                    className="absolute inset-y-0 right-4 flex items-center"
                  >
                    {showConfirm ? (
                      <EyeSlash size="20" color="#B3BBC8" variant="Linear" />
                    ) : (
                      <Eye size="20" color="#B3BBC8" variant="Linear" />
                    )}
                  </button>
                </div>

                {/* referral */}
                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center">
                    <Link2 size="20" color="#B3BBC8" variant="Linear" />
                  </span>
                  <input
                    name="referralId"
                    type="text"
                    value={form.referralId}
                    onChange={handleChange}
                    placeholder="Referal ID (Optional)"
                    className={`${inputBase} pr-5`}
                  />
                </div>

                {/* source */}
                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center">
                    <Sound size="20" color="#B3BBC8" variant="Linear" />
                  </span>
                  <select
                    name="source"
                    value={form.source}
                    onChange={handleChange}
                    className={`${inputBase} cursor-pointer appearance-none pr-12 ${
                      form.source ? "text-slate-900" : "text-[#B3BBC8]"
                    }`}
                  >
                    <option value="" disabled>
                      Where do you hear us from?
                    </option>
                    {sources.map((s) => (
                      <option key={s} value={s} className="text-slate-900">
                        {s}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                    <ArrowDown2 size="20" color="#B3BBC8" variant="Linear" />
                  </span>
                </div>

                {error && <p className="px-2 text-xs text-red-500">{error}</p>}
              </div>

              <div className="mt-auto pt-10">
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#1a3df0] py-3.5 text-sm font-medium text-white transition hover:bg-blue-700 active:scale-[0.99]"
                >
                  Sign Up
                </button>

                <p className="pt-3 text-center text-sm text-slate-400">
                  Already had an account?{" "}
                  <a href="/login" className="font-semibold text-[#003df6] hover:underline">
                    Login
                  </a>
                </p>
              </div>
            </form>
          </section>

          {/* join us card */}
          <section className="flex items-center justify-between rounded-2xl bg-white px-6 py-5">
            <div className="flex items-center gap-4">
              <img
                src="https://res.cloudinary.com/dmhvsyzch/image/upload/v1792966324/Profile_list_fhcg1u.png"
                alt="Happy customers"
                className=" h-10 lg:h-14 object-contain"
              />
              <div>
                <p className=" text-xs lg:text-sm font-medium text-slate-900">
                  Join with +100k other users!
                </p>
                <p className="lg:text-xs text-[8px] text-slate-400">Let's see our happy customers</p>
              </div>
            </div>

            <button
              type="button"
              aria-label="See customers"
              className="flex h-10 w-10 lg:h-14 lg:w-14 shrink-0 items-center 
              justify-center rounded-full bg-[#003df6]/10 text-xl lg:text-3xl text-[#003df6] transition hover:bg-[#003df6]/20"
            >
              <GoArrowUpRight />
            </button>
          </section>
        </div>
      </div>
    </main>
  );
}