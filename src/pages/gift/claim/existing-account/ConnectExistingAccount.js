import { useContext } from 'react';
import { ClaimContext } from '../ClaimMain';
import { Card, Row, Col } from 'react-bootstrap';
import LinkButton from '../../../../components/LinkButton';
import CardButton from '../../../../components/CardButton';
import CardHeader from '../../../../components/CardHeader';
import Divider from '../../../../components/Divider';

const ConnectExistingAccount = ({
  setExistingAccountSourceHandler,
  prevStepHandler,
}) => {
  return (
    <Card.Body className="d-flex flex-column">
      <CardHeader
        title="Connect Account"
        cardText="Connect an existing Polkadot account."
        backClickHandler={prevStepHandler}
      />
      <Col className="d-flex flex-column  flex-grow-1 justify-content-center align-items-center">
        <Row>
          <Col className="mb-3">
            <CardButton
              logo="extension"
              onClick={() => setExistingAccountSourceHandler('EXTENSION')}>
              Polkadot Extension
            </CardButton>
          </Col>
          <Col className="mb-3">
            <CardButton
              logo="signer"
              onClick={() => setExistingAccountSourceHandler('SIGNER')}>
              Parity Signer
            </CardButton>
          </Col>
        </Row>
        <Divider text="Or" />
        <Row className="justify-content-center pb-4">
          <LinkButton
            className="tertiary-button"
            onClick={() => setExistingAccountSourceHandler('ENTER')}>
            Enter Address Manually
          </LinkButton>
        </Row>
      </Col>
    </Card.Body>
  );
};

export default ConnectExistingAccount;
