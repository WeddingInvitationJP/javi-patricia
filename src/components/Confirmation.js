import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  FormControlLabel,
  Modal,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { styled } from "@mui/system";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import VerifiedIcon from "@mui/icons-material/Verified";
import { launchConfetti } from "./utils/confeti";
import { CardComponent } from "./cards/CardComponent";
import { CardIcon } from "./cards/CardIcon";

const TitleText = styled(Typography)({
  fontWeight: "bold",
  fontSize: "1.5rem",
  color: "#97AAB1",
});

const ConfirmButton = styled(Button)({
  backgroundColor: "#9B6B7D",
  color: "#fff",
  width: "80%",
  marginTop: "20px",
  "&:hover": {
    backgroundColor: "#796465",
  },
});

const ModalContainer = styled(Box)({
  position: "absolute",
  top: "52%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "400px",
  maxHeight: "90%",
  backgroundColor: "#FFFFFF",
  borderRadius: "10px",
  boxShadow: "0px 0px 9px rgba(155, 107, 125, 0.15)",
  padding: "30px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
});

const ModalContent = styled(Box)({
  overflowY: "auto",
  flexGrow: 1,
  marginTop: "20px", // Space for the close button and icon
});

const CloseButton = styled(IconButton)({
  position: "absolute",
  top: "10px",
  right: "10px",
});

const IconButtonStyled = styled(IconButton)({
  color: "#9B6B7D",
  margin: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const VerifiedIconStyled = styled(VerifiedIcon)({
  fontSize: "2rem",
  color: "#9B6B7D",
});

const ConfirmationIcon = styled(LocalActivityIcon)({
  fontSize: "2rem",
  color: "#9B6B7D",
});

const Confirmation = () => {
  const [needsTransport, setNeedsTransport] = useState(false);
  const [pickupLocation, setPickupLocation] = useState('');
  const [hasIntolerances, setHasIntolerances] = useState('false');
  const [intolerances, setIntolerances] = useState('');
  const [personCount, setPersonCount] = useState(1);
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  const handleOpen = () => {
    launchConfetti();
    setTimeout(() => {
      setOpen(true);
    }, 300);
  };

  const handleClose = () => setOpen(false);

  const phoneNumberJavi = process.env.REACT_APP_PHONE_JAVI;
  const phoneNumberPatricia = process.env.REACT_APP_PHONE_PATRICIA;

  const handlePersonCount = (increment) => {
    setPersonCount(prev => Math.max(1, prev + increment));
  };

  const handleSendMessage = (recipient) => {
    let message = "¡Ese día estaré con vosotros, confirmo mi asistencia! ❤\n\n";
    
    // Información sobre asistentes
    message += `Asistentes: ${personCount} personas\n\n`;
    
    // Información sobre transporte
    message += "Transporte: " + (needsTransport ? "SÍ" : "NO");
    if (needsTransport) {
      message += `\nLugar: ${pickupLocation}`;
    }
    
    // Información sobre intolerancias
    message += "\nIntolerancias: ";
    if (hasIntolerances === 'true') {
      message += intolerances.trim() ? `SÍ\n${intolerances}` : "SÍ";
    } else {
      message += "NO";
    }

    const whatsappUrl = `https://wa.me/${recipient}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    handleClose();
    launchConfetti();
  };

  useEffect(() => {
    if (needsTransport && contentRef.current) {
      setTimeout(()=> {
        contentRef.current.scrollTop = contentRef.current.scrollHeight;
      }, 1300)
    }
  }, [needsTransport]);

  return (
    <>
      <CardComponent>
        <CardIcon>
          <ConfirmationIcon />
        </CardIcon>
        <TitleText>¡Allí nos vemos!</TitleText>
        <Typography
          variant="body1"
          sx={{ marginTop: "20px", color: "#796465" }}
        >
          Estamos agradecidos con tu presencia y nos encantará contar con
          vosotros en ese día tan especial.
        </Typography>
        <ConfirmButton onClick={handleOpen}>Confirmar asistencia</ConfirmButton>
      </CardComponent>
      <Modal open={open} onClose={handleClose}>
        <ModalContainer>
          <CloseButton onClick={handleClose}>
            <CloseIcon />
          </CloseButton>
          <CardIcon>
            <VerifiedIconStyled />
          </CardIcon>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#97AAB1" }}
          >
            ¡Gracias por venir!
          </Typography>
          <ModalContent ref={contentRef}>
            <Box sx={{ marginBottom: "20px" }}>
              <Typography variant="body1" sx={{ marginBottom: "10px", color: "#796465" }}>
                ¿Necesitas transporte?
              </Typography>
              <RadioGroup
                value={needsTransport.toString()}
                onChange={(e) => setNeedsTransport(e.target.value === "true")}
                sx={{ flexDirection: "row", justifyContent: "center" }}
              >
                <FormControlLabel 
                  value="true" 
                  control={<Radio />} 
                  label="Sí"
                  sx={{ color: "#796465" }}
                />
                <FormControlLabel 
                  value="false" 
                  control={<Radio />} 
                  label="No"
                  sx={{ color: "#796465" }}
                />
              </RadioGroup>
            </Box>

            {needsTransport && (
              <Box sx={{ marginBottom: "20px" }}>
                <Typography variant="body1" sx={{ marginBottom: "10px", color: "#796465" }}>
                  ¿Dónde te recogemos?
                </Typography>
                <RadioGroup
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  sx={{ flexDirection: "row", justifyContent: "center" }}
                >
                  <FormControlLabel 
                    value="Castellón" 
                    control={<Radio />} 
                    label="Castellón"
                    sx={{ color: "#796465" }}
                  />
                  <FormControlLabel 
                    value="Almazora" 
                    control={<Radio />} 
                    label="Almazora"
                    sx={{ color: "#796465" }}
                  />
                </RadioGroup>
              </Box>
            )}

            <Box sx={{ marginBottom: "20px" }}>
              <Typography variant="body1" sx={{ marginBottom: "10px", color: "#796465" }}>
                ¿Tienes alguna intolerancia?
              </Typography>
              <RadioGroup
                value={hasIntolerances}
                onChange={(e) => {
                  setHasIntolerances(e.target.value);
                  if (e.target.value === 'false') {
                    setIntolerances('');
                  }
                }}
                sx={{ flexDirection: "row", justifyContent: "center" }}
              >
                <FormControlLabel 
                  value="true" 
                  control={<Radio />} 
                  label="Sí"
                  sx={{ color: "#796465" }}
                />
                <FormControlLabel 
                  value="false" 
                  control={<Radio />} 
                  label="No"
                  sx={{ color: "#796465" }}
                />
              </RadioGroup>

              {hasIntolerances === 'true' && (
                <TextField
                  fullWidth
                  multiline
                  rows={2}
                  value={intolerances}
                  onChange={(e) => setIntolerances(e.target.value)}
                  placeholder="Escribe aquí tus intolerancias..."
                  sx={{
                    marginTop: "10px",
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#9B6B7D',
                      },
                      '&:hover fieldset': {
                        borderColor: '#796465',
                      },
                    },
                  }}
                />
              )}
            </Box>

            <Box sx={{ marginBottom: "20px" }}>
              <Typography variant="body1" sx={{ marginBottom: "10px", color: "#796465" }}>
                ¿Cuántas personas vendréis?
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Button 
                      onClick={() => handlePersonCount(-1)}
                      sx={{ minWidth: '40px', color: '#9B6B7D' }}
                    >
                      -
                    </Button>
                    <Typography sx={{ color: "#796465" }}>{personCount}</Typography>
                    <Button 
                      onClick={() => handlePersonCount(1)}
                      sx={{ minWidth: '40px', color: '#9B6B7D' }}
                    >
                      +
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Typography variant="h6" sx={{ marginBottom: "20px", color: "#97AAB1" }}>
              Confirmar asistencia con ...
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <IconButtonStyled onClick={() => handleSendMessage(`+34${phoneNumberJavi}`)}>
                <AccountCircleIcon sx={{ fontSize: "4rem" }} />
                <Typography variant="body2" sx={{ color: "#796465", marginTop: "10px" }}>
                  Javi
                </Typography>
              </IconButtonStyled>
              <IconButtonStyled onClick={() => handleSendMessage(`+34${phoneNumberPatricia}`)}>
                <PersonIcon sx={{ fontSize: "4rem" }} />
                <Typography variant="body2" sx={{ color: "#796465", marginTop: "10px" }}>
                  Patricia
                </Typography>
              </IconButtonStyled>
            </Box>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default Confirmation;
