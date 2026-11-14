import type { BaseDictionary } from "./types";

export const tr: BaseDictionary = {
  meta: {
    title: "{app} – iPhone için Köpek Bakımı, Eğitim ve Anılar",
    description:
      "{app}, köpeğinle ilgili her şeyi tek yerde toplar: aşı planı ve hatırlatmalar, günlük kayıt ve tuvalet zamanlayıcısı, harcamalar, her yaşa uygun eğitim, fotoğraf anıları ve Apple Intelligence ile yanıtlar. Gizli, iPhone'unda.",
  },
  nav: {
    features: "Özellikler",
    care: "Bakım",
    memories: "Anılar",
    pro: "PRO",
    privacy: "Gizlilik",
    faq: "SSS",
    download: "İndir",
    comingSoon: "Çok yakında",
    language: "Dil",
    menu: "Menü",
    skip: "İçeriğe geç",
  },
  appStore: { small: "App Store'dan", large: "İndir", soonSmall: "Çok yakında", soonLarge: "App Store'da" },
  footer: {
    tagline: "Köpeğinle ilgili her şey, iPhone için sakin ve gizli tek bir uygulamada; ona bakan herkesle paylaşılır.",
    product: "Ürün",
    legal: "Yasal",
    privacy: "Gizlilik Politikası",
    terms: "Kullanım Koşulları",
    support: "Destek",
    rights: "Tüm hakları saklıdır.",
    trademarks: "Apple, iPhone, iCloud, AirTag, Bul, Apple Intelligence, Image Playground ve App Store, Apple Inc.'in ticari markalarıdır.",
  },
  legal: {
    updated: "Son güncelleme: 14 Kasım 2026",
    back: "Ana sayfaya dön",
    privacyTitle: "Gizlilik Politikası",
    privacyIntro:
      "Bu politika, {developer} tarafından geliştirilen iPhone uygulaması {app}'nin (“{app}”, “uygulama”) bilgilerini nasıl işlediğini açıklar. Kısacası: köpeğin hakkında girdiğin her şey, fotoğrafları dahil, iPhone'unda kalır. Uygulamada hesap, reklam ve analiz yoktur; geliştiricinin bir sunucusu yoktur. Bilgiler cihazından yalnızca iCloud yedeklemeyi veya aile paylaşımını seçersen (kendi iCloud'unda saklanır), {app} PRO satın alımlarında ve uygulama bir yerin adını Apple Haritalar'a sorduğunda çıkar.",
    privacySections: [
      {
        title: "1. Topladığımız veriler",
        paragraphs: [
          "Geliştirici hiçbir verini toplamaz veya almaz. {app}'de kullanıcı hesabı, reklam, analiz veya izleme yoktur. Köpeğinin profili, sağlık kayıtları, günlük kayıtları, harcamaları, eğitim ilerlemesi ve fotoğrafları iPhone'undaki bir veritabanında saklanır.",
          "Uygulamada yalnızca bir üçüncü taraf bileşen vardır: yalnızca {app} PRO satın alımlarını yönetmek için kullanılan RevenueCat (bölüm 7). Köpeğinle ilgili bilgileri veya fotoğrafları asla almaz.",
        ],
      },
      {
        title: "2. Fotoğraflar, kamera ve konum",
        paragraphs: [
          "Arşivinden eklediğin veya uygulama içi kamerayla çektiğin fotoğraflar {app} tarafından iPhone'unda saklanır. Bir fotoğraf eklediğinde uygulama, anı defterinin ne zaman ve nerede çekildiğini gösterebilmesi için fotoğrafta kayıtlı tarihi ve yeri okur.",
          "Uygulamada fotoğraf çektiğinde {app}, fotoğrafın nerede çekildiğini hatırlamak için yalnızca uygulamayı kullanırken bir kez konumunu ister. Konumu bir yer adına (ör. bir ilçe) çevirmek için Apple Haritalar'a sorar; bu istek Apple'ın gizlilik politikasına göre Apple tarafından işlenir. Konum başka hiçbir zaman kullanılmaz.",
          "Arka plan silme, fotoğraf iyileştirme ve filtreler iPhone'unda çalışır. Image Playground çizimleri Apple tarafından cihazında oluşturulur.",
        ],
      },
      {
        title: "3. Pawly'ye Sor ve Apple Intelligence",
        paragraphs: [
          "Apple Intelligence destekleyen iPhone'larda Pawly'ye Sor yanıtları, kurulumdan sonraki karşılama notu ve anı defteri bölümlerinin alt başlıkları Apple'ın cihaz üzerindeki modeli tarafından yazılır. Soruların ve köpeğinin bilgileri iPhone'unda işlenir; geliştiriciye veya başka birine gönderilmez.",
          "Yanıtlar genel bilgidir, hatalı olabilir ve veteriner tavsiyesi değildir.",
        ],
      },
      {
        title: "4. iCloud yedekleme",
        paragraphs: [
          "iCloud yedekleme, kurulumda veya Ayarlar › Aile ve iCloud'da açana kadar kapalıdır. Açıkken verilerin Apple'ın CloudKit'i aracılığıyla özel iCloud veritabanına yansıtılır; bu, kendi cihazlarını da eşitler. Bu verileri yalnızca sen okuyabilirsin; geliştirici okuyamaz. Kapattığında her şey iPhone'unda kalır ve eşitleme durur. iCloud, Apple'ın gizlilik politikasına tabidir.",
        ],
      },
      {
        title: "5. Aile paylaşımı",
        paragraphs: [
          "Aile paylaşımı isteğe bağlıdır ve iCloud yedekleme gerektirir. Birilerini davet ettiğinde ailendeki köpekler ve tüm kayıtları ile fotoğrafları, Apple'ın iCloud paylaşımı aracılığıyla davet ettiğin kişilerle paylaşılır. Bu kişiler kayıtları görebilir ve değiştirebilir; onların girdikleri de sende görünür. Uygulamaya yazdığın ad, girdiğin kayıtların yanında gösterilir.",
          "Kimin davet edileceğine sen karar verirsin ve kişileri istediğin zaman Ayarlar › Aile ve iCloud'dan çıkarabilirsin. Bir aileden ayrılan kişinin iPhone'undan o ailenin verileri silinir.",
        ],
      },
      {
        title: "6. Bildirimler ve AirTag",
        paragraphs: [
          "Aşı, tedavi ve tuvalet molası hatırlatmaları, iPhone'unda planlanan yerel bildirimlerdir. {app} bir AirTag'in konumunu okumaz: Apple'ın Bul uygulamasını açar, konumu orada görürsün.",
        ],
      },
      {
        title: "7. Satın alımlar ve RevenueCat",
        paragraphs: [
          "{app} PRO, uygulama içi satın alım olarak sunulur: otomatik yenilenen abonelik veya tek seferlik satın alım. Satın alımlar Apple Hesabın üzerinden Apple tarafından işlenir. Geliştirici ödeme bilgilerini asla almaz.",
          "PRO'nun etkin olup olmadığını bilmek için uygulama, üçüncü taraf bir satın alma SDK'sı olan RevenueCat'i kullanır. RevenueCat satın alma ve işlem bilgilerini ve anonim bir uygulama kullanıcı kimliğini alır. Adını, e-posta adresini, köpeğinin verilerini veya fotoğrafları almaz; reklam veya izleme için kullanılmaz. RevenueCat gizlilik politikası: https://www.revenuecat.com/privacy",
          "PRO'nun ücretsiz ilk haftası ödeme ve kayıt gerektirmez. Başladığı tarih iPhone'unda saklanır.",
        ],
      },
      {
        title: "8. Seçimlerin ve verilerini silme",
        paragraphs: [
          "Uygulamada istediğin kaydı, fotoğrafı veya köpeği silebilirsin. Uygulamayı silmek iPhone'undaki verileri kaldırır; iCloud'undaki veriler, Ayarlar › adın › iCloud'dan silene kadar kalır. Kamera, fotoğraf ve konum izinlerini Ayarlar uygulamasından istediğin zaman değiştirebilirsin. Abonelikler App Store hesap ayarlarından yönetilir ve iptal edilir.",
        ],
      },
      {
        title: "9. Çocuklar",
        paragraphs: ["{app} 13 yaşından küçük çocuklara yönelik değildir ve onlardan bilerek kişisel veri toplamaz."],
      },
      {
        title: "10. Değişiklikler ve iletişim",
        paragraphs: ["Bu politika değişirse bu sayfayı ve yukarıdaki tarihi güncelleriz. Sorun mu var? {email} adresine yaz."],
      },
    ],
    termsTitle: "Kullanım Koşulları",
    termsIntro: "{app}, Apple'ın Standart Lisanslı Uygulama Son Kullanıcı Lisans Sözleşmesi (EULA) ve aşağıdaki koşullar kapsamında sana lisanslanır.",
    termsSections: [
      {
        title: "1. Lisans",
        paragraphs: ["{app} kullanımın Apple'ın Standart EULA'sına tabidir: https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"],
      },
      {
        title: "2. {app} PRO, abonelikler ve satın alımlar",
        paragraphs: [
          "Bir köpeğin profili, hatırlatmalı aşı planı, günlük kayıt, harcamalar, ilk iki eğitim aşaması ve en fazla 30 fotoğraf ücretsizdir. {app} PRO; aile paylaşımı, Pawly'ye Sor, animasyonlu anı defteri, fotoğraf stüdyosu, birden fazla köpek, sınırsız fotoğraf, eğitim planının tamamı ve içgörüler ekler. Her yeni kurulumda PRO ilk hafta ücretsizdir; ödeme gerektirmez ve kendiliğinden ücretli plana dönüşmez.",
          "PRO; yıllık, 3 aylık, aylık veya haftalık otomatik yenilenen abonelik ya da tek seferlik ömür boyu satın alım olarak sunulur. Yeni kullanıcılar tek seferlik bir hoş geldin teklifi görebilir. Her planın fiyatı satın almadan önce uygulamada gösterilir; ödeme, onayladığında Apple Hesabından alınır.",
          "Abonelikler iptal edene kadar her dönemin sonunda otomatik olarak yenilenir. Sonraki dönem için ücretlendirilmemek için dönem bitmeden en az 24 saat önce App Store hesap ayarlarından iptal et. Uygulamayı silmek aboneliği iptal etmez. İadeler Apple tarafından yürütülür. Uygulamadaki Satın Alımları Geri Yükle, aynı Apple Hesabıyla giriş yapılmış bir cihazda PRO'yu geri getirir.",
        ],
      },
      {
        title: "3. Veteriner tavsiyesi değildir",
        paragraphs: [
          "{app}, köpeğinin bakımını düzenlemene yardım eder. Aşı planı yaygın bir takvimi izler ve veterinerin bunu değiştirebilir. Eğitim dersleri, yaşam evresi rehberi, tuvalet zamanlayıcısı ve Pawly'ye Sor yanıtları genel bilgidir ve hatalı olabilir. Uygulamadaki hiçbir şey veteriner tavsiyesi, teşhis veya tedavi değildir.",
          "Köpeğin rahatsız görünüyorsa, yaralandıysa veya zararlı bir şey yemiş olabilirse hemen bir veterinere başvur.",
        ],
      },
      {
        title: "4. Verilerin",
        paragraphs: [
          "Verilerin sana aittir ve iCloud yedeklemeyi veya aile paylaşımını açmadıkça iPhone'unda kalır. Ailene kimi davet ettiğinden sen sorumlusun. {app}'nin verileri nasıl işlediği Gizlilik Politikası'nda anlatılır.",
        ],
      },
      { title: "5. İletişim", paragraphs: ["Bu koşullarla ilgili sorular için: {email}."] },
    ],
  },
  support: {
    title: "Destek",
    intro: "Bir şey çalışmıyor mu, ya da {app}'yi daha iyi yapacak bir fikrin mi var? Duymak isteriz.",
    emailLabel: "Bize yaz",
    emailHint: "Bir sorun bildiriyorsan lütfen iPhone modelini ve iOS sürümünü ekle.",
    topics: [
      { title: "iCloud ile yedekle", text: "Ayarlar › Aile ve iCloud'u aç ve iCloud Yedekleme ve Eşitleme'yi aç. iPhone'unda iCloud'a giriş yapmış olman gerekir. Verilerin kendi özel iCloud'una gider." },
      { title: "Aileni davet et", text: "iCloud yedekleme açık ve {app} PRO etkinken Ayarlar › Aile ve iCloud › Aile Üyesi Davet Et'e dokun ve bağlantıyı gönder. Bağlantıyı iPhone'larında açtıklarında köpeklerin onların {app}'sinde de görünür." },
      { title: "Hatırlatmalar gelmiyor", text: "Ayarlar uygulaması › Bildirimler'den {app} için bildirimlere izin ver. Hatırlatmalar, Hatırlat seçeneği açık olan kayıtlar için üç gün önce ve günü geldiğinde gelir." },
      { title: "Pawly'ye Sor kullanılamıyor", text: "Pawly'ye Sor, Apple Intelligence destekleyen bir iPhone ve Ayarlar › Apple Intelligence ve Siri'de açık olan Apple Intelligence gerektirir. Diğer her şey desteklenen tüm iPhone'larda çalışır." },
      { title: "Arka plan silinmiyor", text: "Arka plan silme, köpeğin arka plandan net biçimde ayrıldığı fotoğraflarda en iyi sonucu verir. İşlem iPhone'unda yapılır, hiçbir şey yüklenmez." },
      { title: "AirTag'im nerede?", text: "Apple, uygulamaların AirTag konumunu okumasına izin vermiyor. Ana ekrandaki Bul'u Aç'a dokunarak köpeğinin AirTag'ini Bul uygulamasında gör; köpeğin kaybolursa Kayıp İlanı'nı kullan." },
      { title: "Satın alımları geri yükle", text: "{app}'de {app} PRO ekranını aç ve PRO'yu satın aldığın Apple Hesabıyla giriş yapmışken Satın Alımları Geri Yükle'ye dokun." },
      { title: "Aboneliği yönet veya iptal et", text: "Ayarlar uygulaması › adın › Abonelikler'i aç. Uygulamayı silmek aboneliği iptal etmez. İade için Apple ile iletişime geç." },
    ],
  },
};
