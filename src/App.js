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
  Drawer,
  List,
  ListItem,
  IconButton,
} from "@mui/material";
import logo from "./lounea.png";
import oimage from "./download.jpeg";
import simage from "./sanni.jpeg";
import editologo from "./edito.png";
import mau from "./autokauppias.png";
import background from "./Background.jpg";

import "./App.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";

const customTypographyStyle = {
  fontFamily: "'arial', sans-serif",
};

const englishBoxData = [
  {
    id: 1,
    text: "Social Media Post",
    price: "€ 5",
    hoverText:
      "Includes editing and proofreading for one post. Up to 140 characters",
  },
  {
    id: 2,
    text: "CV",
    price: "€ 25 ",
    hoverText: "The price is per page",
  },
  {
    id: 3,
    text: "Content Proofreading",
    price: "€ 100",
    hoverText: "Unique graphics for social or web use or brick&morter.",
  },
  {
    id: 4,
    text: "Web Proofreading",
    price: "€ 100",
    hoverText: "Price is per Page",
  },
  {
    id: 5,
    text: "Mentoring & Coaching",
    price: "$40",
    hoverText: "Price is per Page",
  },
  {
    id: 6,
    text: "Voice Over",
    price: "€ 2000",
    hoverText: "Single Page mobile/desktop application development.",
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
      "Asiakkaan tarpeisiin räätälöityä natiivia keskustelu- ja ääntämisvalmennusta lähi- ja etäopetuksena ryhmille ja yksityishenkilöille.",
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
  const [drawerOpen, setDrawerOpen] = useState(false);

  const drawerList = (
    <List>
      <ListItem>
        <Button color="inherit" href="#about-us">
          {language === "en" ? "About Us" : "Meistä"}
        </Button>
      </ListItem>
      <ListItem>
        <Button color="inherit" href="#pricing">
          {language === "en" ? "Pricing" : "Hinnasto"}
        </Button>
      </ListItem>
      <ListItem>
        <Button color="inherit" href="#contacts">
          {language === "en" ? "Contact" : "Ota yhteyttä"}
        </Button>
      </ListItem>
      <ListItem>
        <Button color="inherit" href="#work">
          {language === "en" ? "Clients" : "Asiakkaitamme"}
        </Button>
      </ListItem>
    </List>
  );

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

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
  }, [currentImageIndex]);

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
            onClick={handleDrawerToggle}
            style={{
              display: "none",
              "@media (max-width: 600px)": { display: "block" },
            }}
          >
            <MenuIcon />
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
        <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
          {drawerList}
        </Drawer>
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
              alt="About Us Image"
              style={{
                width: "200px",
                marginRight: "10px",
                marginBottom: "10px",
              }}
            />
            <Box>
              <Typography style={customTypographyStyle} component="span">
                {language === "en" ? (
                  "Here's some brief information about our company. We strive to deliver the best service and make our customers happy."
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
                  "Here's some brief information about our company. We strive to deliver the best service and make our customers happy."
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
                    fontFamily: " sans-serif",
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
        <section id="contacts" style={{ textAlign: "center" }}>
          <Typography variant="h4" mb={2}>
            {language === "en" ? "Contact" : "Ota yhteyttä"}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
              <img
                src={oimage}
                alt="Orelso Vitam"
                style={{ width: "100px", height: "100px", borderRadius: "50%" }}
              />
              <Typography>
                <strong>Name:</strong> Orelso Vitam
              </Typography>
              <Typography>
                <strong>Email:</strong> editofin@gmail.com
              </Typography>
              <div style={{ marginBottom: "20px" }}>
                <Typography>
                  <Link href="tel:+358451243334">+358 45 124 3334</Link>
                </Typography>
              </div>
            </Grid>
            {/* <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
              <img
                src={simage}
                alt="Sanni Suilamo"
                style={{ width: "100px", height: "100px", borderRadius: "50%" }}
              />
              <Typography>
                <strong>Name:</strong> Sanni Suilamo
              </Typography>
              <Typography>
                <strong>Email:</strong> jane.smith@example.com
              </Typography>
              <div style={{ marginBottom: "20px" }}>
                <Typography>
                  <strong>Phone:</strong> +0987654321
                </Typography>
              </div>
            </Grid> */}
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
            {language === "en" ? "Our References" : "Asiakkaitamme"}
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
            <Link
              href="mailto:orelso.edito@gmail.com"
              style={{ margin: "0 10px" }}
            >
              <EmailIcon color="primary" />
            </Link>
            <Link
              href="https://linkedin.com/in/orelsovitam-56879791"
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
              href="https://www.facebook.com/your-link"
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
