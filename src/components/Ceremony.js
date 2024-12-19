import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import AddAlarmIcon from '@mui/icons-material/AddAlarm';
import DirectionsIcon from '@mui/icons-material/Directions';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { CardComponent } from './cards/CardComponent';
import { CardIcon } from './cards/CardIcon';
import ChurchIcon from '@mui/icons-material/Church';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const CeremonyIcon = styled(EventAvailableIcon)({
  fontSize: '2rem',
  color: '#9B6B7D',
});

const Section = styled(Box)({
  marginBottom: '20px',
});

// Podemos crear un estilo común para los botones
const buttonStyle = {
  marginTop: '10px', 
  backgroundColor: '#9B6B7D', 
  color: '#fff', 
  width: '80%',
  '&:hover': {
    backgroundColor: '#796465', // Cambiado al mismo color que usamos en otros componentes
  }
};

const Ceremony = () => {
  const handleAddToCalendar = () => {
    const event = {
      title: 'Boda Javi y Patricia - Iglesia Barranco de la Virgen',
      start: '2024-05-02T17:45:00',
      end: '2024-05-03T04:30:00',
      location: 'Almazora - Castellón',
    };

    const calendarUrl = new URL('https://www.google.com/calendar/render');
    calendarUrl.searchParams.append('action', 'TEMPLATE');
    calendarUrl.searchParams.append('text', event.title);
    calendarUrl.searchParams.append('dates', `${event.start.replace(/-|:|\.\d\d\d/g, '')}/${event.end.replace(/-|:|\.\d\d\d/g, '')}`);
    calendarUrl.searchParams.append('location', event.location);

    window.open(calendarUrl.toString(), '_blank');
  };

  return (
    <>
      <CardComponent>
        <CardIcon>
          <CeremonyIcon />
        </CardIcon>
        <Section marginTop={2}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#97AAB1' }}>DÍA</Typography>
          <Typography variant="body1">Viernes 02 de Mayo - 17:45h</Typography>
          <Button
            variant="contained"
            sx={buttonStyle}
            onClick={handleAddToCalendar}
            startIcon={<AddAlarmIcon />}
          >
            Agendar
          </Button>
        </Section>
        <Section marginTop={5}>
          <ChurchIcon sx={{ color: '#9B6B7D', fontSize: '2rem', marginBottom: '10px' }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#97AAB1' }}>CEREMONIA</Typography>
          <Typography variant="body1">Iglesia de Almazora</Typography>
          <Typography variant="body1">Plaça de l'Església, 2A, Almazora</Typography>
          <Button
            variant="contained"
            sx={buttonStyle}
            href="https://www.google.com/maps?rlz=1C1ONGR_esES1034ES1034&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzg2MmowajSoAgCwAgE&um=1&ie=UTF-8&fb=1&gl=es&sa=X&geocode=KUv-RZzYAGANMQgLn0gmfmtZ&daddr=Pla%C3%A7a+de+l%27Esgl%C3%A9sia,+2A,+12550+Almassora,+Castell%C3%B3"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<DirectionsIcon />}
          >
            Cómo llegar
          </Button>
        </Section>

        <Section marginTop={5}>
          <RestaurantIcon sx={{ color: '#9B6B7D', fontSize: '2rem', marginBottom: '10px' }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#97AAB1' }}>CONVITE</Typography>
          <Typography variant="body1">Masía Fuente la Reina</Typography>
          <Typography variant="body1">Partida Coscollosa, Castellón</Typography>
          <Button
            variant="contained"
            sx={buttonStyle}
            href="https://www.google.es/maps/place/Mas%C3%ADa+Fuente+la+Reina/@40.023323,-0.0201202,15z/data=!3m1!4b1!4m6!3m5!1s0xd5fff781cb19cdb:0xc2cce7e5f6089ec6!8m2!3d40.0233235!4d-0.0098205!16s%2Fg%2F11dy1l5f9n?hl=es&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<DirectionsIcon />}
          >
            Cómo llegar
          </Button>
        </Section>
      </CardComponent>
    </>
  );
};

export default Ceremony;
