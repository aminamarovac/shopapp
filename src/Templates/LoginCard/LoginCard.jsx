import React from "react";
import Text from "../../components/Text/Text";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import { Grid } from "@mui/material";
export const LoginCard = () => {
  return (
    <div className="login">
      <Grid
        container
        width="80%"
        height="500px"
        display="flex"
        direction="column"
        justifyContent="center"
        alignItems="center"
        backgroundColor="orange"
        color="white"
        margin="50px auto"
      >
        <Grid>
          <CustomDiv width="100%">
            <Text>Login to your account</Text><br></br>
            <input type="text" placeholder="Name" />
          </CustomDiv>
        </Grid>
        <Grid>
          <CustomDiv width="100%" >
            <input type="emai" placeholder="Email" />{" "}
          </CustomDiv>
        </Grid>
        <Grid>
          <CustomDiv width="100%" height="90px">
            <p>Keep me signed in</p>
          </CustomDiv>
        </Grid>
        <Grid>
          <CustomDiv width="100%" height="90px">
            <button>Login</button>
          </CustomDiv>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginCard;
