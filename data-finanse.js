const checklistDataFinanse = {
    Finanse: {
      podstawowy: [
        {
          title: "Ochrona danych osobowych",
          description: "Zapewnienie zgodności z RODO oraz wdrożenie polityki bezpieczeństwa danych.",
          moreInfo: "RODO wymaga odpowiedniego zarządzania danymi osobowymi. Szyfrowanie i polityki dostępu to kluczowe elementy ochrony danych. Źródło: [RODO](https://gdpr.eu).",
        },
        {
          title: "Dwuskładnikowe uwierzytelnianie (2FA)",
          description: "Wprowadzenie dwuskładnikowego uwierzytelniania dla systemów finansowych.",
          moreInfo: "2FA dodaje dodatkową warstwę bezpieczeństwa, minimalizując ryzyko nieautoryzowanego dostępu. Źródło: [NIST SP 800-63](https://pages.nist.gov/800-63-3/sp800-63-3.html).",
        },
        {
          title: "Zarządzanie dostępem",
          description: "Ograniczenie dostępu do systemów według zasady najmniejszych uprawnień.",
          moreInfo: "Ograniczenie dostępu minimalizuje ryzyko wewnętrznych zagrożeń. Źródło: [NIST SP 800-53](https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final).",
        },
        {
          title: "Szyfrowanie danych",
          description: "Szyfrowanie danych w tranzycie i w spoczynku.",
          moreInfo: "Szyfrowanie zmniejsza ryzyko przechwycenia danych. Źródło: [NIST SP 800-57](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-57p1r4.pdf).",
        },
        {
          title: "Polityka dostępu do danych finansowych",
          description: "Ustanowienie odpowiednich poziomów dostępu dla pracowników na różnych szczeblach.",
          moreInfo: "Polityka dostępu do danych minimalizuje możliwość nieautoryzowanego dostępu. Źródło: [CIS Controls](https://www.cisecurity.org/controls/).",
        },
        {
          title: "Audyt bezpieczeństwa",
          description: "Regularne przeprowadzanie audytów systemów finansowych.",
          moreInfo: "Audyt bezpieczeństwa pomaga wykrywać niezgodności i luki w zabezpieczeniach. Źródło: [NIST SP 800-115](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-115.pdf).",
        },
        {
          title: "Kopia zapasowa krytycznych danych",
          description: "Regularne tworzenie kopii zapasowych danych finansowych.",
          moreInfo: "Kopie zapasowe chronią dane przed ich utratą w wyniku awarii lub ataków ransomware. Źródło: [NIST SP 800-34](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-34r1.pdf).",
        },
        {
          title: "Monitorowanie operacji finansowych",
          description: "Ścisłe monitorowanie i audyt operacji finansowych.",
          moreInfo: "Monitorowanie operacji pozwala na szybkie wykrycie podejrzanych transakcji. Źródło: [MITRE ATT&CK](https://attack.mitre.org).",
        },
        {
          title: "Zarządzanie urządzeniami mobilnymi",
          description: "Implementacja polityki MDM (Mobile Device Management) dla urządzeń używanych do obsługi danych finansowych.",
          moreInfo: "MDM zapewnia kontrolę nad bezpieczeństwem danych finansowych na urządzeniach mobilnych. Źródło: [NIST SP 800-124](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-124r2.pdf).",
        },
        {
          title: "Szkolenia z zakresu ochrony danych finansowych",
          description: "Regularne szkolenia dla pracowników o zagrożeniach związanych z danymi finansowymi.",
          moreInfo: "Szkolenia pomagają zwiększyć świadomość zagrożeń i podnieść poziom bezpieczeństwa. Źródło: [ENISA](https://www.enisa.europa.eu).",
        },
      ],
      rozszerzony: [
        {
          title: "Inspekcja ruchu sieciowego",
          description: "Wdrożenie systemów IDS/IPS do monitorowania ruchu w sieci finansowej.",
          moreInfo: "IDS/IPS pomagają w wykrywaniu podejrzanych aktywności w sieci finansowej. Źródło: [MITRE ATT&CK](https://attack.mitre.org).",
        },
        {
          title: "Segmentacja sieci",
          description: "Podział sieci finansowej na różne segmenty.",
          moreInfo: "Segmentacja sieci zmniejsza ryzyko rozprzestrzeniania się ataków w ramach infrastruktury finansowej. Źródło: [NIST SP 800-53](https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final).",
        },
        {
          title: "Bezpieczeństwo chmury",
          description: "Stosowanie najlepszych praktyk w zakresie bezpieczeństwa danych w chmurze.",
          moreInfo: "Bezpieczeństwo danych finansowych w chmurze wymaga odpowiednich polityk i zabezpieczeń. Źródło: [CIS Controls Cloud](https://www.cisecurity.org/controls/cloud/).",
        },
        {
          title: "Testy penetracyjne",
          description: "Regularne przeprowadzanie testów penetracyjnych na infrastrukturze finansowej.",
          moreInfo: "Testy penetracyjne pomagają wykrywać słabości w systemach przed atakującymi. Źródło: [MITRE ATT&CK](https://attack.mitre.org).",
        },
        {
          title: "Zarządzanie tożsamością",
          description: "Implementacja systemów zarządzania tożsamością (IAM) w systemach finansowych.",
          moreInfo: "IAM pomaga w bezpiecznym zarządzaniu dostępem do danych finansowych. Źródło: [NIST SP 800-63](https://pages.nist.gov/800-63-3/sp800-63-3.html).",
        },
        {
          title: "Ochrona przed utratą danych (DLP)",
          description: "Wdrożenie systemów DLP w celu ochrony przed wyciekiem danych finansowych.",
          moreInfo: "DLP chroni poufne dane finansowe przed nieautoryzowanym dostępem i wyciekiem. Źródło: [NIST SP 800-53](https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final).",
        },
        {
          title: "Incident Response Plan",
          description: "Opracowanie i testowanie planów reagowania na incydenty związane z danymi finansowymi.",
          moreInfo: "Plany te pozwalają szybko reagować na incydenty związane z bezpieczeństwem danych finansowych. Źródło: [NIST SP 800-61](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf).",
        },
        {
          title: "System SIEM",
          description: "Wdrożenie systemu zarządzania informacjami i zdarzeniami bezpieczeństwa (SIEM).",
          moreInfo: "SIEM pozwala monitorować logi i zdarzenia, aby skuteczniej zarządzać incydentami bezpieczeństwa. Źródło: [CIS Controls](https://www.cisecurity.org/controls/).",
        },
        {
          title: "Bezpieczeństwo aplikacji finansowych",
          description: "Regularne audyty i testy bezpieczeństwa aplikacji finansowych.",
          moreInfo: "Audyt aplikacji finansowych pozwala na zidentyfikowanie luk w zabezpieczeniach. Źródło: [CIS Controls](https://www.cisecurity.org/controls/).",
        },
        {
          title: "Polityka backupu danych",
          description: "Ustanowienie i regularne testowanie polityki backupu dla systemów finansowych.",
          moreInfo: "Regularne testowanie polityki backupu zapewnia ciągłość działalności w przypadku awarii. Źródło: [NIST SP 800-34](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-34r1.pdf).",
        },
      ],
    },
  };
  