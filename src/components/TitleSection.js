import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

export default function TitleSection({title}){
    const TitleContainer = styled(Box)({
        marginTop: '25%',
        textAlign: 'center',
        marginBottom: '20px',
      });
      const TitleText = styled(Typography)({
        backgroundColor: '#855D41', // Color marrón cálido
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '5px',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        display: 'inline-block',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          left: '-20px',
          top: '50%',
          transform: 'translateY(-50%)',
          borderLeft: '10px solid transparent',
          borderRight: '10px solid #855D41',
          borderTop: '10px solid transparent',
          borderBottom: '10px solid transparent',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          right: '-20px',
          top: '50%',
          transform: 'translateY(-50%)',
          borderLeft: '10px solid #855D41',
          borderRight: '10px solid transparent',
          borderTop: '10px solid transparent',
          borderBottom: '10px solid transparent',
        },
      });

    return (
        <TitleContainer>
            <TitleText>{title}</TitleText>
        </TitleContainer>
    );
}