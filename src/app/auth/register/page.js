import Link from 'next/link'

export const metadata = {
  title: 'Login | Smart Malang',
}

export default function RegisterPage() {
  return (
    <div className="hero min-h-[70vh]">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label text-md">Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Full Name"
              />
              <label className="label text-md">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Email"
              />
              <label className="label text-md">Password</label>
              <input
                type="password"
                className="input w-full"
                placeholder="Password"
              />
              <label className="label text-md">Confirm Password</label>
              <input
                type="password"
                className="input w-full"
                placeholder="Confirm Password"
              />
              <button className="btn btn-neutral mt-4">Register</button>
              <div className="mt-2">
                <span>Already have an account? </span>
                <Link className="link link-hover" href="/auth/login">
                  Login
                </Link>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  )
}
