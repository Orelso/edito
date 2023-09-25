import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

const EmailBill = () => {
  const [formData, setFormData] = useState({
    namef: "",
    namel: "",
    email: "",
    message: "",
    ytunnus: "",
    phone: "",
    subject: "",
    company: "",
    website: "",
    country: "",
  });

  const [showMessage, setShowMessage] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [messageType, setMessageType] = useState("success"); // or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formEndpoint = "https://formspree.io/f/xaygbpbp";

    const response = await fetch(formEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.status === 200) {
      setMessageText(
        "The form was submitted successfully. We will be in contact soon - Lomake lähetettiin onnistuneesti. Otamme sinuun pian yhteyttä."
      );
      setMessageType("success");
    } else {
      setMessageText("An error occurred, please try again");
      setMessageType("error");
    }
    setShowMessage(true);
  };

  return (
    <Container component={Paper} style={{ padding: "2rem" }}>
      <Typography
        variant="h4"
        gutterBottom
        style={{ textAlign: "center", color: "#333" }}
      >
        Maksulomake
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Etunimi"
              name="namef"
              value={formData.namef}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Sukunimi"
              name="namel"
              value={formData.namel}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Sähköposti tai Verkkolaskuosoite"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Katuosoite"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Postinumero"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Kaupunki"
              name="website"
              value={formData.website}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Maa"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Y-tunnus"
              name="ytunnus"
              multiline
              value={formData.ytunnus}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Viesti"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
      <Dialog
        open={showMessage}
        onClose={() => setShowMessage(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {messageType === "success" ? "Success" : "Error"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {messageText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowMessage(false)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default EmailBill;
