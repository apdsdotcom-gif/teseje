
const posts=[
  {
    slug:'build-motion-tips',
    title:'Build Motion Tips',
    desc:'Kumpulan tips motion yang fun dan nyaman.',
    img:'/images/blog-1.png'
  },
  {
    slug:'mencari-style-visual-sendiri',
    title:'Mencari Style Visual Sendiri',
    desc:'Catatan eksplorasi style visual personal.',
    img:'/images/blog-2.png'
  },
  {
    slug:'tentang-warna-dan-mood',
    title:'Tentang Warna & Mood',
    desc:'Bagaimana warna membantu membangun suasana.',
    img:'/images/blog-3.png'
  }
];

export default function Page(){
  return(
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-3">Blogs & Artikel</h1>
      <p className="text-slate-600 mb-10">Tulisan, catatan, atau ide yang pernah aku buat.</p>

      <div className="grid md:grid-cols-3 gap-6">
        {posts.map(post=>(
          <a key={post.slug} href={`/blogs/${post.slug}`} className="bg-white rounded-2xl shadow hover:-translate-y-1 transition card-hover block">
            <img src={post.img} className="rounded-t-2xl"/>
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-1">{post.title}</h2>
              <p className="text-slate-600 text-sm">{post.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
