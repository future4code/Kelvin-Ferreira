import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor:  '#4ed6cb',
        color: 'white',
    },
}));

const Aviso = styled.p`
    color: white;
`

export function CadaMatch(props) {
    const classes = useStyles();

    return (
        props.matches.length ? props.matches.map(cada => {
            return (
                <div key={cada.id}>
                    <List className={classes.root}>
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar alt="Foto" src={cada.photo} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={cada.name}
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </List>
                </div >
            )
        }) :
            <Aviso>Não há nenhum match</Aviso>
    )
}
