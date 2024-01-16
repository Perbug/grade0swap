import React from "react";
import {
  Container,
  Col,
  Row,
  Card,
} from "react-bootstrap";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    borderRadius: theme.spacing(2),
    paddingBottom: theme.spacing(3),
    maxWidth: 700,
    margin: "auto",
    marginTop: "10px",
    backgroundColor: "#9b51e0 !important",
    color: "white !important",
    paddingTop: "30px",
    paddingLeft: "40px",
    paddingRight: "40px",
    width: "100% !important",
    marginBottom:"30px"
  },
  title: {
    textAlign: "center",
    padding: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
  },
  fullWidth: {
    width: "100%",
  },
}));

function ConnectWalletPage() {
  const classes = useStyles();
  return (
    <div>
      <div className="Title">
        <h1 className="alternative-title">
          Grade0 Swap Interface
        </h1>
      </div>

      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card className={classes.paperContainer}>
              <Card.Body>
                <Typography
                  variant="h6"
                  className={classes.title}
                  color="common.white"
                >
                  Please connect an Ethereum wallet to your browser to use the
                  application
                </Typography>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <p className="text-center text-white">
        Alternative Uniswap Interface | Get AUT for use in the bakerloo
        testnet{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://faucet.bakerloo.autonity.network/"
        >
          here
        </a>
      </p>
    </div>
  );
}

export default ConnectWalletPage;
