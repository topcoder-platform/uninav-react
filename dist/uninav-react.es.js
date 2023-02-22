var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import { jsx } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
function loadUninavLib(url) {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return;
  }
  !function(n, t, e, a, c, i, o) {
    n.TcUnivNavConfig = c;
    n[c] = n[c] || function() {
      var _a;
      (n[c].q = (_a = n[c].q) != null ? _a : []).push(arguments);
    };
    n[c].l = 1 * new Date();
    i = t.createElement(e);
    o = t.getElementsByTagName(e)[0];
    i.async = 1;
    i.type = "module";
    i.src = a;
    o.parentNode.insertBefore(i, o);
  }(window, document, "script", url, "tcUniNav");
}
const loader = '<div style="position: absolute; top: 0; left: 0; bottom: 0; right: 0;display: flex; align-items: center;justify-content: center;overflow:hidden"><svg style="display: block; height: 64px; margin: 0 auto;width: 64px" viewBox="0 0 64 64"><circle style="fill: none; stroke: #149efe; stroke-width: 2" cx="32" cy="32" r="28" id="loading-indicator-circle1"/><circle style="fill: none; stroke: #e3e4e5; stroke-width: 2" cx="32" cy="32" r="6" id="loading-indicator-circle2"/></svg></div>';
const ComponentLoader = (_a) => {
  var _b = _a, {
    placeholderHtml: placeholderHtml2,
    uniNavUrl
  } = _b, props = __objRest(_b, [
    "placeholderHtml",
    "uniNavUrl"
  ]);
  const loadedLib = useRef(false);
  const initialized = useRef(false);
  const elRef = useRef();
  const elUuid = useRef(`${Date.now()}-${Math.random()}`);
  if (!loadedLib.current && typeof window !== "undefined") {
    loadedLib.current = true;
    loadUninavLib(uniNavUrl);
  }
  useEffect(() => {
    if (initialized.current) {
      return;
    }
    initialized.current = true;
    const placeholderEls = [].slice.call(elRef.current.children);
    tcUniNav("init", elUuid.current, { type: props.type, onReady(...args) {
      var _a2;
      placeholderEls.forEach((el) => el.remove());
      (_a2 = props.onReady) == null ? void 0 : _a2.call(props, ...args);
    } });
  }, [props.type, props.onReady]);
  useEffect(() => {
    if (!initialized.current) {
      return;
    }
    tcUniNav("update", elUuid.current, __spreadValues({}, props));
  }, [
    props.type,
    props.toolName,
    props.toolRoot,
    props.fullFooter,
    props.handleNavigation,
    props.onReady,
    props.user,
    props.signIn,
    props.signUp,
    props.signOut,
    props.supportMeta
  ]);
  const placeholder = initialized.current ? "" : placeholderHtml2 != null ? placeholderHtml2 : "";
  return /* @__PURE__ */ jsx(
    "div",
    {
      id: elUuid.current,
      ref: elRef,
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "uninav-ssr-placeholder",
          style: { position: "relative" },
          dangerouslySetInnerHTML: { __html: `<div>${placeholder}${loader}</div>` }
        }
      )
    }
  );
};
const placeholderHtml$2 = (year) => `
  <footer style="background: #0C0C0C;color: #d4d4d4;"><div style="max-width: 1440px;margin: 0 auto;display: flex;align-items: center;padding: 12px 32px;"><span style="font-family: Roboto;font-style: normal;font-weight: 400;font-size: 14px;line-height: 24px;">© ${year} Topcoder</span><div style="display: flex;align-items: center;gap: 8px;margin-left:auto;"><span style="display: flex;"><a style="color:inherit;text-decoration:none;display:flex;" href="https://www.facebook.com/topcoder" target="_blank" rel="noreferrer"><img style="display:block;width:16px;height:16px;" src="https://uni-nav.topcoder-dev.com/v1/assets/icon-fb.svg" alt="Facebook"></a></span><span style="display: flex;"><a style="color:inherit;text-decoration:none;display:flex;" href="https://www.youtube.com/channel/UCFv29ANLT2FQmtvS9DRixNA" target="_blank" rel="noreferrer"><img style="display:block;width:16px;height:16px;" src="https://uni-nav.topcoder-dev.com/v1/assets/icon-yt.svg" alt="YouTube"></a></span><span style="display: flex;"><a style="color:inherit;text-decoration:none;display:flex;" href="https://www.linkedin.com/company/topcoder" target="_blank" rel="noreferrer"><img style="display:block;width:16px;height:16px;" src="https://uni-nav.topcoder-dev.com/v1/assets/icon-ln.svg" alt="LinkedIn"></a></span><span style="display: flex;"><a style="color:inherit;text-decoration:none;display:flex;" href="https://twitter.com/topcoder" target="_blank" rel="noreferrer"><img style="display:block;width:16px;height:16px;" src="https://uni-nav.topcoder-dev.com/v1/assets/icon-tw.svg" alt="Twitter"></a></span><span style="display: flex;"><a style="color:inherit;text-decoration:none;display:flex;" href="https://www.instagram.com/topcoder" target="_blank" rel="noreferrer"><img style="display:block;width:16px;height:16px;" src="https://uni-nav.topcoder-dev.com/v1/assets/icon-insta.svg"alt="Instagram"></a></span><span style="display: flex;"><a style="color:inherit;text-decoration:none;display:flex;" href="https://discord.com/invite/topcoder?ref=navb" target="_blank" rel="noreferrer"><img style="display:block;width:16px;height:16px;" src="https://uni-nav.topcoder-dev.com/v1/assets/icon-discord.svg" alt="Discord"></a></span></div></div></footer>
`;
const FooterNavigation = (props) => {
  return /* @__PURE__ */ jsx(
    ComponentLoader,
    __spreadValues({
      placeholderHtml: placeholderHtml$2(`${new Date().getFullYear()}`),
      type: "footer"
    }, props)
  );
};
function getEnvValue(viteKey) {
  if (!Object.prototype.hasOwnProperty.call({ "VITE_WP_HOST_URL": "", "VITE_CHALLENGE_HOST": "", "VITE_COMMUNITY_HOST": "", "VITE_PACTS_HOST": "", "VITE_FORUM_HOST": "", "VITE_ONLINE_REVIEW_HOST": "", "VITE_PLATFORM_UI_HOST": "", "VITE_TC_API_V5_HOST": "", "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true }, viteKey)) {
    throw new Error(`Config variable '${viteKey}' is missing from your .env file!`);
  }
  const viteValue = { "VITE_WP_HOST_URL": "", "VITE_CHALLENGE_HOST": "", "VITE_COMMUNITY_HOST": "", "VITE_PACTS_HOST": "", "VITE_FORUM_HOST": "", "VITE_ONLINE_REVIEW_HOST": "", "VITE_PLATFORM_UI_HOST": "", "VITE_TC_API_V5_HOST": "", "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true }[viteKey];
  return viteValue;
}
const WP_HOST_URL = getEnvValue("VITE_WP_HOST_URL");
const CHALLENGE_HOST = getEnvValue("VITE_CHALLENGE_HOST");
const COMMUNITY_HOST = getEnvValue("VITE_COMMUNITY_HOST");
const PACTS_HOST = getEnvValue("VITE_PACTS_HOST");
const FORUM_HOST = getEnvValue("VITE_FORUM_HOST");
const ONLINE_REVIEW_HOST = getEnvValue("VITE_ONLINE_REVIEW_HOST");
const PLATFORM_UI_HOST = getEnvValue("VITE_PLATFORM_UI_HOST");
getEnvValue("VITE_TC_API_V5_HOST");
typeof BUILD_IS_PROD !== "undefined" ? BUILD_IS_PROD : true;
function getWordpressUrl(path) {
  const locationPathname = typeof window === "undefined" ? "" : window.location.pathname;
  const pathPrefix = ["staging", "universal-naviga"].find((prefix) => locationPathname.match(new RegExp(`/${prefix}(/|\\?|$)`)));
  return `${WP_HOST_URL}${!!pathPrefix ? `/${pathPrefix}` : ""}${path}`;
}
const navItems = {
  aboutTopcoder: {
    label: "About",
    children: [
      {
        label: "About Topcoder",
        url: getWordpressUrl("/about-us")
      }
    ]
  },
  aboutUs: {
    label: "About Us",
    url: getWordpressUrl("/about-us"),
    description: "20+ years delivering for the enterprise ",
    uiAttr: "to-right"
  },
  announcements: {
    label: "Announcements",
    description: "Important announcements to the Topcoder community.",
    url: `${COMMUNITY_HOST}/community/programs-and-events`
  },
  articles: {
    label: "Articles",
    icon: "articles",
    description: "Get insights and tips about Topcoder",
    url: `${COMMUNITY_HOST}/thrive`
  },
  benefits: {
    label: "Benefits",
    description: "Benefits members receive at Topcoder.",
    url: getWordpressUrl("/talent/benefits")
  },
  bfsi: {
    label: "BFSI",
    description: "BFSI solutions, how Topcoder excels, including case studies.",
    url: getWordpressUrl("/customer/bfsi")
  },
  bookADemo: {
    label: "Book a demo",
    description: "See a demo of how Topcoder can best provide for your business.",
    type: "cta",
    url: "https://go.topcoder.com/book-a-demo/?interest=A%20Demo%20of%20Topcoder",
    target: "_blank"
  },
  careerGrowth: {
    label: "Career Growth",
    description: "Topcoder's profile captures your proven skills increasing employment opportunities.",
    url: getWordpressUrl("/talent/career-growth")
  },
  careers: {
    label: "Careers",
    children: [
      {
        label: "Work at Topcoder",
        url: getWordpressUrl("/jobs")
      }
    ]
  },
  challenges: {
    label: "Challenges",
    description: "Compete with others to solve challenges and earn money.",
    url: `${COMMUNITY_HOST}/community/practice`
  },
  challengesApp: {
    label: "Challenges",
    url: `${COMMUNITY_HOST}/challenges?tracks%5BDS%5D=true&tracks%5BDes%5D=true&tracks%5BDev%5D=true&tracks%5BQA%5D=true&types%5B%5D=CH&types%5B%5D=F2F&types%5B%5D=TSK`,
    icon: "challenges",
    description: "Compete and earn money"
  },
  challengeModel: {
    label: "Challenge Model",
    url: getWordpressUrl("/customer/challenge-model"),
    description: "What makes our challenge model a success."
  },
  communications: {
    label: "Communications",
    description: "Communications solutions, how Topcoder excels, including case studies.",
    url: getWordpressUrl("/customer/communications")
  },
  compete: {
    label: "Compete",
    description: "Competitive programming for fun and to grow your skills & ranking at Topcoder.",
    url: getWordpressUrl("/talent/compete")
  },
  connect: {
    label: "Connect",
    description: "Connect with others at Topcoder.",
    url: getWordpressUrl("/talent/connect")
  },
  customer: {
    label: "Customer",
    description: "Learn how Topcoder can help your business get work done.",
    url: getWordpressUrl("/customer")
  },
  customerFaq: {
    label: "FAQ",
    url: getWordpressUrl("/customer/faq")
  },
  dataAdvisory: {
    label: "Data Advisory",
    description: "Submit work to get advice on how to use data science to improve your business.",
    url: getWordpressUrl("/customer/data-advisory")
  },
  dataExploration: {
    label: "Data Exploration",
    description: "Submit work to gain insights from your data.",
    url: getWordpressUrl("/customer/data-exploration")
  },
  dataScience: {
    label: "Data Science",
    description: "See how Topcoder has delivered Data Science solutions.",
    url: getWordpressUrl("/customer/data-science")
  },
  demo: {
    label: "Book a demo",
    url: "https://go.topcoder.com/book-a-demo/?interest=A%20Demo%20of%20Topcoder",
    type: "cta",
    target: "_blank"
  },
  design: {
    label: "Design",
    description: "See how Topcoder has delivered Design solutions.",
    url: getWordpressUrl("/customer/design")
  },
  development: {
    label: "Development",
    description: "See how Topcoder has delivered Development solutions.",
    url: getWordpressUrl("/customer/development")
  },
  devCenter: {
    label: "Dev Center",
    icon: "dev-center",
    url: `${PLATFORM_UI_HOST}/dev-center`,
    description: "Get help for Topcoder tools"
  },
  discord: {
    label: "Discord",
    description: "Chat with others in the community.",
    url: getWordpressUrl("/talent/discord")
  },
  discordApp: {
    label: "Discord",
    url: "https://discord.com/invite/topcoder",
    icon: "discord",
    description: "Chat live with members"
  },
  earn: {
    label: "Earn",
    description: "How to earn money at Topcoder.",
    url: getWordpressUrl("/talent/earn")
  },
  energyUtilities: {
    label: "Energy / Utilities",
    description: "Energy / utilities solutions, how Topcoder excels, including case studies.",
    url: getWordpressUrl("/customer/energy-utilities")
  },
  events: {
    label: "Events",
    description: "Upcoming Topcoder events.",
    url: `${COMMUNITY_HOST}/community/events`
  },
  expertise: {
    label: "Expertise",
    description: "The areas in which Topcoder delivers successful solutions.",
    url: getWordpressUrl("/customer/expertise")
  },
  findMeData: {
    label: "Find Me Data",
    description: "Submit work to find data sources that can help your business.",
    url: getWordpressUrl("/customer/find-me-data")
  },
  faq: {
    label: "FAQ",
    url: `${COMMUNITY_HOST}/thrive/tracks?track=Topcoder&tax=FAQ&ref=navb`
  },
  forums: {
    label: "Forums",
    url: FORUM_HOST,
    icon: "forums",
    description: "Discuss challenges or questions"
  },
  fullService: {
    label: "Full Service",
    description: "Work with Topcoder experts to craft the exact solution you need.",
    url: getWordpressUrl("/customer/full-service")
  },
  gettingPaid: {
    label: "Getting Paid",
    url: `${COMMUNITY_HOST}/thrive/tracks?track=Topcoder&tax=Getting%20Paid`
  },
  gigs: {
    label: "Gigs",
    description: "Work directly with customers via time-based contracts.",
    url: `${COMMUNITY_HOST}/community/gig-resources`
  },
  gigsApp: {
    label: "Gigs",
    url: "https://www.topcoder.com/gigs",
    icon: "gigs",
    description: "Find freelance gigs"
  },
  healthcare: {
    label: "Healthcare",
    description: "International (non-US) healthcare.",
    url: `${COMMUNITY_HOST}/community/safetywing`
  },
  healthPharma: {
    label: "Health / Pharma",
    description: "Health / pharma solutions, how Topcoder excels, including case studies.",
    url: getWordpressUrl("/customer/health-pharma")
  },
  home: {
    label: "Home",
    url: getWordpressUrl("")
  },
  industries: {
    label: "Industries",
    description: "The industries in which Topcoder delivers successful solutions.",
    url: getWordpressUrl("/customer/industries")
  },
  learn: {
    label: "Learn",
    description: "Learning opportunities provided to Topcoder's members.",
    url: getWordpressUrl("/talent/learn")
  },
  marathonMatches: {
    label: "Marathon Matches",
    description: "Competitions that span days or weeks.",
    url: getWordpressUrl("/talent/marathon-matches")
  },
  marathonMatchesApp: {
    label: "Marathon Matches",
    url: `${CHALLENGE_HOST}/challenges?search=marathon%20match&tracks%5BDS%5D=true&tracks%5BDes%5D=true&tracks%5BDev%5D=true&tracks%5BQA%5D=true&types%5B%5D=CH&types%5B%5D=F2F&types%5B%5D=TSK`,
    icon: "mm",
    description: "Solve hard algorithm problems"
  },
  media: {
    label: "Media",
    children: [
      {
        label: "Blog",
        url: getWordpressUrl("/blog")
      },
      {
        label: "Newsletter",
        url: "https://go.topcoder.com/newsletter",
        target: "_blank"
      },
      {
        label: "Press Room",
        url: getWordpressUrl("/resources")
      },
      {
        label: "Videos",
        url: getWordpressUrl("/videos")
      },
      {
        label: "Whitepapers",
        url: getWordpressUrl("/white-papers")
      },
      {
        label: "Releases",
        url: getWordpressUrl("/releases")
      }
    ]
  },
  partners: {
    label: "Partners",
    description: "Companies Topcoder partners with to deliver high quality solutions.",
    url: getWordpressUrl("/customer/partners")
  },
  payments: {
    label: "Payments",
    url: `${PACTS_HOST}/PactsMemberServlet?module=PaymentHistory`,
    icon: "payments",
    description: "Get paid"
  },
  practice: {
    label: "Practice",
    icon: "practice",
    url: `${CHALLENGE_HOST}/challenges?search=practice&tracks%5BDS%5D=true&tracks%5BDes%5D=true&tracks%5BDev%5D=true&tracks%5BQA%5D=true&types%5B%5D=CH&types%5B%5D=F2F&types%5B%5D=TSK`,
    description: "Learn to compete"
  },
  privacyPolicy: {
    label: "Privacy Policy",
    url: "https://www.topcoder.com/policy"
  },
  publicSector: {
    label: "Public Sector",
    description: "Public sector solutions, how Topcoder excels, including case studies.",
    url: getWordpressUrl("/customer/public-sector")
  },
  qa: {
    label: "QA",
    description: "See how Topcoder has delivered QA solutions.",
    url: getWordpressUrl("/customer/qa")
  },
  rapidDevMatches: {
    label: "Rapid Development Matches",
    description: "Quick competitions you can complete in less than one day.",
    url: getWordpressUrl("/talent/rapid-dev-matches")
  },
  rapidDevMatchesApp: {
    label: "Rapid Dev Matches",
    url: `${CHALLENGE_HOST}/challenges?bucket=openForRegistration&search=Rapid%20Development%20Match&tracks%5BDS%5D=true&tracks%5BDes%5D=true&tracks%5BDev%5D=true&tracks%5BQA%5D=true`,
    icon: "rdm",
    description: "Join fast, fun competitions"
  },
  retail: {
    label: "Retail",
    description: "Retail solutions, how Topcoder excels, including case studies.",
    url: getWordpressUrl("/customer/retail")
  },
  review: {
    label: "Review",
    url: ONLINE_REVIEW_HOST,
    icon: "review",
    description: "Review submissions"
  },
  security: {
    label: "Security",
    description: "How your IP is protected at Topcoder.",
    url: getWordpressUrl("/customer/security")
  },
  selfService: {
    label: "Self Service",
    description: "Submit work directly to Topcoder and get results without having to talk to anyone.",
    url: getWordpressUrl("/customer/self-service")
  },
  selfServiceApp: {
    label: "Self Service Challenges",
    url: `${PLATFORM_UI_HOST}/work`,
    icon: "self-service",
    description: "Launch and manage work"
  },
  singleRoundMatches: {
    label: "Single Round Matches",
    description: "Multi-problem algorithmic competitions where you go head-to-head in an arena.",
    url: getWordpressUrl("/talent/single-round-matches")
  },
  singleRoundMatchesApp: {
    label: "SRMs (Arena)",
    url: "https://www.topcoder.com/community/arena?ref=nav",
    icon: "srm",
    description: "Start competitive programming"
  },
  statistics: {
    label: "Statistics",
    url: `${COMMUNITY_HOST}/community/statistics?tracks[All-pills]=0&tracks[General]=0`
  },
  successStories: {
    label: "Success Stories",
    description: "Browse case studies for solutions Topcoder has successfully delivered.",
    url: getWordpressUrl("/customer/success-stories")
  },
  support: {
    action: "uninav:modals:support",
    label: "Support",
    url: "mailto:support@topcoder.com"
  },
  reportABug: {
    action: "uninav:modals:bug",
    label: "Report a Bug",
    url: "mailto:support@topcoder.com"
  },
  talent: {
    authenticatedUrl: getWordpressUrl("/home"),
    label: "Talent",
    description: "Learn how you can learn, earn, and connect with others in the Topcoder community.",
    url: getWordpressUrl("/talent")
  },
  talentTheCommunity: {
    label: "The Community",
    description: "How as talent at Topcoder you'll be part of a larger community.",
    url: getWordpressUrl("/talent/the-community")
  },
  talkToAnExpert: {
    label: "Talk to an expert",
    description: "Speak with a Topcoder expert to get started.",
    type: "cta",
    url: "https://go.topcoder.com/lets-talk",
    target: "_blank"
  },
  talkToSales: {
    label: "Talk to Sales",
    description: "Speak with a Topcoder expert to get started.",
    url: "https://go.topcoder.com/lets-talk"
  },
  technology: {
    label: "Technology",
    description: "Technology solutions, how Topcoder excels, including case studies.",
    url: getWordpressUrl("/customer/technology")
  },
  theCommunity: {
    label: "The Community",
    description: "How the Topcoder community provides value to your business.",
    url: getWordpressUrl("/customer/the-community")
  },
  timeline: {
    label: "Timeline",
    description: "An interactive timeline wall showing Topcoder's history.",
    url: `${COMMUNITY_HOST}/community/timeline-wall`
  },
  topcoderAcademy: {
    label: "Topcoder Academy",
    description: "Take courses, earn certificates, and grow your proven skillset to earn at Topcoder.",
    url: getWordpressUrl("/talent/learn")
  },
  topcoderAcademyApp: {
    label: "Topcoder Academy",
    url: `${PLATFORM_UI_HOST}/learn`,
    icon: "tcacademy",
    description: "Learn new skills"
  },
  topcoderOpen: {
    label: "Topcoder Open",
    description: "The ultimate competitive tournament - the big event!",
    url: `${COMMUNITY_HOST}/community/member-programs/topcoder-open`
  },
  topCrowd: {
    description: "Engage and reward your workforce to maximize productivity.",
    label: "TopCrowd",
    url: getWordpressUrl("/customer/topcrowd")
  },
  topCrowdApp: {
    description: "Engage and reward your workforce",
    icon: "topcrowd",
    label: "TopCrowd",
    url: "https://topcrowd.net"
  },
  websiteDesign: {
    label: "Website Design",
    description: "Work directly with the Topcoder community to design your website.",
    url: getWordpressUrl("/customer/website-design")
  },
  whyTopcoder: {
    label: "Why Topcoder",
    description: "How Topcoder provides hiqh quality, secure solutions.",
    url: getWordpressUrl("/customer/why-topcoder")
  }
};
const marketingNavItems = {
  children: [
    __spreadProps(__spreadValues({}, navItems.customer), {
      children: [
        __spreadProps(__spreadValues({}, navItems.whyTopcoder), {
          children: [
            navItems.theCommunity,
            navItems.challengeModel,
            __spreadProps(__spreadValues({}, navItems.expertise), {
              children: [
                navItems.dataScience,
                navItems.design,
                navItems.development,
                navItems.qa
              ]
            }),
            __spreadProps(__spreadValues({}, navItems.industries), {
              children: [
                navItems.bfsi,
                navItems.communications,
                navItems.energyUtilities,
                navItems.healthPharma,
                navItems.publicSector,
                navItems.retail,
                navItems.technology
              ]
            }),
            navItems.partners,
            navItems.security,
            navItems.successStories
          ]
        }),
        navItems.fullService,
        __spreadProps(__spreadValues({}, navItems.selfService), {
          children: [
            navItems.dataAdvisory,
            navItems.findMeData,
            navItems.dataExploration,
            navItems.websiteDesign
          ]
        }),
        navItems.topCrowd,
        navItems.talkToAnExpert,
        navItems.bookADemo
      ]
    }),
    __spreadProps(__spreadValues({}, navItems.talent), {
      children: [
        navItems.talentTheCommunity,
        __spreadProps(__spreadValues({}, navItems.learn), {
          children: [
            navItems.topcoderAcademyApp,
            __spreadProps(__spreadValues({}, navItems.articles), {
              url: `${navItems.articles.url}?navTool=marketing`
            })
          ]
        }),
        __spreadProps(__spreadValues({}, navItems.earn), {
          children: [
            navItems.challenges,
            navItems.gigs
          ]
        }),
        __spreadProps(__spreadValues({}, navItems.compete), {
          children: [
            navItems.marathonMatches,
            navItems.rapidDevMatches,
            navItems.singleRoundMatches
          ]
        }),
        __spreadProps(__spreadValues({}, navItems.connect), {
          children: [
            navItems.announcements,
            navItems.events,
            navItems.topcoderOpen,
            navItems.discord,
            navItems.timeline
          ]
        }),
        __spreadProps(__spreadValues({}, navItems.benefits), {
          children: [
            navItems.healthcare,
            navItems.careerGrowth
          ]
        })
      ]
    }),
    __spreadValues({}, navItems.aboutUs)
  ]
};
function escapeRegExp(str) {
  return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
const getPathname = (url) => {
  var _a, _b;
  try {
    return new URL(url).pathname;
  } catch (e) {
    return (_b = ((_a = url.match(/^[^?#]+/)) != null ? _a : [])[0]) != null ? _b : url;
  }
};
const routeMatchesUrl = (url, route) => {
  const currentLocPathname = getPathname(url);
  const navItemPathname = getPathname(route.url);
  return !!currentLocPathname.match(new RegExp(`^${escapeRegExp(navItemPathname)}/?$`, "i"));
};
const matchRoutes = (navMenu, path) => {
  return function parseNavMenu(l, { children = [] }) {
    if (l >= 9) {
      return;
    }
    for (let child of children) {
      if (routeMatchesUrl(path, child)) {
        return child;
      }
      const trail = parseNavMenu(l + 1, child);
      if (trail) {
        return [].concat(child, trail);
      }
    }
  }(0, navMenu);
};
const level2Html = `
<div class="unndeskonly" style="background: #2A2A2A;height:50px;width:100%;"></div>
`;
const level3Html = `
<div class="unndeskonly" style="background: #F4F4F4;height:48px;width:100%;"></div>
`;
const placeholderHtml$1 = (level) => `
<nav class="tc-uninav-placeholder" style="background: #0C0C0C; color: #aaa; position: relative; display: flex; align-items: center;"><style>@media (max-width: 767px){.unndeskonly{display: none!important;}}@media (min-width: 768px){.unnmblonly{display: none!important;}}:where(.tc-uninav-placeholder) *{box-sizing: border-box;}</style><div class="unndeskonly" style="max-width: 1440px;padding: 18px 32px;display: flex;align-items: center;flex: 1 1 auto;margin: 0 auto;"><a target="_top" style="color: #aaa;display: flex;margin-right: 48px;flex: 0 0 auto;text-decoration: none;"><img src="https://uni-nav.topcoder-dev.com/v1/assets/logo.svg" alt="Topcoder" style="height: 22px; display: block;"></a><div style="display: flex; align-items: center; gap: 32px; flex: 1 0 auto;"></div></div><div class="unnmblonly"style="align-items: center; display: flex; flex: 1 1 auto; height: 48px; padding: 12px 16px;"><a target="_top" style="color: inherit; display: flex; flex: 0 0 auto; margin: 0px 20px 0px 0px;"><img src="https://uni-nav.topcoder-dev.com/v1/assets/logo.min.svg" class="" alt="Topcoder" style="color: inherit; height: 17px; "></a><div style="color: inherit; display: flex; height: 32px; margin: -4px; width: 32px;"><img src="https://uni-nav.topcoder-dev.com/v1/assets/icon-menu.svg" alt="" class="" style="display: block;height: 20px; margin: 6px 4px; width: 24px;"></div></div></nav>
${level >= 1 ? level2Html : ""}
${level >= 2 ? level3Html : ""}
`;
const MarketingNavigation = (props) => {
  const url = getPathname(props.currentLocation);
  const matched = [].concat(matchRoutes(marketingNavItems, url)).filter(Boolean);
  return /* @__PURE__ */ jsx(
    ComponentLoader,
    __spreadValues({
      placeholderHtml: placeholderHtml$1(matched == null ? void 0 : matched.length),
      type: "marketing"
    }, props)
  );
};
const placeholderHtml = (toolName) => `
<nav class="tc-uninav-placeholder" style="background: #0C0C0C; color: #aaa; position: relative; display: flex; align-items: center;"><style>@media (max-width: 767px){.unndeskonly{display: none!important;}}@media (min-width: 768px){.unnmblonly{display: none!important;}}:where(.tc-uninav-placeholder) *{box-sizing: border-box;}</style><div class="unndeskonly" style="padding: 18px 32px;max-width: 1440px;display: flex;align-items: center;flex: 1 1 auto;margin: 0 auto;"><a style="text-decoration:none;display: flex;margin-right: 48px;flex: 0 0 auto;"><img src="https://uni-nav.topcoder-dev.com/v1/assets/logo.min.svg" alt="Topcoder" style="display: block;height: 22px;"></a><div style="position:relative;background:#767676;width:2px;height:60px;margin:-18px 0;z-index:1;"><span style="display:flex;align-items:center;justify-content:center;width:25px;height:25px;border:1px solid #767676;border-radius:25px;background:#2A2A2A;transform:translate(-50%,-50%);position:absolute;top:50%;left:50%;"><svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.334413 8.26569C0.0219931 7.95327 0.0219931 7.44673 0.334413 7.13432L2.96873 4.5L0.334412 1.86569C0.0219928 1.55327 0.0219928 1.04673 0.334412 0.734315C0.646832 0.421895 1.15336 0.421895 1.46578 0.734315L4.66578 3.93431C4.9782 4.24673 4.9782 4.75327 4.66578 5.06569L1.46578 8.26569C1.15336 8.57811 0.646832 8.5781 0.334413 8.26569Z" fill="white"></path></svg></span></div><div style="background:#0C0C0C;width:100%;padding:18px 48px;margin:-18px 0;max-height:100%;display:flex;align-items:center;"><a style="color:#82eacf;text-decoration:none;font-family: Barlow Condensed,BarlowCondensed;font-style:normal;font-weight:500;font-size:20px;line-height:24px;text-transform:uppercase;">${toolName}</a></div></div><div class="unnmblonly" style="align-items: center; display: flex; flex: 1 1 auto; height: 48px; padding: 12px 16px;"><a target="_top" style="color: inherit; display: flex; flex: 0 0 auto; margin: 0px 20px 0px 0px;"><img src="https://uni-nav.topcoder-dev.com/v1/assets/logo.min.svg" class="" alt="Topcoder" style="color: inherit; height: 17px; "></a><div style="color: inherit; display: flex; height: 32px; margin: -4px; width: 32px;"><img src="https://uni-nav.topcoder-dev.com/v1/assets/icon-menu.svg" alt="" class="" style="display: block;height: 20px; margin: 6px 4px; width: 24px;"></div></div></nav>
`;
const ToolNavigation = (props) => {
  return /* @__PURE__ */ jsx(
    ComponentLoader,
    __spreadValues({
      placeholderHtml: placeholderHtml(props.toolName),
      type: "tool"
    }, props)
  );
};
export {
  FooterNavigation,
  MarketingNavigation,
  ToolNavigation
};
