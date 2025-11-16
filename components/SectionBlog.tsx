
export default function SectionBlog(){
  const items=[
    {img:'/images/blog-1.png',title:'Build Motion Tips',desc:'Kumpulan tips motion.',slug:'build-motion-tips'},
    {img:'/images/blog-2.png',title:'Mencari Style Visual Sendiri',desc:'Catatan eksplorasi style.',slug:'mencari-style-visual-sendiri'},
    {img:'/images/blog-3.png',title:'Tentang Warna & Mood',desc:'Peran warna dalam desain.',slug:'tentang-warna-dan-mood'}
  ];
  return(
    <section id="blogs" className="max-w-5xl mx-auto px-6 py-20 fade-up">
      <h2 className="text-3xl font-bold mb-2">Blog Terbaru</h2>
      <p className="text-slate-600 mb-10">Tulisan terbaru.</p>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item)=>(
          <a key={item.slug} href={`/blogs/${item.slug}`} className="bg-white rounded-2xl shadow hover:-translate-y-1 transition card-hover block">
            <img src={item.img} className="rounded-t-2xl"/>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <a href="/blogs" className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow card-hover">
          Lihat Semua Blog
        </a>
      </div>
    </section>
  );
}
