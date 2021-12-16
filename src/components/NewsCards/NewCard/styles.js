import { makeStyles } from '@mui/styles';

export default makeStyles({
    card: { 
        height: '35rem', 
        position: 'relative' 
    },
    footer: { 
        position: 'absolute', 
        bottom: '1rem', 
        width: '100%' 
    },
    footerContent: { 
        width: '100%', 
        display:'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between' 
    },
    articleIndex: { 
        marginRight: '0.5rem', 
        border: '1px black text.secondary', 
        borderRadius: '50%', 
        padding: '0.25rem' 
    }
});