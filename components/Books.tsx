export default function Books() {
  const books = [
    "30 Kitap Meydan Okuması",
    "Kitap Okuma Takibi",
    "Okuduğunu Anlama Çalışmaları",
    "Paragraf Geliştirme",
  ];

  return (
    <section id="books" className="bg-slate-100 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="uppercase tracking-[5px] font-semibold text-red-600">
            KİTAP KULÜBÜ
          </p>

          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            Okuyan Öğrenci Kazanır
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Kitap okumak yalnızca Türkçe başarısını değil; dikkat, yorumlama,
            problem çözme ve akademik başarıyı da geliştirir.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          <div className="rounded-3xl bg-white p-10 shadow-lg">

            <h3 className="text-3xl font-bold text-slate-900">
              Neler Yapıyoruz?
            </h3>

            <ul className="mt-8 space-y-5">

              {books.map((book, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 text-lg text-slate-700"
                >
                  <span className="text-green-600 text-2xl">✔</span>
                  {book}
                </li>
              ))}

            </ul>

            <button className="mt-10 rounded-xl bg-red-600 px-6 py-3 text-white transition hover:bg-red-700">
              Kitap Listesini İncele
            </button>

          </div>

          <div className="flex items-center justify-center rounded-3xl border-2 border-dashed border-slate-300 bg-white p-10">

            <div className="text-center">

              <div className="text-7xl">📚</div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                2026 Yaz Tatili
              </h3>

              <p className="mt-4 text-slate-600">
                30 Kitap Meydan Okuması
              </p>

              <p className="mt-3 text-slate-500">
                (Poster daha sonra eklenecek.)
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}