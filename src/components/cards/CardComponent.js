import { Box, styled } from "@mui/material";

export function CardComponent ({children}) {
    const CardComponentContainer = styled(Box)({
        padding: '20px',
        backgroundColor: '#FFFFFF',
        borderRadius: '10px',
        boxShadow: '0px 0px 9px rgba(155, 107, 125, 0.15)',
        margin: '20px 0',    
        marginTop: '50px',
        marginBottom: '10px',
        textAlign: 'center',
        width: '100%',
        position: 'relative',
    });
      
    return (
        <CardComponentContainer>
            {children}
        </CardComponentContainer>
    );
}