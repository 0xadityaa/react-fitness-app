import React from 'react';
import { Typography, Stack, Button } from '@mui/material';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart
    },
    {
      icon: TargetImage,
      name: target
    },
    {
      icon: EquipmentImage,
      name: equipment
    }
  ];

  return (
    <Stack gap="60px" sx={{flexDirection: {lg: "row"}, padding: "20px", alignItems: "center"}}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{gap: {lg: "35px", xs: "20px"}}}>
        <Typography varient="h1" fontWeight="bold" textTransform="capitalize">
          {name}
        </Typography>
        <Typography varient="h3">
          Exercise keeps you strong.{name} {` `}
          is one of the best 
          exercises to target your {target} {' '}.
          It will help you improve your mood and gain energy.
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button sx={{background: "#fff2db", borderRadius: "50%", width: "100px", height: "100px"}}>
              <img src={item.icon} alt={bodyPart} style={{width: "50px", height: "50px"}} />
            </Button>
            <Typography textTransform="capitalize" variant="h4">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail