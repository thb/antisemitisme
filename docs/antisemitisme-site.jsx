import { useState, useEffect, useRef } from "react";

const COLORS = {
  bg: "#0C0B0D",
  surface: "#151419",
  surfaceHover: "#1C1B22",
  border: "#2A2833",
  text: "#E8E4ED",
  textMuted: "#9B95A6",
  accent: "#D4A853",
  accentDim: "#B8923A",
  mechanisms: "#C2713E",
  manifestations: "#5B8A72",
  history: "#7B6BA4",
  resources: "#4A7FA5",
  danger: "#A34444",
};

const CATEGORIES = {
  mechanisms: { label: "Mécanismes", color: COLORS.mechanisms, icon: "⚙" },
  manifestations: { label: "Manifestations", color: COLORS.manifestations, icon: "◉" },
  history: { label: "Histoire", color: COLORS.history, icon: "◷" },
  resources: { label: "Ressources", color: COLORS.resources, icon: "◈" },
};

const PAGES = {
  home: { title: "Comprendre l'antisémitisme", category: null },
  definition: { title: "Qu'est-ce que l'antisémitisme ?", category: null },

  mechanisms: { title: "Les mécanismes", category: "mechanisms", hub: true },
  obsession: { title: "L'obsession sélective", category: "mechanisms", subtitle: "Le deux poids, deux mesures appliqué à Israël" },
  controle: { title: "Le fantasme du contrôle", category: "mechanisms", subtitle: "Médias, finance, pouvoir : anatomie d'un mythe" },
  contradiction: { title: "L'accusation contradictoire", category: "mechanisms", subtitle: "Le piège logique parfait" },
  bouc: { title: "Le bouc émissaire structurel", category: "mechanisms", subtitle: "La mécanique girardienne du sacrifice" },
  memoire: { title: "La mémoire retournée", category: "mechanisms", subtitle: "Quand le souvenir de la Shoah devient une arme" },
  matrice: { title: "La matrice conspirationniste", category: "mechanisms", subtitle: "L'antisémitisme comme mère de tous les complots" },
  philosemitisme: { title: "Le philosémitisme toxique", category: "mechanisms", subtitle: "Quand l'admiration contient déjà l'accusation" },

  manifestations: { title: "Les manifestations", category: "manifestations", hub: true },
  quatre_ages: { title: "Les quatre âges", category: "history", subtitle: "Antique, chrétien, moderne, contemporain" },
  gauche: { title: "L'antisémitisme de gauche", category: "manifestations", subtitle: "Le préjugé qui se drape dans l'antisionisme" },
  sans_juifs: { title: "L'antisémitisme sans Juifs", category: "manifestations", subtitle: "Un système de pensée autonome" },
  exil: { title: "L'exil intérieur", category: "manifestations", subtitle: "Le coût invisible du passing" },
  exception: { title: "L'exception géopolitique", category: "manifestations", subtitle: "Le seul État dont l'existence fait débat" },
  canari: { title: "Le canari dans la mine", category: "manifestations", subtitle: "Un indicateur de santé démocratique" },
  sionisme: { title: "Le piège du mot sionisme", category: "manifestations", subtitle: "Un mot, trois définitions, une confusion volontaire" },

  resources: { title: "Ressources", category: "resources", hub: true },
};

const Tag = ({ color, children }) => (
  <span style={{
    display: "inline-block", padding: "3px 10px", borderRadius: "4px",
    background: color + "18", color, fontSize: "12px", fontWeight: 600,
    letterSpacing: "0.5px", textTransform: "uppercase", border: `1px solid ${color}30`,
  }}>{children}</span>
);

const Card = ({ page, pageKey, onClick }) => {
  const cat = page.category ? CATEGORIES[page.category] : null;
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={() => onClick(pageKey)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? COLORS.surfaceHover : COLORS.surface,
        border: `1px solid ${hovered ? (cat?.color || COLORS.accent) + "50" : COLORS.border}`,
        borderRadius: "8px", padding: "24px", cursor: "pointer",
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-2px)" : "none",
        boxShadow: hovered ? `0 8px 30px ${(cat?.color || COLORS.accent)}15` : "none",
      }}
    >
      {cat && <Tag color={cat.color}>{cat.label}</Tag>}
      <h3 style={{
        fontFamily: "'Playfair Display', Georgia, serif", fontSize: "20px",
        color: COLORS.text, margin: cat ? "12px 0 8px" : "0 0 8px",
        fontWeight: 700,
      }}>{page.title}</h3>
      {page.subtitle && (
        <p style={{ color: COLORS.textMuted, fontSize: "14px", lineHeight: 1.6, margin: 0 }}>
          {page.subtitle}
        </p>
      )}
      <div style={{
        marginTop: "16px", color: cat?.color || COLORS.accent,
        fontSize: "13px", fontWeight: 600, letterSpacing: "0.3px",
      }}>
        Explorer →
      </div>
    </div>
  );
};

const Quote = ({ text, author, source }) => (
  <div style={{
    borderLeft: `3px solid ${COLORS.accent}`,
    padding: "16px 24px", margin: "28px 0",
    background: COLORS.accent + "08", borderRadius: "0 6px 6px 0",
  }}>
    <p style={{
      fontFamily: "'Playfair Display', Georgia, serif",
      fontSize: "17px", fontStyle: "italic", color: COLORS.text,
      lineHeight: 1.7, margin: 0,
    }}>« {text} »</p>
    {author && (
      <p style={{ color: COLORS.textMuted, fontSize: "13px", marginTop: "10px", marginBottom: 0 }}>
        — {author}{source && `, ${source}`}
      </p>
    )}
  </div>
);

const KeyPoint = ({ color, title, children }) => (
  <div style={{
    background: (color || COLORS.accent) + "0A",
    border: `1px solid ${(color || COLORS.accent)}25`,
    borderRadius: "8px", padding: "20px 24px", margin: "20px 0",
  }}>
    {title && (
      <h4 style={{
        color: color || COLORS.accent, fontSize: "14px", fontWeight: 700,
        textTransform: "uppercase", letterSpacing: "0.8px", margin: "0 0 10px",
      }}>{title}</h4>
    )}
    <div style={{ color: COLORS.text, fontSize: "15px", lineHeight: 1.7 }}>{children}</div>
  </div>
);

const Pair = ({ left, right, leftTitle, rightTitle, leftColor, rightColor }) => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", margin: "24px 0" }}>
    <div style={{
      background: (leftColor || COLORS.danger) + "0C",
      border: `1px solid ${(leftColor || COLORS.danger)}25`,
      borderRadius: "8px", padding: "20px",
    }}>
      <h4 style={{ color: leftColor || COLORS.danger, fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.8px", margin: "0 0 10px" }}>{leftTitle}</h4>
      <p style={{ color: COLORS.text, fontSize: "14px", lineHeight: 1.7, margin: 0 }}>{left}</p>
    </div>
    <div style={{
      background: (rightColor || COLORS.manifestations) + "0C",
      border: `1px solid ${(rightColor || COLORS.manifestations)}25`,
      borderRadius: "8px", padding: "20px",
    }}>
      <h4 style={{ color: rightColor || COLORS.manifestations, fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.8px", margin: "0 0 10px" }}>{rightTitle}</h4>
      <p style={{ color: COLORS.text, fontSize: "14px", lineHeight: 1.7, margin: 0 }}>{right}</p>
    </div>
  </div>
);

const Section = ({ title, children }) => (
  <div style={{ margin: "40px 0" }}>
    <h2 style={{
      fontFamily: "'Playfair Display', Georgia, serif",
      fontSize: "26px", color: COLORS.text, fontWeight: 700,
      marginBottom: "20px", lineHeight: 1.3,
    }}>{title}</h2>
    {children}
  </div>
);

const P = ({ children }) => (
  <p style={{ color: COLORS.text, fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>{children}</p>
);

const Nav = ({ currentPage, navigate }) => {
  const [menuOpen, setMenuOpen] = useState(null);
  const mechPages = ["obsession","controle","contradiction","bouc","memoire","matrice","philosemitisme"];
  const manPages = ["quatre_ages","gauche","sans_juifs","exil","exception","canari","sionisme"];

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: COLORS.bg + "F0", backdropFilter: "blur(12px)",
      borderBottom: `1px solid ${COLORS.border}`,
      padding: "0 32px",
    }}>
      <div style={{
        maxWidth: "1100px", margin: "0 auto",
        display: "flex", alignItems: "center", height: "56px", gap: "32px",
      }}>
        <div
          onClick={() => navigate("home")}
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "16px", fontWeight: 700, color: COLORS.accent,
            cursor: "pointer", whiteSpace: "nowrap",
          }}
        >
          antisemitisme.guide
        </div>
        <div style={{ display: "flex", gap: "4px", alignItems: "center", fontSize: "14px" }}>
          <NavLink onClick={() => navigate("definition")} active={currentPage === "definition"}>
            Définition
          </NavLink>

          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setMenuOpen("mech")}
            onMouseLeave={() => setMenuOpen(null)}
          >
            <NavLink
              onClick={() => navigate("mechanisms")}
              active={currentPage === "mechanisms" || mechPages.includes(currentPage)}
              color={COLORS.mechanisms}
            >
              Mécanismes ▾
            </NavLink>
            {menuOpen === "mech" && (
              <Dropdown pages={mechPages} navigate={navigate} />
            )}
          </div>

          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setMenuOpen("man")}
            onMouseLeave={() => setMenuOpen(null)}
          >
            <NavLink
              onClick={() => navigate("manifestations")}
              active={currentPage === "manifestations" || manPages.includes(currentPage)}
              color={COLORS.manifestations}
            >
              Manifestations ▾
            </NavLink>
            {menuOpen === "man" && (
              <Dropdown pages={manPages} navigate={navigate} />
            )}
          </div>

          <NavLink onClick={() => navigate("resources")} active={currentPage === "resources"} color={COLORS.resources}>
            Ressources
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ children, onClick, active, color }) => {
  const [hovered, setHovered] = useState(false);
  const c = color || COLORS.accent;
  return (
    <span
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "8px 14px", borderRadius: "6px", cursor: "pointer",
        color: active ? c : hovered ? COLORS.text : COLORS.textMuted,
        background: active ? c + "15" : hovered ? COLORS.surfaceHover : "transparent",
        fontWeight: active ? 600 : 400, transition: "all 0.2s",
        whiteSpace: "nowrap",
      }}
    >{children}</span>
  );
};

const Dropdown = ({ pages, navigate }) => (
  <div style={{
    position: "absolute", top: "100%", left: 0,
    background: COLORS.surface, border: `1px solid ${COLORS.border}`,
    borderRadius: "8px", padding: "6px", minWidth: "280px",
    boxShadow: "0 12px 40px rgba(0,0,0,0.5)", zIndex: 200,
  }}>
    {pages.map(key => (
      <DropdownItem key={key} page={PAGES[key]} onClick={() => navigate(key)} />
    ))}
  </div>
);

const DropdownItem = ({ page, onClick }) => {
  const [h, setH] = useState(false);
  const cat = CATEGORIES[page.category];
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        padding: "10px 14px", borderRadius: "6px", cursor: "pointer",
        background: h ? COLORS.surfaceHover : "transparent",
        transition: "background 0.15s",
      }}
    >
      <div style={{ color: COLORS.text, fontSize: "14px", fontWeight: 600 }}>{page.title}</div>
      {page.subtitle && (
        <div style={{ color: COLORS.textMuted, fontSize: "12px", marginTop: "2px" }}>{page.subtitle}</div>
      )}
    </div>
  );
};

// ===== PAGE CONTENT =====

const HomePage = ({ navigate }) => (
  <div>
    <div style={{ textAlign: "center", padding: "80px 0 60px" }}>
      <p style={{
        color: COLORS.accent, fontSize: "13px", fontWeight: 600,
        letterSpacing: "3px", textTransform: "uppercase", marginBottom: "20px",
      }}>Guide complet</p>
      <h1 style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: "52px", fontWeight: 700, color: COLORS.text,
        lineHeight: 1.15, marginBottom: "24px",
        maxWidth: "700px", marginLeft: "auto", marginRight: "auto",
      }}>
        Comprendre<br/>l'antisémitisme
      </h1>
      <p style={{
        color: COLORS.textMuted, fontSize: "18px", lineHeight: 1.7,
        maxWidth: "600px", margin: "0 auto 40px",
      }}>
        Anatomie d'un système de pensée vieux de deux millénaires.
        Ses mécanismes, ses manifestations, ses mutations.
      </p>
      <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
        <Btn onClick={() => navigate("definition")} primary>Commencer</Btn>
        <Btn onClick={() => navigate("mechanisms")}>Les mécanismes</Btn>
      </div>
    </div>

    <div style={{ margin: "40px 0" }}>
      <SectionHeader color={COLORS.mechanisms} icon="⚙">Mécanismes</SectionHeader>
      <p style={{ color: COLORS.textMuted, fontSize: "15px", marginBottom: "24px" }}>
        Les engrenages structurels de l'antisémitisme — comment il fonctionne, indépendamment de l'époque.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
        {["obsession","controle","contradiction","bouc","memoire","matrice","philosemitisme"].map(k => (
          <Card key={k} pageKey={k} page={PAGES[k]} onClick={navigate} />
        ))}
      </div>
    </div>

    <div style={{ margin: "60px 0" }}>
      <SectionHeader color={COLORS.manifestations} icon="◉">Manifestations</SectionHeader>
      <p style={{ color: COLORS.textMuted, fontSize: "15px", marginBottom: "24px" }}>
        Comment l'antisémitisme se manifeste concrètement — dans l'histoire, la géopolitique, le quotidien.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
        {["quatre_ages","gauche","sans_juifs","exil","exception","canari","sionisme"].map(k => (
          <Card key={k} pageKey={k} page={PAGES[k]} onClick={navigate} />
        ))}
      </div>
    </div>

    <div style={{
      margin: "60px 0", padding: "40px",
      background: COLORS.accent + "08",
      border: `1px solid ${COLORS.accent}25`,
      borderRadius: "12px", textAlign: "center",
    }}>
      <h2 style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: "28px", color: COLORS.text, marginBottom: "16px",
      }}>Pourquoi ce guide ?</h2>
      <p style={{
        color: COLORS.textMuted, fontSize: "16px", lineHeight: 1.8,
        maxWidth: "600px", margin: "0 auto",
      }}>
        L'antisémitisme prospère dans le flou, l'implicite, le non-dit.
        Ce guide existe pour nommer les mécanismes, un par un, pièce par pièce,
        afin que la prochaine fois que quelqu'un dit « je ne suis pas antisémite, mais… »,
        on sache exactement quel engrenage vient de se mettre en marche.
      </p>
    </div>
  </div>
);

const SectionHeader = ({ color, icon, children }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
    <span style={{
      width: "32px", height: "32px", borderRadius: "8px",
      background: color + "20", display: "flex", alignItems: "center",
      justifyContent: "center", fontSize: "16px",
    }}>{icon}</span>
    <h2 style={{
      fontFamily: "'Playfair Display', Georgia, serif",
      fontSize: "28px", color: COLORS.text, margin: 0,
    }}>{children}</h2>
  </div>
);

const Btn = ({ children, onClick, primary }) => {
  const [h, setH] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        padding: "12px 28px", borderRadius: "8px", cursor: "pointer",
        fontSize: "15px", fontWeight: 600, border: "none",
        background: primary ? (h ? COLORS.accentDim : COLORS.accent) : (h ? COLORS.surfaceHover : COLORS.surface),
        color: primary ? COLORS.bg : COLORS.text,
        transition: "all 0.2s",
        boxShadow: primary && h ? `0 4px 20px ${COLORS.accent}40` : "none",
      }}
    >{children}</button>
  );
};

const DefinitionPage = () => (
  <PageLayout title="Qu'est-ce que l'antisémitisme ?" subtitle="Un système de pensée, pas un simple préjugé">
    <Section title="Ce que l'antisémitisme n'est pas">
      <P>Pour comprendre l'antisémitisme, il faut d'abord comprendre pourquoi les grilles de lecture habituelles du racisme échouent à le saisir.</P>
      <P>Le racisme classique — anti-Noirs, anti-Arabes, anti-Asiatiques — fonctionne sur un axe vertical descendant. Il attribue à sa cible une infériorité : intellectuelle, morale, civilisationnelle. Le raciste regarde sa victime de haut.</P>
      <P>L'antisémitisme fonctionne à l'envers. Il ne regarde pas le Juif de haut — il le regarde d'en bas, avec une terreur mêlée de fascination. Le Juif, dans l'imaginaire antisémite, n'est pas le sous-homme. Il est le sur-homme maléfique. Trop intelligent, trop riche, trop influent, trop organisé.</P>
      <Pair
        leftTitle="Racisme classique"
        left="Attribue une infériorité à sa cible. Le raciste regarde de haut. Le préjugé fonctionne sur le mépris."
        rightTitle="Antisémitisme"
        right="Attribue une supériorité maléfique. L'antisémite regarde d'en bas, avec terreur. Le préjugé fonctionne sur la paranoïa."
        leftColor="#8B6B6B"
        rightColor={COLORS.danger}
      />
    </Section>

    <Section title="Essai de définition">
      <KeyPoint color={COLORS.accent} title="Définition proposée">
        L'antisémitisme est un système de pensée qui attribue aux Juifs — en tant que groupe, réseau, peuple ou force abstraite — une puissance maléfique, cachée et coordonnée, responsable des malheurs du monde.
      </KeyPoint>
      <P>Ce qui le distingue de tout autre préjugé :</P>
      <KeyPoint color={COLORS.mechanisms} title="Supériorité maléfique">
        Là où le racisme ordinaire attribue une infériorité, l'antisémitisme attribue une supériorité dangereuse. Le Juif n'est pas méprisé — il est craint.
      </KeyPoint>
      <KeyPoint color={COLORS.manifestations} title="Transversalité totale">
        C'est le seul préjugé qui fonctionne dans toutes les idéologies : extrême droite, extrême gauche, islamisme, christianisme, laïcisme.
      </KeyPoint>
      <KeyPoint color={COLORS.history} title="Autonomie">
        Il ne nécessite pas la présence réelle de Juifs pour exister. C'est un système de pensée autonome, pas une réaction à une expérience vécue.
      </KeyPoint>
      <KeyPoint color={COLORS.resources} title="Protéiformisme">
        Il mute à chaque époque en empruntant le vocabulaire moral dominant : religion, science, droits de l'homme.
      </KeyPoint>
    </Section>

    <Section title="Un racisme sans race">
      <P>L'antisémitisme vise simultanément — et de manière contradictoire — une religion (le judaïsme, mais la plupart des Juifs visés ne sont pas pratiquants), une ethnie (mais les Juifs viennent de dizaines de pays), une culture (mais elle est multiple et hétérogène), une nation (Israël, mais l'antisémitisme précède Israël de deux millénaires), un « réseau » (mais cette accusation est elle-même un trope antisémite).</P>
      <P>On ne sait pas exactement ce qu'on déteste, mais on le déteste avec certitude. Cette imprécision est constitutive de l'antisémitisme. Elle le rend insaisissable, capable de se reformuler à l'infini.</P>
      <Quote
        text="L'antisémitisme n'est pas une opinion. Ce n'est même pas exactement un racisme. C'est une vision du monde — la plus ancienne, la plus adaptable, et la plus meurtrière que l'humanité ait produite."
      />
    </Section>
  </PageLayout>
);

const ObsessionPage = () => (
  <PageLayout title="L'obsession sélective" subtitle="Le deux poids, deux mesures appliqué à Israël" category="mechanisms">
    <Section title="Le focus disproportionné">
      <P>Le conflit israélo-palestinien est atroce. Les crimes de guerre documentés sont réels et condamnables. Mais l'intensité du regard mondial sur Israël est sans commune mesure avec celle portée sur d'autres conflits.</P>
      <P>La guerre au Yémen : plus de 150 000 morts. La guerre en Syrie : plus de 500 000 morts. Le conflit au Tigré, les Ouïghours, la RDC — autant de tragédies qui ne génèrent qu'une fraction de l'indignation consacrée à Israël.</P>
      <KeyPoint color={COLORS.mechanisms} title="La question qui dérange">
        Quand l'obsession sélective ne peut s'expliquer ni par le nombre de victimes, ni par la gravité des actes, ni par la proximité géographique, que reste-t-il comme explication ?
      </KeyPoint>
    </Section>
    <Section title="Le silence sélectif">
      <P>Quand les États-Unis bombardent des civils, la critique n'atteint jamais la même virulence. Quand la Russie rase Grozny, on ne demande pas à chaque Russe de se désolidariser de Poutine. Quand l'Arabie Saoudite bombarde le Yémen avec des armes occidentales, les manifestations sont inexistantes.</P>
      <P>Il ne s'agit pas de dire que critiquer Israël est antisémite. Il s'agit de se demander pourquoi ce pays est soumis à un standard que l'on n'applique à aucun autre.</P>
    </Section>
  </PageLayout>
);

const ControlePage = () => (
  <PageLayout title="Le fantasme du contrôle" subtitle="Médias, finance, pouvoir : anatomie d'un mythe" category="mechanisms">
    <Section title="Un mythe structurant">
      <P>L'accusation selon laquelle « les Juifs contrôlent tout » — banques, médias, politique — est le pilier central de l'antisémitisme moderne. Elle prend sa source dans les Protocoles des Sages de Sion, un faux fabriqué par la police secrète tsariste, et reste l'un des textes les plus diffusés au monde.</P>
    </Section>
    <Section title="Le biais de confirmation en action">
      <KeyPoint color={COLORS.mechanisms} title="De l'observation au complot">
        La réussite visible de certains individus juifs dans certains secteurs est réelle. Mais transformer une observation statistique en preuve d'un complot coordonné est précisément le mécanisme conspirationniste.
      </KeyPoint>
      <P>On ne dit pas « les Bretons contrôlent la marine » ou « les protestants contrôlent la finance suisse », même si des surreprésentations existent pour des raisons historiques évidentes.</P>
      <KeyPoint color={COLORS.history} title="L'explication historique">
        Exclus de la propriété terrienne pendant des siècles, les Juifs se sont tournés vers le commerce, la finance, les professions intellectuelles — les seuls métiers qu'on leur autorisait. Les punir aujourd'hui pour leur adaptation à l'exclusion est un paradoxe cruel.
      </KeyPoint>
      <KeyPoint color={COLORS.danger} title="Le mécanisme révélateur">
        Quand un individu juif réussit, sa judéité est mobilisée comme explication. Quand un non-juif réussit, son origine n'est jamais mentionnée. C'est la définition du biais de confirmation.
      </KeyPoint>
    </Section>
  </PageLayout>
);

const ContradictionPage = () => (
  <PageLayout title="L'accusation contradictoire" subtitle="Le piège logique parfait" category="mechanisms">
    <Section title="Le double bind systématique">
      <P>De tous les mécanismes de l'antisémitisme, celui-ci est le plus révélateur. Le Juif est systématiquement accusé d'une chose et de son contraire exact.</P>
      <Pair leftTitle="Accusation A" rightTitle="Accusation B" left="Communiste. Le Juif est le révolutionnaire qui veut détruire l'ordre établi (Marx)." right="Capitaliste. Le Juif est le banquier qui incarne et exploite cet ordre (Rothschild)." />
      <Pair leftTitle="Accusation A" rightTitle="Accusation B" left="Cosmopolite. Apatride sans racines, nomade qui corrompt les identités locales." right="Communautariste. Réseau fermé, endogame, solidaire exclusivement de ses semblables." />
      <Pair leftTitle="Accusation A" rightTitle="Accusation B" left="Trop assimilé. Il se cache, s'infiltre, se fait passer pour ce qu'il n'est pas." right="Pas assez intégré. Il refuse la République, vit en communauté, reste à part." />
      <Pair leftTitle="Accusation A" rightTitle="Accusation B" left="Trop puissant. Il contrôle les médias, la finance, les gouvernements." right="Toujours victime. Il se plaint sans cesse, instrumentalise la Shoah." />
    </Section>
    <Section title="Le test diagnostique">
      <KeyPoint color={COLORS.mechanisms} title="Règle">
        Quand quelqu'un attribue à un groupe deux caractéristiques mutuellement exclusives, ce n'est plus de la critique — c'est de la projection. Le groupe n'est plus décrit pour ce qu'il est, mais pour ce dont l'accusateur a besoin qu'il soit.
      </KeyPoint>
      <P>Aucun autre groupe ne subit cette double accusation systématique. C'est un marqueur diagnostique fiable de l'antisémitisme.</P>
    </Section>
  </PageLayout>
);

const BoucPage = () => (
  <PageLayout title="Le bouc émissaire structurel" subtitle="La mécanique girardienne du sacrifice" category="mechanisms">
    <Section title="La théorie de René Girard">
      <P>Pour Girard, toute société en crise a besoin d'un bouc émissaire — un groupe sur lequel décharger la violence collective pour restaurer l'unité. Le bouc émissaire idéal doit remplir deux conditions contradictoires : être suffisamment intégré pour être visible, et suffisamment différent pour être désignable comme « autre ».</P>
      <KeyPoint color={COLORS.history} title="La position structurelle des Juifs">
        Partout où ils vivent, les Juifs sont à la fois dedans et dehors. Intégrés mais identifiables. Proches mais distincts. Ils occupent la position parfaite du bouc émissaire girardien — produit de siècles d'exclusion partielle qui les a maintenus dans cet entre-deux.
      </KeyPoint>
    </Section>
    <Section title="Le refus simultané">
      <P>On refuse aux Juifs simultanément la singularité et l'universalité :</P>
      <Pair
        leftTitle="Refus de la singularité"
        left="« Votre souffrance n'est pas spéciale, d'autres ont souffert aussi. » « Arrêtez de vous plaindre. »"
        rightTitle="Refus de l'universalité"
        right="« Vous êtes un groupe à part, communautaire, qui ne s'intègre pas. » « Vous n'êtes pas comme nous. »"
        leftColor={COLORS.history}
        rightColor={COLORS.history}
      />
      <P>On leur refuse le droit à un État (« colonisateurs »), mais aussi le droit d'être apatrides (« retournez chez vous »). Où exactement ?</P>
    </Section>
  </PageLayout>
);

const MemoirePage = () => (
  <PageLayout title="La mémoire retournée" subtitle="Quand le souvenir de la Shoah devient une arme" category="mechanisms">
    <Section title="Le paradoxe de la commémoration">
      <P>La Shoah est le génocide le mieux documenté, le plus enseigné de l'histoire. Ce fait, paradoxalement, est devenu un vecteur d'antisémitisme.</P>
      <KeyPoint color={COLORS.danger} title="« Ils en font trop »">
        On accuse les Juifs de saturer l'espace mémoriel. Comme si la mémoire d'un génocide de six millions de personnes avait une date d'expiration.
      </KeyPoint>
      <KeyPoint color={COLORS.danger} title="« Ils instrumentalisent »">
        La Shoah serait un bouclier politique, un capital moral monnayable. L'idée que les Juifs « profitent » de leur propre extermination est d'une cruauté vertigineuse — mais extraordinairement répandue.
      </KeyPoint>
      <KeyPoint color={COLORS.danger} title="« Et nous ? »">
        La compétition victimaire : au lieu d'exiger davantage de mémoire pour leurs propres tragédies, certains groupes exigent moins de mémoire pour les Juifs. Comme si la mémoire était un gâteau à partager.
      </KeyPoint>
    </Section>
    <Section title="L'inversion victimaire">
      <P>Le stade ultime : « Les Juifs font aux Palestiniens ce que les nazis leur ont fait. » Cette comparaison a une fonction précise : elle annule la Shoah. Si les Juifs sont les nouveaux nazis, alors la dette morale est effacée, la culpabilité européenne est soldée, et on peut recommencer à les détester sans mauvaise conscience.</P>
    </Section>
  </PageLayout>
);

const MatricePage = () => (
  <PageLayout title="La matrice conspirationniste" subtitle="L'antisémitisme comme mère de tous les complots" category="mechanisms">
    <Section title="Le template originel">
      <P>Pratiquement toute grande théorie conspirationniste — QAnon, Great Reset, Deep State, Nouvel Ordre Mondial — finit par converger vers « les Juifs » si on tire assez sur le fil. L'antisémitisme est la théorie-mère, le template originel du complotisme moderne.</P>
      <P>Les Protocoles des Sages de Sion, prouvés faux dès les années 1920, fournissent l'architecture narrative : un petit groupe secret, ethniquement défini, contrôle les événements mondiaux dans l'ombre.</P>
    </Section>
    <Section title="Les convergences contemporaines">
      <KeyPoint color={COLORS.mechanisms} title="QAnon">
        Une élite pédophile contrôle le monde. Les noms qui reviennent — Soros, Rothschild, Epstein — sont juifs. Le sang des enfants, les rituels secrets : c'est l'accusation médiévale de meurtre rituel recyclée.
      </KeyPoint>
      <KeyPoint color={COLORS.mechanisms} title="Le « Grand Remplacement »">
        Qui organise le remplacement des populations blanches ? Des « élites cosmopolites » — terme-code pour les Juifs.
      </KeyPoint>
      <KeyPoint color={COLORS.mechanisms} title="Deep State / Great Reset / NOM">
        Chaque théorie décrit un pouvoir caché qui manipule les nations. Et chacune, quand on gratte la surface, converge vers l'antisémitisme.
      </KeyPoint>
      <Quote text="L'antisémitisme fournit au complotisme son architecture narrative fondamentale : l'idée qu'un groupe invisible, surpuissant et maléfique contrôle le monde." />
    </Section>
  </PageLayout>
);

const PhilosemitismePage = () => (
  <PageLayout title="Le philosémitisme toxique" subtitle="Quand l'admiration contient déjà l'accusation" category="mechanisms">
    <Section title="Le compliment piégé">
      <P>« Les Juifs sont intelligents. » « Ils ont le sens des affaires. » « Ils sont solidaires entre eux. » Ces phrases se veulent élogieuses. Elles reposent sur le même mécanisme que l'antisémitisme : l'essentialisation.</P>
      <Pair
        leftTitle="Le compliment"
        left="Ils sont intelligents. Ils ont le sens des affaires. Ils sont solidaires. Regardez combien de prix Nobel."
        rightTitle="Le retournement"
        right="Ils sont rusés. Ils contrôlent la finance. Ils s'embauchent entre eux. Ils ont infiltré les institutions."
        leftColor={COLORS.manifestations}
        rightColor={COLORS.danger}
      />
    </Section>
    <Section title="Pourquoi c'est un problème">
      <P>Le passage du philosémitisme à l'antisémitisme n'est pas une rupture — c'est un simple changement d'éclairage sur la même image. L'admiration fascinée et la haine paranoïaque partagent une même prémisse : les Juifs ne sont pas des gens ordinaires.</P>
      <KeyPoint color={COLORS.mechanisms} title="Le signal d'alerte">
        « Je ne suis pas antisémite, j'admire beaucoup les Juifs » devrait alerter plutôt que rassurer. Admirer « les Juifs » en tant que groupe, c'est déjà les avoir sortis de l'humanité commune.
      </KeyPoint>
    </Section>
  </PageLayout>
);

const QuatreAgesPage = () => (
  <PageLayout title="Les quatre âges" subtitle="Antique, chrétien, moderne, contemporain" category="history">
    <Section title="L'antisémitisme mute">
      <P>L'antisémitisme n'est pas un phénomène stable. Chaque époque lui donne un nouveau visage tout en conservant la même architecture profonde.</P>
    </Section>
    <Section title="I. L'antisémitisme antique">
      <KeyPoint color={COLORS.history} title="Religieux et culturel">
        Les Grecs et les Romains reprochent aux Juifs leur monothéisme exclusif, leur refus de participer au culte impérial, leur particularisme rituel. Le Juif est celui qui refuse de se dissoudre dans l'universel. C'est un reproche d'étrangeté.
      </KeyPoint>
    </Section>
    <Section title="II. L'antisémitisme chrétien">
      <KeyPoint color={COLORS.history} title="Théologique">
        Le peuple déicide — celui qui a tué le Christ. Des siècles de catéchèse engendrent expulsions, conversions forcées, pogroms, ghettos. Le Juif est le témoin gênant d'une filiation que le christianisme veut à la fois revendiquer et effacer.
      </KeyPoint>
    </Section>
    <Section title="III. L'antisémitisme moderne">
      <KeyPoint color={COLORS.history} title="Racial et pseudo-scientifique">
        Au XIXe siècle, le Juif devient une race biologiquement dangereuse. Même le Juif converti, baptisé, assimilé, reste juif par le sang. Il n'y a plus d'échappatoire. La Shoah est l'aboutissement logique de cette pensée.
      </KeyPoint>
    </Section>
    <Section title="IV. L'antisémitisme contemporain">
      <KeyPoint color={COLORS.history} title="Géopolitique">
        Le Juif est accusé de colonialisme, d'apartheid, de génocide. Le vocabulaire change, mais le mécanisme reste : le Juif est le mal.
      </KeyPoint>
      <Quote text="À chaque époque, l'antisémitisme se reformule dans le langage dominant : religion au Moyen Âge, science au XIXe siècle, droits de l'homme au XXIe. Il emprunte toujours le registre moral le plus légitime de son temps." />
    </Section>
  </PageLayout>
);

const GauchePage = () => (
  <PageLayout title="L'antisémitisme de gauche" subtitle="Le préjugé qui se drape dans l'antisionisme" category="manifestations">
    <Section title="Un angle mort idéologique">
      <P>L'antisémitisme est traditionnellement associé à l'extrême droite. Mais il existe un antisémitisme de gauche tout aussi structurel, qui se drape dans l'antisionisme et le combat anti-impérialiste pour recycler des tropes antisémites classiques.</P>
      <P>L'idée que les Juifs incarnent le « pouvoir », le « capital », l'« impérialisme » est un antisémitisme structurel de gauche. Quand Proudhon écrit dans ses carnets que le Juif est « l'ennemi du genre humain » et qu'il faut « renvoyer cette race en Asie ou l'exterminer », c'est un socialiste qui parle.</P>
    </Section>
    <Section title="Le mécanisme contemporain">
      <P>Aujourd'hui, cet antisémitisme prend le visage de l'antisionisme radical. Le glissement fonctionne en trois temps :</P>
      <KeyPoint color={COLORS.manifestations} title="1. Critique légitime">Israël mène une politique de colonisation condamnable en Cisjordanie.</KeyPoint>
      <KeyPoint color={COLORS.manifestations} title="2. Glissement">Israël est un État colonial, raciste, génocidaire — intrinsèquement illégitime.</KeyPoint>
      <KeyPoint color={COLORS.danger} title="3. Contamination">Les Juifs qui ne condamnent pas Israël sont complices. Les Juifs qui soutiennent son existence sont des oppresseurs.</KeyPoint>
      <P>Le passage du 1 au 3 est le lieu exact où la critique politique devient antisémitisme.</P>
    </Section>
  </PageLayout>
);

const SansJuifsPage = () => (
  <PageLayout title="L'antisémitisme sans Juifs" subtitle="Un système de pensée autonome" category="manifestations">
    <Section title="La preuve par l'absence">
      <P>L'une des preuves les plus troublantes de la nature systémique de l'antisémitisme est sa capacité à prospérer en l'absence totale de Juifs.</P>
      <KeyPoint color={COLORS.manifestations} title="Pologne">
        Quasiment plus de communauté juive après la Shoah. Les sondages montrent pourtant des taux d'antisémitisme élevés.
      </KeyPoint>
      <KeyPoint color={COLORS.manifestations} title="Japon">
        Aucune population juive significative dans l'histoire du pays. Les Protocoles des Sages de Sion sont un best-seller régulier.
      </KeyPoint>
      <KeyPoint color={COLORS.manifestations} title="Malaisie">
        Mahathir Mohamad a déclaré publiquement que « les Juifs gouvernent le monde par procuration » devant un sommet international — sous les applaudissements.
      </KeyPoint>
    </Section>
    <Section title="Ce que ça démontre">
      <P>L'antisémitisme n'a pas besoin de Juifs. Il a besoin d'une explication au malheur du monde. Le « Juif » de l'antisémitisme est un personnage conceptuel, pas une personne réelle. C'est un système de pensée autonome, une cosmologie du complot qui a besoin d'un ennemi invisible pour fonctionner.</P>
    </Section>
  </PageLayout>
);

const ExilPage = () => (
  <PageLayout title="L'exil intérieur" subtitle="Le coût invisible du passing" category="manifestations">
    <Section title="Vivre en se cachant">
      <P>En France, beaucoup de Juifs pratiquent le « passing » — l'effacement volontaire des signes d'identité. Enlever sa kippa dans le métro. Ne pas dire le nom de l'école de ses enfants. Franciser son prénom. Éviter certains quartiers. Ne pas afficher sa mezouzah.</P>
      <P>Ce n'est pas de la paranoïa. C'est un calcul rationnel basé sur l'expérience.</P>
    </Section>
    <Section title="La violence réelle">
      <KeyPoint color={COLORS.danger} title="Ilan Halimi (2006)">Kidnappé et torturé à mort — parce que juif, donc « forcément riche ».</KeyPoint>
      <KeyPoint color={COLORS.danger} title="Toulouse (2012)">Des enfants abattus dans une école juive.</KeyPoint>
      <KeyPoint color={COLORS.danger} title="Hyper Cacher (2015)">Attentat ciblant spécifiquement un commerce juif.</KeyPoint>
      <KeyPoint color={COLORS.danger} title="Sarah Halimi (2017)">Défenestrée par son voisin. Meurtrier déclaré irresponsable.</KeyPoint>
      <KeyPoint color={COLORS.danger} title="Mireille Knoll (2018)">Rescapée de la Shoah, poignardée et brûlée dans son appartement.</KeyPoint>
      <P>Quand on vit dans un pays où des gens sont assassinés pour ce qu'ils sont, l'autocensure n'est pas un choix — c'est une stratégie de survie.</P>
    </Section>
    <Section title="L'exode silencieux">
      <P>La France compte environ 500 000 Juifs — la troisième communauté mondiale. Depuis les années 2000, des dizaines de milliers ont quitté le pays, principalement pour Israël. Ce mouvement migratoire, dans un pays qui se dit patrie des droits de l'homme, devrait constituer un scandale national. Il est à peine mentionné.</P>
    </Section>
  </PageLayout>
);

const ExceptionPage = () => (
  <PageLayout title="L'exception géopolitique" subtitle="Le seul État dont l'existence fait débat" category="manifestations">
    <Section title="Une question simple">
      <P>Combien d'États voient leur droit à exister remis en question dans le débat international ? La réponse est un. Israël.</P>
      <KeyPoint color={COLORS.manifestations} title="Pakistan (1947)">
        Partition sanglante, 15 millions de déplacés, un à deux millions de morts. Personne ne remet en question son existence.
      </KeyPoint>
      <KeyPoint color={COLORS.manifestations} title="USA, Canada, Australie">
        Fondés sur la dépossession et souvent le génocide de peuples autochtones. Personne ne propose de les dissoudre.
      </KeyPoint>
      <P>Quand cette exigence de dissolution ne s'applique qu'à un seul État, et que cet État est le seul État juif au monde, la charge de la preuve s'inverse.</P>
    </Section>
  </PageLayout>
);

const CanariPage = () => (
  <PageLayout title="Le canari dans la mine" subtitle="Un indicateur de santé démocratique" category="manifestations">
    <Section title="La régularité historique">
      <P>Quand l'antisémitisme monte dans une société, la société elle-même est en train de se dégrader. Les Juifs sont un indicateur — le canari dans la mine de la démocratie.</P>
      <KeyPoint color={COLORS.history} title="Allemagne de Weimar">La montée de l'antisémitisme dans les années 1920 a annoncé l'effondrement démocratique des années 1930.</KeyPoint>
      <KeyPoint color={COLORS.history} title="France de l'affaire Dreyfus">L'antisémitisme comme révélateur d'une crise institutionnelle profonde.</KeyPoint>
      <KeyPoint color={COLORS.history} title="Russie pré-révolutionnaire">Les pogroms comme symptôme d'un régime en décomposition.</KeyPoint>
    </Section>
    <Section title="L'alerte contemporaine">
      <P>La raison est structurelle : l'antisémitisme est un symptôme de ce que les sociétés produisent quand elles sont en crise — le besoin d'un coupable. La montée actuelle des actes antisémites en France et en Europe n'est pas seulement un problème pour les Juifs. C'est un signal d'alarme pour tout le monde.</P>
      <Quote text="Ce qui commence par les Juifs ne finit jamais par les Juifs." />
    </Section>
  </PageLayout>
);

const SionismePage = () => (
  <PageLayout title="Le piège du mot sionisme" subtitle="Un mot, trois définitions, une confusion volontaire" category="manifestations">
    <Section title="Trois sens radicalement différents">
      <KeyPoint color={COLORS.manifestations} title="Sens 1 — Droit international">
        Le soutien à l'existence de l'État d'Israël et à son droit à la sécurité. Position conforme au droit international.
      </KeyPoint>
      <KeyPoint color={COLORS.danger} title="Sens 2 — Extrême droite israélienne">
        Le soutien à l'expansion territoriale et à la colonisation intégrale. Position politique que beaucoup de Juifs et d'Israéliens combattent.
      </KeyPoint>
      <KeyPoint color="#444" title="Sens 3 — Fantasme antisémite">
        Le soutien à une supposée « domination mondiale juive ». Recyclage direct des Protocoles des Sages de Sion.
      </KeyPoint>
      <P>Utiliser le même mot pour ces trois réalités n'est pas un accident. C'est un outil de disqualification : en rendant « sioniste » synonyme de « génocidaire », on rend intenable la position de tout Juif qui souhaite simplement qu'Israël existe.</P>
    </Section>
    <Section title="Le test de loyauté">
      <P>Peut-on être Juif et anti-sioniste ? Des Juifs anti-sionistes existent, et leur position est respectable. Mais exiger de tout Juif qu'il soit anti-sioniste pour être fréquentable revient à lui imposer un test de loyauté qu'on n'impose à personne d'autre.</P>
      <Quote text="À quelle autre minorité demanderait-on de renoncer à soutenir l'existence de son pays d'origine ?" />
    </Section>
  </PageLayout>
);

const ResourcesPage = ({ navigate }) => (
  <PageLayout title="Ressources" subtitle="Pour aller plus loin" category="resources">
    <Section title="Ouvrages fondamentaux">
      <ResourceCard title="Réflexions sur la question juive" author="Jean-Paul Sartre (1946)" desc="L'une des premières analyses structurelles de l'antisémitisme comme projection, pas comme réaction." />
      <ResourceCard title="Les origines du totalitarisme" author="Hannah Arendt (1951)" desc="L'antisémitisme comme composante structurelle de l'effondrement des démocraties européennes." />
      <ResourceCard title="Le bouc émissaire" author="René Girard (1982)" desc="La théorie du mécanisme victimaire appliquée aux persécutions, y compris antisémites." />
      <ResourceCard title="Antisemitism: Here and Now" author="Deborah Lipstadt (2019)" desc="Analyse des formes contemporaines de l'antisémitisme, de gauche comme de droite." />
      <ResourceCard title="People Love Dead Jews" author="Dara Horn (2021)" desc="Essai incisif sur la façon dont le monde préfère les Juifs victimes aux Juifs vivants." />
    </Section>
    <Section title="Études et rapports">
      <ResourceCard title="Rapport annuel sur l'antisémitisme" author="CNCDH (France)" desc="Données statistiques sur les actes antisémites en France, publiées annuellement." />
      <ResourceCard title="Antisemitism Worldwide Report" author="Université de Tel Aviv" desc="Le rapport de référence mondial sur l'état de l'antisémitisme." />
      <ResourceCard title="Définition de l'IHRA" author="International Holocaust Remembrance Alliance" desc="La définition de travail de l'antisémitisme la plus utilisée internationalement, avec ses exemples." />
    </Section>
    <Section title="Navigation du guide">
      <P>Ce guide est structuré en trois axes complémentaires :</P>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px" }}>
        <NavCard label="Définition" desc="Comprendre la spécificité" onClick={() => navigate("definition")} color={COLORS.accent} />
        <NavCard label="Mécanismes" desc="7 engrenages structurels" onClick={() => navigate("mechanisms")} color={COLORS.mechanisms} />
        <NavCard label="Manifestations" desc="7 formes concrètes" onClick={() => navigate("manifestations")} color={COLORS.manifestations} />
      </div>
    </Section>
  </PageLayout>
);

const ResourceCard = ({ title, author, desc }) => (
  <div style={{
    background: COLORS.surface, border: `1px solid ${COLORS.border}`,
    borderRadius: "8px", padding: "20px", marginBottom: "12px",
  }}>
    <h4 style={{ color: COLORS.text, fontSize: "16px", margin: "0 0 4px", fontFamily: "'Playfair Display', Georgia, serif" }}>{title}</h4>
    <p style={{ color: COLORS.resources, fontSize: "13px", margin: "0 0 8px", fontWeight: 600 }}>{author}</p>
    <p style={{ color: COLORS.textMuted, fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{desc}</p>
  </div>
);

const NavCard = ({ label, desc, onClick, color }) => {
  const [h, setH] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: h ? color + "15" : COLORS.surface,
        border: `1px solid ${h ? color + "40" : COLORS.border}`,
        borderRadius: "8px", padding: "20px", cursor: "pointer",
        transition: "all 0.2s", textAlign: "center",
      }}
    >
      <h4 style={{ color, fontSize: "16px", margin: "0 0 6px" }}>{label}</h4>
      <p style={{ color: COLORS.textMuted, fontSize: "13px", margin: 0 }}>{desc}</p>
    </div>
  );
};

const MechanismsHub = ({ navigate }) => (
  <PageLayout title="Les mécanismes" subtitle="Les engrenages structurels de l'antisémitisme" category="mechanisms">
    <P>Comment l'antisémitisme fonctionne-t-il, indépendamment de l'époque et du contexte ? Sept mécanismes fondamentaux.</P>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "24px" }}>
      {["obsession","controle","contradiction","bouc","memoire","matrice","philosemitisme"].map(k => (
        <Card key={k} pageKey={k} page={PAGES[k]} onClick={navigate} />
      ))}
    </div>
  </PageLayout>
);

const ManifestationsHub = ({ navigate }) => (
  <PageLayout title="Les manifestations" subtitle="Comment l'antisémitisme se manifeste concrètement" category="manifestations">
    <P>L'histoire, la géopolitique, le quotidien, les mots — sept formes concrètes de l'antisémitisme.</P>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "24px" }}>
      {["quatre_ages","gauche","sans_juifs","exil","exception","canari","sionisme"].map(k => (
        <Card key={k} pageKey={k} page={PAGES[k]} onClick={navigate} />
      ))}
    </div>
  </PageLayout>
);

const PageLayout = ({ title, subtitle, category, children }) => {
  const cat = category ? CATEGORIES[category] : null;
  return (
    <div style={{ paddingTop: "48px", paddingBottom: "60px" }}>
      {cat && <Tag color={cat.color}>{cat.label}</Tag>}
      <h1 style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: "40px", color: COLORS.text, fontWeight: 700,
        marginTop: cat ? "16px" : 0, marginBottom: "8px", lineHeight: 1.2,
      }}>{title}</h1>
      {subtitle && (
        <p style={{ color: COLORS.textMuted, fontSize: "18px", marginBottom: "40px", lineHeight: 1.5 }}>{subtitle}</p>
      )}
      {children}
    </div>
  );
};

// ===== MAIN APP =====

const PAGE_MAP = {
  home: HomePage,
  definition: DefinitionPage,
  mechanisms: MechanismsHub,
  manifestations: ManifestationsHub,
  obsession: ObsessionPage,
  controle: ControlePage,
  contradiction: ContradictionPage,
  bouc: BoucPage,
  memoire: MemoirePage,
  matrice: MatricePage,
  philosemitisme: PhilosemitismePage,
  quatre_ages: QuatreAgesPage,
  gauche: GauchePage,
  sans_juifs: SansJuifsPage,
  exil: ExilPage,
  exception: ExceptionPage,
  canari: CanariPage,
  sionisme: SionismePage,
  resources: ResourcesPage,
};

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const mainRef = useRef(null);

  const navigate = (page) => {
    setCurrentPage(page);
    if (mainRef.current) mainRef.current.scrollTo(0, 0);
  };

  const PageComponent = PAGE_MAP[currentPage];

  return (
    <div style={{
      background: COLORS.bg, minHeight: "100vh", color: COLORS.text,
      fontFamily: "'Source Sans 3', 'Source Sans Pro', -apple-system, sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Source+Sans+3:wght@300;400;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::selection { background: ${COLORS.accent}40; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: ${COLORS.bg}; }
        ::-webkit-scrollbar-thumb { background: ${COLORS.border}; border-radius: 3px; }
      `}</style>
      <Nav currentPage={currentPage} navigate={navigate} />
      <div ref={mainRef} style={{ maxWidth: "900px", margin: "0 auto", padding: "0 32px" }}>
        <PageComponent navigate={navigate} />
      </div>
      <footer style={{
        borderTop: `1px solid ${COLORS.border}`,
        padding: "32px", textAlign: "center",
        color: COLORS.textMuted, fontSize: "13px",
      }}>
        <p>Ce guide est un outil d'éducation et de compréhension. Il ne prétend pas à l'exhaustivité.</p>
        <p style={{ marginTop: "8px", color: COLORS.accent + "80" }}>antisemitisme.guide</p>
      </footer>
    </div>
  );
}
