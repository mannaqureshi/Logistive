import React, { Fragment } from "react";
import { Collapse } from "antd";
import { GlobalConfig, scrollToForm } from "../config";
import { CustomButton } from "../components/button";
import { withRouter } from "react-router-dom";
const { Panel } = Collapse;

export const Faqs = withRouter(props => {
  const faqs = [
    {
      title: "What is a booking procedure at Logistive?",
      desc: `Logistive offers instant online booking method. You can avail free estimate by filling out a form and can reserve online in a matter of minutes. In addition, you can also book your mover over the phone call. `
    },
    {
      title: "How can I track my move? ",
      desc: `Logistive will keep you updated regarding your move. You will be able to track your move under the Account Section where timely information will be shared with you to make your moving experience comfortable and reliable. `
    },
    {
      title: "What if I need installation services of appliances?",
      desc: `At Logistive, we have a team of dedicated electricians to install or uninstall all your appliances including Air Conditioner, LED TVs and UPS. `
    },
    {
      title: "Will Logistive disassemble and reassemble my furniture?",
      desc: `Logistive offers the complete relocation services. Our expert furniture removalists will disassemble and reassemble your furniture as per your requirements`
    },
    {
      title: "What if I need to reschedule my move?",
      desc: `You can adjust and reschedule your move by informing our team so that we can manage things for you accordingly.`
    },
    {
      title: "Who will take care of my pets on a moving day?",
      desc: `Relocating your beloved pet can be a daunting task. Logistive understands your concerns regarding the wellbeing of your pet during relocation and will take care of your pet on a moving day.`
    },
    {
      title: "How many days in advance should I contact Logistive?",
      desc: `You can approach Logistive one day prior to your move. We have a strong network of partners across country and abroad which helps us in helping our client at the very last moment. `
    },
    {
      title:
        "Can Logistive provide assistance with customizing my moving plan?",
      desc: `We accept payments via bank transfers and easy paisa.`
    },
    {
      title: "Does Logistive relocate potted plants? ",
      desc: `
      Moving your plants can increase your worries on a moving day. To make your moving experience stress free, Logistive offers potted plants relocation services as well. `
    }
  ];
  return (
    <Fragment>
      <div className="container">
        <p style={{ textAlign: "center" }} className="heading-secondary blue">
          FAQs
        </p>
        {faqs.map((e, i) => {
          return (
            <Collapse
              style={{
                background: GlobalConfig.white
              }}
              bordered={false}
            >
              <Panel header={e.title} key={i}>
                <p>{e.desc}</p>
              </Panel>
            </Collapse>
          );
        })}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem"
        }}
      >
        <CustomButton
          onClick={() => {
            props.history.push("/");
            setTimeout(() => {
              scrollToForm();
            }, 200);
          }}
        >
          Book Your move now
        </CustomButton>
      </div>
    </Fragment>
  );
});
