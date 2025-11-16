
export default function Navbar(){
  const links=[['About','#about'],['Blogs','#blogs'],['Contact','#contact'],['Contribution','#contribution']];
  return(
    <nav className="w-full py-4 px-6 bg-[#f7f4eb]/80 backdrop-blur-sm flex justify-between items-center sticky top-0 z-40">
      <div className="flex items-center gap-2">
        <img src="/images/logo-apdsworks.png" className="w-9 h-9" />
        <span className="font-semibold text-lg">Apdsworks</span>
      </div>
      <div className="hidden md:flex gap-3">
        {links.map(([t,h])=>(
          <a key={h} href={h} className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md hover:-translate-y-0.5 transition card-hover">
            {t}
          </a>
        ))}
      </div>
    </nav>
  );
}
