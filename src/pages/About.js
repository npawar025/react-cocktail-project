import React from "react";

const stylePara = {
  textAlign: "center",
};

const About = () => {
  return (
    <section className="section about-section">
      <h1 className="section-title">about us</h1>
      <p style={stylePara}>
        TheCocktailDB was built in 2015 to provide a free data source api for
        drinks online in the hope that developers would build applications and
        cool projects ontop of it. TheCocktailDB originated on the Kodi forums
        as a way to browse cocktail recipes on your TV.
      </p>
      <p style={stylePara}>
        Many developers have since contributed to the project and built apps on
        top of it
      </p>
      <p style={stylePara}>
        TheCocktailDB is also used by universities to tech web design and
        programming as it has an easy to use API and cool content.
      </p>
    </section>
  );
};

export default About;
