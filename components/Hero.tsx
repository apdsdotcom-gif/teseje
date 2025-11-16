
export default function Hero(){
  return(
    <section className="relative overflow-hidden">
      <div className="absolute -left-32 -top-24 w-72 h-72 bg-[#fde1b8] rounded-[50%]" />
      <div className="absolute -right-40 -top-16 w-96 h-80 bg-[#cdeff4] rounded-[60%]" />
      <div className="absolute -bottom-32 left-10 w-80 h-72 bg-[#ffd6e2] rounded-[50%]" />
      <div className="absolute -bottom-40 right-0 w-96 h-80 bg-[#bfe7ff] rounded-[60%]" />

      <div className="max-w-5xl mx-auto px-6 pt-20 pb-28 flex flex-col md:flex-row items-center gap-12 fade-up">
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-4">Apdsworks</h1>
          <p className="text-xl text-slate-700 mb-4">Visual yang fun, ringan, dan penuh karakter.</p>
          <div className="flex gap-4">
            <a href="#contribution" className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow card-hover">Lihat Kontribusi</a>
            <a href="#blogs" className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow card-hover">Lihat Blog</a>
          </div>
        </div>

        <div className="flex-1 flex justify-center float-slow">
          <img src="/images/hero-main.png" className="w-72 h-72 object-contain rounded-[40px]" />
        </div>
      </div>
    </section>
  );
}
