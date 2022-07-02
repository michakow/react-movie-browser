import { useParams, Link } from "react-router-dom";
import {
  StyledDiv,
  StyledHeading,
  StyledParagraph,
  StyledWaitingHeading,
} from "./ActivationPage.styles";
import { serverURL } from "../../utils/serverURL";
import { useEffect, useState } from "react";

const ActivationPage = () => {
  const { userName } = useParams();
  const [activationState, setActivationState] = useState("loading");

  useEffect(() => {
    setActivationState("loading");

    fetch(`${serverURL}/users/verify`, {
      method: "POST",
      body: JSON.stringify({ userName: userName }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.code) setActivationState("success");
        else setActivationState("error");
      })
      .catch((error) => {
        console.log("Error:", error);
        setActivationState("serverError");
      });
  }, [userName]);

  return (
    <StyledDiv>
      {activationState === "loading" ? (
        <StyledWaitingHeading>Weryfikowanie..</StyledWaitingHeading>
      ) : (
        <>
          <StyledHeading success={activationState}>
            {activationState === "success"
              ? "Account activated!"
              : activationState === "error"
              ? "No account required activation"
              : "Server problem :("}
          </StyledHeading>
          <StyledParagraph>
            {activationState === "success"
              ? "Now you can sign in!"
              : activationState === "error"
              ? "Account not exist or was activated"
              : "We found problem with server. Try later, please"}
          </StyledParagraph>
          <Link to="/login">Sign in</Link>
        </>
      )}
    </StyledDiv>
  );
};

export default ActivationPage;
