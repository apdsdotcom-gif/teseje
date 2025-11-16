
export default function AboutContact(){
  return(
    <section id="about" className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 fade-up">
      <div className="bg-white rounded-2xl shadow p-8">
        <h2 className="text-3xl font-bold mb-4">About</h2>
        <img src="/images/logo-apdsworks.png" className="w-20 mb-4"/>
        <p className="text-slate-600 mb-4">Aku seorang kreator visual.</p>
      </div>

      <div id="contact" className="bg-white rounded-2xl shadow p-8">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <a href="mailto:hello@example.com" className="inline-block px-5 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full card-hover">
          hello@example.com
        </a>

        <div className="flex gap-4 mt-6">
          <a href="https://github.com" target="_blank" className="card-hover">
            <svg className="w-6 h-6 text-slate-700" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297a12 12 0 00-3.79 23.4c.6...z"/>
            </svg>
          </a>

          <a href="https://twitter.com" target="_blank" className="card-hover">
            <svg className="w-6 h-6 text-slate-700" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26...z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
