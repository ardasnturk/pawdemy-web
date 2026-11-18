import type { BaseDictionary } from "./types";

export const en: BaseDictionary = {
  meta: {
    title: "{app} – Pet Care, Training & Memories for iPhone",
    description:
      "{app} keeps everything about your dogs, cats, rabbits, birds, small pets, fish and reptiles in one place: care plans and reminders, daily log, budgets, training for every age, photo memories, nearby vets and answers from Apple Intelligence. Private, on your iPhone.",
  },
  nav: {
    features: "Features",
    care: "Care",
    memories: "Memories",
    pro: "PRO",
    privacy: "Privacy",
    faq: "FAQ",
    download: "Download",
    comingSoon: "Coming soon",
    language: "Language",
    menu: "Menu",
    skip: "Skip to content",
  },
  appStore: { small: "Download on the", large: "App Store", soonSmall: "Coming soon to the", soonLarge: "App Store" },
  footer: {
    tagline: "Everything about your pets in one calm, private app for iPhone, shared with the people who care for them.",
    product: "Product",
    legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    support: "Support",
    rights: "All rights reserved.",
    trademarks: "Apple, iPhone, iCloud, AirTag, Find My, Apple Intelligence, Image Playground and App Store are trademarks of Apple Inc.",
  },
  legal: {
    updated: "Last updated: November 14, 2026",
    back: "Back to home",
    privacyTitle: "Privacy Policy",
    privacyIntro:
      "This policy explains how the {app} app for iPhone (“{app}”, “the app”), developed by {developer}, handles your information. In short: everything you enter about your pets, including their photos, stays on your iPhone. The app has no accounts, no ads and no analytics, and the developer runs no server. Information leaves your device only if you choose iCloud backup or family sharing (stored in your own iCloud), for purchases of {app} PRO, when the app asks Apple Maps for places, and when it downloads the public list of partner vets and shops.",
    privacySections: [
      {
        title: "1. Data we collect",
        paragraphs: [
          "The developer does not collect or receive any of your data. {app} has no user accounts, no ads, and no analytics or tracking. Your pets' profiles, health records, daily log, expenses, training progress and photos are stored in a database on your iPhone.",
          "The app contains one third-party component: RevenueCat, used only to manage {app} PRO purchases (section 7). It never receives your pets' information or photos.",
        ],
      },
      {
        title: "2. Photos, camera and location",
        paragraphs: [
          "Photos you add from your library or take with the in-app camera are stored by {app} on your iPhone. When you add a photo, the app reads the date and place saved in the photo so your memory book can show when and where it was taken.",
          "When you take a photo in the app, {app} asks for your location once, only while you use the app, to remember where the photo was taken. To turn a position into a place name such as a town, the app asks Apple Maps; this request is handled by Apple under Apple's privacy policy. Location is never used at any other time.",
          "Background removal, photo enhancement and filters run on your iPhone. Image Playground illustrations are created by Apple on your device.",
        ],
      },
      {
        title: "3. Ask Pawdemy and Apple Intelligence",
        paragraphs: [
          "On iPhones with Apple Intelligence, answers in Ask Pawdemy, the welcome note after setup and the subtitles of memory book chapters are written by Apple's on-device model. Your questions and your pets' details are processed on your iPhone and are not sent to the developer or to anyone else.",
          "Answers are general information, can be wrong and are not veterinary advice.",
        ],
      },
      {
        title: "4. iCloud backup",
        paragraphs: [
          "iCloud backup is off until you turn it on, during setup or in Settings › Family & iCloud. When it is on, your data is mirrored to your private iCloud database through Apple's CloudKit, which also keeps your own devices in sync. Only you can read it; the developer cannot. Turning it off keeps everything on your iPhone and stops syncing. iCloud is covered by Apple's privacy policy.",
        ],
      },
      {
        title: "5. Family sharing",
        paragraphs: [
          "Family sharing is optional and needs iCloud backup. When you invite people, your family's pets and all of their records and photos are shared with the people you invite, through Apple's iCloud sharing. They can see and change them, and what they log appears for you. The name you enter in the app is shown next to what you log.",
          "You choose who is invited and can remove people at any time in Settings › Family & iCloud. Someone who leaves a family has its data removed from their iPhone.",
        ],
      },
      {
        title: "6. Notifications and AirTag",
        paragraphs: [
          "Reminders for vaccines, treatments and potty breaks are local notifications scheduled on your iPhone. {app} does not read the location of an AirTag: it opens Apple's Find My app, where you see it.",
        ],
      },
      {
        title: "7. Nearby vets, pet shops and partners",
        paragraphs: [
          "When you open Nearby, {app} asks for your location while you use the app and asks Apple Maps for vets and pet shops around you. These searches are handled by Apple under Apple's privacy policy; your location is not sent to the developer.",
          "The list of partner vets and pet shops is a public file the app downloads from pawly.ardasnturk.com, which is hosted on GitHub Pages. Nothing about you or your pets is sent with this request; as with any website, the host can see your IP address.",
          "Partner discount codes are App Store offer codes redeemed with Apple. Partners do not learn whether or when you used a code.",
        ],
      },
      {
        title: "8. Purchases and RevenueCat",
        paragraphs: [
          "{app} PRO is offered as an in-app purchase: an auto-renewing subscription or a one-time purchase. Purchases are processed by Apple through your Apple Account. The developer never receives your payment details.",
          "To know whether PRO is active, the app uses RevenueCat, a third-party purchase SDK. RevenueCat receives purchase and transaction information and an anonymous app user ID. It does not receive your name, email address, your pets' data or photos, and it is not used for advertising or tracking. RevenueCat's privacy policy: https://www.revenuecat.com/privacy",
          "The free first week of PRO needs no payment and no sign-up. The date it started is stored on your iPhone.",
        ],
      },
      {
        title: "9. Your choices and deleting your data",
        paragraphs: [
          "You can delete any record, photo or pet in the app. Deleting the app removes the data stored on your iPhone; data in your iCloud stays until you delete it in Settings › your name › iCloud. Camera, photo and location access can be changed at any time in the Settings app. Subscriptions are managed and cancelled in your App Store account settings.",
        ],
      },
      {
        title: "10. Children",
        paragraphs: ["{app} is not directed at children under 13 and does not knowingly collect personal data from them."],
      },
      {
        title: "11. Changes and contact",
        paragraphs: ["If this policy changes, we will update this page and the date above. Questions? Write to {email}."],
      },
    ],
    termsTitle: "Terms of Use",
    termsIntro: "{app} is licensed to you under Apple's Standard Licensed Application End User License Agreement (EULA), together with the following terms.",
    termsSections: [
      {
        title: "1. License",
        paragraphs: ["Your use of {app} is governed by Apple's Standard EULA: https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"],
      },
      {
        title: "2. {app} PRO, subscriptions and purchases",
        paragraphs: [
          "One pet's profile, the care plan with reminders, the daily log, expenses, the first two training stages and up to 30 photos are free. {app} PRO adds family sharing, Ask Pawdemy, the animated memory book, the photo studio, more than one pet, unlimited photos, the full training plan and insights. Every new install includes PRO free for the first week; it needs no payment and does not turn into a paid plan by itself.",
          "PRO is available as a yearly, 3-month, monthly or weekly auto-renewing subscription, or as a one-time lifetime purchase. New users may see a one-time welcome offer. The price of each plan is shown in the app before you buy, and payment is charged to your Apple Account when you confirm.",
          "Subscriptions renew automatically at the end of each period until you cancel. To avoid being charged for the next period, cancel at least 24 hours before it ends, in your App Store account settings. Deleting the app does not cancel a subscription. Refunds are handled by Apple. Restore Purchases in the app restores PRO on a device signed in to the same Apple Account.",
        ],
      },
      {
        title: "3. Not veterinary advice",
        paragraphs: [
          "{app} helps you organise your pets' care. The vaccine plan follows a common schedule and your vet may change it. Training lessons, the life-stage guide, the potty timer and answers in Ask Pawdemy are general information and can be wrong. Nothing in the app is veterinary advice, diagnosis or treatment.",
          "If your pet seems unwell, is injured or may have eaten something harmful, contact a vet straight away.",
        ],
      },
      {
        title: "4. Your data",
        paragraphs: [
          "Your data belongs to you and stays on your iPhone unless you turn on iCloud backup or family sharing. You are responsible for whom you invite to your family. How {app} handles data is described in the Privacy Policy.",
        ],
      },
      {
        title: "5. Partner codes",
        paragraphs: [
          "Partner vets and shops are independent businesses. Their discount codes are App Store offer codes: the discount, the plan it applies to and its end date are shown by Apple before you confirm, and Apple's terms apply. A code can be used once per Apple Account and may run out or expire.",
        ],
      },
      { title: "6. Contact", paragraphs: ["Questions about these terms: {email}."] },
    ],
  },
  support: {
    title: "Support",
    intro: "Something not working, or an idea to make {app} better? We'd love to hear from you.",
    emailLabel: "Email us",
    emailHint: "Please include your iPhone model and iOS version if you are reporting a problem.",
    topics: [
      { title: "Back up with iCloud", text: "Open Settings › Family & iCloud and turn on iCloud Backup & Sync. You need to be signed in to iCloud on your iPhone. Your data goes to your own private iCloud." },
      { title: "Invite your family", text: "With iCloud backup on and {app} PRO, open Settings › Family & iCloud › Invite Family Member and send the link. When they open it on their iPhone, your pets appear in their {app}." },
      { title: "Reminders don't arrive", text: "Allow notifications for {app} in the Settings app › Notifications. Reminders arrive three days before and on the day something is due, for items with Remind me turned on." },
      { title: "Ask Pawdemy isn't available", text: "Ask Pawdemy needs iOS 26 on an iPhone that supports Apple Intelligence, with Apple Intelligence turned on in Settings › Apple Intelligence & Siri. Everything else works on every supported iPhone." },
      { title: "The background isn't removed", text: "Background removal works best on a photo where the pet is clearly separate from the background. It runs on your iPhone, so nothing is uploaded." },
      { title: "Where is my AirTag?", text: "Apple doesn't let apps read AirTag locations. Tap Open Find My on the Home screen to see your pet's AirTag in Find My, and use Lost Poster if your pet is missing." },
      { title: "Use a partner code", text: "Open Nearby › Partners or Settings › Redeem Partner Code and enter the code from your vet or pet shop, or open the link they gave you. The discount is shown by Apple before you confirm." },
      { title: "Nearby shows nothing", text: "Allow location for {app} in Settings › Privacy & Security › Location Services, or move the map and tap Search This Area." },
      { title: "Become a partner", text: "Are you a vet, pet shop or groomer? Write to {email} to give your customers a {app} PRO discount and be listed under Nearby." },
      { title: "Restore purchases", text: "In {app}, open the {app} PRO screen and tap Restore Purchases, signed in to the Apple Account you bought PRO with." },
      { title: "Manage or cancel a subscription", text: "Open the Settings app › your name › Subscriptions. Deleting the app does not cancel a subscription. For refunds, contact Apple." },
    ],
  },
};
