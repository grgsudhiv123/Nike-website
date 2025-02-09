import Buttons from "../components/Buttons"
const Subscribe = () => {
  return (
    <section id="contact-us" className="max-w-screen-xl mx-auto flex flex-col justify-center items-center gap-10">
      <h3 className="font-bold text-4xl font-palanquin">
        Sign Up form <span className="text-coral-red">Updates</span>  & Newsletter
      </h3>
      <div className="flex flex-col sm:flex-row justify-between border-2 border-slate-400 p-1 w-auto sm:w-xl gap-5 sm:gap-10 rounded-full">
          <input 
          type="text" 
          placeholder="subscribe@nike.com" 
          className="ml-4 outline-none p-2 sm:p-0 sm:ml-5 w-full sm:w-96 lg:rounded-none sm:rounded-full text-xl"
        />
        <Buttons labels="Sign Up" />
      </div>

    </section>
  )
}

export default Subscribe