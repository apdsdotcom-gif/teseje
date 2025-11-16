
const works={
  'project-satu':{
    title:'Project Satu',
    img:'/images/kontribusi-1.png',
    desc:'Eksperimen visual dengan bentuk & warna.',
    content:'Di sini nanti kamu bisa jelasin lebih detail tentang Project Satu.'
  },
  'project-dua':{
    title:'Project Dua',
    img:'/images/kontribusi-2.png',
    desc:'Eksplorasi motion yang fun dan ringan.',
    content:'Kamu bisa ceritakan proses kreatif Project Dua di bagian ini.'
  },
  'project-tiga':{
    title:'Project Tiga',
    img:'/images/kontribusi-3.png',
    desc:'Desain simpel dengan karakter playful.',
    content:'Rangkum cerita singkat, proses, dan hasil Project Tiga di sini.'
  }
};

export default function Page({params}){
  const work=works[params.slug];
  if(!work){
    return(
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-bold mb-2">Karya tidak ditemukan</h1>
        <p className="text-slate-600">Pastikan URL sudah benar.</p>
      </main>
    );
  }

  return(
    <main className="max-w-3xl mx-auto px-6 py-16">
      <p className="text-sm text-slate-500 mb-2">Kontribusi & Karya · {params.slug}</p>
      <h1 className="text-4xl font-bold mb-4">{work.title}</h1>
      <p className="text-slate-600 mb-6">{work.desc}</p>
      <img src={work.img} className="w-full rounded-2xl mb-8"/>
      <p className="text-slate-700 leading-relaxed whitespace-pre-line">
        {work.content}
      </p>
    </main>
  );
}
