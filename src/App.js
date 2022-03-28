function App() {
  return (
    <div className="App font-poppins">
      <div className="flex pl-6 pr-6 pb-2 justify-between bg-gray-50 shadow-sm">
        <img src="logo.png" alt="" className="w-22 h-8 mt-1" />
        <div className="flex gap-5 self-end text-black font-semibold">
          <span className=" ">Skip the hassle</span>
          <span>Cruise through backend</span>
        </div>
        <button className="self-end bg-blue-600 px-3 py-1 rounded-lg text-white capitalize">
          get easy access
        </button>
      </div>
      <section className="bg-cta-background h-135 pt-20  flex justify-between">
        <div className="w-96 ml-20 mt-12">
          <h1 className="text-5xl font-semibold">Integrate APIs In Minutes</h1>
          <p className="font-semibold mt-4 text-justify">
            Get ridiculously creative with your products and let us do the hard
            work for you!
          </p>
          <form className="mt-8">
            <input
              type="mail"
              className="border-2 rounded-l-lg border-blue-600 py-1 focus:outline-0 px-2"
              placeholder="email@example.com"
            />
            <button className="bg-blue-600 px-2 py-1 border-2 rounded-r-lg border-blue-600 text-white capitalize">
              Get Early Access
            </button>
          </form>
        </div>
        <div className="rounded-l-5xl border-slate-300 border-2 border-r-0 bg-white h-120 shadow-md w-128">
          <div className=" w-128 h-80 ml-4 rounded-l-5xl bg-gray-50 mt-4 mb-4 py-16 px-24 relative">
            <div className="flex gap-2 absolute top-8 left-8">
              <img src="images/fullscreen.svg" alt="" className="w-3 h-3" />
              <img src="images/settings.svg" alt="" className="w-3 h-3" />
              <img src="images/mute.svg" alt="" className="w-3 h-3" />
              <img src="images/share.svg" alt="" className="w-3 h-3" />
            </div>
            <img
              src="images/group-items.png"
              alt=""
              className="w-60 h-50 blur-sm"
            />
            <div className="w-14 h-8 rounded-lg bg-black absolute bottom-32 left-48">
              <img
                src="images/play.svg"
                alt=""
                className="w-4 h-4 absolute left-6 bottom-2"
              />
            </div>
            <img
              src="images/dir.svg"
              alt=""
              className="w-28 h-28 absolute bottom-4 left-36 z-10"
            />
            <span className="text-xl capitalize font-extrabold absolute left-10 bottom-6">
              take a tour
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
