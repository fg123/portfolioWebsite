import data;
import html;
import businessCard;
import section;
import string;
import headerLinks;
import moreInfoArrow;
import timeline;
import htmlUtil;
import portfolio;
import contact;

let googleFont => (/* var args */) {
	let fontName = ((arguments % "|") / " ") % "+";
	ret "//fonts.googleapis.com/css?family=" + fontName;
};

let name = "Felix Guo";
let portraitUrl = "cartoon.jpg";
let skills = "C, C++, Python, Web, Game Engine Dev";
let cardItems = [
	CardEntry("fas fa-graduation-cap", "Computer Science and Business Administration"),
	CardEntry("fas fa-map-marker", "University of Waterloo"),
    CardEntry("fas fa-building", "Citadel LLC, Chicago"),
	CardEntry("fas fa-file-alt", inline([
            a(
                content = "Resume",
                attributes = [href("FelixGuoResume.pdf")]
		    ),
            text(" ("),
            a(
                content = "Extended",
                attributes = [href("FelixGuoResumeExtended.pdf")]
		    ),
            text(")")
        ])
	),
	CardEntry("fab fa-github", a(
			content = "Github",
			attributes = [href("https://github.com/fg123")]
		)
	),
	CardEntry("fas fa-envelope", a(
			content = "felix.guo@uwaterloo.ca",
			attributes = [href("mailto:felix.guo@uwaterloo.ca")]
		)
	)
];

let headerLinks = [
	headerLink("#overview", "Overview"),
	headerLink("#experience", "Experience"),
	headerLink("#portfolio", "Portfolio"),
	blueHeaderLink("#contact", "Contact")
];

let timelineItems = [
    // TimelineItem(
	// 	"Could Be You",
	// 	"Jun 2021 - ???",
	// 	"corners/question.png",
    //     formatted("")
	// ),
    TimelineItem(
		"Citadel Securities LLC.",
		"Aug 2021 - Present",
		"corners/citadel.png",
        formatted("Developing tools and infrastructure for order routing in execution services in *C++*, and *Python*.")
	),
    TimelineItem(
		"Riot Games Inc.",
		"Jun - Aug 2020",
		"corners/riot-tr.png",
        formatted("Worked on champion bug-fixing and scripting, developed internal tooling features and refactored game engine for optimizations in *C++*.")
	),
	TimelineItem(
		"Citadel Securities LLC.",
		"Sept - Dec 2019",
		"corners/citadel.png",
        formatted("Developed tools and infrastructure for order routing in execution services in *C++*, and *Python*.")
	),
	TimelineItem(
		"Google LLC.",
		"May - Aug 2018",
		"corners/google-tr.png",
        inline([
            text("Worked on building and launching a unit-testing framework for the Linux Kernel, "),
            a("KUnit", attributes=[href("https://kunit.googlesource.com/")]),
            formatted(", writing the framework in *C* and accompanying scripts in *Python*.")
        ])
	),
	TimelineItem(
		"Oath Inc.",
		"Jan - Apr 2018",
		"corners/oath.png",
		formatted(
			"Architected and implemented a complex UI flow for Creating Contests and Leagues for Yahoo Fantasy Sports Android. All new source code was written and developed in *Kotlin*."
		)
	),
    TimelineItem(
		"Yahoo! Inc.",
		"May - Aug 2017",
		"corners/yahoo-tr.png",
		formatted("Worked on creating custom *Android* folding animations for new advertisement layouts using *Java*.")
	),
    TimelineItem(
		"Inkpad Studios",
		"Nov 2014 - June 2016",
		"corners/inkpad-tr.png",
		[
			text("Developed from ground up a fun Android game called "),
			a("Pedal Panic", attributes = [href("https://play.google.com/store/apps/details?id=ca.inkpadstudios.pedalpanic&hl=en")]),
			formatted(" using *Unity* and *C#*.")
		]
	)
];

let businessCard = generateBusinessCard(name, portraitUrl, skills, cardItems, headerLinks);
struct sectionHeader => (text, color) {
	init => (text, color = "#FDFDFD") {
	    this.text = text;
	    this.color = color;
	    ret this;
	};

	build => (context) {
		h1(uniqueId = "section-header" + this.color[1->this.color.size],
			content = this.text,
			styles = [
				"margin-left: auto",
				"margin-right: auto",
				"text-align: center",
				"color: " + this.color
			]).build(context);
	};
};

let portfolioItems = [
    PortfolioItem(
        "wendyScript.jpg",
        "WendyScript",
        [
            text("Programming Language | "),
            a("Documentation", attributes = [href("http://felixguo.me/wendy")])
        ],
        "WendyScript is a dynamically typed imperative programming language.
        Information about the syntax and download for the compiler can be found in the documentation.",
        ["C"]
    ),
    PortfolioItem(
        "yate.jpg",
        "Yate",
        [
            text("Terminal Text Editor | "),
            a("Github", attributes = [href("http://github.com/fg123/yate")])
        ],
        "Yate is a terminal text editor that supports arbitrary nested layouts of tabs and panels,
        simple keyboard shortcuts, branching edit history, and syntax highlighting.",
        ["C++", "ncurses"]
    ),
    PortfolioItem(
        "mercuryWm.jpg",
        "Mercury WM",
        [
            text("Chrome Extension | "),
            a("Github", attributes = [href("https://github.com/wheel-org/mercurywm")])
        ],
        "Mercury replaces the new-tab page with a fully functioning tiling window manager, backed by a JS operating system.
        It allows users to create panels displaying relevant information, and customize the new tab page into any layout.",
        ["HTML5", "CSS", "Javascript", "React", "Redux"]
    ),
    PortfolioItem(
        "lumenAstrum.jpg",
        "Lumen Astrum",
        [
            text("Work in Progress | "),
            a("Github", attributes = [href("https://github.com/fg123/lumen-astrum-js")])
        ],
        "Lumen Astrum is a turn-based real-time strategy game where you
        control your units to battle against an enemy. Defend your command
        center by building structures to create units and upgrade stats.",
        ["Javascript"]
    ),
      PortfolioItem(
        "tetris.jpg",
        "Tetris (with friends)",
        [
            text("Online Tetris Game | "),
            a("Github", attributes = [href("https://github.com/fg123/tetris")])
        ],
        [
            text("Recreation of the Tetris Friends Facebook game but with no
            ads and is quick to setup. More information can be found on the Github
            page.")
        ],
        ["Javascript"]
    ),
    PortfolioItem(
        "comePlayForMe.jpg",
        "Come Play For Me",
        [
            text("Freelance Project | "),
            a("https://comeplayforme.com/", attributes = [href("https://comeplayforme.com/")])
        ],
        "A freelance website project for a private piano teacher in Vancouver.
        I also created a backend panel system for her to easily change all the content on the website.",
        ["HTML5", "PHP", "CSS", "Javascript", "MySQL"]
    ) // ,
    // PortfolioItem(
    //     "pedalPanic.jpg",
    //     "Pedal Panic: Sky Dash Run",
    //     [
    //         text("Lead Developer | "),
    //         a("Google Play Link", attributes = [href("https://play.google.com/store/apps/details?id=ca.inkpadstudios.pedalpanic")])
    //     ],
    //     [
    //         text("Pedal Panic is a quirky take at a basic concept.
    //         The player must control the character on a unicycle high above the
    //         skies by tilting the phone to keep the character on the planks.
    //         As the time goes on, the game accelerates and a variety of obstacles
    //         and beams are presented to the player that they must overcome."),
    //         portfolioTagLine(inline([
    //             text("Created with "),
    //             a("Inkpad Studios", attributes = [href("https://www.inkpadstudios.ca/")])
    //         ]))
    //     ],
    //     ["C#", "Unity"]
    // )
];

let footer = div(
    uniqueId = "footer",
    styles = [
        "text-align: center",
        "color: #FDFDFD",
        "padding-top: 20px",
        "font-size: 14px",
        cssAppend(
            " a", ["color: #FDFDFD", "text-decoration: none"]
        )
    ],
    content = inline([
        text("Copyright &copy; Felix Guo 2022 | Generated with "),
        a("WendyScript", styles = ["text-decoration: underline!important"],
            attributes = [href("https://github.com/fg123/portfolioWebsite")])
    ])
);

let onClick = createAttributeStruct("onclick");

moreInfoArrow.attributes += onClick('location.hash="#experience"');
moreInfoArrow.styles += cssAppend(":hover", [
    "cursor: pointer"
]);

let sections = [
	generateSection("overview", true, false, [businessCard, moreInfoArrow], [
		"background: url(vancouver.jpg) no-repeat center center",
		"background-size: cover"
	]),
	generateSection("experience", false, true, [sectionHeader("Experience"), generateTimeline(timelineItems)], [
		"background: url(googleBuilding.jpg) no-repeat center center",
		"background-size: cover"
	]),
    generateSection("portfolio", false, true, [sectionHeader("Portfolio", "#000"), generatePortfolio(portfolioItems)], [
        "background: url(lightBackground.png) repeat"
    ]),
    generateSection("contact", false, true, [contactInfo, footer],[
        "background: #333"
    ])
];

generate(
	"index",
	html(
		title = name,
		stylesheets = [
			googleFont("Roboto Slab", "Varela Round", "Raleway", "Open Sans"),
			"main.css",
			"https://use.fontawesome.com/releases/v5.4.2/css/all.css",
			"timeline.css"
		],
        metas = [
            meta("viewport", "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"),
            meta("description", "Felix Guo is a Computer Science and Business student at the University of Waterloo."),
	        meta("author", "Felix Guo")
        ],
        favicon = "icon.png",
		scripts = [
            "zenscroll-min.js",
			"main.js"
		],
		content = sections
	),
    minify = false
);
