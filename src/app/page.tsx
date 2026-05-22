// All vw values are proportional conversions from the Figma canvas (5462px wide).
// Replace the gray placeholder divs with <img> or background-image when assets are ready.

const NAV_DOTS = [
  { active: true },
  { active: false },
  { active: true },
  { active: true },
];

const ARCHIVE_ITEMS = Array(8).fill({
  title: "Let's",
  action: "Undo Following",
  subtitle: "Jay Chou, London",
  count: 143,
});

function DownArrow() {
  return (
    <svg
      viewBox="0 0 59 107"
      fill="none"
      style={{ height: "1.961vw", width: "1.079vw" }}
      className="shrink-0"
    >
      <line x1="29.5" y1="0" x2="29.5" y2="93" stroke="black" strokeWidth="3" />
      <polyline
        points="8,76 29.5,107 51,76"
        fill="none"
        stroke="black"
        strokeWidth="3"
      />
    </svg>
  );
}

function LandingSection() {
  return (
    <section
      className="relative w-full overflow-hidden flex flex-col items-end justify-end"
      style={{
        height: "67.29vw",       // 3675px / 5462px
        paddingTop: "24.28vw",   // 1326px / 5462px
        gap: "18.24vw",          // 996px  / 5462px
      }}
    >
      {/* Background image — replace div with <img> or CSS background-image */}
      <div className="absolute inset-0 bg-gray-400" />

      {/* Navigation Dots — right edge */}
      <div
        className="relative shrink-0 flex flex-col"
        style={{ width: "1.447vw", height: "6.464vw" }} // 79px, 353px
      >
        {NAV_DOTS.map((dot, i) => (
          <div
            key={i}
            className="w-full shrink-0"
            style={{
              height: "1.617vw", // 88.273px / 5462px
              backgroundColor: dot.active ? "#1b1a1a" : "#aaa6a3",
            }}
          />
        ))}
      </div>

      {/* Designer Info Container — full width, flex col */}
      <div
        className="relative shrink-0 w-full flex flex-col"
        style={{ height: "16.007vw" }} // 874px / 5462px
      >
        {/* Header Container */}
        <div className="flex items-center justify-between w-full shrink-0">
          {/* Designer Name */}
          <div
            className="bg-black flex items-center justify-center shrink-0"
            style={{ padding: "0.366vw" }} // 20px / 5462px
          >
            <p
              className="font-bold text-white whitespace-pre"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "2.518vw",      // 137.495px / 5462px
                letterSpacing: "-0.1em",
                lineHeight: "2.856vw",    // 155.971px / 5462px
              }}
            >
              {"Paul Sher  Designer"}
            </p>
          </div>

          {/* Read More */}
          <div
            className="bg-white flex items-center shrink-0"
            style={{ padding: "0.366vw", gap: "16px" }}
          >
            <DownArrow />
            <p
              className="font-bold text-black text-center shrink-0"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "2.518vw",      // 137.495px / 5462px
                letterSpacing: "-0.1em",
                lineHeight: "2.856vw",    // 155.971px / 5462px
                width: "11.175vw",        // 610.319px / 5462px
              }}
            >
              Read More
            </p>
          </div>
        </div>

        {/* Quote Container */}
        <div
          className="flex items-stretch w-full"
          style={{ height: "12.42vw" }} // 678px / 5462px
        >
          {/* Quote Author Panel */}
          <div
            className="flex flex-col items-start shrink-0"
            style={{
              width: "34.762vw",          // 1898.626px / 5462px
              backgroundColor: "#a2a2a2",
              paddingBottom: "4.213vw",   // 230px / 5462px
              paddingRight: "3.003vw",    // 164px / 5462px
            }}
          >
            <div
              className="flex items-center justify-center"
              style={{ padding: "0.183vw" }} // 10px / 5462px
            >
              <p
                className="font-bold text-white whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "6.470vw",    // 353.313px / 5462px
                  letterSpacing: "-0.1em",
                }}
              >
                Palm Spring
              </p>
            </div>
          </div>

          {/* Quote Text Panel */}
          <div
            className="flex flex-col items-start flex-1"
            style={{
              backgroundColor: "#232222",
              paddingTop: "0.952vw",      // 52px  / 5462px
              paddingLeft: "1.392vw",     // 76px  / 5462px
              paddingBottom: "4.798vw",   // 262px / 5462px
              paddingRight: "23.476vw",   // 1282px / 5462px
            }}
          >
            <div
              className="flex items-center justify-center"
              style={{ padding: "0.183vw" }}
            >
              <p
                className="text-white"
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  fontSize: "2.777vw",    // 151.61px  / 5462px
                  lineHeight: "3.150vw",  // 171.983px / 5462px
                  width: "39.968vw",      // 2183px    / 5462px
                }}
              >
                &ldquo;My side work was always where I figured out what I
                actually believed.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArchiveItem({
  title,
  action,
  subtitle,
  count,
}: {
  title: string;
  action: string;
  subtitle: string;
  count: number;
}) {
  return (
    <div
      className="relative flex items-end justify-between overflow-hidden shrink-0"
      style={{
        width: "25vw",          // 1365.5px / 5462px (4 equal columns)
        height: "18.611vw",     // 1016.374px / 5462px
        padding: "0.183vw",     // 10px / 5462px
      }}
    >
      {/* Background image — replace div with <img> or CSS background-image */}
      <div className="absolute inset-0 bg-gray-600" />

      {/* Info Container — inline-grid stacking (Title, Action, Subtitle share col-1 row-1) */}
      <div
        className="relative shrink-0"
        style={{
          display: "inline-grid",
          gridTemplateColumns: "max-content",
          gridTemplateRows: "max-content",
          placeItems: "start",
          lineHeight: 0,
        }}
      >
        {/* Action — mt: 2.344vw (128px / 5462px) */}
        <div
          className="bg-white flex items-center justify-center"
          style={{
            gridColumn: "1",
            gridRow: "1",
            marginTop: "2.344vw",
            padding: "0.183vw",
          }}
        >
          <p
            className="font-bold whitespace-nowrap"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "1.628vw",    // 88.836px / 5462px
              letterSpacing: "-0.1em",
              color: "#151515",
            }}
          >
            {action}
          </p>
        </div>

        {/* Subtitle — mt: 4.689vw (256px / 5462px) */}
        <div
          className="bg-black flex items-center justify-center"
          style={{
            gridColumn: "1",
            gridRow: "1",
            marginTop: "4.689vw",
            padding: "0.183vw",
            height: "1.465vw",      // 80px / 5462px
          }}
        >
          <p
            className="font-bold text-white whitespace-nowrap"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.933vw",  // 50.96px / 5462px
              letterSpacing: "-0.1em",
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Title — mt: 0 (renders on top in DOM order) */}
        <div
          className="bg-white flex items-center justify-center"
          style={{
            gridColumn: "1",
            gridRow: "1",
            marginTop: 0,
            padding: "0.183vw",
          }}
        >
          <p
            className="font-bold whitespace-nowrap"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "1.628vw",  // 88.836px / 5462px
              letterSpacing: "-0.1em",
              color: "#151515",
            }}
          >
            {title}
          </p>
        </div>
      </div>

      {/* Stats Container — bottom-right */}
      <div
        className="bg-white flex items-end relative shrink-0"
        style={{
          height: "1.465vw",    // 80px / 5462px
          padding: "0.183vw",
        }}
      >
        <svg
          viewBox="0 0 45 45"
          className="shrink-0"
          style={{ width: "0.817vw", height: "0.817vw" }} // 44.611px / 5462px
        >
          <polygon points="22.5,5 44,40 1,40" fill="black" />
        </svg>
        <p
          className="font-bold text-black whitespace-nowrap shrink-0"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.933vw",  // 50.958px / 5462px
            letterSpacing: "-0.1em",
          }}
        >
          {count}
        </p>
      </div>
    </div>
  );
}

function ArchiveSection() {
  return (
    <div className="flex flex-wrap w-full">
      {ARCHIVE_ITEMS.map((item, i) => (
        <ArchiveItem key={i} {...item} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main
      className="w-full overflow-x-hidden"
      style={{ backgroundColor: "#141412" }}
    >
      <LandingSection />
      <ArchiveSection />
    </main>
  );
}
