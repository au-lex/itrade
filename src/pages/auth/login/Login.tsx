import { useState } from "react";
import { Eye, EyeSlash, Lock, Sms } from "iconsax-reactjs";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GoArrowUpRight } from "react-icons/go";
import { SiBinance } from "react-icons/si";
import AuthHero from "../AuthHero";

const socials = [
  { label: "Continue with Binance", icon: <SiBinance className="text-xl text-amber-400" /> },
  { label: "Continue with Google", icon: <FcGoogle className="text-xl" /> },
  { label: "Continue with Apple", icon: <FaApple className="text-xl" /> },
];

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: call login API with { email, password }
  };

  return (
    <main className="min-h-screen bg-[#f8f9fa] lg:p-4 lg:p-6">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-[80rem] gap-6">
        {/* left: hero */}
        <AuthHero className="hidden lg:flex lg:w-[55%] lg:shrink-0" />

        {/* right: login + join cards */}
        <div className="flex w-full flex-col gap-4 lg:min-w-[26rem] lg:flex-1">
          <section className="flex flex-1 flex-col rounded-2xl bg-white px-4 lg:px-10 py-9">
            <div className="mb-6 text-2xl font-semibold">
              <img
                src="https://res.cloudinary.com/dmhvsyzch/image/upload/v1792962104/Logo_fvenhh.png"
                alt="PopTrade"
                className="h-9 object-contain"
              />
            </div>

            <h2 className="text-2xl font-medium text-slate-900">Welcome Back!</h2>

            <div className="mt-16 space-y-3">
              {socials.map((s) => (
                <button
                  key={s.label}
                  type="button"
                  className="flex w-full items-center justify-center gap-3 rounded-full border border-gray-200 bg-white py-3 text-sm text-slate-800 transition hover:bg-gray-50"
                >
                  {s.icon}
                  {s.label}
                </button>
              ))}
            </div>

            <p className="my-5 text-center text-sm font-light text-slate-400">
              Or login with Email
            </p>

            <form onSubmit={handleSubmit} className="flex flex-1 flex-col">
              <div className="space-y-3">
                {/* email */}
                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center">
                    <Sms size="20" color="#B3BBC8" variant="Linear" />
                  </span>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full rounded-full bg-[#f8f9fa] py-4 pl-12 pr-5 text-sm outline-none ring-1 ring-transparent transition placeholder:text-[#B3BBC8] focus:ring-[#003df6]"
                  />
                </div>

                {/* password */}
                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center">
                    <Lock size="20" color="#B3BBC8" variant="Linear" />
                  </span>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full rounded-full bg-[#f8f9fa] py-4 pl-12 pr-12 text-sm outline-none ring-1 ring-transparent transition placeholder:text-[#B3BBC8] focus:ring-[#003df6]"
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

                <a
                  href="/forgot-password"
                  className="block text-right text-xs text-[#003df6] hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              <div className="mt-auto pt-10">
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#1a3df0] py-3.5 text-sm font-medium text-white transition hover:bg-blue-700 active:scale-[0.99]"
                >
                  Login
                </button>

                <p className="pt-3 text-center text-sm text-slate-400">
                  Doesn’t have an account?{" "}
                  <a href="/signup" className="font-semibold text-[#003df6] hover:underline">
                    Sign Up
                  </a>
                </p>
              </div>
            </form>
          </section>

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