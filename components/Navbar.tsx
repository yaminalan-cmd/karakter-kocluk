export default function Navbar() {
  const menus = [
    { title: "Ana Sayfa", href: "#home" },
    { title: "Karakter Koçluk", href: "#features" },
    { title: "Hakkımda", href: "#about" },
    { title: "Eğitimler", href: "#services" },
    { title: "Başarılar", href: "#success" },
    { title: "Kitap Kulübü", href: "#books" },
    { title: "Yorumlar", href: "#testimonials" },
    { title: "İletişim", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <a
          href="#home"
          className="text-2xl font-black text-white transition hover:text-red-500"
        >
          Karakter Koçluk
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {menus.map((menu) => (
            <a
              key={menu.title}
              href={menu.href}
              className="text-sm font-medium text-white transition duration-300 hover:text-red-500"
            >
              {menu.title}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-xl bg-red-600 px-5 py-3 text-white transition hover:bg-red-700"
        >
          Başvur
        </a>

      </div>
    </header>
  );
}