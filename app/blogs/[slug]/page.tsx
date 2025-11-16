
const posts={
  'build-motion-tips':{
    title:'Build Motion Tips',
    img:'/images/blog-1.png',
    desc:'Kumpulan tips motion yang fun dan nyaman.',
    content:'Konten lengkap artikel bisa kamu isi nanti. Untuk sekarang, ini hanya placeholder.'
  },
  'mencari-style-visual-sendiri':{
    title:'Mencari Style Visual Sendiri',
    img:'/images/blog-2.png',
    desc:'Catatan eksplorasi style visual personal.',
    content:'Di sini kamu bisa cerita tentang proses menemukan style visual kamu sendiri.'
  },
  'tentang-warna-dan-mood':{
    title:'Tentang Warna & Mood',
    img:'/images/blog-3.png',
    desc:'Bagaimana warna membantu membangun suasana.',
    content:'Bahas hubungan warna, emosi, dan desain di bagian ini.'
  }
};

export default function Page({params}){
  const post=posts[params.slug];
  if(!post){
    return(
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-bold mb-2">Artikel tidak ditemukan</h1>
        <p className="text-slate-600">Pastikan URL sudah benar.</p>
      </main>
    );
  }

  return(
    <main className="max-w-3xl mx-auto px-6 py-16">
      <p className="text-sm text-slate-500 mb-2">Blogs & Artikel · {params.slug}</p>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-slate-600 mb-6">{post.desc}</p>
      <img src={post.img} className="w-full rounded-2xl mb-8"/>
      <p className="text-slate-700 leading-relaxed whitespace-pre-line">
        {post.content}
      </p>
    </main>
  );
}
