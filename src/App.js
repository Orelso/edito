import React, { useState, useEffect } from "react";

import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Box,
  Typography,
  Grid,
  Link,
  Paper,
  IconButton,
} from "@mui/material";
import logo from "./lounea.png";
import oimage from "./download.jpeg";
import editologo from "./edito.png";
import mau from "./autokauppias.png";
import background from "./Background.jpg";

import "./App.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
// import MenuIcon from "@mui/icons-material/Menu";

const customTypographyStyle = {
  fontFamily: "'Courier New'",
};

const englishBoxData = [
  {
    id: 1,
    text: "Social Media Text Content",
    price: "5€/piece + VAT 24%",
    hoverText:
      "Includes vocabulary, grammar, punctuation, sentence structure, proofreading and corrections, as well as any fluency improvement suggestions for one publication. Up to 140 characters.",
  },
  {
    id: 2,
    text: "CV",
    price: "20€/page + VAT 24%",
    hoverText:
      "Includes vocabulary, grammar, punctuation, and sentence structure proofreading and corrections, as well as any fluency improvement suggestions.",
  },
  {
    id: 3,
    text: "Content Proofreading",
    price: "20€/page + VAT 24%",
    hoverText:
      "Proofreading and correction of various types of text such as articles, content texts, educational materials, advertisements, product descriptions, and menus. Includes vocabulary, grammar, punctuation, and sentence structure proofreading and corrections, as well as any fluency improvement suggestions. Title pages are free(2-3 words)",
  },
  {
    id: 4,
    text: "Web Proofreading",
    price: "37€/h + VAT 24%",
    hoverText:
      "The website language checking service ensures the correct spelling of your company's communication channel. The service can be conveniently performed directly on the company's website at the customer's request. Includes vocabulary, grammar, punctuation, and sentence structure proofreading and corrections, as well as any fluency improvement suggestions. Request an accurate price estimate! ",
  },
  {
    id: 5,
    text: "Mentoring & Coaching",
    price: "37€ + VAT 24% Groups: Request a quote",
    hoverText:
      "Tailored native conversation and pronunciation coaching for groups and individuals, offered both in-person and online according to the customer's needs.",
  },
  {
    id: 6,
    text: "Voice Over",
    price: "37€ + VAT 24%",
    hoverText:
      "Native text-to-speech service for various types of texts in English or Spanish.",
  },
];

const finnishBoxData = [
  {
    id: 1,
    text: "Sosiaalisen median sisällöt",
    price: "5€/kpl + ALV 24%",
    hoverText:
      "Sisältää sanaston, kieliopin, välimerkkien ja lauserakenteen oikoluvun ja korjaukset sekä mahdolliset sujuvuuden korjausehdotukset yhdelle julkaisulle. Enintään 140 merkkiä.",
  },
  {
    id: 2,
    text: "Ansioluettelot",
    price: "20€/sivu + ALV 24%",
    hoverText:
      "Sisältää sanaston, kieliopin, välimerkkien ja lauserakenteen oikoluvun ja korjaukset sekä mahdolliset sujuvuuden korjausehdotukset.",
  },
  {
    id: 3,
    text: "Sisältöoikoluku",
    price: "20€/sivu, otsikkosivut ilmaiseksi + ALV 24%",
    hoverText:
      "Eri tekstilajien kuten artikkeleiden, sisältötekstien, opetusmateriaalien, mainosten, tuoteselosteiden, ruokalistojen oikoluku ja korjaus. Sisältää sanaston, kieliopin, välimerkkien ja lauserakenteen oikoluvun ja korjaukset sekä mahdolliset sujuvuuden korjausehdotukset",
  },
  {
    id: 4,
    text: "Internetsivujen oikoluku",
    price: "37€/h + ALV 24%",
    hoverText:
      "Internetsivujen kielentarkistuspalvelu takaa yrityksesi viesintäkanavan oikeinkirjoituksen. Palvelu voidaan asiakkaan toiveesta suorittaa vaivattomasti suoraan yrityksen sivuille. Sisältää sanaston, kieliopin, välimerkkien ja lauserakenteen oikoluvun ja korjaukset sekä mahdollisen sujuvuuden korjausehdotukset. Pyydä tarkka hinta-arvio! ",
  },
  {
    id: 5,
    text: "Tuutorointi ja valmennus",
    price: "Yksityishenkilöt: 37€ + ALV 24% Ryhmät: Pyydä tarjous.",
    hoverText:
      "Tailored native conversation and pronunciation coaching for groups and individuals, offered both in-person and online according to the customer's needs.",
  },
  {
    id: 6,
    text: "Voice over",
    price: "37€ + ALV 24%",
    hoverText:
      "Erilaisten tekstien natiivi ääneenlukupalvelu englanniksi tai espanjaksi..",
  },
];

function App() {
  const [hoveredBox, setHoveredBox] = useState(null);
  const [isStickyAppBar, setIsStickyAppBar] = useState(false);
  const [language, setLanguage] = useState("en");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { src: mau, alt: "Company 1 Logo", width: "400px", height: "100px" },
    { src: logo, alt: "Company 2 Logo", width: "100px" },
    // Add more images here...
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3000ms (3 seconds)

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [currentImageIndex, images.length]);

  const boxData = language === "en" ? englishBoxData : finnishBoxData;

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fi" : "en");
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY || window.pageYOffset;
    setIsStickyAppBar(scrollPosition > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`App ${isStickyAppBar ? "sticky-app-bar" : ""}`}>
      <AppBar
        position="sticky"
        elevation={5}
        style={{
          backgroundColor: "#c4929e",
          marginBottom: "10px",
          width: "100%",
          padding: 0,
        }}
      >
        <Toolbar
          style={{
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className="hamburger"
            // onClick={handleDrawerToggle}
            style={{
              display: "none",
              "@media (max-width: 600px)": { display: "block" },
            }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Button color="inherit" onClick={toggleLanguage}>
            {language === "en" ? "Suomeksi" : "In English"}
          </Button>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              "@media (max-width: 600px)": {
                display: "none",
              },
            }}
          >
            <Button color="inherit" href="#about-us">
              {language === "en" ? "About Us" : "Meistä"}
            </Button>
            <Button color="inherit" href="#pricing">
              {language === "en" ? "Pricing" : "Hinnasto"}
            </Button>
            <Button color="inherit" href="#contacts">
              {language === "en" ? "Contact" : "Ota yhteyttä"}
            </Button>
            <Button color="inherit" href="#work">
              {language === "en" ? "Clients" : "Asiakkaitamme"}
            </Button>
          </Box>
        </Toolbar>
        {/* <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
          {drawerList}
        </Drawer> */}
      </AppBar>
      <style jsx global>{`
        @media (max-width: 600px) {
          .MuiToolbar-root {
            flex-direction: column;
          }
        }
      `}</style>
      {/* -------------------------------------------------------------------------------------------------------------------------------------------(About Us)------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
      <Container
        maxWidth="lg"
        style={{ paddingBottom: "40px", paddingTop: "40px" }}
      >
        <Paper
          elevation={5}
          style={{ borderRadius: "5px", marginBottom: "20px" }}
        >
          <Box
            id="about-us"
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems="center"
            padding={2}
            style={{
              backgroundImage: `url(${background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            color="white"
            marginBottom={{ xs: "20px", sm: "0px" }}
          >
            <img
              src={editologo}
              alt="About Us"
              style={{
                width: "200px",
                marginRight: "10px",
                marginBottom: "10px",
                borderRadius: "50%",
              }}
            />
            <Box>
              <Typography
                style={{
                  ...customTypographyStyle,
                  backgroundColor: "rgba(128, 128, 128, 0.5)", // Gray with 50% opacity
                }}
                component="span"
              >
                {language === "en" ? (
                  "Providing native English and Spanish proofreading. Language verification services are provided quickly and professionally. Tailored services are available for businesses and professionals from various fields, social media accounts, and individuals. Comprehensive text care includes not only grammar and vocabulary spelling but also the correction of articles, prepositions, and punctuation. Translation text can also be refined according to customer needs if necessary"
                ) : language === "fi" ? (
                  <>
                    Natiivit englannin- ja espanjan kielen oikoluku- ja
                    kielentarkistuspalvelut nopeasti ja ammattitaitoisesti.
                    Räätälöidyt palvelut eri alojen ammattilaisten, yritysten,
                    sosiaalisen median tilien ja yksityishenkilöiden tarpeisiin.
                    <br />
                    <br />
                    Kattava tekstinhuolto sisältää kieliopin sekä sanaston
                    oikeinkirjoituksen lisäksi artikkeleiden ja prepositioiden
                    sekä välimerkkien korjauksen. Käännöstekstiä voidaan
                    tarvittaessa myös sujuvoittaa asiakkaan tarpeisiin
                    sopivaksi.
                  </>
                ) : (
                  "Providing native English and Spanish proofreading. Checking services are provided quickly and professionally. Tailored services are available for businesses and professionals from various fields, social media accounts, and individuals. Comprehensive text care includes not only grammar and vocabulary spelling but also the correction of articles, prepositions, and punctuation. Translation text can also be refined according to customer needs if necessary"
                )}
              </Typography>
            </Box>
          </Box>
        </Paper>
        {/* -------------------------------------------------------------------------------------------------------------------------------------------(Pricing)------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        <section id="pricing">
          <Grid container spacing={2} sx={{ mb: 2 }}>
            {boxData.map((box) => (
              <Grid item xs={12} sm={6} md={4} key={box.id}>
                {/* Pricing Box */}
                <Box
                  onMouseEnter={() => setHoveredBox(box.id)}
                  onMouseLeave={() => setHoveredBox(null)}
                  sx={{
                    height: 200,
                    width: "90%", // Make the box take full width on mobile
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: 3,
                    bgcolor: "#272622",
                    color: "white",
                    fontFamily: "Courier New",
                    fontSize: "1.2em",
                    p: 2,
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    {hoveredBox === box.id ? (
                      <Typography style={customTypographyStyle} variant="body2">
                        {box.hoverText}
                      </Typography>
                    ) : (
                      <>
                        <Typography style={customTypographyStyle} variant="h6">
                          {box.text}
                        </Typography>
                        <Typography
                          style={customTypographyStyle}
                          variant="body1"
                        >
                          {box.price}
                        </Typography>
                      </>
                    )}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </section>

        {/* -------------------------------------------------------------------------------------------------------------------------------------------(Contacts)------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        <section
          id="contacts"
          style={{ textAlign: "center", fontFamily: "Courier New" }}
        >
          <Typography variant="h4" mb={2} style={{ fontFamily: "Courier New" }}>
            {language === "en" ? "Contact" : "Ota yhteyttä"}
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid
              item
              xs={12}
              md={6}
              style={{ textAlign: "center", fontFamily: "Courier New" }}
            >
              <img
                src={oimage}
                alt="Orelso Vitam"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  boxShadow: "0 4px 8px 0 black",
                }}
              />
              <Typography style={{ fontFamily: "Courier New" }}>
                <strong>
                  <Link
                    href="https://fi.linkedin.com/in/orelso-vitam-56879791"
                    style={{
                      fontFamily: "Courier New",
                      color: "black",
                    }}
                    title="Click Me"
                  >
                    Orelso Vitam
                  </Link>
                </strong>
              </Typography>
              <Typography>CEO</Typography>
              <Typography style={{ fontFamily: "Courier New" }}>
                <strong>
                  <Link
                    href="mailto:editofin@gmail.com"
                    style={{
                      fontFamily: "Courier New",
                      color: "black",
                    }}
                    title="Click for more"
                  >
                    editofin@gmail.com
                  </Link>
                </strong>
              </Typography>
              <div style={{ marginBottom: "20px", fontFamily: "Courier New" }}>
                <Typography style={{ fontFamily: "Courier New" }}>
                  <Link
                    href="tel:+358451243334"
                    style={{
                      fontFamily: "Courier New",
                      color: "black",
                    }}
                    title="Click Me"
                  >
                    +358 45 124 3334
                  </Link>
                </Typography>
              </div>
              <div style={{ marginTop: "30px", fontFamily: "Courier New" }}>
                <Typography
                  id="outlined-multiline-static"
                  label="Write something about yourself"
                  multiline
                  rows={4}
                  variant="outlined"
                  style={{ width: "80%", fontFamily: "Courier New" }}
                >
                  With a strong educational background and a passion for
                  technology, I am your go-to professional for a wide array of
                  services including writing, editing, and proofreading. Based
                  in Salo, Finland, I bring over seven years of teaching
                  experience to the table, with roles as an English teacher in
                  both Salo and Helsinki. My teaching experience extends
                  internationally as well, having worked in China and the Czech
                  Republic. This diverse background not only enhances my
                  language expertise but also deepens my understanding of
                  different cultures, making me a versatile asset in the field.
                  My analytical skills are crucial for creating and reviewing
                  high-quality content. Fluent in both English and Spanish, I
                  offer a comprehensive range of services such as proofreading,
                  social media post enhancement, CV refinement, website content
                  scrutiny, mentoring, language coaching, and voice-over work.
                  Whether you're a business or an individual, reach out today to
                  find out how I can take your writing and communication efforts
                  to the next level.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </section>

        {/* -------------------------------------------------------------------------------------------------------------------------------------------(Worked With)------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

        <section id="work">
          <Typography
            variant="h4"
            mb={2}
            style={{
              padding: "20px 0",
              borderTop: "1px solid #ddd",
              textAlign: "center",
            }}
          >
            {language === "en" ? "Customers" : "Asiakkaitamme"}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <img
                  src={images[currentImageIndex].src}
                  alt={images[currentImageIndex].alt}
                  style={{
                    width: images[currentImageIndex].width, // Using the width from the images array
                    height: images[currentImageIndex].height,
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </section>
      </Container>
      {/* -------------------------------------------------------------------------------------------------------------------------------------------(Footer)------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
      <footer
        style={{
          marginTop: "20px",
          padding: "20px 0",
          borderTop: "1px solid #ddd",
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb={2}
          >
            <Link href="mailto:editofin@gmail.com" style={{ margin: "0 10px" }}>
              <EmailIcon color="primary" />
            </Link>
            <Link
              href="https://fi.linkedin.com/in/orelso-vitam-56879791"
              target="_blank"
              rel="noreferrer"
              style={{ margin: "0 10px" }}
            >
              <LinkedInIcon color="primary" />
            </Link>
            <Link
              href="https://www.instagram.com/edito.fi"
              target="_blank"
              rel="noreferrer"
              style={{ margin: "0 10px" }}
            >
              <InstagramIcon color="primary" />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61550854855118"
              target="_blank"
              rel="noreferrer"
              style={{ margin: "0 10px" }}
            >
              <FacebookIcon color="primary" />
            </Link>
          </Box>
          <Typography variant="body2" color="textSecondary">
            &copy; {new Date().getFullYear()} Edito. All rights reserved.
          </Typography>
        </Container>
      </footer>
    </div>
  );
}

export default App;
