import React, { Fragment } from "react";
import asset1 from "./content/1.svg";
import asset2 from "./content/2.svg";
import asset3 from "./content/3.svg";
import asset4 from "./content/4.svg";
import asset5 from "./content/5.svg";
import asset6 from "./content/6.svg";
import asset7 from "./content/7.svg";
import processX from "./content/process-x.svg";
import processY from "./content/process-y.svg";

import { CustomButton } from "./components/button";
import { MasterForm } from "./components/masterform";
import { Board } from "./components/board";

import scrollTo from "scroll-to-element";

const scrollToTop = () => {
  scrollTo("body");
};

const scrollToForm = () => {
  scrollTo("#masterform", {
    offset: -100,
    duration: 1000,
  });
};
const emailUs = () => {
  window.open("mailto:support@logistive.pk", "_self");
};
const callUs = () => {
  window.open("tel:03111222229", "_self");
};
const whatsappUs = () => {
  window.open(
    "https://api.whatsapp.com/send?phone=923122111107&text=&source=&data=",
    "_blank"
  );
};
const GlobalConfig = {
  primary_color:
    "linear-gradient(to right, rgba(56, 65, 242, 1), rgba(70, 138, 245, 1))",
  secondary_color: "#ea7704",
  white: "#fff",
  black: "#333",
};

Object.freeze(GlobalConfig);

const isMobile = window.innerWidth < 767;

const CallToAction = {
  first: <CustomButton onClick={scrollToForm}>Get A Quote</CustomButton>,
  second: (
    <CustomButton whatsapp={true} onClick={whatsappUs}>
      <ion-icon name="logo-whatsapp"></ion-icon>
      <span>WhatsApp</span>
    </CustomButton>
  ),
};

const sections = [
  {
    content: (toBeChanged) => (
      <Fragment>
        {isMobile && (
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "1rem" }}>{CallToAction.first}</div>
            <div>{CallToAction.second}</div>
          </div>
        )}

        <p className="heading-large tc-primary">We Move</p>
        <p className="heading-primary black">You Relax</p>

        <p className="heading-semi-large grey">
          When You Put Your Life In Boxes, It Matters Who Carries Them.
        </p>
        {!isMobile && (
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "1rem" }}>{CallToAction.first}</div>
            <div>{CallToAction.second}</div>
          </div>
        )}
        <div style={{ display: "flex" }}></div>
      </Fragment>
    ),

    imageLink: asset7,
    traditional: true,
    contentBelow: (
      <Fragment>
        <Board
          title={"you demand it & we move it"}
          imageDesktop={processX}
          imageMobile={processY}
        />
        <MasterForm title="Get Free Quote" />
      </Fragment>
    ),
  },
  {
    isSection: "Our Services",
    content: (toBeChanged) => (
      <Fragment>
        <p className="heading-primary tc-primary">Residential Move</p>
        <p className="heading-secondary black">
          Need help managing a residential move?
        </p>

        <p className="text-primary">
          Finding the right moving and packing company in Pakistan feels like a
          daunting task? Are you still surfing the internet to find the right
          fit for your relocation needs? Then the process of search ends here as
          you are at the right place. Logistive offers comprehensive residential
          moving services in Pakistan. From dismantling curtains rails to
          loading and unloading your belongings, we pay attention to each and
          every detail. Our packing specialists will pack your belongings with
          high quality packing material to minimize the risk of any damage. We
          will label your belongings to keep things organized. Moreover, our
          truck drivers will ensure that your belongings reach at your new home
          or apartment in the safest manner possible. Upon arrival, we will
          unload your belongings with utmost care. Last but not the least, we
          will also use various types of floor runners to prevent any smudges
          and scratches on wood flooring.
        </p>
      </Fragment>
    ),
    imageLink: asset1,
    traditional: false,
  },

  {
    content: (toBeChanged) => (
      <Fragment>
        <p className="heading-primary tc-primary">Corporate Move</p>
        <p className="heading-secondary black">
          Move with Corporate Moving Experts in Pakistan
        </p>
        <p className="text-primary">
          Are you planning to upgrade your office? Are you worried about moving
          IT infrastructure of your office? These worries can take away your
          focus from other assigned tasks. Logistive will make your job easier.
          Logistive provides a one stop solution to all your corporate move
          needs in Pakistan. Our trained professionals will assist you in
          designing a moving plan in order to address all your corporate
          relocation needs. We provide our customers with timely information
          regarding packing and loading duration. We use high quality advanced
          boxes to protect your valuables. Moreover, our furniture removalists
          will disassemble and assemble your workstations during the move. When
          it comes to IT infrastructure, our qualified professionals take the
          charge of organizing cable wires, labelling telephone sets and
          computers, detaching projectors, wrapping monitor screens and
          uninstalling printer and fax machines.
        </p>
      </Fragment>
    ),
    imageLink: asset2,
    traditional: true,
  },
  {
    content: (toBeChanged) => (
      <Fragment>
        <p className="heading-primary tc-primary">International Move</p>
        <p className="heading-secondary black">
          Logistive can move you anywhere in the world
        </p>

        <p className="text-primary">
          Your shipment was delayed last time? Are you finding it difficult to
          craft an international moving plan? International move seems complex
          and overwhelming. Logistive understands all your concerns regarding
          international move and offers excellent international moving services
          in Pakistan. Our team of international movers will assist you in
          choosing an appropriate method of transportation for your belongings
          to any other region of the world. Our team will also guide you
          regarding customs documentation requirements to streamline the customs
          clearance process.
        </p>
      </Fragment>
    ),
    imageLink: asset3,
    traditional: false,
  },
  {
    content: (toBeChanged) => (
      <Fragment>
        <p className="heading-primary tc-primary">
          {" "}
          Paint & Handyman Services{" "}
        </p>
        <p className="heading-secondary black">
          Repairs for your home and office
        </p>
        <p className="text-primary">
          Walls of your room look stained and dirty? A new coat of paint on
          walls of your room can change the entire look of your room. Our
          painting crew is experienced enough to satisfy all your painting
          needs. Moreover, installing electronic appliances after shifting to a
          new home or office can be an exhausting task. Our team of dedicated
          electricians will provide installation services for all your
          electronic appliances including Air Conditioner, LED TVs and UPS.
        </p>
      </Fragment>
    ),
    imageLink: asset4,
    traditional: true,
  },
  {
    content: (toBeChanged) => (
      <Fragment>
        <p className="heading-primary tc-primary"> Intercity Car Move</p>
        <p className="heading-secondary black">
          Repairs for your home and office
        </p>
        <p className="text-primary">
          Intercity car transport can be time consuming and requires a lot of
          energy if you are doing it by yourself. Our expert drivers offer
          intercity car move in a convenient manner.
        </p>
      </Fragment>
    ),
    imageLink: asset5,
    traditional: false,
  },
  {
    content: (toBeChanged) => (
      <Fragment>
        <p className="heading-primary tc-primary"> Nulla pellentesque</p>
        <p className="heading-secondary black">
          Lorem ipsum dolor sit amet, consectetur
        </p>
        <p className="text-primary">
          Phasellus leo nibh, consectetur vitae velit vel, volutpat porttitor
          nibh. Ut volutpat mollis mollis. Aliquam lacinia justo lacus. Integer
          justo turpis, vehicula ac justo nec, viverra efficitur justo. Aliquam
          semper finibus est, et ullamcorper nibh posuere sit amet. Cras
          eleifend neque ac ex condimentum varius eget ut risus. Duis bibendum,
          massa vel malesuada luctus, odio magna euismod nunc, in consectetur
          libero tellus vel mauris.
        </p>
      </Fragment>
    ),
    imageLink: asset6,
    traditional: true,
  },
];
const pageTitle = (name) => "Movers in " + name;
const baseURL = `http://localhost:5000`;
// const baseURL = `https://calm-dusk-85307.herokuapp.com`;

export {
  GlobalConfig,
  sections,
  baseURL,
  pageTitle,
  scrollToForm,
  callUs,
  emailUs,
  whatsappUs,
  scrollToTop,
};
