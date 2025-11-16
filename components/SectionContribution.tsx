
export default function SectionContribution(){
  const items=[
    {img:'/images/kontribusi-1.png',title:'Project Satu',desc:'Eksperimen visual dengan bentuk & warna.',slug:'project-satu'},
    {img:'/images/kontribusi-2.png',title:'Project Dua',desc:'Eksplorasi motion yang fun dan ringan.',slug:'project-dua'},
    {img:'/images/kontribusi-3.png',title:'Project Tiga',desc:'Desain simpel dengan karakter playful.',slug:'project-tiga'}
  ];
  return(
    <section id="contribution" className="max-w-5xl mx-auto px-6 py-20 fade-up">
      <h2 className="text-3xl font-bold mb-2">Kontribusi & Karya</h2>
      <p className="text-slate-600 mb-10">Kumpulan karya yang pernah aku kerjakan.</p>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item)=>(
          <a key={item.slug} href={`/contribution/${item.slug}`} className="bg-white rounded-2xl shadow hover:-translate-y-1 transition card-hover block">
            <img src={item.img} className="rounded-t-2xl"/>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <a href="/contribution" className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow card-hover">
          Lihat Semua Kontribusi
        </a>
      </div>
    </section>
  );
}
