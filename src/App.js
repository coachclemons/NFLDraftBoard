import { useState } from "react";

const players = [
  {
    rank: 1, name: "Jordan Tyson", school: "Arizona State", height: "6'2\"", weight: "203 lbs", fortyTime: "4.43*",
    grade: "A+", tier: "Elite", scouted: true,
    recentStats: "2024: 75 rec · 1,101 yds · 10 TD  |  2025: 61 rec · 711 yds · 8 TD",
    industryView: "Fast with easy acceleration and adequate size. Medical concerns flagged by multiple teams — has dealt with missed time and injuries every season. No specific injury but lack of durability is a concern for team evaluators. Top-16 projection.",
    summary: "Best receiver in the class — true WR1 who can change a game. If healthy he is the unquestioned pick at the top of this class.",
    strengths: ["Extremely explosive for his size","Some of the best hands in the draft","Some of the best route running in the draft","Elite RAC/YAC ability"],
    concerns: ["Hamstring and scar tissue injuries — can linger, worth monitoring closely","Prior shoulder and knee injuries (doesn't appear impacted on film)"],
    comp: null, stats: { Speed: null, RouteRunning: null, Hands: null, RAC: null },
    notes: "Injury history is the only thing keeping scouts up at night. Talent is undeniable.", flags: ["⚠️ Injury Risk"],
  },
  {
    rank: 2, name: "Cardell Tate", school: "Ohio State", height: "6'2\"", weight: "192 lbs", fortyTime: "4.53",
    grade: "A", tier: "Elite", scouted: true,
    recentStats: "2024: 52 rec · 733 yds · 4 TD  |  2025: 51 rec · 875 yds · 9 TD",
    industryView: "Has a size mismatch and is very adept at winning contested catches. Runs well and able to challenge defenses downfield. Top-20 projection.",
    summary: "Probably the best route runner in the draft. Prototypical Ohio State receiver — polished, NFL-ready day one. Can step in immediately as a team's WR1.",
    strengths: ["Elite route runner — best in the class","Consistently creates separation through leverage and deep understanding of routes","Elite hands, reliable in all situations","NFL-ready day one"],
    concerns: ["RAC/YAC: once he catches the ball he is going down","Not physical, won't lower his shoulder","Limited wiggle to make people miss","Could drop on athletically focused boards"],
    comp: null, stats: { Speed: null, RouteRunning: 10, Hands: 10, RAC: 3 },
    notes: "Separation and hands are genuinely elite traits that translate immediately at the NFL level.", flags: ["⚠️ RAC Concern"],
  },
  {
    rank: 3, name: "Chris Brazzle II", school: "Tennessee", height: "6'4\"", weight: "198 lbs", fortyTime: "4.37",
    grade: "A", tier: "Elite", scouted: true,
    recentStats: "2023: 44 rec · 711 yds · 5 TD  |  2024: 29 rec · 333 yds · 2 TD  |  2025: 62 rec · 1,017 yds · 9 TD",
    industryView: "A size mismatch problem with upside to be better as he gains experience. Showed excellent size and speed at the combine. Industry projects 3rd-4th round — significantly undervalued on most boards.",
    summary: "Very fast with great routes especially for his size. Super smooth release, doesn't overcomplicate his routes. Once he creates separation he stays open.",
    strengths: ["Elite choppy feet release — one step of separation and he is gone","Very explosive off the line","Uses leverage extremely well","Route running nuance impressive for his size","Defenders played off him due to his incredible speed","Not Troy Franklin type skinny — has some build to him"],
    concerns: ["Defenders often played off — could limit contested catch data"],
    comp: null, stats: { Speed: 9, RouteRunning: 9, Hands: 9, RAC: null },
    notes: "His release alone can absolutely burn you. Committed to his routes without overcomplicating them.", flags: [],
  },
  {
    rank: 4, name: "Omar Cooper", school: "Indiana", height: "6'0 1/8\"", weight: "199 lbs", fortyTime: "4.42",
    grade: "A-", tier: "1st Round", scouted: true,
    extra: "30 1/4\" arm | 9 5/8\" hands | 37\" vert | 1.55 10-yd split",
    recentStats: "2024: 28 rec · 594 yds · 7 TD  |  2025: 69 rec · 937 yds · 13 TD  |  20 TDs since start of 2024",
    industryView: "Shifty and dangerous receiver for Indiana and a reliable target. Multiple team sources had Cooper graded on Day 2. 13 TDs and 4.42 speed make him a legitimate Day 2 target.",
    summary: "Elite route runner and a freak with the ball in his hands. Welcomes physical play and wins through contact — versatile enough to be more than a slot option. Creates lateral separation when beating press. Digs hard through the drive phase before snapping his head around. First and second acceleration catches defenders completely off-guard. Explosive leaper who can pluck high throws at their apex. Rugged runner who can break free from multiple tacklers.",
    strengths: [
      "Elite route runner — one of the best in this class",
      "Freak with the ball in his hands — dangerous every time he touches it",
      "Welcomes physical play — wins through contact, not just speed",
      "Creates lateral separation vs press coverage",
      "Digs hard through drive phase before snapping head around — DBs can't jump the route",
      "First and second gear acceleration catches defenders off-guard",
      "Explosive leaper — 37\" vertical, plucks high throws at their apex",
      "Rugged runner after the catch — breaks free from multiple tacklers",
      "20 TDs since start of 2024 — elite production efficiency",
      "Versatile — more than just a slot receiver",
    ],
    concerns: [
      "6'0\" 199 lbs — not a big body receiver, size will be questioned at the next level",
      "30 1/4\" arm length is on the shorter side",
    ],
    comp: null, stats: { Speed: 9, RouteRunning: 10, Hands: 9, RAC: 9 },
    notes: "20 TDs in two seasons, 4.42 speed, 37\" vertical, and elite route running. The acceleration is the separator — first and second gear are both elite. Significantly undervalued by industry if Day 2 is the consensus.",
    flags: [],
  },
  {
    rank: 5, name: "Denzel Boston", school: "Washington", height: "6'4\"", weight: "212 lbs", fortyTime: "4.49*",
    grade: "A-", tier: "1st Round", scouted: true,
    recentStats: "2024: 63 rec · 834 yds · 9 TD  |  2025: 62 rec · 881 yds · 11 TD",
    industryView: "Has mismatch size and looks like he is just scratching the surface of his potential. Some sources feel he is a really good No. 2 receiver similar to Tee Higgins. Helped himself with a good pro day workout. Projected 1st-2nd round.",
    summary: "Jalen Coker vibes — physical, reliable, won't make you miss but doesn't need to. Truly elite and powerful hands — one of the strongest in the class.",
    strengths: ["Truly elite, powerful hands — among the strongest in the class","Catches in traffic with ease","Great start/stop speed for his size","Excellent route nuance — manipulates corners with leverage","Uses body leverage masterfully to create separation"],
    concerns: ["Not going to make you miss in the open field","Punt return: basically just a fair catcher, rarely returned"],
    comp: "Jalen Coker", stats: { Speed: null, RouteRunning: null, Hands: 10, RAC: 4 },
    notes: "Knows how to use his body. Gets the corner going one way then breaks into the actual route consistently.", flags: [],
  },
  {
    rank: 6, name: "De'Zhaun Stribling", school: "Mississippi", height: "6'2 1/8\"", weight: "207 lbs", fortyTime: "4.36",
    grade: "B+", tier: "2nd/3rd Round", scouted: true,
    extra: "31 5/8\" arm | 10\" hands | 36\" vert | 10'7\" broad | 1.53 10-yd split",
    recentStats: "2025: 55 rec · 811 yds · 6 TD",
    industryView: "Projected Day 2-3. Size-speed combo at 6'2\" and 4.36 will attract attention. Tested well at the combine.",
    summary: "Good explosiveness with great ability to avoid being pressed — corners keep trying to press him but he has such a great release they rarely get their hands on him. Once he gets on the outside shoulder he creates enough separation on the catch consistently. Uses his hands extremely well, rarely catches with his body and goes to the ball rather than letting it come back to him. Patient on deep balls. Justin Jefferson route running vibes on his double move — plants and accelerates without overselling it. Very explosive overall. Fights hard for 3-5 extra yards after the catch.",
    strengths: [
      "4.36 speed — elite for his size",
      "Great release — corners can't get their hands on him despite repeatedly trying to press",
      "Uses his hands well on routes to create separation without drawing flags",
      "Goes to the ball with his hands — rarely body catches",
      "Patient on deep balls — great extension on poorly thrown passes",
      "Justin Jefferson vibes on double move — plants and accelerates without overselling",
      "Pushes to the defender's outside shoulder before cutting back inside — great awareness",
      "Fights for 3-5 extra yards after the catch consistently",
      "Tested against good corners and still made plays",
      "Good quickness after the catch to get upfield",
      "Willing blocker — physical and keeps defenders engaged when he commits",
    ],
    concerns: [
      "A little choppy when breaking routes trying to get off his man",
      "Takes a few too many steps on curl route break",
      "Can take plays off — when he turns the gas on he looks elite, but not always on",
      "Didn't see him often extending the play when his route doesn't originally work",
      "Go routes became predictable — team leaned on them too heavily which exposed him",
      "Not as physical in pure jump ball situations — relies more on speed and quickness",
    ],
    comp: "Justin Jefferson (route running style)",
    stats: { Speed: 9, RouteRunning: 8, Hands: 9, RAC: 6 },
    notes: "The Jefferson comp on the double move is real — plants and accelerates without the big sell. Only one drop in 2025 on 57 targets is elite hands reliability. The motor concern is the one thing keeping this grade from being higher.",
    flags: ["⚠️ Effort Concern"],
  },
  {
    rank: 7, name: "Ted Hurst", school: "Georgia State", height: "6'4\"", weight: "206 lbs", fortyTime: "4.42",
    grade: "A-", tier: "1st Round", scouted: true,
    recentStats: "2025: 71 rec · 1,004 yds · 6 TD",
    industryView: "Earned a Senior Bowl invitation. Good size and length for taking on cornerbacks. Respectable at the Senior Bowl and ran well at the combine. Projected 4th-6th round by industry — significantly undervalued on our board.",
    extra: "32 5/8\" arm | 36.5\" vert | 11'3\" broad | 1.55 10-yd split",
    summary: "Extremely quick first step for his size. Elite start off the line and release — makes his step and goes, doesn't try to get too fancy. Great curl route runner. Outside release is nice with great explosion breaking to the DB's shoulder and creates separation well. Strong hands, goes up for the ball well. Brian Thomas Jr. vibes without the RAC. Could be a great red zone threat with his release and size.",
    strengths: [
      "Elite first step and acceleration off the line for his size",
      "Excellent outside release — explosive break to DB shoulder, creates separation well",
      "Runs a great curl route",
      "Doesn't overcomplicate routes — makes his step and goes",
      "Strong hands, goes up for the ball well",
      "Does a great job getting his body in front of DBs",
      "Fights for more yards after the catch",
      "Looks faster than his 4.42 on tape — elite acceleration",
      "Great red zone profile given size and release",
    ],
    concerns: [
      "Once the ball is in his hands he looks slower — effort to run shows his size",
      "RAC is not special — jukes won't fool NFL defenders",
      "Beat up a lot on lower talent more than most receivers in this draft",
      "Would have loved to see him tested at a bigger school",
      "QB wasn't the best with placement — some contested catch opportunities were poor throws",
      "Didn't go up as high for the ball as his size suggests he should",
    ],
    comp: "Brian Thomas Jr. (without the RAC)",
    stats: { Speed: 9, RouteRunning: 9, Hands: 8, RAC: 5 },
    notes: "Speed and route running grades are for his size specifically. Acceleration looks elite on tape. Level of competition is the real question mark holding him back on most boards.",
    flags: ["⚠️ Competition Level"],
  },
  {
    rank: 8, name: "Malachi Lemon", school: "USC", height: "5'11 1/8\"", weight: "192 lbs", fortyTime: "4.46*",
    grade: "A-", tier: "1st Round", scouted: true,
    extra: "30 1/2\" arm | 8 3/4\" hands",
    recentStats: "2024: 52 rec · 764 yds · 3 TD  |  2025: 79 rec · 1,156 yds · 11 TD",
    industryView: "Could come in and be one of the top 10 slots in the league on Day 1 of camp. Great hands and fiercely competitive. 1st round projection. Hurt himself with poor combine interviews.",
    summary: "Efficient press release with early acceleration to bypass coverage. Manipulates defenders out of position with route acumen and snaps off out-breaking routes at crisp angles. Ball-tracking adjustments and catch timing are elite. Ridiculous grip strength once the football hits his hands. Elevates toughness and focus when the catch is contested. Love his effort and quick area burst and ability to go up and make big catches despite his size. Willing run blocker who gives legitimate effort — more willing than much bigger receivers.",
    strengths: [
      "Efficient press release with early acceleration — bypasses coverage cleanly",
      "Manipulates defenders out of position with route acumen",
      "Snaps off out-breaking routes at crisp angles",
      "Above-average burst out of turns to gain separation",
      "Elite ball-tracking adjustments and catch timing",
      "Ridiculous grip strength — once it hits his hands it's not coming out",
      "Elevates toughness and focus on contested catches",
      "Good patience with late catch adjustments to save catch space",
      "Consistent boundary awareness — drops both feet in bounds near the sideline",
      "Willing run blocker who gives legitimate effort",
      "Quick area burst and ability to go up for big catches despite size",
      "Fiercely competitive — effort is never a question",
    ],
    concerns: [
      "Appears quicker than fast on vertical routes — not a burner down the field",
      "Can be a little slow disengaging once captured underneath",
      "Relatively ordinary after the catch — won't wow you with RAC",
      "Needs runway to break off comebacks out of the drive phase",
      "8 3/4\" hands on the smaller side — grip strength compensates but worth noting",
      "Poor combine interviews hurt his stock",
    ],
    comp: null,
    stats: { Speed: 7, RouteRunning: 9, Hands: 9, RAC: 6 },
    notes: "Top 10 slot on Day 1 is a real projection — the route running and hands are that good. The combine interview concerns are a non-football issue that shouldn't affect on-field grade but will affect where teams take him.",
    flags: [],
  },
  {
    rank: 9, name: "KC Concepcion", school: "Texas A&M", height: "5'11\"", weight: "196 lbs", fortyTime: "4.64",
    grade: "B", tier: "2nd/3rd Round", scouted: true,
    recentStats: "2023: 71 rec · 839 yds · 10 TD + 320 rush yds (NC State)  |  2024: 53 rec · 460 yds · 6 TD  |  2025: 61 rec · 919 yds · 9 TD + 2 punt return TDs",
    industryView: "Quick and shifty receiver. Returned two punts for touchdowns in 2025. Showed more production at A&M. Industry projects 1st-3rd round.",
    summary: "Probably the smoothest route runner in this draft. Quick bursts in his routes — looks more quick than fast. Showed a great release against Notre Dame, worked well going inside before breaking back out. Runs clean routes with no wasted steps and keeps an even speed on out routes without slowing down. Almost so smooth the defender has no tell, which helps him create separation very easily. Broke his defender so bad on a double move vs Notre Dame the DB fell belly first like a slip n slide. Elite change of pace going deep — his release after changing speed is excellent.",
    strengths: [
      "Probably the smoothest route runner in the draft",
      "Quick explosive bursts — acceleration is elite even if top speed is not",
      "Clean routes with zero wasted steps",
      "Keeps even speed on out routes — doesn't tip his hand",
      "Defender has no tell — creates separation almost without trying",
      "Excellent release after changing pace going deep",
      "Broke a Notre Dame DB so badly on a double move he fell belly first",
      "Really good at creating separation in his routes",
      "Quick release vs Notre Dame — looked sharp vs legitimate competition",
      "Some flashes of physicality in the block when he engages",
      "Some explosiveness after the catch",
    ],
    concerns: [
      "4.64 — slower than you want, acceleration masks it but top speed will be tested in the NFL",
      "Catches way too much with his body — about 20 career drops as a result",
      "Can struggle to get open with contact — may not hold up against physical press coverage",
      "Inconsistent blocker — often just stands in front of the defender without engaging",
      "Didn't make as many big plays after the catch as the explosiveness would suggest",
      "Below average hands — catching with the body at the NFL level will cost him",
    ],
    comp: null,
    stats: { Speed: 8, RouteRunning: 9, Hands: 4, RAC: 6 },
    notes: "The route running is genuinely elite — smoothest in the class is a real statement. But 20 career drops and consistent body catching is a major concern at the next level where windows are tighter. If he fixes his hands he becomes a real problem for defenses.",
    flags: ["⚠️ Body Catcher", "⚠️ Drops"],
  },
  {
    rank: 10, name: "Zachariah Branch", school: "Georgia", height: "5'9\"", weight: "177 lbs", fortyTime: "4.35",
    grade: "B+", tier: "1st Round", scouted: true,
    recentStats: "2024: 47 rec · 503 yds · 1 TD (USC)  |  2025: 81 rec · 811 yds · 6 TD (Georgia)",
    industryView: "Showed big-play ability with the Bulldogs, stretching defenses with explosive speed. Outstanding after the catch with elusiveness and speed to take any touch to the end zone. Lacks size but is an explosive playmaker with burst as a route-runner. Projected 2nd-3rd round.",
    summary: "Really good RAC — slippery with the ball, can make guys miss. Always fighting for more yards after the catch.",
    strengths: ["Elite RAC — slippery, always fighting for more yards","Good route running","Heavily used in screen game","AJ Brown-like play style and demeanor on tape"],
    concerns: ["Slow first step off the line","5'9\" 177 lbs is a real flag — small receivers historically struggle in NFL transition","AJ Brown comp is play style, NOT physical — Brown was 6'1\" 226 lbs"],
    comp: "AJ Brown (style only)", stats: { Speed: 7, RouteRunning: 8, Hands: 7, RAC: 10 },
    notes: "Size is a recurring burn spot in the draft. Hard to ignore especially at his weight.", flags: ["⚠️ Size Concern"],
  },
  {
    rank: 11, name: "Elijah Sarratt", school: "Indiana", height: "6'2.5\"", weight: "210 lbs", fortyTime: "4.42*",
    grade: "B", tier: "2nd/3rd Round", scouted: true,
    recentStats: "2022: 42 rec · 700 yds · 13 TD (SFU)  |  2023: 82 rec · 1,191 yds · 8 TD (JMU)  |  2024: 53 rec · 957 yds · 8 TD · 18.1 ypc  |  2025: 65 rec · 830 yds · 15 TD",
    industryView: "Made big plays for Indiana with 8 TDs and 18.1 yards per catch average in 2024. Followed up with 15 TDs in 2025. Projected 3rd-4th round.",
    extra: "31 1/4\" arm | 10\" hands",
    summary: "Really impressed with his acceleration off the line — no false step. Catches really well with his hands, keeps feet moving through the catch. Understands route running concepts and finds soft spots in zone beautifully. Really punishes zone — vs Ohio State showed his ceiling clearly. Great with improvising when the QB rolls out. Elite blocker with great form, clearly well coached. Plays well when timing is established but may struggle with an inaccurate QB — he relies heavily on timing and contested catches due to his separation trouble.",
    strengths: [
      "Really impressive acceleration off the line — no false step",
      "Catches really well with his hands, keeps feet moving through the catch",
      "Strong hands — amazing sideline grab vs Purdue",
      "Great at finding soft spots in zone coverage",
      "Consistent in the red zone — slants vs press using acceleration, size on fades",
      "Fights off his man on jump balls, attacks the ball at the last second really well",
      "Does well changing speed in route before breaking downfield, especially vs zone",
      "Great at improvising when QB rolls out of the pocket",
      "Understands leverage — watches DB hips well",
      "Back shoulder grabs and contested catches make up for separation concerns",
      "Jittery on short routes — can play in the slot",
      "Can be effective in the screen game off quick acceleration immediately going upfield",
      "Elite blocker — 9/10, great form, clearly well coached, seeks out blocks even when unnecessary, used as TE3 on goal line",
    ],
    concerns: [
      "Great first step but DBs still don't have many problems shadowing him — lacks real top-end speed",
      "Lacks explosion out of routes at times despite understanding the concepts",
      "Rounds routes when he has a little space on a defender — caused an INT on a 10-yard out",
      "Doesn't do the jump catch — limits RAC opportunities",
      "Struggled with tight man coverage vs Oregon DBs",
      "Occasional concentration drops early on",
      "Curl route needs a few steps on the break — not as smooth as Ted Hurst",
      "Heavily reliant on timing with QB — will struggle with an inaccurate or untrusting QB",
      "Some open looks may have benefited from good play calling and run-pass balance",
    ],
    comp: null,
    stats: { Speed: 5, RouteRunning: 6, Hands: 7, RAC: 6 },
    notes: "Blocking grade is a 9/10 — genuinely elite, great coaching showing. Zone destroyer who may be scheme-dependent. The timing/QB dependency is a real concern at the next level. Right system could unlock him.",
    flags: ["⚠️ Separation Concern", "⚠️ QB Dependent"],
  },
  {
    rank: 12, name: "Germie Bernard", school: "Alabama", height: "6'1\"", weight: "206 lbs", fortyTime: "4.48",
    grade: "B", tier: "2nd Round", scouted: true,
    recentStats: "2022: 7 rec · 128 yds · 2 TD  |  2023: 34 rec · 419 yds · 2 TD  |  2024: 50 rec · 794 yds · 2 TD  |  2025: 64 rec · 862 yds · 7 TD",
    industryView: "Played well in 2025 with clutch plays for Alabama. Has the upside to produce more in the NFL. Projected 2nd-3rd round.",
    extra: "32.5\" Vert | 1.52 10-yd split | 9 7/8\" hands | 30 3/8\" arm",
    summary: "On a team that struggled with drops, he hauled in 60+ catches — went to him when they needed a reliable option. Quick first juke after the catch, combined with thick body, makes the first tackle tough.",
    strengths: ["Reliable — go-to option when team needed a catch","Really good vision after the catch — used at RB at times","Thicker body helps break tackles","Quick, effective first juke after the catch","Decent stiff arm","Catches with his hands, not his body"],
    concerns: ["Doesn't come off as super explosive","Rounds his routes — though often played vs zone","Not a jump ball guy for a 6'1\" receiver","Decent but not great blocker"],
    comp: "Better version of Savion Williams", stats: { Speed: null, RouteRunning: 5, Hands: 7, RAC: 8 },
    notes: "Mini juke + thick body = harder first tackle than it looks. Not sexy but effective.", flags: [],
  },
  {
    rank: 13, name: "Antonio Williams", school: "Clemson", height: "6'0\"", weight: "187 lbs", fortyTime: "4.41",
    grade: "B", tier: "2nd Round", scouted: true,
    recentStats: "2022: 56 rec · 604 yds · 4 TD  |  2023: 21 rec · 208 yds · 2 TD  |  2024: 75 rec · 904 yds · 11 TD  |  2025: 55 rec · 604 yds · 4 TD",
    industryView: "Has enough size and natural talent as a route-runner. Showed speed at the combine. Dealt with early injuries in 2025. Projected 2nd-3rd round.",
    extra: "30 3/4\" arm | 9 1/4\" hands",
    summary: "Very twitchy and quick, gets to top speed fast. Used a lot in the screen game — drags, slants, short area stuff. Clearly capable down the field but wasn't asked to do it much.",
    strengths: ["Catches exceptionally well with his hands — great range","Very twitchy and quick, gets to top speed quickly","Great at getting upfield after the catch","Quick get off","When he turns on the jets he can make people miss"],
    concerns: ["Sometimes choppy feet on route breaks — less effective","Doesn't make as many people miss as twitchiness would suggest","More speed-based evasion than moves-based"],
    comp: "Josh Downs", stats: { Speed: 7, RouteRunning: 7, Hands: 8, RAC: 6 },
    notes: "Mostly used in short area but has shown capability down the field. Josh Downs comp in play style.", flags: [],
  },
  {
    rank: 14, name: "Deion Burks", school: "Oklahoma", height: "5'9 3/4\"", weight: "180 lbs", fortyTime: "4.30",
    grade: "B", tier: "2nd/3rd Round", scouted: true,
    extra: "29 3/8\" arm | 9 1/2\" hands | 42.5\" vert | 10'11\" broad | 1.49 10-yd split | 26 bench",
    recentStats: "2022–23: 63 rec · 778 yds · 7 TD (PUR)  |  2024: 31 rec · 245 yds · 3 TD (OU)  |  2025: 57 rec · 620 yds · 4 TD",
    industryView: "Fast and dynamic receiver. Team sources say fast, tough, blocks hard, and has upside. Helped himself with an excellent 4.30 combine 40. Projected 3rd-4th round.",
    summary: "Smooth get off — a real threat after the catch with good vision and quick acceleration. Not afraid to put his head down and fight. Does a good job working into the QB's vision to extend plays. Good quick route runner but not elite. His acceleration is basically 4/4 speed from the very first step which is pretty wild — most of his broken tackles come from that acceleration catching defenders off guard. Great release when the DB is pressing. Runs a smooth out route. Showed many pro level catches getting both feet in bounds even on difficult outstretched grabs.",
    strengths: [
      "4.30 speed — elite, acceleration from step one is basically full speed",
      "42.5\" vertical and 10'11\" broad jump — freak athleticism",
      "1.49 10-yard split — elite first step explosiveness",
      "Real threat after the catch — good vision, no wasted steps, not afraid to put his head down",
      "Quick acceleration after the catch catches defenders completely off guard",
      "Great release when the DB is pressing",
      "Smooth out route runner",
      "Works well into the QB's vision to extend plays",
      "Catches well with his hands — showed pro-level catches getting both feet in bounds",
      "26 bench reps — deceptively strong for his size",
    ],
    concerns: [
      "5'9 3/4\" and 180 lbs — size and physicality will be tested at the next level",
      "29 3/8\" arm length is very short — could struggle with press and hand fighting",
      "Doesn't make as many people miss in the open field as his athleticism suggests",
      "Sometimes catches with his body",
      "Route running is good but not elite — not going to win on every route concept",
      "Ability to handle physical press coverage at the NFL level is a real question",
    ],
    comp: null,
    stats: { Speed: 10, RouteRunning: 7, Hands: 7, RAC: 8 },
    notes: "The first-step acceleration is genuinely special — 4/4 speed from step one is not something you see often. The size concern is real but the athleticism profile (4.30, 42.5\" vert, 26 bench) suggests he can handle more contact than his frame implies. Right scheme with space to operate could unlock something.",
    flags: ["⚠️ Size Concern"],
  },
  {
    rank: 15, name: "Malachi Fields", school: "Notre Dame", height: "6'5\"", weight: "218 lbs", fortyTime: "4.61",
    grade: "B-", tier: "2nd/3rd Round", scouted: true,
    recentStats: "2023: 58 rec · 811 yds · 5 TD  |  2024: 55 rec · 808 yds · 5 TD  |  2025: 36 rec · 630 yds · 5 TD",
    industryView: "Big receiver and solid contributor for Notre Dame. Dangerous on 50-50 catches, a red zone weapon. Helped himself with a strong Senior Bowl week. Hurt himself with a slow combine 40. Could be a safe day-two pick to develop into a solid contributor.",
    extra: "36 rec | 630 yds | 5 TDs",
    summary: "Big body receiver with beautiful hands on contested catches. Hard to press — actually looked faster when defenders tried to press him. Good red zone build.",
    strengths: ["Beautiful hands on contested catches — finesseful, makes the grab consistently","Runs a really nice curl route (8/10 on curls specifically)","Hard to press — actually looked faster when pressed","Doesn't waste time trying to break down the DB — steps and goes","Legitimate red zone target given size and jump ball ability","One-handed grab vs Pittsburgh — legit highlight"],
    concerns: ["Low early acceleration — 4.61 shows on film","Looks lumbering in stride, slight off-balance","Slight hesitation on release off the line","Slant/out/in routes not explosive","Limited RAC — won't wow you","Only 36 catches in 2025 — hints at usage limitations"],
    comp: "Michael Pittman (hands and build)", stats: { Speed: 4, RouteRunning: 6, Hands: 8, RAC: 5 },
    notes: "Curl route specialist with legit hands. Speed and early acceleration are real concerns at the next level.", flags: ["⚠️ Speed Concern"],
  },
  {
    rank: 16, name: "Skyler Bell", school: "Connecticut", height: "6'0\"", weight: "192 lbs", fortyTime: "4.40",
    grade: "C+", tier: "Day 3", scouted: true,
    recentStats: "2025: 101 rec · 1,278 yds · 13 TD",
    industryView: "Productive for UConn with over 100 catches. A gritty receiver who could fit as a slot receiver in the NFL. Helped himself with a fast 40 at the combine. Projected 4th-6th round.",
    summary: "Played mostly smaller schools — big competition question mark. Good hands — 20 of 37 contested catches over last two years (54% rate — legitimate regardless of competition level).",
    strengths: ["Good hands — 54% contested catch rate over 2 years","Made impressive one-handed grabs"],
    concerns: ["Played mostly smaller schools — competition level question mark","Not crispy route running","Too choppy off the line","Not super strong, skinny build","Not jump-off-screen fast in pads"],
    comp: null, stats: { Speed: 5, RouteRunning: 5, Hands: 9, RAC: 6 },
    notes: "Level of competition, build, and explosiveness are all question marks at the next level.", flags: ["⚠️ Competition Level","⚠️ Projection Risk"],
  },
  {
    rank: 17, name: "CJ Daniels", school: "Miami", height: "6'2\"", weight: "225 lbs", fortyTime: "4.58",
    grade: "C+", tier: "Day 3", scouted: true,
    recentStats: "2023: 55 rec · 1,067 yds · 10 TD (Liberty)  |  2024: 42 rec · 480 yds (LSU)  |  2025: 50 rec · 557 yds · 7 TD (Miami)",
    industryView: "Projected 4th-6th round. Put up big numbers at Liberty and has been a consistent producer across three programs.",
    summary: "Efficient route runner — knows exactly what he is doing. Great hands in traffic. One-handed grab vs Notre Dame. Good red zone target. 4.58 will hurt his stock.",
    strengths: ["Efficient route runner — 9/10","Great hands in traffic, catches with his hands","Good red zone target","Surprisingly quick off the line despite relaxed stance","One-handed grab vs Notre Dame — legit competition moment"],
    concerns: ["4.58 40 time will hurt draft stock significantly","Not a RAC guy — won't make many people miss"],
    comp: null, stats: { Speed: 6, RouteRunning: 9, Hands: 7, RAC: 6 },
    notes: "Tape says more than the stopwatch. 4.58 is going to be hard to overcome on draft day.", flags: ["⚠️ Speed Concern"],
  },
  {
    rank: 18, name: "Chris Bell", school: "Louisville", height: "6'2\"", weight: "222 lbs", fortyTime: "4.50*",
    grade: "C", tier: "Camp Body", scouted: true,
    recentStats: "2024: 43 rec · 737 yds · 4 TD  |  2025: 72 rec · 917 yds · 6 TD (late ACL tear)",
    industryView: "Had 72 catches and 917 yards but suffered a late-season ACL tear. Has makeup concerns and teams wonder about playbook learning ability. May need a redshirt rookie season to recover. Projected 2nd-3rd round by industry.",
    summary: "Good size and body. Has good speed once he gets going. Nothing really pops on film — no standout trait that separates him.",
    strengths: ["Good size and body for the position","Has good speed once he gets going"],
    concerns: ["Catches with his body way too much — consistent concern at the NFL level","Rounds routes slightly","No standout trait on film","Late-season ACL tear — recovery timeline unknown"],
    comp: null, stats: { Speed: 6, RouteRunning: 5, Hands: 5, RAC: 5 },
    notes: "Camp body / depth piece unless something shows up on rewatch. ACL adds another question mark.", flags: ["⚠️ Body Catcher","⚠️ ACL Injury"],
  },
  {
    rank: 19, name: "Ja'Kobi Lane", school: "USC", height: "6'4\"", weight: "200 lbs", fortyTime: "4.47",
    grade: "C+", tier: "Day 3", scouted: true,
    recentStats: "2024: 43 rec · 525 yds · 12 TD  |  2025: 49 rec · 745 yds · 4 TD",
    industryView: "Big receiver dangerous on 50-50 passes. Excellent red zone weapon — 12 TDs in 2024. Had a solid 40 at the combine to help himself. Projected 2nd-4th round.",
    summary: "Incredible hands — makes some of the craziest catches in this draft class. Big red zone threat who posts defenders well before the catch and has elite patience on the ball. However, runs his routes at what looks like half speed far too often, with body language that comes across as disengaged. Rounds routes a lot and didn't stand out even against lesser competition like Purdue where he should have been the dominant athlete. Malachi Lemon, despite being smaller, shows more first step quickness and more willingness to block.",
    strengths: [
      "Incredible hands — among the best wow-catch ability in this entire draft class",
      "Makes one-handed grabs with ease",
      "Great catches in traffic — patient hands, posts the defender well before the catch",
      "Big red zone threat given size and catch radius",
      "Looked much better when playing at full speed — flashes of a legitimate playmaker",
      "12 TDs in 2024 — red zone efficiency is real",
    ],
    concerns: [
      "Runs routes at half speed far too often — body language looks lazy and disengaged",
      "Rounds routes a lot — sloppy route running technique",
      "Slow first step off the line",
      "Did not stand out even vs Purdue where he should have been the dominant athlete",
      "4 concentration drops on the season despite elite hands ability",
      "Doesn't fight for extra yards with power after the catch",
      "Terrible blocker — looked uninterested, nearly drew hold or block-in-the-back calls repeatedly",
      "Struggles to track and keep defenders in front of him as a blocker",
      "Rarely tries to extend plays when his route doesn't originally work",
    ],
    comp: null,
    stats: { Speed: 5, RouteRunning: 5, Hands: 9, RAC: 5 },
    notes: "The hands are undeniable — genuine wow plays. But the effort and engagement concerns are a real red flag. Malachi Lemon at a smaller size shows more motor and willingness. Hard to trust a guy who coasts at half speed this often.",
    flags: ["⚠️ Effort Concern", "⚠️ Route Running"],
  },
  {
    rank: 20, name: "Colbie Young", school: "Georgia", height: "6'4 3/4\"", weight: "218 lbs", fortyTime: "4.49",
    grade: "B-", tier: "Day 3", scouted: true,
    extra: "31 7/8\" arm | 9 1/2\" hands | 1.59 10-yd split",
    recentStats: "Georgia 2025 — missed 15 games over the past two seasons to suspension or injury",
    industryView: "Has prototypical size with large hands. Teams will need to dig into his off-field background. Missed 15 games over the past two seasons. Projected Day 3.",
    summary: "Looks massive on tape — truly NFL body at 6'4 3/4\" and 218 lbs. Had a nasty fake on a stop-and-go that flashed real route running feel. Smooth in his routes for his size — not super explosive off the line but doesn't need to be. Breaks back to the ball great on curls. Very physical fighting for yards after the catch — won't juke you but will run through you. Could be a decent blocker with his size and willingness. Wouldn't be surprised if he ends up being productive in the NFL.",
    strengths: [
      "Prototypical NFL size — 6'4 3/4\" and 218 lbs looks massive on tape",
      "Nasty stop-and-go fake — real route running feel for his size",
      "Smooth routes for his size — no real route running concerns",
      "Breaks back to the ball great on curl routes",
      "Very physical after the catch — runs through tacklers, not around them",
      "Size and strength to outmuscle cornerbacks for space",
      "Leaping and extension creates a very high catch point",
      "Consistent boundary awareness with his feet",
      "Tough to bring down after the catch",
      "Blocker upside given size and willingness",
      "Took gunner reps — special teams value",
    ],
    concerns: [
      "Missed 15 games over last two seasons — suspension or injury, teams will dig into this",
      "Off-field background is a flag that every team will investigate",
      "Quality press tends to stick and travel with him downfield",
      "Can be a step slow to adjust and find catch space",
      "Average short-area movement and top-end speed",
      "Fails to maintain speed and gain ground out of turns",
      "Not going to create separation with athleticism alone",
    ],
    comp: null,
    stats: { Speed: 5, RouteRunning: 7, Hands: 7, RAC: 6 },
    notes: "The size alone keeps him on boards. The stop-and-go fake and curl route ability suggest more polish than you'd expect. The 15 missed games is the one thing that could push him off teams' boards entirely depending on what they find.",
    flags: ["⚠️ Availability Concern", "⚠️ Off-Field Flag"],
  },
  {
    rank: 21, name: "Will Pauling", school: "Notre Dame", height: "5'9.4\"", weight: "183 lbs", fortyTime: "4.37",
    grade: "C+", tier: "Day 3", scouted: true,
    extra: "29 5/8\" arm | 42\" vert | 4.31 20-yd shuttle",
    recentStats: "2025: 26 rec · 381 yds · 6 TD  |  12% drop rate in 2024",
    industryView: "Multiple team sources say impressive on tape with route-running, instincts, and feel. Elected captain by teammates despite only being at Notre Dame a few months after transferring from Wisconsin. Mid-round steal potential per some sources. Projected 3rd-5th round.",
    summary: "Surprised he only had 26 catches given what he showed on film. Pretty shifty route running with solid ability after the catch. Even had a nice contested catch against Boise State. The size is concerning — 5'9.4\" and 183 lbs is small and the translation to the NFL with that frame is a real question. Showed enough to stay on the board but needs to prove he can handle contact at the next level.",
    strengths: [
      "Pretty shifty route running — 7/10",
      "Solid ability after the catch — quick and elusive",
      "4.37 speed is legit for his size",
      "42\" vertical — elite leaping ability, much better than his size suggests",
      "4.31 shuttle — elite change of direction",
      "Showed a nice contested catch vs Boise State",
      "6 TDs on only 26 catches — elite efficiency",
      "Teammate-elected captain at Notre Dame — serious character green flag",
    ],
    concerns: [
      "5'9.4\" 183 lbs — size is a real concern for NFL translation",
      "29 5/8\" arm length is short — contact on routes will be tough",
      "12% drop rate in 2024 — catching grade reflects that",
      "Only 26 catches in 2025 despite showing ability — usage concern",
      "Will need to show he can handle physical press coverage at the next level",
    ],
    comp: null,
    stats: { Speed: 9, RouteRunning: 7, Hands: 5, RAC: 7 },
    notes: "Size concern is the dominant theme here. The athleticism is real — 42\" vert and 4.31 shuttle on a 183 lb frame is a special athlete. But the drop rate and frame make NFL projection difficult. #20 for now with potential to move depending on what else we see.",
    flags: ["⚠️ Size Concern", "⚠️ Drop Rate"],
  },
  {
    rank: 22, name: "Caleb Douglas", school: "Texas Tech", height: "6'3 1/2\"", weight: "206 lbs", fortyTime: "4.39",
    grade: "C+", tier: "Day 3", scouted: false,
    extra: "32 1/2\" arm | 10 1/8\" hands | 31.5\" vert | 10'6\" broad | 1.55 10-yd split",
    recentStats: "2024: 60 rec · 877 yds · 6 TD  |  2025: 54 rec · 846 yds · 7 TD",
    industryView: "Long, slender outside target with good production but uneven tape. Enticing moments with catch radius and ball skills on fades and deep throws. Focus drops and inability to win contested catches at a high rate can't be overlooked. Quick acceleration for a tall receiver but top-end speed is non-threatening. Will have to battle to make a roster as a backup. Projected 3rd-5th round.",
    summary: "Personal scouting pending.",
    strengths: [], concerns: [], comp: null, stats: { Speed: null, RouteRunning: null, Hands: null, RAC: null },
    notes: "6'4\" and 4.39 is an intriguing size-speed combo. Consistent at the Big 12 level.", flags: ["🔄 Rewatch Pending"],
  },
  {
    rank: 23, name: "Harrison Wallace III", school: "Ole Miss", height: "5'11 7/8\"", weight: "192 lbs", fortyTime: "4.54",
    grade: "C+", tier: "Day 3", scouted: false,
    extra: "32 1/8\" arm | 8 3/8\" hands | 1.58 10-yd split",
    recentStats: "2025: 61 rec · 934 yds · 4 TD",
    industryView: "Leggy long-strider who played deep into the CFP at both Penn State and Ole Miss. Made nine grabs for 156 yards and a score in playoff win over Georgia. Has trouble beating press and uncovering over the first two levels. Built for contested catches — shows little concern working into traffic on 50/50 throws. Lacks route versatility. Best chance as a possession slot with zone-beating talent. Projected 3rd-5th round.",
    summary: "Personal scouting pending.",
    strengths: [], concerns: [], comp: null, stats: { Speed: null, RouteRunning: null, Hands: null, RAC: null },
    notes: "CFP performance against Georgia's DB talent is a meaningful data point worth pulling.", flags: ["🔄 Rewatch Pending"],
  },
  {
    rank: 24, name: "Aaron Anderson", school: "LSU", height: "5'8\"", weight: "187 lbs", fortyTime: "4.55*",
    grade: "D+", tier: "Late Round", scouted: true,
    recentStats: "2024: 61 rec · 884 yds · 5 TD  |  2025: 33 rec · 398 yds",
    industryView: "Extremely fast — a threat to rip off a big gain any time he touches the ball. Very undersized at 5'8\". Has upside to develop. Projected 3rd-4th round.",
    summary: "Does a good job stacking the defender to the inside before breaking on an out route. Decently crispy routes but not super explosive breaking out of them. At 5'8\" the concern is real about transitioning against more physical NFL corners who will get their hands on him. Decent hands but doesn't create enough separation to consistently get open at the next level. Speed grade doesn't pop on film either — this isn't the elite burner the industry projection suggests.",
    strengths: [
      "Good at stacking the defender to the inside before breaking on out routes",
      "Decently crispy routes — not sloppy",
      "Has a good juke to make one man miss",
      "Not afraid of contact after the catch",
    ],
    concerns: [
      "5'8\" — serious concern against physical NFL corners who will jam him at the line",
      "Speed doesn't pop on film — 4.55 range isn't great for a 5'8\" receiver",
      "Not super explosive breaking out of routes",
      "Doesn't create enough separation to consistently get open at the next level",
      "10% drop rate — catching is below average",
      "Wasn't heavily involved in the offense — limited sample raises questions",
      "Big production dip in 2025 needs explaining",
    ],
    comp: null,
    stats: { Speed: 5, RouteRunning: 6, Hands: 4, RAC: 6 },
    notes: "The size and the hands are both working against him. 5'8\" with a 10% drop rate and below-average speed on film is a tough sell at the next level. Route stacking technique shows some intelligence but the tools may not be there to consistently win.",
    flags: ["⚠️ Size Concern", "⚠️ Drop Rate", "⚠️ Speed Concern"],
  },
  {
    rank: 25, name: "Bryce Lance", school: "North Dakota State", height: "6'3 3/8\"", weight: "204 lbs", fortyTime: "4.34",
    grade: "C+", tier: "Day 3", scouted: false,
    extra: "32 1/8\" arm | 9 1/4\" hands | 41.5\" vert | 11'1\" broad | 1.49 10-yd split | 7.00 3-cone | 4.15 shuttle",
    recentStats: "2024: 75 rec · 1,053 yds · 17 TD  |  2025: 51 rec · 1,079 yds · 8 TD",
    industryView: "Fifth-year senior with two seasons of explosive production. Outstanding ball skills and positional instincts that allow him to create catch space. Run-by speed on the FCS level — will need to rely on technique more than gas at the NFL level. Smart player with good ball skills who should compete for a backup role. Projected 3rd-5th round.",
    summary: "Personal scouting pending.",
    strengths: [], concerns: [], comp: null, stats: { Speed: null, RouteRunning: null, Hands: null, RAC: null },
    notes: "17 TDs at NDSU + 4.34 speed demands a look. FCS level is the question.", flags: ["🔄 Rewatch Pending","⚠️ Competition Level"],
  },
  {
    rank: 26, name: "Dillon Bell", school: "Georgia", height: "6'0 3/4\"", weight: "209 lbs", fortyTime: "4.50",
    grade: "C", tier: "Day 3", scouted: true,
    extra: "30 1/4\" arm | 9 1/2\" hands | 39\" vert | 10'6\" broad | 1.58 10-yd split",
    recentStats: "2023: 29 rec · 355 yds · 2 TD  |  2024: 43 rec · 466 yds · 4 TD  |  2025: 27 rec · 268 yds · 2 TD",
    industryView: "Some scouts see him as Deebo-lite. Showed some ability but was hindered by Carson Beck's inconsistency and the offense around him. 'I think he's a better receiver than he was able to show in 2025 in that offense.' — scout source. Projected 3rd-5th round.",
    summary: "Thick running back-looking body — built to run through contact, not around it. More of a straight-line runner who is highly successful on jet-sweeps and reverses. Breaks through open-field tacklers once he gets rolling downhill. Physical through contact in the route and at the catch point. Pedestrian catch production over 56 games at Georgia — the offense limited him but the numbers are still hard to ignore. Routes lack crisp cuts and need work finding holes in zone coverage.",
    strengths: [
      "Thick, physical 209 lb frame — built to absorb contact",
      "Highly successful on jet-sweeps and reverses — must-use weapon in the right scheme",
      "Breaks through open-field tacklers once he gets rolling downhill",
      "Accelerates late in route to create space",
      "Physical through contact in the route and at the catch point",
      "Run-block potential on perimeter and cracking down",
      "Has experience and talent to become a plus kick returner",
      "39\" vertical — can go up and get it",
      "Some scouts see Deebo Samuel-lite potential as a multipurpose weapon",
    ],
    concerns: [
      "Pedestrian catch production over 56 games at Georgia — hard to fully excuse",
      "Routes lack crisp cuts and attention to detail",
      "Doesn't often adjust route to avoid redirection",
      "Unable to pull the brakes firmly for comeback routes",
      "Body-catcher with below-average catch focus",
      "Struggles to bring in throws outside his frame",
      "Needs to work at finding holes in zone coverage",
      "More straight-line runner than a separation creator",
      "Production dipped every year — 2025 was worst of career despite being a senior",
    ],
    comp: "Deebo Samuel (lite)",
    stats: { Speed: 6, RouteRunning: 5, Hands: 4, RAC: 7 },
    notes: "The Deebo-lite comp is the most optimistic read. The build and jet sweep usage make sense for that role but the catching and route running need real work. The offense definitely limited him — the question is whether it hid ability or hid the lack of it.",
    flags: ["⚠️ Body Catcher", "⚠️ Route Sharpness"],
  },
  {
    rank: 27, name: "Lewis Bond", school: "Boston College", height: "5'11\"", weight: "197 lbs", fortyTime: "4.48*",
    grade: "C", tier: "Day 3", scouted: false,
    recentStats: "2025: 88 rec · 993 yds · 1 TD",
    industryView: "Hard-hat possession receiver with consistent production over three consecutive seasons. Team captain. Shines with natural ball skills, plus catch focus and sure hands in contested situations. Finding separation as a pro will be a challenge — not shifty enough to beat pro press and lacks speed to break free from sticky man coverage. Will find best chance with teams who covet ball skills over separation traits. Projected 3rd-5th round.",
    summary: "Personal scouting pending.",
    strengths: [], concerns: [], comp: null, stats: { Speed: null, RouteRunning: null, Hands: null, RAC: null },
    notes: "88 catches on a bad team is a reliability signal. Only 1 TD on 993 yards is worth investigating.", flags: ["🔄 Rewatch Pending"],
  },
  {
    rank: 28, name: "Jordan Hudson", school: "SMU", height: "6'1 1/4", weight: "191 lbs", fortyTime: "4.51*",
    grade: "C", tier: "Day 3", scouted: false,
    recentStats: "2025: 61 rec · 766 yds · 6 TD",
    industryView: "Steady production at SMU. Built for boundary X receiver work but wasn't often tested by quality press or sticky man coverage. Flashes athleticism to run a more robust route tree but technique needs refinement. Above average at tracking and adjusting to 50/50 balls. Underrated YAC option — can slither and slam his way into extra yardage. Needs to prove he can create pro-level throwing windows to settle in as a WR4/5. Projected 3rd-5th round.",
    summary: "Personal scouting pending.",
    strengths: [], concerns: [], comp: null, stats: { Speed: null, RouteRunning: null, Hands: null, RAC: null },
    notes: "Mid-round projection. Performance at all-star events matters for his stock.", flags: ["🔄 Rewatch Pending"],
  },
  {
    rank: 29, name: "Jayce Brown", school: "Kansas State", height: "6'0\"", weight: "179 lbs", fortyTime: "4.49*",
    grade: "C", tier: "Day 3", scouted: false,
    recentStats: "2024: 47 rec · 823 yds · 5 TD  |  2025: 41 rec · 712 yds · 5 TD",
    industryView: "Showed playmaking ability averaging 18 yards per reception in 2024. Could stand to gain weight and fill out frame for the NFL. Projected 3rd-5th round.",
    summary: "Personal scouting pending.",
    strengths: [], concerns: [], comp: null, stats: { Speed: null, RouteRunning: null, Hands: null, RAC: null },
    notes: "18 ypr in 2024 is elite efficiency. 179 lbs needs to add weight for the NFL.", flags: ["🔄 Rewatch Pending","⚠️ Size Concern"],
  },
  {
    rank: 30, name: "Vinny Anthony", school: "Wisconsin", height: "5'11 7/8", weight: "183 lbs", fortyTime: "4.54",
    grade: "C", tier: "Day 3", scouted: false,
    extra: "31 1/8\" arm | 9 1/8\" hands | 34.5\" vert | 6.86 3-cone | 4.07 shuttle | 15 bench",
    recentStats: "2024: 39 rec · 672 yds · 4 TD  |  2025: 31 rec · 391 yds · 1 TD",
    industryView: "Field-stretching Z receiver with below-average production but speed to intrigue. Route running needs significant work to uncover against NFL cornerbacks on anything other than deep routes. Below average as a ball-tracker and jump-ball artist but displays good toughness when contested. Kick return potential could buy him time on a practice squad. Projected 3rd-5th round.",
    summary: "Personal scouting pending.",
    strengths: [], concerns: [], comp: null, stats: { Speed: null, RouteRunning: null, Hands: null, RAC: null },
    notes: "Senior Bowl invite suggests evaluators see more than the raw numbers show.", flags: ["🔄 Rewatch Pending"],
  },
  {
    rank: 31, name: "Kevin Coleman Jr.", school: "Missouri", height: "5'10 1/4", weight: "179 lbs", fortyTime: "4.49",
    grade: "C", tier: "Day 3", scouted: false,
    extra: "30\" arm | 9 1/2\" hands | 38.5\" vert | 10'6\" broad | 1.62 10-yd split",
    recentStats: "2024: 74 rec · 932 yds · 6 TD (MSU)  |  2025: 66 rec · 732 yds · 1 TD (MIZ)",
    industryView: "Slot-only wideout who could use a defined role after playing for four different schools in four years. Has the speed to create opportunities on slot fades and skinny posts. Average route running for a draftable prospect. Lacks ideal size but has adequate hands and toughness in traffic. Punt return ability adds a dimension. Outplayed cornerbacks at Senior Bowl practices. Projected 3rd-5th round.",
    summary: "Personal scouting pending.",
    strengths: [], concerns: [], comp: null, stats: { Speed: null, RouteRunning: null, Hands: null, RAC: null },
    notes: "Production dropped significantly in the transfer to Mizzou. Size and return versatility are the selling points.", flags: ["🔄 Rewatch Pending","⚠️ Size Concern"],
  },
  {
    rank: 32, name: "Rara Thomas", school: "Troy", height: "5'11\"", weight: "212 lbs", fortyTime: "4.49*",
    grade: "C-", tier: "Day 3", scouted: false,
    recentStats: "2022: 44 rec · 626 yds · 7 TD  |  2023: 23 rec · 383 yds · 1 TD  |  2025: 39 rec · 629 yds · 5 TD (Troy)",
    industryView: "Had buzz in the scouting community but was kicked off the Georgia team in the preseason. Off-the-field concerns are going to hurt throughout the draft process. Projected 4th-6th round.",
    summary: "Personal scouting pending.",
    strengths: [], concerns: [], comp: null, stats: { Speed: null, RouteRunning: null, Hands: null, RAC: null },
    notes: "Kicked off Georgia roster — off-field concerns will follow him into every draft room.", flags: ["🔄 Rewatch Pending","⚠️ Character Concern"],
  },
  {
    rank: 33, name: "Reggie Virgil", school: "Texas Tech", height: "6'3\"", weight: "187 lbs", fortyTime: "4.57",
    grade: "C-", tier: "Day 3", scouted: false,
    recentStats: "2025: 57 rec · 705 yds · 6 TD",
    industryView: "Good size for the NFL. Earned a Senior Bowl invitation. If he can show separation against top CBs that could help him rise. Projected 4th-6th round.",
    summary: "Personal scouting pending.",
    strengths: [], concerns: [], comp: null, stats: { Speed: null, RouteRunning: null, Hands: null, RAC: null },
    notes: "6'3\" with Senior Bowl invite. 4.57 and 187 lbs is a lean build that may not hold up.", flags: ["🔄 Rewatch Pending"],
  },
  {
    rank: 34, name: "Brenen Thompson", school: "Mississippi State", height: "5'9\"", weight: "164 lbs", fortyTime: "4.26",
    grade: "C-", tier: "Day 3", scouted: false,
    recentStats: "2025: 57 rec · 1,054 yds · 6 TD",
    industryView: "Very undersized but dangerous receiver. Had an electric 4.26 combine 40 time. Will have to compete for a slot role. Projected 4th-6th round — 164 lbs is a massive concern.",
    summary: "Personal scouting pending.",
    strengths: [], concerns: [], comp: null, stats: { Speed: null, RouteRunning: null, Hands: null, RAC: null },
    notes: "4.26 is elite. 164 lbs is lightest in this class by a wide margin — extreme durability risk.", flags: ["🔄 Rewatch Pending","⚠️ Size Concern"],
  },
  {
    rank: 35, name: "Josh Cameron", school: "Baylor", height: "6'2\"", weight: "220 lbs", fortyTime: "4.49*",
    grade: "C-", tier: "Day 3", scouted: false,
    recentStats: "2024: 52 rec · 754 yds · 10 TD  |  2025: 69 rec · 872 yds · 9 TD",
    industryView: "Also a solid punt returner. Consistent producer at Baylor with back-to-back high TD seasons. Projected 4th-6th round.",
    summary: "Personal scouting pending.",
    strengths: [], concerns: [], comp: null, stats: { Speed: null, RouteRunning: null, Hands: null, RAC: null },
    notes: "Back-to-back 9-10 TD seasons with plus size. Return versatility helps value.", flags: ["🔄 Rewatch Pending"],
  },
  {
    rank: 36, name: "Romelo Brinson", school: "SMU", height: "6'2\"", weight: "190 lbs", fortyTime: "4.52*",
    grade: "C-", tier: "Day 3", scouted: false,
    recentStats: "2025: 43 rec · 638 yds · 3 TD",
    industryView: "Has functional size and showed enough for a Senior Bowl invitation. Projected 4th-6th round.",
    summary: "Personal scouting pending.",
    strengths: [], concerns: [], comp: null, stats: { Speed: null, RouteRunning: null, Hands: null, RAC: null },
    notes: "Senior Bowl invite signals team interest. Production was modest.", flags: ["🔄 Rewatch Pending"],
  },
  {
    rank: 37, name: "Jalil Farooq", school: "Maryland", height: "6'1\"", weight: "204 lbs", fortyTime: "4.54*",
    grade: "C-", tier: "Day 3", scouted: false,
    recentStats: "2022: 37 rec · 466 yds · 5 TD  |  2023: 45 rec · 694 yds · 2 TD  |  2024: 3 rec · 58 yds  |  2025: 58 rec · 545 yds · 4 TD",
    industryView: "Has dealt with injuries — only 3 catches in 2024. Solid build with upside. Showed better in 2025. Was solid at Oklahoma before injuries derailed him. Projected 4th-6th round.",
    summary: "Personal scouting pending.",
    strengths: [], concerns: [], comp: null, stats: { Speed: null, RouteRunning: null, Hands: null, RAC: null },
    notes: "Injury history in 2024 raises durability questions. Was solid at Oklahoma before injuries.", flags: ["🔄 Rewatch Pending","⚠️ Injury History"],
  },
  {
    rank: 38, name: "Ian Strong", school: "Rutgers", height: "6'3\"", weight: "211 lbs", fortyTime: "4.53*",
    grade: "C-", tier: "Day 3", scouted: false,
    recentStats: "2024: 43 rec · 676 yds · 5 TD  |  2025: 52 rec · 762 yds · 5 TD",
    industryView: "Big outside receiver who is put together well and provides a size mismatch. Consistent 5 TDs in both years. Projected 4th-6th round.",
    summary: "Personal scouting pending.",
    strengths: [], concerns: [], comp: null, stats: { Speed: null, RouteRunning: null, Hands: null, RAC: null },
    notes: "6'3\", 211 lbs, consistent 5 TDs each year. Rutgers level of competition is the question.", flags: ["🔄 Rewatch Pending"],
  },
  {
    rank: 39, name: "Kobe Prentice", school: "Baylor", height: "5'10\"", weight: "182 lbs", fortyTime: "4.53*",
    grade: "C-", tier: "Day 3", scouted: false,
    recentStats: "2025: 26 rec · 380 yds · 6 TD",
    industryView: "Has bounced between programs. 6 TDs on 26 catches in 2025 shows efficiency but very limited sample. Projected 4th-6th round.",
    summary: "Personal scouting pending.",
    strengths: [], concerns: [], comp: null, stats: { Speed: null, RouteRunning: null, Hands: null, RAC: null },
    notes: "6 TDs on 26 catches is elite efficiency but thin sample. Multiple transfers a concern.", flags: ["🔄 Rewatch Pending"],
  },
  {
    rank: 40, name: "Kaden Wetjen", school: "Iowa", height: "5'9\"", weight: "193 lbs", fortyTime: "4.47",
    grade: "C-", tier: "Day 3", scouted: false,
    recentStats: "2025: 20 rec · 151 yds · 1 TD",
    industryView: "Dynamic punt and kick returner with return TDs in both 2024 and 2025. With new NFL kickoff rules, could be more valuable as a specialist. Could be a sleeper mid-round pick. Projected 4th-6th round.",
    summary: "Personal scouting pending.",
    strengths: [], concerns: [], comp: null, stats: { Speed: null, RouteRunning: null, Hands: null, RAC: null },
    notes: "Special teams value player. 20 catches offensively isn't enough to evaluate him as a receiver alone.", flags: ["🔄 Rewatch Pending"],
  },
  {
    rank: 41, name: "Noah Thomas", school: "Georgia", height: "6'5\"", weight: "205 lbs", fortyTime: "4.52*",
    grade: "C-", tier: "Day 3", scouted: false,
    recentStats: "2024: 39 rec · 574 yds · 8 TD  |  2025: 16 rec · 254 yds · 4 TD",
    industryView: "Tall receiver who presents a size mismatch against cornerbacks. Key question is his ability to separate from NFL DBs. Projected 4th-6th round.",
    summary: "Personal scouting pending.",
    strengths: [], concerns: [], comp: null, stats: { Speed: null, RouteRunning: null, Hands: null, RAC: null },
    notes: "6'5\" is excellent size. 8 TDs in 2024 encouraging but production fell sharply in 2025.", flags: ["🔄 Rewatch Pending"],
  },
  {
    rank: 42, name: "Barion Brown", school: "LSU", height: "5'11\"", weight: "177 lbs", fortyTime: "4.40",
    grade: "D+", tier: "Late Round", scouted: false,
    recentStats: "2025: 52 rec · 495 yds · 1 TD",
    industryView: "Two-time Tennessee state champion in 100/200m. Three seasons at Kentucky produced 122 catches and a school-record five kickoff return TDs. Transferred to LSU and led Tigers with 53 catches and 532 yards. Career 29.4-yard return average with six return TDs — one shy of the NCAA record. Eats up cushion on vertical routes and tracks deep balls smoothly. Route breaks lack crispness and relies on speed to compensate. Projected 5th-7th round.",
    summary: "Personal scouting pending.",
    strengths: [], concerns: [], comp: null, stats: { Speed: null, RouteRunning: null, Hands: null, RAC: null },
    notes: "4.40 speed and 5'11\" is fine. Limited production ceiling makes this a late flier at best.", flags: ["🔄 Rewatch Pending"],
  },
  {
    rank: 43, name: "Caullin Lacy", school: "Louisville", height: "5'10\"", weight: "190 lbs", fortyTime: "4.55",
    grade: "D+", tier: "Late Round", scouted: false,
    recentStats: "2025: 54 rec · 547 yds · 2 TD",
    industryView: "Twitchy athlete with explosive short-area quickness. Led Sun Belt with 91 catches for 1,316 yards in 2023 at South Alabama before transferring to Louisville. Technician in his route craft with crisp breaks on short and intermediate routes. Dynamic YAC threat on screens and hitches. Undersized frame limits catch radius and ability to win contested catches. Struggles vs press. Profiles as a Day 3 selection who could outplay his draft position as a slot specialist and return ace. Projected 5th-7th round.",
    summary: "Personal scouting pending.",
    strengths: [], concerns: [], comp: null, stats: { Speed: null, RouteRunning: null, Hands: null, RAC: null },
    notes: "Limited upside. Benefited from playing alongside Chris Bell drawing coverage.", flags: ["🔄 Rewatch Pending"],
  },
  {
    rank: 44, name: "Malik Benson", school: "Oregon", height: "6'1\"", weight: "195 lbs", fortyTime: "4.37",
    grade: "D", tier: "UDFA", scouted: false,
    recentStats: "2023: 13 rec · 162 yds · 1 TD (ALA)  |  2025: 36 rec · 645 yds · 6 TD (ORE)",
    industryView: "Elite speed — forced safeties to honor his vertical presence on every snap at Oregon. Led Ducks in receiving (719 yds, 6 TD) en route to CFP semifinals. Returned an 85-yard punt for a TD vs USC. Blazing ball tracking on deep throws without breaking pace. Produced at Alabama, Florida State, and Oregon despite personnel changes. Limited blocking ability and thin build are concerns. Best fit as a Z receiver in a vertically oriented offense. Projected 6th round to UDFA.",
    summary: "Personal scouting pending.",
    strengths: [], concerns: [], comp: null, stats: { Speed: null, RouteRunning: null, Hands: null, RAC: null },
    notes: "4.37 speed is real. Inconsistent production path — JUCO to Alabama depth to Oregon starter.", flags: ["🔄 Rewatch Pending"],
  },
  {
    rank: 45, name: "J. Michael Sturdivant", school: "Florida", height: "6'3\"", weight: "206 lbs", fortyTime: "4.40",
    grade: "D", tier: "UDFA", scouted: false,
    recentStats: "2025: 27 rec · 406 yds · 3 TD",
    industryView: "Made Bruce Feldman's Freaks List. Impressive 6'3\" size-speed combo — 23.2 mph top speed, benched close to 300 lbs. Long strider who eats up cushion quickly and threatens vertically. Good body control on contested catches and red zone fades. Route tree still developing with room for improvement in crisp breaks and selling fakes. Concentration drops have been an issue. Shrine Bowl invite. Projects as a developmental X-receiver. Projected 6th round to UDFA.",
    summary: "Personal scouting pending.",
    strengths: [], concerns: [], comp: null, stats: { Speed: null, RouteRunning: null, Hands: null, RAC: null },
    notes: "6'3\" and 4.40 is a combination worth investigating. Bad QB situation may have hidden his ability.", flags: ["🔄 Rewatch Pending"],
  },
  {
    rank: 46, name: "Kendrick Law", school: "Kentucky", height: "5'11\"", weight: "203 lbs", fortyTime: "4.45",
    grade: "D", tier: "UDFA", scouted: false,
    recentStats: "2024: 10 rec · 105 yds · 1 TD (ALA)  |  2025: 53 rec · 540 yds · 3 TD (UK)",
    industryView: "Transferred from Alabama to Kentucky. Had a decent season for the Wildcats. Projected 7th round to UDFA.",
    summary: "Personal scouting pending.",
    strengths: [], concerns: [], comp: null, stats: { Speed: null, RouteRunning: null, Hands: null, RAC: null },
    notes: "Didn't stick at Alabama. Kentucky production was ok but not a standout.", flags: ["🔄 Rewatch Pending"],
  },
  {
    rank: 47, name: "Chris Hilton Jr.", school: "LSU", height: "6'0\"", weight: "188 lbs", fortyTime: "4.41",
    grade: "D", tier: "UDFA", scouted: false,
    recentStats: "2024: 9 rec · 243 yds · 3 TD (27.0 ypc)  |  2025: 7 rec · 55 yds",
    industryView: "Flashed big-play ability in 2024 averaging 27 yards per catch on 9 receptions. Tested well before the draft. Projected 7th round to UDFA.",
    summary: "Personal scouting pending.",
    strengths: [], concerns: [], comp: null, stats: { Speed: null, RouteRunning: null, Hands: null, RAC: null },
    notes: "27 yards per catch in 2024 is elite. Massive production drop in 2025. Dart throw.", flags: ["🔄 Rewatch Pending"],
  },
];

const edgePlayers = [
  {
    rank: 1, name: "Arvell Reese", school: "Ohio State", height: "6'4\"", weight: "241 lbs", fortyTime: "TBD",
    grade: "A", tier: "1st Round", scouted: true,
    extra: "32 1/2\" arm | 9 1/2\" hands",
    recentStats: "Ohio State 2025 — primary edge/LB hybrid role",
    industryView: "Versatile edge/linebacker hybrid with elite athleticism. Projects as a high Day 1 or early Day 2 pick across most boards.",
    summary: "Extremely explosive player — uses that explosiveness to generate real power on contact despite not having the longest arms. Blazing fast on the edge, speed is genuinely difficult for bigger linemen to handle. Reads the field beautifully as a stand up linebacker — football IQ shows up on tape constantly. The kind of player who makes every scheme he's in better just by being on the field.",
    strengths: [
      "Extremely explosive — generates power on contact despite lighter build",
      "Blazing edge speed — too fast for bigger linemen to handle",
      "Fights through hands well — doesn't get locked up",
      "Elite chase down ability — runs down ball carriers to the opposite side of the field",
      "Great tackler — doesn't miss when he gets there",
      "Reads the field exceptionally well at stand up linebacker — high football IQ",
      "No problem stopping the run when lined up on the line",
      "Versatile alignment — elite as edge rusher OR stand up linebacker blitz weapon",
      "Can be deployed as a deadly LB unleashed as a blitz weapon OR as primary edge rusher",
    ],
    concerns: ["Lighter weight at 241 lbs for a true every-down edge role — could be a factor vs the run at the next level"],
    comp: null,
    stats: { GetOff: 10, PassRush: 9, RunDefense: 8, Motor: 10 },
    notes: "Elite either way you deploy him. The 241 lbs concern is real on paper but his athleticism and motor compensate significantly. Right scheme unlocks a special player.",
    flags: [],
  },
  {
    rank: 2, name: "Rueben Bain Jr.", school: "Miami", height: "6'2\"", weight: "263 lbs", fortyTime: "TBD",
    grade: "A-", tier: "1st Round", scouted: true,
    extra: "30 7/8\" arm | 9 1/8\" hands",
    recentStats: "Miami 2025 — starting edge rusher",
    industryView: "Projected Day 1 or early Day 2 pick. Has generated significant interest from multiple teams for his combination of power and quickness.",
    summary: "Incredibly quick off the line — beats tackles repeatedly by ducking and hugging the hip of the lineman, bending around them with impressive flexibility. Not just a speed rusher — shows good power to hold the tackle in place and then disengage. Large lower half with big legs indicating serious lower body power that translates to both pass rush and run defense. Wins in multiple ways.",
    strengths: [
      "Incredibly quick off the line — gets to the hip of linemen with elite bend",
      "Good power to hold the tackle in place and disengage — not just a speed rusher",
      "Large lower half — tree trunk legs indicate serious lower body power",
      "Solid run defender — contains well and doesn't lose the edge",
      "Really good at tracking down running backs in the backfield",
      "Versatile alignment — 4-3 or 3-4 defensive end",
      "Does nasty work on the inside — not edge only",
      "Wins with speed, power, and interior flashes",
    ],
    concerns: ["Arms are on the shorter side at 30 7/8\" for his frame — hand fighting at the next level is worth monitoring"],
    comp: null,
    stats: { GetOff: 9, PassRush: 9, RunDefense: 8, Motor: 9 },
    notes: "Lower body power is the standout physical trait. The hip-hugging bend move is elite and will translate immediately at the next level.",
    flags: [],
  },
  {
    rank: 3, name: "Akheem Mesador", school: "Miami", height: "6'2\"", weight: "259 lbs", fortyTime: "4.95*",
    grade: "B+", tier: "2nd Round", scouted: true,
    recentStats: "Miami 2025 — starting edge rusher",
    industryView: "Projected Day 2. Miami has produced multiple prospects in this class and Mesador is one of the better ones.",
    summary: "Almost insane how quickly he defeats tackle hands and gets to the inside of linemen — stopping plays in the backfield regularly. Fights the hands extremely well — clearly well coached out of Miami. Does a great job getting to the outside shoulder and then immediately cutting back inside instead of getting pushed upfield. A threat both as a pass rusher and in run defense. Can be a menace playing inside as well.",
    strengths: [
      "Elite hand fighting — defeats tackle hands at an exceptional rate",
      "Gets to the inside of linemen almost instantly — regular backfield penetration",
      "Disciplined — cuts back inside immediately after winning the outside shoulder",
      "Good swim move — uses it effectively in combination with hand fighting",
      "Shows good power even against bigger linemen",
      "Great hustle and motor — plays hard on every snap",
      "Threat in run defense and as interior pass rusher",
      "Uses bend to get to the QB after winning with hands",
      "Clearly well coached and disciplined",
    ],
    concerns: ["Projected 40 time of 4.95 — not a burner, wins with technique not pure speed"],
    comp: null,
    stats: { GetOff: 9, PassRush: 8, RunDefense: 7, Motor: 9 },
    notes: "The technique out of Miami is elite. Wins with hand fighting and discipline, not athleticism. That kind of player tends to translate well at the next level.",
    flags: [],
  },
  {
    rank: 4, name: "David Bailey", school: "Texas Tech", height: "6'3.5\"", weight: "251 lbs", fortyTime: "TBD",
    grade: "B", tier: "2nd/3rd Round", scouted: true,
    extra: "33 3/4\" arm | 10 1/4\" hands",
    recentStats: "Texas Tech 2025 — starting edge rusher",
    industryView: "Projected Day 2 or early Day 3 as a pass rush specialist. Teams looking for a situational rusher will be very interested.",
    summary: "Stand up edge rusher with good quickness off the line. Has shown good power going directly into the chest of the tackle — not just a speed-around guy. Nasty spin move is a legitimate counter weapon that keeps tackles honest. Can absolutely abuse slower tackles with edge speed and then counter with the spin when they overcommit. Projects primarily as a pass rush specialist at the next level.",
    strengths: [
      "Good quickness off the line as a stand up edge rusher",
      "Good power going directly into the chest — not just a speed rusher",
      "Nasty spin move — legitimate counter that keeps tackles guessing",
      "Uses speed and power well in combination",
      "Devastating against slower tackles with edge speed + spin counter",
      "Great arm length at 33 3/4\" for hand fighting and reach",
    ],
    concerns: [
      "Doesn't carry the same lower body mass as Bain — lighter build",
      "Run defense concern — lacks power to shed blocks consistently at the point of attack",
      "Projects as situational/third down edge threat, not an every-down defender",
    ],
    comp: null,
    stats: { GetOff: 8, PassRush: 8, RunDefense: 5, Motor: 8 },
    notes: "Third down specialist upside is real. The spin move alone will keep tackles honest at the next level. Needs to be schemed correctly — don't ask him to be a run stopper.",
    flags: ["⚠️ Run Defense Concern", "⚠️ Situational Role"],
  },
  {
    rank: 5, name: "Zion Young", school: "Missouri", height: "6'6\"", weight: "202 lbs", fortyTime: "TBD",
    grade: "B", tier: "2nd/3rd Round", scouted: true,
    extra: "33\" arm | 9 1/2\" hands",
    recentStats: "Missouri 2025 — starting defensive end",
    industryView: "High upside projection. NFL coaches are expected to covet his run defense ability and size-speed combination.",
    summary: "Very big and powerful defensive end who plays the run extremely well — one of the better run defenders in this edge class. Amazing bull rush — straight up bullying tackles with size and strength. Great get off despite his massive size and surprisingly fast for how big he is — can chase down running backs which you don't expect. NFL coaches are going to love this guy once they get him in a weight room.",
    strengths: [
      "Elite run defender — one of the best in this edge class",
      "Great at shedding blocks at the last second and pushing big tackles aside",
      "Amazing bull rush — physically bullies tackles",
      "Uses power well when rushing the passer",
      "Good spin move from the interior — needs to deploy it more on the edge",
      "Does an incredible job containing the edge",
      "Surprisingly explosive get off for his size",
      "Very fast for his size — can chase down running backs",
    ],
    concerns: [
      "Needs more pass rush moves — too reliant on bull rush currently",
      "Can over pursue on the edge — needs to work on cutting back inside",
      "Pass rush repertoire needs development at the NFL level",
    ],
    comp: null,
    stats: { GetOff: 8, PassRush: 6, RunDefense: 10, Motor: 8 },
    notes: "Run defense is elite right now. Pass rush potential is there but needs an NFL coaching staff to develop his move repertoire. High upside once that develops.",
    flags: ["⚠️ Pass Rush Development"],
  },
  {
    rank: 6, name: "Cassius Howell", school: "Texas A&M", height: "6'3\"", weight: "253 lbs", fortyTime: "4.59",
    grade: "B-", tier: "Day 3", scouted: true,
    recentStats: "Texas A&M 2025 — starting edge rusher",
    industryView: "Projected Day 3. Disciplined technician who could develop into a solid depth piece or rotational contributor.",
    summary: "Good speed off the edge with excellent containment — never gets out of position. Good bend on the outside and knows how to use it effectively. Does a great job dipping to avoid tackle hands. Once he gets to the outside shoulder of the tackle he cuts immediately back inside to pressure the QB. Rarely gets caught too far upfield — a disciplined, heady pass rusher with a very high motor.",
    strengths: [
      "Good edge speed and excellent containment — never out of position",
      "Good bend — knows how to use it effectively",
      "Cuts back inside immediately after winning the outside shoulder",
      "Rarely gets caught too far upfield — disciplined pass rusher",
      "Great job dipping to avoid tackle hands on the outside",
      "Very high motor — never gives up on a play",
      "Always moving his feet on the rush",
    ],
    concerns: [
      "Needs more work with his hands and secondary pass rush moves",
      "Limited impact in run game — can get held up on blocks due to lack of power",
    ],
    comp: null,
    stats: { GetOff: 7, PassRush: 7, RunDefense: 5, Motor: 9 },
    notes: "High motor and discipline make him a coach's dream as a depth piece. Needs hand development to take the next step as a pass rusher.",
    flags: [],
  },
  {
    rank: 7, name: "Keldric Faulk", school: "TBD", height: "6'6\"", weight: "276 lbs", fortyTime: "TBD",
    grade: "C+", tier: "Day 3", scouted: true,
    extra: "34 3/8\" arm | ~10\" hands",
    recentStats: "2025 — edge rusher",
    industryView: "Developmental projection. Physical tools will attract interest but raw technique will likely push him to Day 3.",
    summary: "Massive frame — one of the biggest edge players in the class. Only 21 years old with arms you want for his size — could see real development once he hits an NFL weight room. Not super explosive off the line and needs work with his punch and hand fighting, but never stops fighting to get to the quarterback. Does a great job watching the quarterback and getting his hands up — racked up a lot of tip passes with his big size.",
    strengths: [
      "Massive frame — one of the biggest edge players in the class",
      "Excellent arm length at 34 3/8\" — ideal for his size",
      "Only 21 years old — high developmental ceiling",
      "Never stops fighting to get to the quarterback — motor is not a concern",
      "Does a great job getting his hands up — tip passes are a real weapon",
      "High ceiling projection given age and physical tools",
    ],
    concerns: [
      "Not super explosive off the line",
      "Needs work with punch and hand fighting technique",
      "Currently a developmental player — technique needs refinement before every-down role",
      "Raw right now — needs NFL coaching to reach potential",
    ],
    comp: null,
    stats: { GetOff: 5, PassRush: 5, RunDefense: 6, Motor: 8 },
    notes: "21 years old with that frame and arm length — you're drafting the ceiling. Needs time but the physical tools are undeniable. An NFL weight room and coaching staff could unlock something special.",
    flags: ["⚠️ Raw/Developmental"],
  },
];

const tierBadge = {
  "Elite":          { background: "#f59e0b", color: "#000" },
  "1st Round":      { background: "#2563eb", color: "#fff" },
  "1st/2nd Round":  { background: "#3b82f6", color: "#fff" },
  "2nd Round":      { background: "#16a34a", color: "#fff" },
  "2nd/3rd Round":  { background: "#0d9488", color: "#fff" },
  "Day 3":          { background: "#475569", color: "#fff" },
  "Camp Body":      { background: "#c2410c", color: "#fff" },
  "Avoid":          { background: "#b91c1c", color: "#fff" },
  "Late Round":     { background: "#6d28d9", color: "#fff" },
  "UDFA":           { background: "#1f2937", color: "#6b7280" },
};

const tierLabel = t => ({ "2nd/3rd Round":"2ND/3RD","1st/2nd Round":"1ST/2ND","1st Round":"1ST RD","2nd Round":"2ND RD","Late Round":"LATE","Camp Body":"CAMP" })[t] || t.toUpperCase();
const gradeColor = g => !g||g==="TBD"?"#475569":g.startsWith("A")?"#f59e0b":g.startsWith("B")?"#60a5fa":g.startsWith("C")?"#94a3b8":"#ef4444";

function StatBar({ label, value }) {
  if (value == null) return (
    <div style={{ display:"flex", alignItems:"center", gap:8 }}>
      <span style={{ fontSize:10, color:"#334155", width:96, flexShrink:0 }}>{label}</span>
      <span style={{ fontSize:10, color:"#1e293b" }}>—</span>
    </div>
  );
  const c = value>=9?"#f59e0b":value>=7?"#60a5fa":value>=5?"#64748b":"#ef4444";
  return (
    <div style={{ display:"flex", alignItems:"center", gap:8 }}>
      <span style={{ fontSize:10, color:"#475569", width:96, flexShrink:0 }}>{label}</span>
      <div style={{ flex:1, height:5, background:"#1e293b", borderRadius:3, overflow:"hidden" }}>
        <div style={{ width:`${value*10}%`, background:c, height:"100%", borderRadius:3 }} />
      </div>
      <span style={{ fontSize:11, fontWeight:700, width:18, textAlign:"right", color:c }}>{value}</span>
    </div>
  );
}

const TIERS    = ["All","Elite","1st Round","1st/2nd Round","2nd Round","2nd/3rd Round","Day 3","Late Round","UDFA","Avoid","Camp Body"];
const EDGE_TIERS = ["All","1st Round","2nd Round","2nd/3rd Round","Day 3"];
const WR_STATS   = ["Speed","Route Running","Hands/Catching","RAC/YAC"];
const EDGE_STATS = ["Get Off","Pass Rush","Run Defense","Motor"];

export default function App() {
  const [position, setPosition]     = useState("WR");
  const [selected, setSelected]     = useState(null);
  const [filter, setFilter]         = useState("All");
  const [scoutedOnly, setScoutedOnly] = useState(false);
  const [drafted, setDrafted]       = useState({});
  const [hidedrafted, setHideDrafted] = useState(false);

  const isWR       = position === "WR";
  const roster     = isWR ? players : edgePlayers;
  const tiers      = isWR ? TIERS : EDGE_TIERS;
  const statLabels = isWR ? WR_STATS : EDGE_STATS;

  const draftKey = p => `${position}-${p.rank}`;
  const isDrafted = p => !!drafted[draftKey(p)];
  const toggleDrafted = (p, e) => {
    e.stopPropagation();
    setDrafted(prev => ({ ...prev, [draftKey(p)]: !prev[draftKey(p)] }));
    if (selected === p.rank) setSelected(null);
  };

  const filtered = roster.filter(p => {
    if (hidedrafted && isDrafted(p)) return false;
    if (scoutedOnly && !p.scouted) return false;
    return filter === "All" || p.tier === filter;
  });

  const sel = selected != null ? roster.find(p => p.rank === selected) : null;
  const bs  = t => ({ ...tierBadge[t], fontSize:9, padding:"2px 8px", borderRadius:2, letterSpacing:1, fontWeight:700, whiteSpace:"nowrap" });

  const switchPosition = pos => { setPosition(pos); setSelected(null); setFilter("All"); };
  const getStats = p => isWR
    ? [p.stats.Speed, p.stats.RouteRunning, p.stats.Hands, p.stats.RAC]
    : [p.stats.GetOff, p.stats.PassRush, p.stats.RunDefense, p.stats.Motor];

  return (
    <div style={{ fontFamily:"'DM Mono','Courier New',monospace", background:"#080c14", minHeight:"100vh", color:"#e2e8f0", display:"flex", flexDirection:"column", position:"relative" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Bebas+Neue&display=swap');
        .pr{cursor:pointer;border-bottom:1px solid #0f172a;border-left:2px solid transparent;transition:background .12s,border-color .12s;}
        .pr:hover{background:rgba(255,255,255,.025);}
        .pr.on{background:rgba(96,165,250,.07);border-left-color:#60a5fa;}
        .fb{font-family:'DM Mono',monospace;cursor:pointer;padding:3px 10px;font-size:9px;letter-spacing:1.5px;border-radius:2px;border:1px solid #1e293b;background:transparent;color:#334155;white-space:nowrap;transition:all .12s;}
        .fb.on{border-color:#60a5fa;background:rgba(96,165,250,.1);color:#60a5fa;}
        .pos-tab{font-family:'Bebas Neue',sans-serif;cursor:pointer;padding:6px 20px;font-size:15px;letter-spacing:3px;border-radius:2px;border:1px solid #1e293b;background:transparent;color:#334155;transition:all .15s;}
        .pos-tab.on{border-color:#f59e0b;background:rgba(245,158,11,.1);color:#f59e0b;}
        ::-webkit-scrollbar{width:3px}::-webkit-scrollbar-track{background:#080c14}::-webkit-scrollbar-thumb{background:#1e293b;border-radius:2px}
      `}</style>

      {/* HEADER */}
      <div style={{ borderBottom:"1px solid #1e293b", padding:"18px 24px 14px", background:"linear-gradient(180deg,#0d1520 0%,#080c14 100%)", flexShrink:0 }}>
        <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", flexWrap:"wrap", gap:10 }}>
          <div>
            <div style={{ fontFamily:"'Bebas Neue'", fontSize:36, letterSpacing:3, color:"#f8fafc", lineHeight:1 }}>2026 NFL DRAFT</div>
            <div style={{ fontFamily:"'Bebas Neue'", fontSize:18, letterSpacing:6, color:"#60a5fa", lineHeight:1.4 }}>
              {isWR ? "WIDE RECEIVER BIG BOARD" : "EDGE RUSHER BIG BOARD"}
            </div>
            <div style={{ fontSize:9, color:"#1e3a5f", marginTop:3, letterSpacing:2 }}>
              PERSONAL SCOUTING · {roster.length} PLAYERS · {roster.filter(p=>p.scouted).length} SCOUTED · {roster.filter(p=>!p.scouted).length} PENDING
            </div>
          </div>
          <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:12 }}>
            <div style={{ display:"flex", gap:6 }}>
              {["WR","EDGE"].map(pos=>(
                <button key={pos} className={`pos-tab${position===pos?" on":""}`} onClick={()=>switchPosition(pos)}>{pos}</button>
              ))}
            </div>
            <div style={{ display:"flex", gap:18 }}>
              {[
                {l:"Scouted",n:roster.filter(p=>p.scouted).length,c:"#f59e0b"},
                {l:"Pending",n:roster.filter(p=>!p.scouted).length,c:"#334155"},
                {l:"Day 1-2",n:roster.filter(p=>["Elite","1st Round","1st/2nd Round","2nd Round","2nd/3rd Round"].includes(p.tier)).length,c:"#60a5fa"},
              ].map(s=>(
                <div key={s.l} style={{ textAlign:"center" }}>
                  <div style={{ fontFamily:"'Bebas Neue'", fontSize:30, color:s.c, lineHeight:1 }}>{s.n}</div>
                  <div style={{ fontSize:8, color:"#1e3a5f", letterSpacing:2 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FILTERS */}
      <div style={{ padding:"9px 24px", borderBottom:"1px solid #1e293b", display:"flex", gap:5, overflowX:"auto", alignItems:"center", flexShrink:0 }}>
        {tiers.map(t=><button key={t} className={`fb${filter===t?" on":""}`} onClick={()=>setFilter(t)}>{t.toUpperCase()}</button>)}
        <div style={{ marginLeft:"auto", display:"flex", gap:5, flexShrink:0 }}>
          <button className={`fb${scoutedOnly?" on":""}`} onClick={()=>setScoutedOnly(v=>!v)}>👁 SCOUTED ONLY</button>
          <button className={`fb${hidedrafted?" on":""}`} onClick={()=>setHideDrafted(v=>!v)}
            style={{ borderColor: hidedrafted?"#ef4444":"#1e293b", color: hidedrafted?"#ef4444":"#334155", background: hidedrafted?"rgba(239,68,68,.1)":"transparent" }}>
            🚫 HIDE DRAFTED
          </button>
        </div>
      </div>

      {/* BOARD LIST */}
      <div style={{ flex:1, overflowY:"auto" }}>
        <div style={{ display:"grid", gridTemplateColumns:"38px 1fr 60px 68px 60px 80px 40px", padding:"7px 16px", borderBottom:"1px solid #1e293b", background:"#0d1520", position:"sticky", top:0, zIndex:2 }}>
          {["RK","PLAYER","HT","WT","40","TIER",""].map(h=><div key={h} style={{ fontSize:9, color:"#1e3a5f", letterSpacing:2 }}>{h}</div>)}
        </div>
        {filtered.map(p=>{
          const isOn = selected===p.rank;
          const wasDrafted = isDrafted(p);
          return (
            <div key={p.rank} className={`pr${isOn?" on":""}`}
              onClick={()=>!wasDrafted && setSelected(isOn?null:p.rank)}
              style={{ display:"grid", gridTemplateColumns:"38px 1fr 60px 68px 60px 80px 40px", padding:"10px 16px", opacity: wasDrafted ? 0.3 : !p.scouted ? 0.6 : 1, background: wasDrafted ? "rgba(239,68,68,0.04)" : undefined }}>
              <div style={{ fontFamily:"'Bebas Neue'", fontSize:18, color: wasDrafted?"#ef4444":isOn?"#60a5fa":"#1e3a5f", paddingTop:2, textDecoration: wasDrafted?"line-through":"none" }}>{p.rank}</div>
              <div>
                <div style={{ fontSize:12, color: wasDrafted?"#475569":isOn?"#f8fafc":p.scouted?"#cbd5e1":"#475569", display:"flex", alignItems:"center", gap:6, textDecoration: wasDrafted?"line-through":"none" }}>
                  {p.name}
                  {wasDrafted && <span style={{ fontSize:8, color:"#ef4444", letterSpacing:1 }}>DRAFTED</span>}
                  {!wasDrafted && !p.scouted && <span style={{ fontSize:7, color:"#1e3a5f", letterSpacing:1 }}>PENDING</span>}
                </div>
                <div style={{ fontSize:9, color:"#334155", marginTop:1 }}>{p.school}</div>
                {!wasDrafted && p.scouted && p.flags.length>0 && <div style={{ marginTop:2, display:"flex", gap:4, flexWrap:"wrap" }}>{p.flags.map(f=><span key={f} style={{ fontSize:8, color:"#78350f" }}>{f}</span>)}</div>}
              </div>
              <div style={{ fontSize:10, color:"#334155", display:"flex", alignItems:"center" }}>{p.height}</div>
              <div style={{ fontSize:10, color:"#334155", display:"flex", alignItems:"center" }}>{p.weight}</div>
              <div style={{ fontSize:10, color:p.fortyTime!=="TBD"?"#a78bfa":"#1e3a5f", fontWeight:p.fortyTime!=="TBD"?500:400, display:"flex", alignItems:"center" }}>{p.fortyTime}</div>
              <div style={{ display:"flex", alignItems:"center" }}><span style={bs(p.tier)}>{tierLabel(p.tier)}</span></div>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"center" }}>
                <button
                  onClick={e=>toggleDrafted(p,e)}
                  title={wasDrafted?"Undo drafted":"Mark as drafted"}
                  style={{ background:"none", border:`1px solid ${wasDrafted?"#ef4444":"#1e293b"}`, borderRadius:2, color: wasDrafted?"#ef4444":"#334155", fontSize:10, cursor:"pointer", padding:"2px 5px", lineHeight:1 }}>
                  {wasDrafted ? "↩" : "✓"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* FULLSCREEN MODAL */}
      {sel&&(
        <div onClick={e=>{ if(e.target===e.currentTarget) setSelected(null); }}
          style={{ position:"fixed", top:0, left:0, right:0, bottom:0, zIndex:9999, background:"rgba(4,8,16,0.97)", display:"flex", alignItems:"flex-start", justifyContent:"center", overflowY:"auto", padding:"16px" }}>
          <div style={{ background:"#080c14", border:"1px solid #1e293b", borderRadius:6, width:"100%", maxWidth:920, position:"relative", boxShadow:"0 0 80px rgba(0,0,0,0.9)", marginTop:4, marginBottom:16 }}>

            <button onClick={()=>setSelected(null)} style={{ position:"sticky", top:0, float:"right", margin:"16px 16px 0 0", background:"#0d1520", border:"1px solid #1e293b", color:"#475569", fontSize:11, letterSpacing:2, padding:"5px 12px", borderRadius:2, cursor:"pointer", fontFamily:"'DM Mono',monospace", zIndex:10 }}>
              ESC ×
            </button>

            <div style={{ padding:"28px 32px 32px" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:24, borderBottom:"1px solid #1e293b", paddingBottom:20 }}>
                <div>
                  <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:6 }}>
                    <span style={{ fontFamily:"'Bebas Neue'", fontSize:12, color:"#334155", letterSpacing:4 }}>#{sel.rank} {sel.scouted?"PERSONALLY SCOUTED":"PLACEHOLDER RANK"} · {position}</span>
                    <span style={bs(sel.tier)}>{tierLabel(sel.tier)}</span>
                    {sel.comp&&<span style={{ fontSize:9, color:"#7c3aed", letterSpacing:1, border:"1px solid rgba(124,58,237,.3)", padding:"2px 8px", borderRadius:2 }}>COMP: {sel.comp}</span>}
                  </div>
                  <div style={{ fontFamily:"'Bebas Neue'", fontSize:52, color:"#f8fafc", letterSpacing:3, lineHeight:1 }}>{sel.name}</div>
                  <div style={{ fontSize:12, color:"#60a5fa", letterSpacing:3, marginTop:6 }}>{sel.school}</div>
                </div>
                <div style={{ textAlign:"right", flexShrink:0, marginLeft:24 }}>
                  <div style={{ fontFamily:"'Bebas Neue'", fontSize:72, lineHeight:1, color:gradeColor(sel.grade) }}>{sel.grade}</div>
                  <div style={{ fontSize:9, color:"#334155", letterSpacing:2 }}>SCOUT GRADE</div>
                </div>
              </div>

              <div style={{ display:"grid", gridTemplateColumns:"repeat(6,1fr)", gap:8, marginBottom:16 }}>
                {[
                  {l:"HEIGHT",v:sel.height},{l:"WEIGHT",v:sel.weight},{l:"40 TIME",v:sel.fortyTime,hi:sel.fortyTime!=="TBD"},
                  ...(sel.extra?sel.extra.split("|").map(e=>({l:e.trim().split(" ").slice(1).join(" ").toUpperCase()||"EXTRA",v:e.trim().split(" ")[0]})):[])
                ].slice(0,6).map((m,i)=>(
                  <div key={i} style={{ background:"#0d1520", border:"1px solid #1e293b", borderRadius:3, padding:"10px 14px" }}>
                    <div style={{ fontSize:8, color:"#1e3a5f", letterSpacing:2, marginBottom:4 }}>{m.l}</div>
                    <div style={{ fontSize:15, fontWeight:500, color:m.hi?"#a78bfa":"#475569" }}>{m.v}</div>
                  </div>
                ))}
              </div>

              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:14 }}>
                <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                  {sel.recentStats&&(
                    <div style={{ background:"rgba(167,139,250,.05)", border:"1px solid rgba(167,139,250,.15)", borderRadius:3, padding:"12px 16px" }}>
                      <div style={{ fontSize:8, color:"#7c3aed", letterSpacing:2, marginBottom:8 }}>COLLEGE PRODUCTION</div>
                      <div style={{ fontSize:11, color:"#94a3b8", lineHeight:2 }}>{sel.recentStats.split("|").map((s,i)=><div key={i}>{s.trim()}</div>)}</div>
                    </div>
                  )}
                  {sel.scouted?(
                    <div style={{ background:"rgba(96,165,250,.05)", border:"1px solid rgba(96,165,250,.15)", borderRadius:3, padding:"12px 16px", flex:1 }}>
                      <div style={{ fontSize:8, color:"#3b82f6", letterSpacing:2, marginBottom:8 }}>MY SCOUTING REPORT</div>
                      <div style={{ fontSize:12, color:"#cbd5e1", lineHeight:1.85 }}>{sel.summary}</div>
                      {sel.notes&&<div style={{ fontSize:11, color:"#334155", marginTop:10, fontStyle:"italic", borderTop:"1px solid #1e293b", paddingTop:10 }}>"{sel.notes}"</div>}
                    </div>
                  ):(
                    <div style={{ background:"rgba(51,65,85,.15)", border:"1px solid #1e293b", borderRadius:3, padding:"12px 16px" }}>
                      <div style={{ fontSize:8, color:"#334155", letterSpacing:2, marginBottom:6 }}>PERSONAL SCOUTING</div>
                      <div style={{ fontSize:12, color:"#1e3a5f", fontStyle:"italic" }}>Evaluation pending — ranked by industry projection.</div>
                    </div>
                  )}
                  {sel.industryView&&(
                    <div style={{ background:"rgba(245,158,11,.04)", border:"1px solid rgba(245,158,11,.18)", borderRadius:3, padding:"12px 16px" }}>
                      <div style={{ fontSize:8, color:"#92400e", letterSpacing:2, marginBottom:8 }}>WHAT OTHERS ARE SAYING</div>
                      <div style={{ fontSize:12, color:"#cbd5e1", lineHeight:1.85 }}>{sel.industryView}</div>
                    </div>
                  )}
                </div>

                <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                  {sel.scouted&&(
                    <div style={{ background:"#0d1520", border:"1px solid #1e293b", borderRadius:3, padding:"14px 16px" }}>
                      <div style={{ fontSize:8, color:"#1e3a5f", letterSpacing:2, marginBottom:14 }}>ATTRIBUTE GRADES</div>
                      <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                        {statLabels.map((lbl,i)=><StatBar key={lbl} label={lbl} value={getStats(sel)[i]}/>)}
                      </div>
                    </div>
                  )}
                  {sel.strengths.length>0&&(
                    <div style={{ background:"#0d1520", border:"1px solid rgba(34,197,94,.2)", borderRadius:3, padding:"14px 16px" }}>
                      <div style={{ fontSize:8, color:"#22c55e", letterSpacing:2, marginBottom:10 }}>STRENGTHS</div>
                      {sel.strengths.map((s,i)=>(
                        <div key={i} style={{ display:"flex", gap:8, fontSize:11, color:"#94a3b8", lineHeight:1.6, marginBottom:6 }}>
                          <span style={{ color:"#22c55e", flexShrink:0, marginTop:1 }}>+</span><span>{s}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {sel.concerns.length>0&&(
                    <div style={{ background:"#0d1520", border:"1px solid rgba(239,68,68,.2)", borderRadius:3, padding:"14px 16px" }}>
                      <div style={{ fontSize:8, color:"#ef4444", letterSpacing:2, marginBottom:10 }}>CONCERNS</div>
                      {sel.concerns.map((c,i)=>(
                        <div key={i} style={{ display:"flex", gap:8, fontSize:11, color:"#94a3b8", lineHeight:1.6, marginBottom:6 }}>
                          <span style={{ color:"#ef4444", flexShrink:0, marginTop:1 }}>−</span><span>{c}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {sel.flags.length>0&&(
                    <div style={{ background:"#0d1520", border:"1px solid rgba(245,158,11,.2)", borderRadius:3, padding:"12px 16px" }}>
                      <div style={{ fontSize:8, color:"#92400e", letterSpacing:2, marginBottom:8 }}>FLAGS</div>
                      {sel.flags.map(f=><div key={f} style={{ fontSize:12, color:"#fbbf24", marginBottom:4 }}>{f}</div>)}
                    </div>
                  )}
                </div>
              </div>

              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:8, paddingTop:16, borderTop:"1px solid #1e293b" }}>
                <button
                  onClick={()=>{ const idx=roster.findIndex(p=>p.rank===sel.rank); if(idx>0) setSelected(roster[idx-1].rank); }}
                  disabled={roster.findIndex(p=>p.rank===sel.rank)===0}
                  style={{ fontFamily:"'DM Mono',monospace", background:"#0d1520", border:"1px solid #1e293b", color:"#475569", fontSize:10, letterSpacing:2, padding:"6px 16px", borderRadius:2, cursor:"pointer", opacity:roster.findIndex(p=>p.rank===sel.rank)===0?.3:1 }}>
                  ← PREV
                </button>
                <span style={{ fontSize:9, color:"#1e3a5f", letterSpacing:2 }}>#{sel.rank} OF {roster.length} · CLICK BACKDROP TO CLOSE</span>
                <button
                  onClick={()=>{ const idx=roster.findIndex(p=>p.rank===sel.rank); if(idx<roster.length-1) setSelected(roster[idx+1].rank); }}
                  disabled={roster.findIndex(p=>p.rank===sel.rank)===roster.length-1}
                  style={{ fontFamily:"'DM Mono',monospace", background:"#0d1520", border:"1px solid #1e293b", color:"#475569", fontSize:10, letterSpacing:2, padding:"6px 16px", borderRadius:2, cursor:"pointer", opacity:roster.findIndex(p=>p.rank===sel.rank)===roster.length-1?.3:1 }}>
                  NEXT →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
