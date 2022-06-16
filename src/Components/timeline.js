import { Box, styled, Typography } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const Outline = styled(Box)(({ theme }) => ({
   position: 'relative',
   padding: '0.8rem',
   maxWidth: '350px',
   border: '1px solid rgba(0, 0, 0, 0.05)',
   background: '#fafafa',
}));

const Square = styled(Box)(({ reverse }) => ({
   position: 'absolute',
   borderRight: reverse ? 0 : '1px solid rgba(0, 0, 0, 0.05)',
   borderBottom: reverse ? 0 : '1px solid rgba(0, 0, 0, 0.05)',
   borderTop: reverse ? '1px solid rgba(0, 0, 0, 0.05)' : 0,
   borderLeft: reverse ? '1px solid rgba(0, 0, 0, 0.05)' : 0,
   width: '20px',
   height: '20px',
   background: '#fafafa',
   top: '30%',
   zIndex: 200,
   left: reverse ? '100%' : 0,
   transform: 'translateX(-50%) rotate(135deg)',
}));

const TimeLine = () => {
   return (
      <Box>
         <Timeline position='alternate'>
            <TimelineItem>
               <TimelineSeparator>
                  <TimelineDot
                     sx={{
                        backgroundImage:
                           'url("https://i.ibb.co/r0gHkvM/color-palette-1.png")',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        height: '100px',
                        width: '100px',
                     }}
                  />
                  <TimelineConnector
                     sx={{
                        height: '130px',
                        width: 0,
                        border: '1px dashed #ffeded',
                     }}
                  />
               </TimelineSeparator>
               <TimelineContent sx={{ marginTop: -5 }}>
                  <Outline>
                     <Square />
                     <Box
                        sx={{
                           backgroundColor: '#f4f3e2',
                           p: 3,
                           width: '100%%',
                           height: '100%',
                           position: 'relative',
                           zIndex: 300,
                        }}
                     >
                        <Box>
                           <Typography
                              variant='h5'
                              color='#FF847C'
                              sx={{
                                 fontFamily: "'Parisienne', cursive",
                                 fontSize: '2rem',
                              }}
                           >
                              Ceremonia Religiosa
                           </Typography>
                           <Typography
                              variant='body1'
                              sx={{
                                 my: 2,
                                 textTransform: 'uppercase',
                                 color: 'rgb(127, 127, 127)',
                              }}
                           >
                              DIECIOCHO HORAS
                           </Typography>
                           <Typography
                              variant='body1'
                              sx={{ mb: 1, color: '#7f7f7f' }}
                           >
                              Capilla San Pablo Apóstol
                           </Typography>
                           <Typography
                              variant='body1'
                              sx={{ color: '#7f7f7f' }}
                           >
                              Habrá camiones que saldrán del hotel a las 5:50
                              P.M.
                           </Typography>
                        </Box>
                     </Box>
                  </Outline>
               </TimelineContent>
            </TimelineItem>
            <TimelineItem>
               <TimelineSeparator>
                  <TimelineDot
                     sx={{
                        backgroundImage:
                           'url("https://i.ibb.co/r0gHkvM/color-palette-1.png")',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        height: '100px',
                        width: '100px',
                     }}
                  />
                  <TimelineConnector />
               </TimelineSeparator>
               <TimelineContent
                  sx={{ display: 'flex', justifyContent: 'flex-end' }}
               >
                  <Outline>
                     <Square reverse />
                     <Box
                        sx={{
                           backgroundColor: '#fef6f8',
                           p: 3,
                           width: '100%%',
                           height: '100%',
                           position: 'relative',
                           zIndex: 300,
                           textAlign: 'left',
                        }}
                     >
                        <Box>
                           <Typography
                              variant='h5'
                              color='#FF847C'
                              sx={{
                                 fontFamily: "'Parisienne', cursive",
                                 fontSize: '2rem',
                              }}
                           >
                              Ceremonia Religiosa
                           </Typography>
                           <Typography
                              variant='body1'
                              sx={{
                                 my: 2,
                                 textTransform: 'uppercase',
                                 color: 'rgb(127, 127, 127)',
                              }}
                           >
                              DIECIOCHO HORAS
                           </Typography>
                           <Typography
                              variant='body1'
                              sx={{ mb: 1, color: '#7f7f7f' }}
                           >
                              Capilla San Pablo Apóstol
                           </Typography>
                           <Typography
                              variant='body1'
                              sx={{ color: '#7f7f7f' }}
                           >
                              Habrá camiones que saldrán del hotel a las 5:50
                              P.M.
                           </Typography>
                        </Box>
                     </Box>
                  </Outline>
               </TimelineContent>
            </TimelineItem>
            <TimelineItem>
               <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
               </TimelineSeparator>
               <TimelineContent>Sleep</TimelineContent>
            </TimelineItem>
            <TimelineItem>
               <TimelineSeparator>
                  <TimelineDot />
               </TimelineSeparator>
               <TimelineContent>Repeat</TimelineContent>
            </TimelineItem>
         </Timeline>
      </Box>
   );
};

export default TimeLine;
