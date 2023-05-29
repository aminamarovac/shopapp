import React from "react";
import { Grid } from "@mui/material";
import Text from "../../components/Text/Text";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
export const DropdownDiv = () => {
  return (
    <>
      <div className="blog">
        <Grid
          container
          width="100%"
          height="300px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor="aliceblue"
          color="white"
        >
          <Grid item xs={1}>
            <CustomDiv width="100%">
              <Text>Drop Down Div</Text>
            </CustomDiv>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default DropdownDiv;
