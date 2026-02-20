const personalInfo = {
    name: "Haojie Hu (胡豪杰)",
    title: "JSPS Fellow, University of Tsukuba",
    position: "JSPS Fellow, University of Tsukuba",
    email: "huhaojie@ccs.tsukuba.ac.jp",
    office: "Center for Computational Sciences, University of Tsukuba",
    phone: "Contact via email",
    photo: "./img/Homepage.png", // Add a default photo path
    cvLink: "./files/Haojie_Hu_CV2025.pdf",
    bio: `This is Haojie Hu from Planet Earth. "Haojie" is my first name, it is written as "豪杰" in Chinese character, which means "a hero, a brave man". The pronunciation is like "How Jet" (with "t" silent). My family name is "Hu", with pronunciation like "who". In China, we have family name comes first, so it is written as "胡豪杰". You can just call me "Haojie [How Jet (with "t" silent)]" or just "Jie [Jet (with "t" silent)]".
    <br><br>
    Now I am a JSPS fellow, working with Prof. Ken Ohsuga at University of Tsukuba. My research interests focus on SuperMassive Black Holes (SMBHs). I am interested in the formation and evolution of SMBHs at high redshifts (z>6), and their co-evolution with host galaxies (the co-evolution scenario). The interplay between central SMBHs and their host galaxies especially in Active Galactic Nuclei (aka, AGN feeding and feedback), always fascinates me. I try to understand the growth pathway of seed BH to SMBHs at high-z universe via numerical simulations.`
};

const navigation = [
    { href: "#about", text: "About" },
    { href: "#education", text: "Education" },
    { href: "#research", text: "Research" },
    { href: "#events", text: "Events & Talks" },
    { href: "#collaborators", text: "Collaborators" },
    { href: "#links", text: "Links" },
    { href: "quickulator.html", text: "Quickulator" }
];

const education = {
    degrees: [
        { degree: "Ph.D in Astrophysics", institution: "Peking University", year: "2024" },
        { degree: "Bachelor of Science in Applied Physics", institution: "East China University of Science and Technology (ECUST)", year: "2018" },
        { degree: "High School", institution: "Zhenhai High School (浙江省镇海中学)", year: "2014" }
    ],
    additional: [
        { type: "Summer School", name: "CSST Summer School", year: "2022" },
        { type: "N-body simulation winter school", name: "N-body simulation winter school", year: "2025" },
        { type: "Teaching Assistant", name: "Stellar Structure and Evolution", year: "2020-2021, 2023" }
    ]
};

const research = {
    interests: "SuperMassive Black Holes (SMBHs), BH Accretion, Active Galactic Nuclei (AGN) Feedback, Co-evolution of SMBHs and Host Galaxies, Auasars, High Redshift Galaxies, AGN Outflow/Aind/Jet, Numerical Simulations (HD/GRRHD/RMHD)",
    publications: [
        {
            title: "Back to Normal Again: Possible Destinies of JWST overmassive SMBHs and “Little Red Dots” in the View of Shin-Uchuu Simulation",
            status: "Submitted to ApJ",
            arxiv: "2602.14496",
            url: "http://arxiv.org/abs/2602.14496"
        },
        {
            title: "Clumpy Outflows from Super-Eddington Accreting Black Holes I: Radiation Hydrodynamics Simulations and Observational Implications",
            status: "Accepted for publication in PASJ",
            arxiv: "2510.17696",
            url: "https://arxiv.org/pdf/2510.17696"
        },
        {
            title: "The Convergence of Heavy and Light Seeds to Overmassive Black Holes at Cosmic Dawn",
            journal: "Astrophys. J. Lett. 983, L37 (2025)",
            journalUrl: "https://iopscience.iop.org/article/10.3847/2041-8213/adc680",
            arxiv: "2503.03870",
            url: "https://arxiv.org/pdf/2503.03870"
        },
        {
            title: "Supercritical Growth Pathway to Overmassive Black Holes at Cosmic Dawn: Coevolution with Massive Quasar Hosts",
            journal: "Astrophys. J. 935, 140 (2022)",
            journalUrl: "https://iopscience.iop.org/article/10.3847/1538-4357/ac8166",
            arxiv: "2206.01215",
            url: "https://arxiv.org/pdf/2206.01215"
        },
        {
            title: "Long-term Evolution of Supercritical Black Hole Accretion with Outflows: A Subgrid Feedback Model for Cosmological Simulations",
            journal: "Astrophys. J. 934, 132 (2022)",
            journalUrl: "https://iopscience.iop.org/article/10.3847/1538-4357/ac7daa",
            arxiv: "2205.02842",
            url: "https://arxiv.org/pdf/2205.02842"
        },
        {
            title: "Signature of Supersonic Turbulence in Galaxy Clusters Revealed by AGN-driven Halpha Filaments",
            journal: "Astrophys. J. Lett. 929, L30 (2022)",
            journalUrl: "https://iopscience.iop.org/article/10.3847/2041-8213/ac6601",
            arxiv: "2203.04977",
            url: "https://arxiv.org/pdf/2203.04977"
        },
        {
            title: "Dynamics and Morphology of Cold Gas in Fast, Radiatively Cooling Outflows: Constraining AGN Energetics with Horseshoes",
            journal: "Astrophys. J. Lett. 917, L7 (2021)",
            journalUrl: "https://iopscience.iop.org/article/10.3847/2041-8213/ac1173",
            arxiv: "2106.10285",
            url: "https://arxiv.org/pdf/2106.10285"
        }
    ],
    highlights: [
        {
            title: "1. Formation of first SMBHs",
            image: "./img/high-z_SMBH_M-Z_with_legend.png",
            description: 
            `Observations of high-redshift quasars and galaxies have revealed the existence of 10⁹-10¹⁰ solar mass 
            supermassive black holes (SMBHs) at z ≈ 6-7. Growing such massive SMBHs through standard Eddington-limited 
            accretion—the spherical accretion limit that balances radiation pressure against gravitational infall—poses 
            significant challenges, even assuming a 100% duty cycle. Two primary mechanisms have been proposed to 
            explain the formation and rapid growth of these early SMBHs: (1) heavy seed black holes that begin with 
            substantially larger initial masses, and (2) super-Eddington accretion onto stellar-mass seed black holes 
            that exceeds the classical Eddington limit. I am employing numerical simulations and analytical models to 
            investigate the viability of these formation pathways and constrain the physical processes governing early 
            SMBH evolution.`
        },
        {
            title: "2. AGN Feedback & Co-evolution Between BHs and Host Galaxies",
            image: "./img/MM_diagram_for_seeds.png",
            description: 
            `Observations reveal tight correlations between properties of supermassive black holes (SMBHs) and their host 
            galaxies, particularly the relationship between SMBH masses and stellar masses of host galaxies. It has been 
            argued that feedback from SMBHs is responsible for establishing and maintaining these fundamental scaling relations.

            Although active galactic nucleus (AGN) feedback has been extensively studied, there remains no consensus on 
            the specific mechanisms by which AGN feedback shapes these observed correlations. The complexity of the 
            feedback processes and their multi-scale nature present significant theoretical and observational challenges.

            AGN outflows in the form of winds and jets are believed to be the primary drivers of feedback effects, capable 
            of regulating star formation and influencing galaxy evolution across cosmic time. I am employing advanced 
            numerical simulations to systematically investigate various outflow effects, including detailed modeling of 
            ultra-fast outflows, multi-velocity wind structures, and relativistic jet propagation. This comprehensive 
            approach aims to elucidate the relative importance of each mechanism in shaping the observed SMBH-galaxy 
            scaling relations.`
        },
        {
            title: "Paper Highlight: Redshift evolution of MM ratio for two seeding scenarios (semi-analytical modeling)",
            image: "./img/data+model.png",
            description: 
            `Based on numerical simulations, we propose a semi-analytical model to investigate the formation and cosmic 
            evolution of black holes from different formation scenarios.
            We find that the rapid growth of seed black holes also erases their initial seeding information, making it 
            challenging to distinguish between formation channels for different seed populations. This figure demonstrates 
            the convergent evolution of black hole mass-to-galaxy mass (M_BH/M_gal) ratios for both heavy and light seed 
            black holes. Even with this convergence, it remains possible to disentangle the degeneracy before the ratios converge.

            Our results indicate that high-ratio supermassive black holes observed at z~10 likely originated from heavy 
            seed black holes (such as direct collapse black holes), since the convergence between different seed populations 
            occurs after z~9-8. This finding provides a potential observational signature for distinguishing formation 
            pathways in the early universe, where the detection of extremely massive black holes relative to their host 
            galaxies at the highest redshifts could serve as evidence for heavy seed formation channels.`
        },
        {
            title: "Paper Highlight: AGN Feedback in galaxy Cluster (evolution of AGN-driven outflows)",
            image: "./img/fig3.png",
            description: 
            `AGN feedback is thought to drive the co-evolution between supermassive black holes and host galaxies, yet 
            diagnosing AGN energetics remains challenging. Outflows from SMBH accretion carry crucial energetic 
            information about AGN activity, making them valuable feedback probes.

            We developed an analytical model to investigate AGN-driven outflow formation and evolution, applying it to 
            explain cold gas filaments in the Perseus cluster. Our findings show that the 1/2 slope of the velocity 
            structure function for Hα-traced filaments can be explained by cold components of supersonic hot outflows 
            that cool radiatively after ~10-20 Myr.

            Our simulations successfully reproduced the varied cold gas morphologies observed in Perseus, including 
            radial filaments, horseshoe structures, and blue-loop features. These filament characteristics provide 
            direct constraints on central AGN energetics, while their subsequent evolution suggests positive AGN 
            feedback operating on 10-20 Myr timescales.`
        },
        {
            title: "Paper Highlight: Accretion Winds from Super-Eddington Accretion onto BHs",
            image: "./img/Paper3fig3.png",
            description: 
            `Super-Eddington accretion onto black holes is believed to drive rapid growth of seed black holes at high 
            redshift and power ultra-luminous X-ray sources. When sufficient dense gas feeds the black hole, radiation 
            becomes trapped within dense disks, resulting in negligible feedback effects on large-scale gas supply. 
            This minimal negative feedback enables sustained super-Eddington accretion.

            We conducted 2D radiation-hydrodynamic (RHD) simulations to study long-term super-Eddington accretion evolution, 
            incorporating effective photon-trapping physics. Our simulations achieved quasi-steady super-Eddington accretion 
            states.

            This figure shows the 2D distribution of sound speed and gas density at two different scales for our fiducial 
            case. On larger scales (left panel), convective motion governs the flow pattern, with gas inflowing through the 
            equatorial region while similar amounts outflow toward polar regions. On smaller scales (right panel), inflows 
            dominate due to strong gravity, though significant outflows reduce the net inflow rate toward the black hole. 
            This behavior is consistent with other radiation-inefficient accretion flow (RIAF) simulations, demonstrating 
            the self-regulating nature of super-Eddington systems.`
        }
    ]
};

const events = {
    upcoming: [
        {
            title: "BHJET2026 workshop--降着円盤・円盤風研究会2026 @ Komazawa University",
            type: "Contributed Talk",
            date: "11th-13th March, 2026",
            url: "https://sites.google.com/view/bhjet2026/ホーム"
        },
        {
            title: "Colloquium Talk @ RIKEN",
            type: "Colloquium Talk",
            date: "10th April, 2026 (Not settled)",
            url: "No Link"
        }
    ],
    past: [
        {
            title: "Clumpy outflows from super-Eddington accreting black holes: Formation mechanisms and observational implications",
            event: "XRISM International Conference 2025",
            type: "Contributed Talk",
            date: "20nd-25th, Oct, 2025",
            location: "Kyoto, Japan",
            url: "https://www-cr.scphys.kyoto-u.ac.jp/conference/xrism2025/"
        },
        {
            title: "The Convergence of Heavy and Light Seeds to Overmassive Black Holes at Cosmic Dawn",
            event: "Galaxy-IGM Workshop 2025",
            type: "Contributed Talk",
            date: "22nd-25th July, 2025",
            location: "Waseda University, Japan (Hotel Sun Valley Nasu)",
            note: "Best Group Work on Galaxy Theory",
            url: "https://www.obsap.phys.waseda.ac.jp/galaxyIGMworkshop_250722-25.html"
        },
        {
            title: "The Convergence of Heavy and Light Seeds to Overmassive Black Holes at Cosmic Dawn",
            event: "超巨大ブラックホール研究推進連絡会",
            type: "Contributed Talk",
            date: "1st-3rd July, 2025",
            location: "CCS University of Tsukuba, Tsukuba, Japan"
        },
        {
            title: "The rapid evolution of seed BHs at cosmic dawn and their co-evolution with host galaxies",
            event: "Big Data Astronomy 2025",
            type: "Contributed Talk",
            date: "14-16 May 2025",
            location: "CCS University of Tsukuba, Tsukuba, Japan"
        },
        {
            title: "Simulating super-Eddington accretion of seed BHs at high redshift and their co-evolution with host galaxies",
            event: "降着円盤・円盤風研究会2025",
            type: "Contributed Talk",
            date: "5-7 May 2025",
            location: "Nagoya City University, Nagoya, Japan"
        },
        {
            title: "The evolutionary trend of high-z SMBHs in co-evolution with host galaxies regulated by super-Eddington accretion and outflows",
            event: "Probing the Genesis of Supermassive Black Holes: Emerging Perspectives from JWST and Expectation toward New Wide-Field Survey Observations",
            type: "Contributed Talk",
            date: "18–21 Nov 2024",
            location: "Kavli IPMU, Kashiwa, Japan"
        },
        {
            title: "Contributed talk",
            event: "Cospar",
            type: "Contributed Talk",
            date: "13-21 July, 2024",
            location: "Busan, Korea"
        },
        {
            title: "Contributed talk",
            event: "First Star",
            type: "Contributed Talk",
            date: "20-23 May, 2024",
            location: "NYC, the United States"
        },
        {
            title: "Contributed talk",
            event: "Galaxy formation in Hangzhou: Observation and Physics of AGN",
            type: "Contributed Talk",
            date: "10 Oct 2023",
            location: "Hangzhou, China"
        },
        {
            title: "Contributed talk",
            event: "East Asian AGN workshop",
            type: "Contributed Talk",
            date: "24 Sep. 2023",
            location: "Kagoshima, Japan"
        },
        {
            title: "Poster",
            event: "European Astronomical society 2023 (EAS2023)",
            type: "Poster",
            date: "14 July 2023",
            location: "Poland"
        },
        {
            title: "Contributed Talk",
            event: "Astrophysical BHs: a rapidly moving field",
            type: "Contributed Talk",
            date: "23 June 2023",
            location: "Hong Kong, China"
        },
        {
            title: "Colloquium Talk",
            event: "Zhejiang University, Shanghai Astronomical Observatory, Tsung-Dao Lee Institute",
            type: "Talk",
            date: "May 2023",
            location: "Hangzhou, China"
        },
        {
            title: "CSST-Galaxy-AGN discussion on Feedback in simulations",
            event: "Peking University",
            type: "Discussion",
            date: "4th April 2023",
            location: "Beijing, China"
        },
        {
            title: "Lunch seminar",
            event: "Tsinghua University",
            type: "Seminar",
            date: "31st Mar 2023",
            location: "Beijing, China"
        },
        {
            title: "IAU conference",
            event: "IAU",
            type: "Conference",
            date: "21-23 Nov 2022",
            location: "Online"
        },
        {
            title: "Computational Astrophysics Seminar",
            event: "University of Duisburg-Essen",
            type: "Seminar",
            date: "27 Oct 2022",
            location: "Online (Germany)"
        },
        {
            title: "East Asian Numerical Astrophysical meeting",
            event: "EANA",
            type: "Conference",
            date: "26-30 Sep 2022",
            location: "Online"
        },
        {
            title: "Origin, growth and feedback of black holes in dwarf galaxies",
            event: "Conference",
            type: "Conference",
            date: "12-16 Sep 2022",
            location: "Online (the United States)"
        },
        {
            title: "Galaxy-IGM workshop 2022",
            event: "Galaxy-IGM workshop",
            type: "Workshop",
            date: "8-12 Aug 2022",
            note: "Best Group Work on AGN Theory",
            location: "Online (Japan)"
        },
        {
            title: "EAS 2022: European Astronomical Society Annual Meeting",
            event: "EAS 2022",
            type: "Conference",
            date: "27 Jun - 1 Jul 2022",
            location: "Online (Spain)"
        },
        {
            title: "Lunch seminar",
            event: "IPMU",
            type: "Seminar",
            date: "14 Jun 2022",
            location: "Online (Tokyo, Japan)"
        },
        {
            title: "2021 The first KIAA forum on gas in galaxies for early career scientist",
            event: "KIAA forum",
            type: "Forum",
            date: "1-5 Nov 2021",
            location: "Beijing, China"
        },
        {
            title: "East-Asia AGN workshop",
            event: "East-Asia AGN workshop",
            type: "Workshop",
            date: "11-13 Oct 2021",
            location: "Chongqing University"
        },
        {
            title: "Visit to Tokyo University & Nagoya University",
            event: "Academic Visit",
            type: "Visit",
            date: "4-14 Nov 2019",
            location: "Tokyo & Nagoya, Japan"
        }
    ]
};

const collaborators = {
    jsps: ["Prof. Ken Ohsuga (CCS, University of Tsukuba)"],
    supervisor: ["Prof. Kohei Inayoshi (KIAA, Peking University)"],
    international: [
        "Dr. Yuta Asahina (CCS, University of Tsukuba)",
        "Prof. Hiroyuki R. Takahashi (Komazawa University)",
        "Mr. Shogo Yoshioka (Department of Astronomy, Kyoto University)",
        "Prof. Kohei Inayoshi (KIAA, Peking University)",
        "Prof. Zoltan Haiman (DoA, Columbia University/Institute of Science and Technology Austria)",
        "Dr. Yu Qiu (Zhejiang University)",
        "Prof. Luis C. Ho (KIAA, Peking University)",
        "Prof. Eliot Quataert (Princeton University)",
        "Prof. Rolf Kuiper (Fakultät für Physik, Universität Duisburg-Essen)",
        "Dr. Wenxiu Li (Peking University)"
    ]
};

const links = [
    {
        title: "Center for computational Science (CCS), University of Tsukuba",
        url: "https://www.ccs.tsukuba.ac.jp/eng/"
    },
    {
        title: "Theoretical Astrophysics Group (TAG), University of Tsukuba",
        url: "https://www2.ccs.tsukuba.ac.jp/Astro/members/en/"
    },
    {
        title: "NASA ADS",
        url: "https://ui.adsabs.harvard.edu/classic-form"
    },
    {
        title: "My publication in ADS",
        url: "https://scixplorer.org/public-libraries/ZGKN13g-RjqAqBcBEt37qg"
    },
    {
        title: "TAG Calendar",
        url: "https://www2.ccs.tsukuba.ac.jp/Astro/calendar/en/"
    },
    {
        title: "Daily arXiv paper on benty-fields",
        url: "https://www.benty-fields.com/daily_arXiv"
    },
    {
        title: "Check out conferences",
        url: "https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/en/meetings/this-year/"
    },
    {
        title: "Online Discussion tool",
        url: "https://www.slido.com"
    },
    {
        title: "Kavli Institute for Astronomy and Astrophysics (KIAA)",
        url: "http://kiaa.pku.edu.cn"
    },
    {
        title: "Paper Reading Notes",
        url: "https://hhwonder4.notion.site/25d102dd8fb5808e8a54f1102ff49ac7?v=25d102dd8fb58062b982000c3c5bd29b"
    }
    
];
