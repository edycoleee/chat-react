import React, { useState } from "react";
import { Nav, Tab } from "react-bootstrap";

//all constant
const CONVERSATIONS_KEY = "conversations";
const CONTACTS_KEY = "contacts";

function Sidebar({ id }) {
  //default tab in opening page => active key
  const [activeKey, setActivekey] = useState(CONVERSATIONS_KEY);
  return (
    <div style={{ width: "250px" }} className="d-flex flex-column">
      <h2>SideBar</h2>
      <Tab.Container activeKey={activeKey} onSelect={setActivekey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversation</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        {id} , cacacacaca
      </Tab.Container>
    </div>
  );
}

export default Sidebar;
