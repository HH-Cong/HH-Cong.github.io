const personalInfo = {
    name: "Haojie Hu (胡豪杰)",
    title: "JSPS Fellow, University of Tsukuba",
    position: "JSPS Fellow, University of Tsukuba",
    email: "huhaojie@ccs.tsukuba.ac.jp",
    office: "Center for Computational Sciences, University of Tsukuba",
    phone: "Contact via email",
    photo: "./img/Homepage.png", // Add a default photo path
    cvLink: "./files/Haojie_Hu_CV2025.pdf",
    bio: `This is Haojie Hu from Planet Earth. "Haojie" is my first name, it is written as "豪杰" in Chinese character, 
    which means "a hero, a brave man". The pronunciation is like "How Jet" (with "t" silent). My family name is "Hu", 
    with pronunciation like "who". In China, we have family name comes first, so it is written as "胡豪杰". You can 
    just call me "Haojie [How Jet (with "t" silent)]" or just "Jie [Jet (with "t" silent)]".
    <br><br>
    Currently, I am a JSPS fellow working with Prof. Ken Ohsuga at University of Tsukuba. My research interests focus on 
    SuperMassive Black Holes (SMBHs). I am interested in the formation and evolution of SMBHs at high redshifts (z>6), 
    and their co-evolution with host galaxies (the co-evolution scenario). The interplay between central SMBHs and 
    their host galaxies especially in Active Galactic Nuclei (aka, AGN feeding and feedback), always fascinates me. 
    I try to understand the growth pathway of seed BH to SMBHs at high-z universe via numerical simulations.`
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
            journal: "Publications of the Astronomical Society of Japan, psaf158, (2026)",
            journalUrl: "https://academic.oup.com/pasj/advance-article/doi/10.1093/pasj/psaf158/8502083",
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
            title: "1. Super-Eddington Accretion",
            image: "./img/Paper3fig3.png",
            description: 
            `Accretion onto BHs is believed to play an indisputable role in powering some of the most energetic phenomena 
            in astrophysical environments. The Accretion rate is often limited to Eddington accretion rate, which occurs 
            in a spherical system when (electron scattering) radiation force balances the gravity. Gradually, it is 
            realized that in certain scenarios, accretion rate can exceed the Eddington accretion rate. This is dubbed as
            'Super-Eddington accretion'. Super-Eddington accretion has been invoked to explain some exotic astrophysical 
            phenomena, e.g., ultraluminous X-ray sources (ULX), Tidal Disruption Events (TDEs), and luminous quasars. 
            Super-Eddington accretion has been widely studied via numerical simulations. Yet, a unified pictures has 
            not been reached. It still requires more delicate investigations regarding its spatial structures and 
            temperal evolutions.
            <p>
            My contribution: Long-term Evolution of super-Eddington accretion and its feedback model. 
            <a href="https://iopscience.iop.org/article/10.3847/1538-4357/ac7daa">(Paper Link)</a>.
            </p>
            `
        },
        {
            title: "2. Outflows from Accretion & AGN Feedback",
            image: "./img/ClumpyOutflow.png",
            description: 
            `
            Supermassive black holes are ubiquitously found to exist in the centers of Active Galactic Nuclei (AGNs). 
            Accretion onto SMBHs is responsible for the intense radiation observed in luminous quasars. However, 
            accretion inevitably launches outflows in forms of jets and winds to release energy and momentum. 
            These jets and winds are constantly depositing energy and momentum to the surrounding gas when traveling 
            to large scales. These outflows are believed to impact the evolution of inflow gas and galactic 
            star-formation (known as AGN feedback), shaping the co-evolution between SMBHs and host galaxies. 

            Many efforts are paied to investigated accretion outflows and AGN feedback. However, a thotough picture of 
            AGN feedback is impeded by the large span of physical scales and limited resolution both in observations and 
            simulations. Multiple directions are emerging to disentangle the mystery of AGN feedback: AGN (quasar) 
            demographics (larger and deeper observation surveys), cosmological simulations, galaxy simulations and 
            BH accreion simulations. With these efforts, the mysterious veil of AGN feedback is gradually beening revealed.
            <p>
            I have been studying AGN feedback via numerical simulations both on galactic scales and BH accretion scales.
            My contribution: 
                <ul>
                    <li>
                        Outflow energy and momentum outflow from super-Eddington accreting BHs: 
                        <a href="https://iopscience.iop.org/article/10.3847/1538-4357/ac7daa">(Paper Link)</a>;
                    </li>
                    <li>                        
                        The dynamical and morphological evolution of AGN-driven outflows in cool-core clusters: 
                        <a href="https://iopscience.iop.org/article/10.3847/2041-8213/ac1173">(Paper1,</a>
                        <a href="https://iopscience.iop.org/article/10.3847/2041-8213/ac6601">Paper2)</a>;
                    </li>
                    <li>                        
                        The formation and evolution of clumpy outflows from super-Eddington accreting BHs: 
                        <a href="https://academic.oup.com/pasj/advance-article/doi/10.1093/pasj/psaf158/8502083">(Paper Link)</a>;
                    </li>
                    <li>...</li>
                </ul>
            </p>
            `
        },
        {
            title: "3. Semi-analytical Model for SMBHs growth & their co-evolution with galaxies",
            image: "./img/FigsCompiling.png",
            description: 
            `
            Observation has revealed many important properties of SMBHs and their host galaxies: (1) the existence of 
            billian solar mass BHs at high redshift (z>6); (2) tight correlation between the mass of SMBHs and the 
            stellar mass of host galaxies; (3) the possible redshift evolution of these relations (or not), etc.

            Some of these observations have arose new questions regarding the formation and evolution of BHs and 
            their co-evolution with host galaxies. Cosmological simulations have been successful in explaining 
            some aspects of these observations. However, the huge computational costs and limited resolution hampered
            deeper and direct investigations. To this aid, (semi-)analytical models are useful to test sub-grid physics 
            that matters most and provide more straight forward interpretations for different models, especially 
            at cosmological timescale. 
            <p>
            I build a semi-analytical model based on dark matter merger trees to investigete cosmic (co-)evolution
            of SMBHs and host galaxies.
            My contribution: 
                <ul>
                    <li>
                        Super-Eddington growth pathway to high-z overmassive SMBHs (before JWST): 
                        <a href="https://iopscience.iop.org/article/10.3847/1538-4357/ac8166">(Paper)</a>;
                    </li>
                    <li>                        
                        The convergence behavior of light and heavy seed to overmassive SMBHs: 
                        <a href="https://iopscience.iop.org/article/10.3847/2041-8213/adc680">(Paper)</a>;
                    </li>
                    <li>                        
                        The subsequent evolution of overmassive SMBHs and LRDs down to z=0: 
                        <a href="http://arxiv.org/abs/2602.14496">(Paper)</a>;
                    </li>
                    <li>...</li>
                </ul>
            </p>
            `
        }
    ]
};

const events = {
    upcoming: [
        {
            title: "Colloquium Talk @ RIKEN",
            type: "Colloquium Talk",
            date: "10th April, 2026",
            url: "https://ithems.riken.jp/en/events/clumpy-outflows-from-super-eddington-accreting-black-holes"
        }
    ],
    past: [
        {
            title: "BHJET2026 workshop--降着円盤・円盤風研究会2026 @ Komazawa University",
            event: "BHJET2026 workshop",
            type: "Contributed Talk",
            date: "11th-13th March, 2026",
            location: "Komazawa Univeristy, Tokyo, Japan",
            url: "https://sites.google.com/view/bhjet2026/ホーム"
        },
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
