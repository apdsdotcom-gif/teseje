
export default function FAQ(){
  const f=[['Apa itu Apdsworks?','Brand kreatif.'],['Apa itu Kontribusi?','Karya.']];
  return(
    <section className="max-w-5xl mx-auto px-6 py-20 fade-up">
      <h2 className="text-3xl font-bold mb-8">FAQ</h2>
      {f.map(([q,a],i)=>(
        <div key={i} className="bg-white rounded-2xl shadow p-6 mb-4">
          <h3 className="font-semibold mb-2">{q}</h3>
          <p className="text-slate-600 text-sm">{a}</p>
        </div>
      ))}
    </section>
  );
}
