
const works=[
  {
    slug:'project-satu',
    title:'Project Satu',
    desc:'Eksperimen visual dengan bentuk & warna.',
    img:'/images/kontribusi-1.png'
  },
  {
    slug:'project-dua',
    title:'Project Dua',
    desc:'Eksplorasi motion yang fun dan ringan.',
    img:'/images/kontribusi-2.png'
  },
  {
    slug:'project-tiga',
    title:'Project Tiga',
    desc:'Desain simpel dengan karakter playful.',
    img:'/images/kontribusi-3.png'
  }
];

export default function Page(){
  return(
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-3">Kontribusi & Karya</h1>
      <p className="text-slate-600 mb-10">Kumpulan karya yang pernah aku kerjakan.</p>

      <div className="grid md:grid-cols-3 gap-6">
        {works.map(work=>(
          <a key={work.slug} href={`/contribution/${work.slug}`} className="bg-white rounded-2xl shadow hover:-translate-y-1 transition card-hover block">
            <img src={work.img} className="rounded-t-2xl"/>
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-1">{work.title}</h2>
              <p className="text-slate-600 text-sm">{work.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
