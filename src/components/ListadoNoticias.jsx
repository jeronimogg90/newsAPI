import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import useNoticias from '../hooks/useNoticias'
import Noticia from './Noticia'
import { Pagination, Stack } from '@mui/material'

const ListadoNoticias = () => {
    const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias()

    const totalPaginas = Math.ceil(totalNoticias / 20)

  return (
    <>
        <Typography
            textAlign={'center'}
            marginY={5}
            variant='h3'
            component={'h2'}
        >
            Ultimas Noticas
        </Typography>

        <Grid container spacing={2}>
            {noticias.map(noticia => (
                <Noticia
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </Grid>

        <Stack 
            spacing={2}
            direction={'row'}
            justifyContent='center'
            alignItems='center'
            sx={{
                marginY: 5
            }}
        >
            <Pagination 
                count={totalPaginas} 
                color="primary" 
                onChange={handleChangePagina}
                page={Number(pagina)}
                />
        </Stack>
    </>
  )
}

export default ListadoNoticias
