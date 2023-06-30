import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import User1 from "../../assets/images/man1.jpg"
import User2 from "../../assets/images/man2.jpg"
import User3 from "../../assets/images/man4.jpg"
import User4 from "../../assets/images/woman1.jpg"
import User5 from "../../assets/images/man3.jpg"



function Library() {
  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={12} className="middle-header">
            <span className="middle-header-title">چت های اخیر</span>
          </Col>
          <Col sm={12}>
            <Nav className="flex-column friends-list">
              <Nav.Item>
                <Nav.Link eventKey="first" className="user-chat">
                  <div className="avatar">
                    <img src={User1} alt="avatar" />
                  </div>
                  <div className="content">
                    <span className="username">مهدی عطایی</span>
                    <span className="chat-summary">
                      چطوری؟ چی شد بالاخره؟ درست شد؟ حالا باید ...
                    </span>
                  </div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second" className="user-chat">
                  <div className="avatar">
                    <img src={User2} alt="avatar" />
                  </div>
                  <div className="content">
                    <span className="username">رضا قوچانی</span>
                    <span className="chat-summary">
                      سلام خوبی؟ چه خبر
                    </span>
                  </div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second" className="user-chat">
                  <div className="avatar">
                    <img src={User3} alt="avatar" />
                  </div>
                  <div className="content">
                    <span className="username">علی احمدی</span>
                    <span className="chat-summary">
                      سلام خوبی؟ چه خبر
                    </span>
                  </div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second" className="user-chat">
                  <div className="avatar">
                    <img src={User4} alt="avatar" />
                  </div>
                  <div className="content">
                    <span className="username">رضا قوچانی</span>
                    <span className="chat-summary">
                      سلام خوبی؟ چه خبر
                    </span>
                  </div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second" className="user-chat">
                  <div className="avatar">
                    <img src={User5} alt="avatar" />
                  </div>
                  <div className="content">
                    <span className="username">علی احمدی</span>
                    <span className="chat-summary">
                      سلام خوبی؟ چه خبر
                    </span>
                  </div>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
}

export default Library;
