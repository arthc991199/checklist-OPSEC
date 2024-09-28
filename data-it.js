const checklistData = {
    IT: {
      podstawowy: [
        {
          title: "Zarządzanie hasłami",
          description: "Wdrożenie polityki silnych haseł, menedżer haseł, MFA.",
          moreInfo:
            "Słabe hasła to jedna z głównych przyczyn naruszeń danych. Wdrożenie polityki silnych haseł oraz używanie menedżera haseł może znacząco zmniejszyć ryzyko ataku. Źródło: [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework).",
        },
        {
          title: "Aktualizacje oprogramowania",
          description: "Regularne aktualizowanie systemów operacyjnych.",
          moreInfo:
            "Nieaktualne oprogramowanie stwarza luki bezpieczeństwa. Automatyczne aktualizacje zapewniają ciągłe zabezpieczenia. Źródło: [CIS Controls](https://www.cisecurity.org/controls/).",
        },
        {
          title: "Szkolenia OPSEC",
          description: "Regularne szkolenia z zakresu OPSEC dla pracowników.",
          moreInfo:
            "Szkolenia zwiększają świadomość w zakresie cyberzagrożeń. Źródło: [ENISA](https://www.enisa.europa.eu).",
        },
        {
          title: "Kopia zapasowa danych",
          description: "Regularne wykonywanie kopii zapasowych krytycznych danych.",
          moreInfo:
            "Kopie zapasowe chronią dane przed ich utratą w wyniku ataków ransomware lub awarii. Źródło: [NIST SP 800-34](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-34r1.pdf).",
        },
        {
          title: "Firewall",
          description: "Użycie zapór sieciowych w celu kontrolowania ruchu sieciowego.",
          moreInfo:
            "Firewalle ograniczają dostęp do nieautoryzowanych systemów i sieci. Źródło: [CIS Controls](https://www.cisecurity.org/controls/).",
        },
        {
          title: "Antywirus",
          description: "Instalacja i regularne aktualizowanie oprogramowania antywirusowego.",
          moreInfo:
            "Oprogramowanie antywirusowe pomaga w wykrywaniu i eliminacji złośliwego oprogramowania. Źródło: [NIST SP 800-83](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-83.pdf).",
        },
        {
          title: "Zarządzanie dostępem",
          description: "Ograniczenie dostępu do systemów według zasady najmniejszych uprawnień.",
          moreInfo:
            "Ograniczenie dostępu zmniejsza ryzyko wewnętrznych i zewnętrznych zagrożeń. Źródło: [NIST SP 800-53](https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final).",
        },
        {
          title: "Szyfrowanie danych",
          description: "Szyfrowanie danych w tranzycie i w spoczynku.",
          moreInfo:
            "Szyfrowanie zmniejsza ryzyko przechwycenia danych podczas ich przesyłania. Źródło: [NIST SP 800-57](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-57p1r4.pdf).",
        },
        {
          title: "Monitorowanie systemów",
          description: "Monitorowanie logów systemowych i aktywności w sieci.",
          moreInfo:
            "Monitorowanie pozwala na szybkie wykrycie i odpowiedź na incydenty bezpieczeństwa. Źródło: [MITRE ATT&CK](https://attack.mitre.org).",
        },
        {
          title: "Autoryzacja urządzeń",
          description: "Uwierzytelnianie i autoryzacja urządzeń w sieci.",
          moreInfo:
            "Ograniczenie dostępu do sieci tylko dla autoryzowanych urządzeń. Źródło: [NIST SP 800-124](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-124r2.pdf).",
        },
      ],
      rozszerzony: [
        {
          title: "Segmentacja sieci",
          description: "Podział sieci wewnętrznej na różne segmenty.",
          moreInfo:
            "Segmentacja sieci zmniejsza ryzyko rozprzestrzeniania się ataków. Źródło: [MITRE ATT&CK](https://attack.mitre.org).",
        },
        {
          title: "Zarządzanie urządzeniami mobilnymi",
          description: "Implementacja polityki zarządzania urządzeniami mobilnymi (MDM).",
          moreInfo:
            "MDM pomaga kontrolować i zabezpieczać dane na urządzeniach mobilnych. Źródło: [NIST SP 800-124](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-124r2.pdf).",
        },
        {
          title: "Inspekcja ruchu sieciowego",
          description: "Implementacja systemów wykrywania włamań (IDS).",
          moreInfo:
            "IDS pomaga w wykrywaniu i blokowaniu podejrzanych aktywności sieciowych. Źródło: [MITRE ATT&CK](https://attack.mitre.org).",
        },
        {
          title: "Bezpieczeństwo w chmurze",
          description: "Stosowanie najlepszych praktyk w zakresie bezpieczeństwa chmury.",
          moreInfo:
            "Bezpieczeństwo chmury wymaga odpowiednich mechanizmów zabezpieczających dane i usługi. Źródło: [CIS Controls Cloud](https://www.cisecurity.org/controls/cloud/).",
        },
        {
          title: "DLP (Ochrona przed utratą danych)",
          description: "Implementacja systemów DLP w celu ochrony przed wyciekiem danych.",
          moreInfo:
            "DLP pomaga zapobiegać wyciekom poufnych informacji. Źródło: [NIST SP 800-53](https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final).",
        },
        {
          title: "Testy penetracyjne",
          description: "Regularne przeprowadzanie testów penetracyjnych.",
          moreInfo:
            "Testy penetracyjne pomagają zidentyfikować słabości systemów przed atakującymi. Źródło: [MITRE ATT&CK](https://attack.mitre.org).",
        },
        {
          title: "Bezpieczeństwo aplikacji",
          description: "Przeprowadzanie regularnych audytów bezpieczeństwa aplikacji.",
          moreInfo:
            "Audyt bezpieczeństwa aplikacji pomaga w identyfikacji luk w zabezpieczeniach. Źródło: [CIS Controls](https://www.cisecurity.org/controls/).",
        },
        {
          title: "Zarządzanie tożsamością",
          description: "Implementacja systemów zarządzania tożsamością (IAM).",
          moreInfo:
            "IAM pomaga w zarządzaniu dostępem do systemów przez użytkowników. Źródło: [NIST SP 800-63](https://pages.nist.gov/800-63-3/sp800-63-3.html).",
        },
        {
          title: "Incident Response Plan",
          description: "Opracowanie i testowanie planów reagowania na incydenty.",
          moreInfo:
            "Plany te pomagają organizacjom szybko reagować na cyberzagrożenia. Źródło: [NIST SP 800-61](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf).",
        },
        {
          title: "SIEM",
          description: "Wdrożenie systemu zarządzania informacjami i zdarzeniami bezpieczeństwa (SIEM).",
          moreInfo:
            "SIEM pomaga w gromadzeniu i analizie logów z różnych źródeł, aby lepiej zarządzać incydentami. Źródło: [CIS Controls](https://www.cisecurity.org/controls/).",
        },
        
      ],
    },
  };
  