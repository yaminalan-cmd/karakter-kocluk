export default function Testimonials() {
  const testimonials = [
    {
      name: "Elif K.",
      role: "LGS Öğrencisi",
      comment:
        "Paragraf sorularında sürekli süre problemi yaşıyordum. Bünyamin Hocamın öğrettiği tekniklerle hem hızlandım hem de netlerim belirgin şekilde arttı. Artık Türkçe denemelerini çok daha rahat yetiştiriyorum.",
    },
    {
      name: "Ahmet Y.",
      role: "7. Sınıf Öğrencisi",
      comment:
        "Türkçe dersini eskiden çok sıkıcı buluyordum. Dersler sayesinde kitap okumayı sevmeye başladım. Okuduğumu daha iyi anlıyor ve okul sınavlarında çok daha başarılı oluyorum.",
    },
    {
      name: "Zeynep A.",
      role: "Hızlı Okuma Eğitimi",
      comment:
        "Okuma hızım neredeyse iki katına çıktı. En önemlisi artık hızlı okurken anlam kaybı yaşamıyorum. Denemelerde bana büyük avantaj sağladı.",
    },
    {
      name: "Mustafa T.",
      role: "Paragraf Çalışmaları",
      comment:
        "Paragraf sorularına nereden başlayacağımı bilemezdim. Sistemli çalışmalar sayesinde soru köklerini daha iyi yorumlamaya başladım ve yanlışlarım ciddi şekilde azaldı.",
    },
    {
      name: "Ayşe D.",
      role: "YKS Öğrencisi",
      comment:
        "TYT Türkçe netlerim düzenli olarak yükseldi. Özellikle yeni nesil sorulara yaklaşım şeklim tamamen değişti. Sınav stresim bile azaldı.",
    },
    {
      name: "Merve G.",
      role: "LGS Velisi",
      comment:
        "Sadece akademik başarı değil, çocuğumun özgüveni de arttı. Düzenli takip edilmesi ve bizimle sürekli iletişim kurulması bizi çok memnun etti.",
    },
    {
      name: "Hasan E.",
      role: "İlkokul Velisi",
      comment:
        "Oğlum artık her gün kendi isteğiyle kitap okuyor. Okuma alışkanlığı kazandıktan sonra tüm derslerinde gözle görülür bir gelişim yaşadı. İyi ki yollarımız kesişmiş.",
    },
  ];

  return (
    <section id="testimonials" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="uppercase tracking-[5px] font-semibold text-red-600">
            YORUMLAR
          </p>

          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            Öğrenci ve Veli Görüşleri
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            En büyük referansımız öğrencilerimizin ve velilerimizin memnuniyetidir.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-2 hover:border-red-500 hover:shadow-xl"
            >
              <div className="text-yellow-500 text-2xl">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="mt-6 leading-8 italic text-slate-700">
                "{item.comment}"
              </p>

              <div className="mt-8 border-t border-slate-200 pt-5">
                <h3 className="text-xl font-bold text-slate-900">
                  {item.name}
                </h3>

                <p className="text-red-600 font-medium">
                  {item.role}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}