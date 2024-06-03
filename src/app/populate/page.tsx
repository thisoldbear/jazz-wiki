"use client";
const Populate = () => {
  if (typeof localStorage !== "undefined" && typeof window !== "undefined") {
    localStorage.setItem(
      "documents",
      JSON.stringify([
        {
          title: "John Coltrane",
          html: "<p><strong>John William Coltrane</strong> (September 23, 1926 – July 17, 1967) was an American jazz saxophonist, bandleader and composer. He is among the most influential and acclaimed figures in the history of jazz and 20th-century music.</p><p><br></p><p>Born and raised in North Carolina, Coltrane moved to Philadelphia after graduating from high school, where he studied music.</p>",
          id: "7af49616-1def-4521-854b-541f39a4ea9f",
        },
        {
          title: "Miles Davis",
          html: "<p><strong>Miles Dewey Davis III </strong>(May 26, 1926 – September 28, 1991) was an American jazz trumpeter, bandleader, and composer. He is among the most influential and acclaimed figures in the history of jazz and 20th-century music.</p><p><br></p><p>Davis adopted a variety of musical directions in a roughly five-decade career that kept him at the forefront of many major stylistic developments in jazz.</p>",
          id: "0c64f546-6e40-4e4d-a518-dd442730eb63",
        },
        {
          title: "Alice Coltrane",
          html: "<p><strong>Alice Lucille Coltrane </strong>(née McLeod; August 27, 1937 – January 12, 2007), also known as Swamini Turiyasangitananda (IAST: Svāminī Turīyasaṅgītānanda) or simply Turiya, was an American jazz musician, composer, bandleader and Hindu spiritual leader.</p><p><br></p><p>An accomplished pianist and one of the few harpists in the history of jazz, Coltrane recorded many albums as a bandleader, beginning in the late 1960s and early 1970s for Impulse! and other record labels.</p>",
          id: "3d63b3d4-8b02-41c3-8743-98af69d87698",
        },
      ])
    );

    window.dispatchEvent(new StorageEvent("documentsUpdated"));
  }

  return null;
};

export default Populate;
