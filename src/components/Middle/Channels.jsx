import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import FastFood from "../../assets/images/fastfood.jpg";
import Sky from "../../assets/images/sky.jpg";
import Robot from "../../assets/images/Robot.jpg";

function Channels() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={12} className="middle-header">
          <span className="middle-header-title">کانال ها</span>
        </Col>
        <Col sm={12}>
          <Nav className="flex-column channel-list">
            <Nav.Item>
              <Nav.Link eventKey="first" className="channel">
                <div className="channel-profile">
                  <img src={FastFood} alt="avatar" />
                </div>
                <div className="content">
                  <span className="channel-name">fast food</span>
                  <span className="channel-summary">
                    بهترین غذا های فست فوی رو تو این کال دنبال کنید
                  </span>
                </div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className="channel">
                <div className="channel-profile">
                  <img src={Sky} alt="avatar" />
                </div>
                <div className="content">
                  <span className="channel-name">Wallpaper</span>
                  <span className="channel-summary">تصویر 4k از ماشین</span>
                </div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className="channel">
                <div className="channel-profile">
                  <img src={Robot} alt="avatar" />
                </div>
                <div className="content">
                  <span className="channel-name">chat GPT</span>
                  <span className="channel-summary">چت جب پی تی فارسی</span>
                </div>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Channels;
