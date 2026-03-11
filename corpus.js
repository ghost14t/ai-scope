/**
 * AIScope — Reference Corpus
 * Geniş referans metin veritabanı — cosine similarity + feature matching için
 * 
 * AI metinleri: ChatGPT, Gemini, Claude tarafından üretilmiş
 * İnsan metinleri: Gerçek insanların yazdığı doğal metinler
 * 
 * Konular: Teknoloji, Sağlık, Eğitim, Çevre, Spor, Günlük hayat, Siyaset, Bilim, Yemek, Seyahat
 * Diller: TR, EN
 */

const CORPUS = {
  ai: [

    // ══════════════════════════════════════
    // TEKNOLOJİ — TR (AI)
    // ══════════════════════════════════════
    "Teknoloji, modern yaşamın birçok alanında önemli kolaylıklar sağlamaktadır. İletişim araçları sayesinde insanlar dünyanın farklı yerleriyle hızlı ve etkili bir şekilde bağlantı kurabilmektedir. Ayrıca sağlık, eğitim ve ulaşım gibi sektörlerde teknolojik gelişmeler verimliliği artırarak yaşam kalitesini yükseltmektedir. Bu nedenle teknoloji, bireylerin günlük hayatını daha düzenli, hızlı ve erişilebilir hâle getiren temel unsurlardan biri hâline gelmiştir.",
    "Modern teknoloji, bilgiye erişimi hızlandırarak eğitim ve iş süreçlerinde verimliliği en üst düzeye çıkarmıştır. İletişim araçlarındaki gelişmeler, coğrafi sınırları ortadan kaldırarak küresel etkileşimi anlık hale getirmiş ve toplumsal iş birliğini güçlendirmiştir. Ayrıca tıp, mühendislik ve yazılım gibi alanlardaki yenilikler, karmaşık problemlerin çözümünü kolaylaştırarak yaşam standartlarını sistematik bir şekilde yükseltmektedir.",
    "Teknoloji, insan yaşamının hemen her alanına entegre olarak günlük rutinleri dönüştürmektedir. Dijital platformlar aracılığıyla bilgiye erişim demokratikleşmiş, eğitim ve sağlık hizmetleri coğrafi kısıtlamalardan bağımsız hale gelmiştir. Öte yandan otomasyon sistemleri iş süreçlerindeki verimliliği artırırken insan odaklı yaratıcılığa daha fazla alan açmaktadır.",
    "Yapay zeka teknolojileri, modern yazılım geliştirme süreçlerini kökten değiştirerek insan yaratıcılığını dijital verimlilikle birleştiriyor. Bu bağlamda, makine öğrenmesi algoritmaları sayesinde veri analitiği optimizasyon süreçlerini daha sürdürülebilir hale getirmektedir. Sonuç olarak, dijital dönüşümün kritik bir rol oynadığı bu süreçte entegrasyon ve inovasyon vazgeçilmez unsurlar olmaktadır.",
    "Günümüzde yapay zeka, endüstriyel üretimden sağlık hizmetlerine kadar geniş bir yelpazede uygulanmaktadır. Bu teknolojik dönüşüm, iş gücü verimliliğini artırmakta ve insanların daha yaratıcı görevlere odaklanmasına olanak tanımaktadır. Bununla birlikte, yapay zekanın etik boyutları ve toplumsal etkileri de dikkatle değerlendirilmesi gereken önemli konular arasında yer almaktadır.",
    "Dijital dönüşüm süreci, kurumların rekabet avantajı elde edebilmesi için stratejik bir zorunluluk haline gelmiştir. Bulut bilişim, büyük veri analitiği ve nesnelerin interneti gibi teknolojiler, iş modellerini kökten yeniden şekillendirmektedir. Bu bağlamda, organizasyonların dijital yetkinliklerini geliştirmeleri sürdürülebilir büyüme açısından kritik bir öneme sahiptir.",

    // ══════════════════════════════════════
    // SAĞLIK — TR (AI)
    // ══════════════════════════════════════
    "Sağlıklı bir yaşam sürdürebilmek için düzenli egzersiz yapmak ve dengeli beslenmek son derece önemlidir. Bilimsel araştırmalar, günde en az 30 dakika orta yoğunlukta fiziksel aktivitenin kalp sağlığını olumlu yönde etkilediğini ortaya koymaktadır. Bunun yanı sıra, yeterli uyku almak ve stres yönetimi bireylerin genel sağlık durumunu iyileştiren temel faktörler arasında yer almaktadır.",
    "Günümüzde kronik hastalıkların önlenmesinde erken teşhis ve koruyucu sağlık uygulamaları kritik bir rol oynamaktadır. Tıbbi teknolojilerdeki ilerlemeler, tanı süreçlerini hızlandırarak tedavi etkinliğini artırmaktadır. Bu nedenle, bireylerin düzenli sağlık kontrollerine gitmesi ve sağlıklı yaşam alışkanlıkları edinmesi büyük önem taşımaktadır.",
    "Mental sağlık, bireyin genel refahı açısından fiziksel sağlık kadar önemli bir unsurdur. Psikolojik dayanıklılığın geliştirilmesi, stresle başa çıkma kapasitesini artırmakta ve yaşam kalitesini yükseltmektedir. Bu bağlamda, profesyonel destek almak ve sosyal bağları güçlendirmek mental sağlığın korunmasında etkili stratejiler olarak öne çıkmaktadır.",

    // ══════════════════════════════════════
    // EĞİTİM — TR (AI)
    // ══════════════════════════════════════
    "Eğitim, bireylerin topluma katkı sağlayabilmeleri için gerekli bilgi ve becerileri kazandıran temel bir süreçtir. Kaliteli eğitime erişim, sosyal eşitsizliklerin azaltılmasında ve ekonomik kalkınmanın sağlanmasında belirleyici bir rol oynamaktadır. Bu nedenle, eğitim sistemlerinin sürekli olarak güncellenmesi ve geliştirilmesi toplumsal ilerleme açısından büyük önem taşımaktadır.",
    "Uzaktan eğitim modelleri, pandemi süreciyle birlikte hız kazanmış ve geleneksel eğitim anlayışını köklü biçimde dönüştürmüştür. Dijital öğrenme platformları, öğrencilere zaman ve mekândan bağımsız olarak kaliteli içeriklere erişme imkânı sunmaktadır. Bununla birlikte, dijital uçurumun giderilmesi ve etkileşimli öğrenme ortamlarının oluşturulması eğitimde fırsat eşitliği açısından kritik öneme sahiptir.",
    "Eleştirel düşünme becerisinin geliştirilmesi, modern eğitim sistemlerinin öncelikli hedefleri arasında yer almaktadır. Öğrencilerin bilgiyi sorgulamaları, analiz etmeleri ve sentezlemeleri, 21. yüzyıl iş gücünün gerektirdiği yetkinliklerin temelini oluşturmaktadır. Bu doğrultuda, eğitim kurumlarının müfredatlarını bu becerileri destekleyecek şekilde yeniden yapılandırmaları gerekmektedir.",

    // ══════════════════════════════════════
    // ÇEVRE — TR (AI)
    // ══════════════════════════════════════
    "İklim değişikliği, günümüzün en acil küresel sorunlarından biri olarak kabul edilmektedir. Sera gazı emisyonlarının azaltılması ve yenilenebilir enerji kaynaklarına geçişin hızlandırılması, sürdürülebilir bir gelecek için zorunlu adımlar arasında yer almaktadır. Bu bağlamda, bireysel ve kurumsal düzeyde çevre bilincinin artırılması büyük önem taşımaktadır.",
    "Biyoçeşitlilik kaybı, ekosistem dengelerini tehdit eden ve uzun vadeli sonuçları olan ciddi bir çevre sorunudur. Doğal habitatların korunması ve sürdürülebilir arazi kullanım politikalarının hayata geçirilmesi bu sorunun çözümünde kritik rol oynamaktadır. Uluslararası iş birliği ve güçlü çevre politikaları, biyoçeşitliliğin korunması açısından vazgeçilmez unsurlardır.",
    "Sürdürülebilir kalkınma, ekonomik büyüme ile çevresel koruma arasında denge kurulmasını hedefleyen bütüncül bir yaklaşımı temsil etmektedir. Döngüsel ekonomi modelleri, atık üretimini minimuma indirerek kaynakların verimli kullanılmasına katkı sağlamaktadır. Bu nedenle, hem kamu hem de özel sektörün sürdürülebilir iş uygulamalarını benimsemesi giderek daha kritik bir hal almaktadır.",

    // ══════════════════════════════════════
    // SPOR — TR (AI)
    // ══════════════════════════════════════
    "Düzenli spor yapmanın hem fiziksel hem de zihinsel sağlık üzerinde olumlu etkileri bilimsel çalışmalarla kanıtlanmıştır. Aerobik egzersizler kardiyovasküler sistemi güçlendirirken direnç antrenmanları kas kütlesini artırmakta ve kemik yoğunluğunu korumaktadır. Bunun yanı sıra, spor aktiviteleri stres hormonlarının azaltılmasına ve genel ruh halinin iyileştirilmesine önemli katkılar sağlamaktadır.",
    "Profesyonel sporcuların performans geliştirme sürecinde spor bilimleri ve teknolojisinden giderek daha fazla yararlanıldığı görülmektedir. Biyometrik veri analizi, kişiselleştirilmiş antrenman programları ve beslenme optimizasyonu modern sporun ayrılmaz parçaları haline gelmiştir. Bu gelişmeler, elit atletlerin performans sınırlarını sürekli olarak zorlamasına olanak tanımaktadır.",


    // ══════════════════════════════════════
    // ChatGPT — TR (5 konu)
    // ══════════════════════════════════════
    "Çevre kirliliği, insan faaliyetleri sonucunda hava, su ve toprağın zarar görmesiyle ortaya çıkan önemli bir çevresel sorundur. Sanayi faaliyetleri, atıkların bilinçsizce doğaya bırakılması ve fosil yakıt kullanımı bu sorunun başlıca nedenleri arasında yer almaktadır. Çevre kirliliği hem doğal yaşamı hem de insan sağlığını olumsuz yönde etkilemektedir. Bu nedenle sürdürülebilir çevre politikaları geliştirmek ve bireysel çevre bilincini artırmak büyük önem taşımaktadır.",
    "Eğitim, bireylerin bilgi ve becerilerini geliştirerek toplumun ilerlemesine katkı sağlayan temel bir unsurdur. Nitelikli eğitim sayesinde bireyler eleştirel düşünme, problem çözme ve üretkenlik gibi önemli yetkinlikler kazanır. Aynı zamanda eğitim, toplumsal eşitliğin sağlanmasına ve ekonomik gelişmenin desteklenmesine yardımcı olur. Bu nedenle eğitim sisteminin güçlü ve erişilebilir olması her toplum için büyük önem taşır.",
    "Sağlıklı yaşam, bireylerin fiziksel ve zihinsel açıdan dengeli bir hayat sürmesini ifade eder. Dengeli beslenme, düzenli egzersiz ve yeterli uyku sağlıklı bir yaşamın temel unsurları arasında yer almaktadır. Ayrıca zararlı alışkanlıklardan uzak durmak ve düzenli sağlık kontrolleri yaptırmak da bireylerin yaşam kalitesini artırır. Sağlıklı bir yaşam tarzı, hem bireysel mutluluğu hem de toplum sağlığını olumlu yönde etkiler.",
    "Ekonomik kalkınma, bir ülkenin üretim kapasitesinin artması ve toplumun refah seviyesinin yükselmesi sürecini ifade eder. Sanayi, teknoloji ve eğitim alanındaki gelişmeler ekonomik kalkınmanın temel unsurlarındandır. Aynı zamanda istihdam olanaklarının artırılması ve kaynakların verimli kullanılması da bu süreci destekler. Sürdürülebilir ekonomik kalkınma, toplumun uzun vadeli refahı açısından büyük önem taşımaktadır.",
    "Gençler, toplumun geleceğini şekillendiren önemli bir kesimi oluşturmaktadır. Ancak işsizlik, eğitim fırsatlarına erişimde yaşanan eşitsizlikler ve sosyal baskılar gençlerin karşılaştığı başlıca sorunlar arasında yer almaktadır. Bu sorunlar gençlerin potansiyellerini tam olarak kullanmalarını zorlaştırabilmektedir. Bu nedenle gençlere yönelik destekleyici eğitim, istihdam ve sosyal politikaların geliştirilmesi büyük önem taşımaktadır.",

    // ══════════════════════════════════════
    // Gemini — TR (5 konu)
    // ══════════════════════════════════════
    "Endüstriyel faaliyetler ve kontrolsüz kaynak kullanımı, doğal ekosistemlerin dengesini bozarak küresel ölçekte biyolojik çeşitliliği tehdit etmektedir. Hava, su ve toprak kirliliği, yalnızca yerel bir sağlık sorunu olmaktan çıkıp iklim krizini derinleştiren temel çevresel unsurlar haline gelmiştir. Sürdürülebilir çevre politikalarının ivedilikle hayata geçirilmesi ve atık yönetimi süreçlerinin bilimsel yöntemlerle optimize edilmesi, gelecek nesillere yaşanabilir bir dünya bırakılması açısından kritik bir zorunluluktur.",
    "Eğitim, bireylerin bilişsel kapasitelerini geliştirerek toplumsal refahın ve demokratik değerlerin kökleşmesini sağlayan en temel yapı taşıdır. Nitelikli bir eğitim sistemi, yalnızca kuramsal bilgi aktarımıyla sınırlı kalmayıp; bireye eleştirel düşünme, problem çözme ve dijital okuryazarlık gibi modern çağın gerektirdiği yetkinlikleri kazandırır. Bilgi temelli küresel ekonomide rekabet edebilirliğin sürdürülmesi, ancak beşeri sermayeye yapılan nitelikli ve sürekli yatırımlarla mümkündür.",
    "Modern yaşamın beraberinde getirdiği hareketsiz alışkanlıklar, dengeli beslenme ve düzenli fiziksel aktivite prensiplerinin sistematik bir şekilde uygulanmasını her zamankinden daha önemli hale getirmiştir. Koruyucu sağlık hizmetlerinin bir parçası olan bilinçli yaşam tarzı seçimleri, kronik hastalık risklerini minimize ederek toplumun genel yaşam kalitesini ve beklenen yaşam süresini doğrudan yükseltmektedir.",
    "Ekonomik kalkınma; teknolojik inovasyon, gelir dağılımında adalet ve kurumsal şeffaflık gibi yapısal dönüşümleri içeren çok boyutlu bir ilerleme sürecidir. Sanayi üretiminde katma değeri yüksek ürünlere geçiş ve Ar-Ge yatırımları, ülkelerin küresel ticaret ağındaki konumunu güçlendirerek sürdürülebilir büyüme hedeflerine ulaşılmasını sağlar. Uzun vadeli ekonomik istikrar, güçlü bir altyapı ağı ile nitelikli iş gücü arasındaki sinerjinin doğru politikalarla desteklenmesine bağlıdır.",
    "Günümüz gençliği, hızlı değişen teknolojik iş gücü piyasasına uyum sağlama, eğitimden istihdama geçiş süreçleri ve dijital dezenformasyonun yarattığı psikososyal baskılar gibi karmaşık sorunlarla karşı karşıyadır. Bu zorlukların aşılması için gençlerin yeteneklerine uygun kariyer planlama mekanizmalarının oluşturulması ve karar alma süreçlerinde daha etkin rol almaları stratejik bir önem taşımaktadır.",


    // ══════════════════════════════════════
    // KOD — AI (Python)
    // ══════════════════════════════════════
    "# This function implements a comprehensive data processing pipeline\n# It ensures robust error handling and seamless integration\ndef process_data(input_data):\n    # Initialize the results list\n    processed_results = []\n    # Iterate through each element systematically\n    for item in input_data:\n        # Apply the transformation logic\n        transformed = item * 2\n        processed_results.append(transformed)\n    # Return the final processed results\n    return processed_results",
    "# This class manages user authentication with comprehensive security measures\nclass UserAuthManager:\n    def __init__(self, config):\n        # Initialize the authentication configuration\n        self.config = config\n        self.session_handler = SessionHandler()\n    \n    def authenticate_user(self, username, password):\n        # Validate the user credentials against the database\n        if not self._validate_credentials(username, password):\n            raise AuthenticationError('Invalid credentials provided')\n        # Generate and return a secure session token\n        return self.session_handler.create_token(username)",
    "// This function calculates the total price with tax\n// It handles edge cases and ensures accurate calculations\nfunction calculateTotalPrice(items, taxRate) {\n    // Initialize the subtotal\n    let subtotal = 0;\n    // Iterate through each item to calculate subtotal\n    items.forEach(item => {\n        subtotal += item.price * item.quantity;\n    });\n    // Apply the tax rate to get the final total\n    const total = subtotal * (1 + taxRate);\n    return total;\n}",


    // ══════════════════════════════════════
    // KOD — Gemini (Python - sorting)
    // ══════════════════════════════════════
    "from typing import List, Union\n\ndef sort_numbers_standard(numbers: List[Union[int, float]]) -> List[Union[int, float]]:\n    \"\"\"\n    Sorts a list of numbers in ascending order using Python built-in Timsort.\n    Args:\n        numbers: A list of integers or floats to be sorted.\n    Returns:\n        A new list containing the elements in ascending order.\n    \"\"\"\n    return sorted(numbers)",
    "def quick_sort(arr: List[float]) -> List[float]:\n    \"\"\"\n    Sorts a list of numbers using the Quick Sort algorithm.\n    Complexity:\n        - Average Case: O(n log n)\n        - Worst Case: O(n^2)\n    Args:\n        arr: The list of numbers (int or float) to sort.\n    Returns:\n        A sorted list of numbers.\n    \"\"\"\n    # Base case: lists with 0 or 1 element are already sorted\n    if len(arr) <= 1:\n        return arr\n    # Selecting the middle element as the pivot\n    pivot = arr[len(arr) // 2]\n    # Partitioning the list into three parts\n    left = [x for x in arr if x < pivot]\n    middle = [x for x in arr if x == pivot]\n    right = [x for x in arr if x > pivot]\n    # Recursively sort the partitions and combine\n    return quick_sort(left) + middle + quick_sort(right)",

    // ══════════════════════════════════════
    // KOD — ChatGPT (Python - sorting)
    // ══════════════════════════════════════
    "def sort_numbers(numbers):\n    \"\"\"\n    Sort a list of numbers in ascending order.\n    Parameters\n    ----------\n    numbers : list\n        A list containing numeric values (integers or floats).\n    Returns\n    -------\n    list\n        A new list with the numbers sorted in ascending order.\n    Example\n    -------\n    >>> sort_numbers([5, 2, 9, 1])\n    [1, 2, 5, 9]\n    \"\"\"\n    # Create a copy of the list to avoid modifying the original\n    sorted_list = numbers.copy()\n    # Sort the copied list\n    sorted_list.sort()\n    return sorted_list",

    // ══════════════════════════════════════
    // KOD — İnsan (Python/JS)
    // ══════════════════════════════════════
    "# TODO: bu fonksiyon hala bozuk, duzelt\ndef isle(veri):\n    sonuc = []\n    for x in veri:\n        # FIXME: neden 2 ile carpiyoruz bilmiyorum ama calisıyor\n        sonuc.append(x * 2)\n    print('tamam bitti')  # bunu sonra sil\n    return sonuc",
    "function hesapla(liste) {\n    var toplam = 0\n    // neden calismiyor??\n    for (var i = 0; i < liste.length; i++) {\n        toplam = toplam + liste[i]\n        console.log('simdi:', toplam) // debug\n    }\n    return toplam\n    // TODO: hatayi duzelt\n}",
    "def veri_cek(url):\n    # bilmiyorum bu dogru mu ama calisıyor\n    import requests\n    r = requests.get(url)\n    print(r.status_code) # bak bakalım\n    if r.status_code == 200:\n        return r.json()\n    else:\n        return None # FIXME daha iyi hata mesajı yaz",

    // ══════════════════════════════════════
    // TEKNOLOJİ — EN (AI)
    // ══════════════════════════════════════
    "Furthermore, it is important to note that artificial intelligence has become a comprehensive and robust solution for modern challenges. It is worth noting that AI systems leverage innovative technologies to facilitate seamless integration. In conclusion, one might argue that these cutting-edge paradigms represent a multifaceted approach to problem-solving, ensuring holistic outcomes for all stakeholders.",
    "Technology has revolutionized the way we interact with the world, providing unprecedented access to information and resources. The seamless integration of digital tools has facilitated communication across geographical boundaries, fostering global collaboration. Furthermore, advancements in artificial intelligence and machine learning continue to drive innovation across various sectors.",
    "The rapid advancement of digital technologies has fundamentally transformed the landscape of modern business operations. Organizations that leverage data-driven decision-making frameworks are better positioned to achieve sustainable competitive advantages. Moreover, the integration of cloud computing and artificial intelligence solutions enables companies to optimize their operational efficiency and enhance customer experiences.",
    "Artificial intelligence represents a transformative paradigm shift in how humanity approaches complex problem-solving. By leveraging sophisticated machine learning algorithms and neural network architectures, AI systems can process vast amounts of data to extract meaningful insights. It is worth noting that the ethical implications of these technologies require careful consideration to ensure responsible development and deployment.",

    // ══════════════════════════════════════
    // SAĞLIK — EN (AI)
    // ══════════════════════════════════════
    "Maintaining optimal health requires a comprehensive approach that encompasses regular physical activity, balanced nutrition, and adequate mental well-being. Scientific research has consistently demonstrated that individuals who engage in at least 150 minutes of moderate-intensity exercise per week experience significantly reduced risks of chronic diseases. Furthermore, the integration of preventive healthcare practices into daily routines is essential for long-term wellness.",
    "The global healthcare system faces unprecedented challenges due to aging populations and the increasing prevalence of chronic conditions. Innovative medical technologies, including precision medicine and AI-powered diagnostic tools, are revolutionizing patient care by enabling more accurate diagnoses and personalized treatment protocols. It is essential that healthcare providers embrace these advancements to improve patient outcomes and optimize resource allocation.",

    // ══════════════════════════════════════
    // EĞİTİM — EN (AI)
    // ══════════════════════════════════════
    "Education serves as the foundation upon which individuals build the knowledge and skills necessary to contribute meaningfully to society. The democratization of learning through digital platforms has created unprecedented opportunities for individuals regardless of geographic or socioeconomic barriers. Furthermore, the cultivation of critical thinking and problem-solving capabilities remains paramount in preparing students for the complexities of the modern workforce.",
    "The integration of technology in educational environments has fundamentally altered pedagogical approaches and learning outcomes. Adaptive learning systems that leverage artificial intelligence can personalize educational content to meet the unique needs of individual students. In conclusion, the effective implementation of these tools requires careful consideration of equity, accessibility, and the preservation of meaningful human interaction in the learning process.",

    // ══════════════════════════════════════
    // ÇEVRE — EN (AI)
    // ══════════════════════════════════════
    "Climate change represents one of the most pressing existential challenges facing humanity in the 21st century. The scientific consensus is unequivocal: anthropogenic greenhouse gas emissions are driving unprecedented changes in global temperature patterns, precipitation cycles, and sea levels. It is imperative that governments, corporations, and individuals collectively commit to ambitious emissions reduction targets to mitigate the most severe consequences.",
    "The transition to a sustainable, low-carbon economy necessitates a comprehensive reimagining of existing industrial systems and energy infrastructure. Renewable energy technologies such as solar photovoltaics and wind turbines have achieved remarkable cost reductions, making them increasingly competitive with fossil fuel alternatives. Furthermore, the implementation of circular economy principles can significantly reduce waste generation and resource consumption across various sectors.",

    // ══════════════════════════════════════
    // BİLİM — EN (AI)
    // ══════════════════════════════════════
    "The scientific method represents humanity's most reliable framework for understanding natural phenomena and generating verifiable knowledge. Through systematic observation, hypothesis formulation, and rigorous experimentation, scientists have made extraordinary advances that have transformed our understanding of the universe. It is worth noting that the collaborative nature of modern scientific inquiry accelerates the pace of discovery and ensures the robustness of findings.",
    "Quantum computing represents a paradigm-shifting technological development with the potential to revolutionize computational capabilities across numerous domains. By exploiting quantum mechanical phenomena such as superposition and entanglement, quantum computers can theoretically solve certain categories of problems exponentially faster than classical computing architectures. Furthermore, applications in cryptography, drug discovery, and optimization problems are particularly promising.",

    // ══════════════════════════════════════
    // YEMEK — TR (AI)
    // ══════════════════════════════════════
    "Akdeniz mutfağı, dengeli beslenme açısından dünya genelinde en sağlıklı diyetlerden biri olarak kabul edilmektedir. Zeytinyağı, taze sebzeler, baklagiller ve tam tahıllar bu mutfağın temel bileşenlerini oluşturmaktadır. Bilimsel araştırmalar, Akdeniz diyetinin kardiyovasküler hastalık riskini azalttığını ve genel yaşam süresini olumlu etkilediğini ortaya koymaktadır.",
    "Gastronomi, kültürel kimliğin en önemli yansımalarından biri olarak toplumların tarihsel ve coğrafi özelliklerini yansıtmaktadır. Geleneksel yemek tarifleri, nesiller boyu aktarılan kültürel mirasın somut bir ifadesi olarak değerlendirilmektedir. Bu bağlamda, gastronomi turizminin gelişimi, yerel ekonomilere önemli katkılar sağlarken kültürel çeşitliliğin korunmasına da destek olmaktadır.",

    // ══════════════════════════════════════
    // SEYAHAт — TR (AI)
    // ══════════════════════════════════════
    "Seyahat, bireylerin farklı kültürleri, coğrafyaları ve yaşam tarzlarını keşfetmelerine olanak tanıyan zenginleştirici bir deneyimdir. Kültürel etkileşim, hoşgörü ve empati gibi insani değerlerin geliştirilmesine önemli katkılar sağlamaktadır. Bunun yanı sıra, turizm sektörü birçok ülkede ekonomik kalkınmanın temel itici güçlerinden biri olarak öne çıkmaktadır.",
    "Sürdürülebilir turizm anlayışı, seyahat deneyimlerinin çevresel ve kültürel etkileri gözetilerek planlanmasını esas almaktadır. Yerel toplulukların kalkınmasına katkı sağlayan ve doğal kaynakları koruyan turizm modelleri giderek daha fazla önem kazanmaktadır. Bu bağlamda, sorumlu turizm pratiklerinin benimsenmesi hem gezginler hem de ev sahibi topluluklar açısından uzun vadeli faydalar sunmaktadır.",

    // ══════════════════════════════════════
    // SİYASET — TR (AI)
    // ══════════════════════════════════════
    "Demokratik yönetim sistemleri, vatandaşların siyasi kararlara katılımını güvence altına alan kurumsal mekanizmalara dayanmaktadır. Şeffaflık, hesap verebilirlik ve hukukun üstünlüğü ilkeleri, sağlıklı işleyen bir demokrasinin temel unsurlarını oluşturmaktadır. Bu bağlamda, sivil toplum örgütlerinin demokratik süreçlerdeki rolü giderek daha kritik bir boyut kazanmaktadır.",
    "Küreselleşme süreci, ulus-devletlerin egemenlik alanlarını ve politika yapım kapasitelerini köklü biçimde dönüştürmektedir. Uluslararası kurumlar ve çok taraflı anlaşmalar, sınır ötesi sorunların çözümünde artan bir önem taşımaktadır. Bununla birlikte, milliyetçi hareketlerin yükselişi ve korumacı politikaların yaygınlaşması küresel iş birliğini zorlaştıran faktörler olarak değerlendirilmektedir.",

    // ══════════════════════════════════════
    // TRAVEL — EN (AI)
    // ══════════════════════════════════════
    "Travel broadens one's perspective by exposing individuals to diverse cultures, traditions, and ways of life that differ significantly from their own experiences. The transformative potential of meaningful travel experiences contributes to the development of empathy, cultural sensitivity, and global citizenship. Furthermore, the tourism industry plays a vital role in economic development, particularly for communities in developing regions.",
    "Sustainable tourism practices have gained considerable momentum as travelers become increasingly conscious of their environmental and cultural impact. Responsible travel involves minimizing carbon footprints, supporting local economies, and respecting the cultural heritage of destinations. In conclusion, the adoption of sustainable tourism principles is essential for preserving the natural and cultural assets that make destinations appealing for future generations.",

  ],

  human: [

    // ══════════════════════════════════════
    // TEKNOLOJİ — TR (İnsan)
    // ══════════════════════════════════════
    "ya dün gece bunu düşünürken fark ettim, yapay zeka falan derken aslında biz ne yapıyoruz? yani bilmiyorum, hani bazen öyle şeyler var ya, anlatması zor. neyse idk, siz de böyle hissettiniz mi hiç",
    "teknoloji falan derken aslında telefona bağımlı oluyoruz işte. bilmiyorum ya, annem hep söylüyor bunu. ama haklı da bir yandan. eskiden insanlar daha mı mutluydu acaba lol",
    "bugün bi şey fark ettim, artık haritasız hiçbir yere gidemiyorum. yani gidebilirim de ama neden gideyim ki? google maps varken. bu teknoloji meselesi aslında ilginç bi şey",
    "yeni telefon aldım sonunda ama ya kardeşim 2 günde alıştım bittim. bi hafta önce çok heyecanlanmıştım, şimdi sıradan oldu. bu döngüden çıkamıyoruz galiba",
    "discord sunucumuzda bi tartışma çıktı dün, yapay zeka sanat mı üretiyor diye. bence hayır ama arkadaşlarım bana kızdı lol. neyse konu uzar",

    // ══════════════════════════════════════
    // SAĞLIK — TR (İnsan)
    // ══════════════════════════════════════
    "ya bugün spor salonuna gittim ilk kez, vay anasını ya. bacaklarım titredi 20 dakika sonra. nasıl insanlar saatlerce yapıyor anlayamıyorum ama devam edeceğim inşallah",
    "grip oldum yine bu sene de. her yıl aynı şey, hava soğuyunca ilk ben hasta oluyorum. annem çorba yaptı en azından, onun çorbası her şeye iyi geliyor gerçekten",
    "diyete başladım ama 3. günde pizza yedim hehe. neyse yarın yeniden başlıyorum, bu sefer gerçekten. bence sorun iradeyle değil alışkanlıklarla",
    "uyku düzenim mahvoldu tamamen. sabah 4e kadar telefona bakıyorum sonra öğlene kadar uyuyorum. bunu nasıl düzeltirim bilen var mı ciddi soruyorum",

    // ══════════════════════════════════════
    // EĞİTİM — TR (İnsan)
    // ══════════════════════════════════════
    "sınav dönemi başladı ve ben hala hiçbir şey çalışmadım. mantıken paniklemem lazım ama panikleyemiyorum bile artık. çok garip bir his bu",
    "öğretmenimiz bugün derste çok güzel bir şey anlattı, aklımda kaldı. tarih dersi aslında ama hayatla bağlantı kurdu, insanlar böyle öğretiyor olmalı",
    "üniversite sınavına girdiğimde çok umutluydum, şimdi ne okuyorum ne de çalışıyorum düzgün. bi ara her şey çok net görünüyordu, şimdi kafam karışık",
    "ödev yaparken youtube açtım sadece 5 dakika diye, 2 saat geçmiş. bu nasıl oluyor ya her seferinde aynı şey. irade denen şey nerede",

    // ══════════════════════════════════════
    // ÇEVRE — TR (İnsan)
    // ══════════════════════════════════════
    "dün plastik poşet almak zorunda kaldım markette çantamı unuttuğum için. kendimi çok kötü hissettim ama ne yapayım. küçük şeyler önemli diyorlar ama sistem değişmeden ne kadar etkili?",
    "köye gittik hafta sonu, orada hava bambaşka. şehirde bunu fark etmiyoruz bile. ama köyde de artık eskisi kadar orman yok, amcam söyledi. üzücü gerçekten",
    "iklim değişikliği duyuyoruz hep ama somut olarak ne yapıyoruz? ben de dahil. elektrikli araba alamıyorum, solar panel kuramıyorum. sistem bizi zorluyor sanki",

    // ══════════════════════════════════════
    // SPOR — TR (İnsan)
    // ══════════════════════════════════════
    "galatasaray dün berbat oynadı ya. hiç anlamıyorum bu takımı, iyi başlıyoruz sonra dağılıyoruz. maçı yarıda bıraktım izlemeyi, sinirlendim",
    "koşmaya başladım 2 haftadır. ilk gün 10 dakika koştum neredeyse öldüm. şimdi 20 dakika yapıyorum, küçük ilerleme ama gurur duydum açıkçası",
    "fitness influencerlarına bakıyorum instagram'da ve kendimi kötü hissediyorum hep. bu normal mi? onlar full zamanlı spor yapıyor biz de iş hayatında çalışıyoruz",

    // ══════════════════════════════════════
    // YEMEK — TR (İnsan)
    // ══════════════════════════════════════
    "annem bugün mantı yaptı, hayatımın en iyisiydi yeminle. tarif sordum vermedi tabii ki lol. 'gözle ölçüyorum' dedi. bu nesil böyle gidecek mi?",
    "yemek yapmayı öğrenmeye çalışıyorum ama her seferinde bi şey oluyor. dün makarna yaptım suyunu unutunca yapıştı. en azından yenebiliyordu neyse",
    "siparişte hep aynı yerleri açıyorum artık. yeni yer denesem ya berbat çıkacak diye korkuyorum ya da çok pahalı. bu döngüden çıkamıyorum",

    // ══════════════════════════════════════
    // SEYAHAт — TR (İnsan)
    // ══════════════════════════════════════
    "kapadokya'ya gittik geçen ay, çok güzeldi ama turistler çok fazlaydı. her yerde selfie çubuğu, kimse sadece bakamıyor artık. yine de tavsiye ederim",
    "seyahat etmek istiyorum ama para biriktirmek çok zor. herkes 'deneyim için harca' diyor, kolay söylüyorlar. bakalım nasıl olacak",
    "istanbul'da doğdum büyüdüm ama boğazı görmüşlüğüm yoktur düzgünce. yabancılar geliyor İstanbul'u geziyor biz hiç gitmiyoruz, garip",

    // ══════════════════════════════════════
    // GÜNLÜK HAYAT — TR (İnsan)
    // ══════════════════════════════════════
    "sabah kahvemi yapamadan işe gitmek zorunda kaldım, tüm gün berbat geçti. küçük alışkanlıklar ne kadar önemli insan fark etmiyor",
    "arkadaşımla küstüm, 3 haftadır konuşmuyoruz. kim önce yazacak meselesi oldu şimdi. saçmalık ama gurur işte, ikimiz de biliyoruz ama",
    "evde yalnız kalmak bazen çok güzel geliyor, bazen dayanılmaz. bugün ikincisi. ne yapacağımı bilemedim, bir dizi açtım kapattım, kitap açtım kapattım",
    "para konusunda çok kötüyüm. ay sonu oldu bitti yine. bütçe yapıyorum kağıt üstünde çok iyi görünüyor gerçek hayatta hiç tutmuyor",

    // ══════════════════════════════════════
    // TEKNOLOJİ — EN (Human)
    // ══════════════════════════════════════
    "honestly technology is just wild these days. like i cant imagine going back to not having google maps or just searching anything i want to know. its kinda scary how much we depend on it tbh",
    "idk man technology is cool and all but sometimes i just wanna put my phone down you know? like yeah its useful but also its kinda taking over everything lol. my grandma doesnt even know how to use whatsapp still",
    "got a new laptop today and spent 3 hours setting it up instead of actually doing work lol. the irony of technology supposed to save time",
    "my phone battery dies at 2pm every day now. this thing is only 2 years old. planned obsolescence is so real and it makes me so mad",

    // ══════════════════════════════════════
    // SAĞLIK — EN (Human)
    // ══════════════════════════════════════
    "went to the gym for the first time in months today. thought i was gonna die after 15 minutes on the treadmill. the guy next to me was running for like an hour straight. how",
    "i always say im gonna start eating healthy monday and then monday comes and goes. its tuesday now. maybe next monday",
    "been having headaches for a week and instead of going to a doctor im just googling symptoms which is making it worse obviously. why do i do this",
    "slept 10 hours last night and still tired. how does that even work. sleep is supposed to fix things",

    // ══════════════════════════════════════
    // EĞİTİM — EN (Human)
    // ══════════════════════════════════════
    "studying for exams and its going terribly. i understand everything in class but the moment i sit down alone nothing makes sense anymore",
    "my professor just assigned a 20 page paper due in 5 days. like cool thanks for the heads up. already stressed",
    "watched a 3 hour youtube documentary instead of studying. technically i learned something so it counts right",
    "dropped a class today. feel guilty but also relieved. college is so weird",

    // ══════════════════════════════════════
    // ÇEVRE — EN (Human)
    // ══════════════════════════════════════
    "tried to be more eco friendly this week. brought my reusable bag to the grocery store and felt unreasonably proud of myself",
    "its so hot outside and people still deny climate change. like its literally happening outside right now. wild",
    "saw a video of a turtle with a plastic straw in its nose again. i know its an old video but it still makes me feel horrible every time",

    // ══════════════════════════════════════
    // GÜNLÜK HAYAT — EN (Human)
    // ══════════════════════════════════════
    "made coffee this morning and immediately knocked it over. that was it. that was my sign that today wasnt gonna be my day",
    "cant believe i have to wake up at 7am tomorrow. the audacity of monday to just show up every week like that",
    "accidentally liked a photo from 3 years ago while stalking someones instagram. deleted the app. moving to another country",
    "ordered food and it arrived cold. didnt say anything because i was too tired to deal with it. just ate it cold. this is fine",
    "spent 45 minutes looking for my keys and they were in my hand the whole time. im fine everything is fine",

  ]
};

// ══════════════════════════════════════════════════════════
// CORPUS SIMILARITY ENGINE
// ══════════════════════════════════════════════════════════

/**
 * Tokenize text into word frequency map (TF).
 */
function getTermFreq(text) {
  const words = (text.toLowerCase().match(/[a-zA-ZÀ-öø-ÿ\u011e\u011f\u0130\u0131\u015e\u015f\u00c7\u00e7]{2,}/g) || []);
  const freq = {};
  words.forEach(w => freq[w] = (freq[w] || 0) + 1);
  return freq;
}

/**
 * Cosine similarity between two TF maps.
 */
function cosineSim(a, b) {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  let dot = 0, magA = 0, magB = 0;
  keys.forEach(k => {
    const va = a[k] || 0, vb = b[k] || 0;
    dot  += va * vb;
    magA += va * va;
    magB += vb * vb;
  });
  if (magA === 0 || magB === 0) return 0;
  return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}

/**
 * Max similarity (best match) instead of average — more robust.
 */
function maxSim(inputFreq, refs) {
  if (refs.length === 0) return 0;
  return Math.max(...refs.map(r => cosineSim(inputFreq, getTermFreq(r))));
}

/**
 * Corpus-based similarity score.
 * Returns { isAI, corpusConf, aiSim, humanSim }
 */
function corpusSimilarity(text) {
  const freq    = getTermFreq(text);
  const aiSim   = maxSim(freq, CORPUS.ai);
  const humSim  = maxSim(freq, CORPUS.human);
  const total   = aiSim + humSim;
  if (total < 0.001) return { isAI: null, corpusConf: 0, aiSim, humSim };
  const isAI       = aiSim > humSim;
  const diff        = Math.abs(aiSim - humSim) / total;
  const corpusConf  = diff * 0.55; // max 0.55 contribution
  return { isAI, corpusConf, aiSim, humSim };
}
