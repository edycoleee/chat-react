//components/Sidebar.js
import React, { useState } from "react";
import { Button, Modal, Nav, Tab } from "react-bootstrap";
import Contacts from "./Contacts";
import Conversations from "./Conversations";
import NewContactModal from "./NewContactModal";
import NewConversationModal from "./NewConversationModal";

//all constant
const CONVERSATIONS_KEY = "conversations";
const CONTACTS_KEY = "contacts";

function Sidebar({ id }) {
  //default tab in opening page => active key
  const [activeKey, setActivekey] = useState(CONVERSATIONS_KEY);
  const [openModal, setOpenModal] = useState(false);
  const conversationsOpen = activeKey === CONVERSATIONS_KEY;

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div style={{ width: "250px" }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActivekey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversation</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSATIONS_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border-top border-rigth small">
          Your Id : <span className="text-muted">{id}</span>
        </div>
        <Button onClick={() => setOpenModal(true)}>New {conversationsOpen ? "Conversation" : "Contacts"}</Button>
      </Tab.Container>
      <Modal show={openModal} onHide={closeModal}>
        {conversationsOpen ? (
          <NewConversationModal closeModal={closeModal} />
        ) : (
          <NewContactModal closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
}

export default Sidebar;
