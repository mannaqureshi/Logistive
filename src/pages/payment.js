import React, { Fragment, Component } from "react";
import { Input, Form, message, Descriptions } from "antd";
import { CustomButton } from "../components/button";
import axios from "axios";
import { baseURL } from "../config";

export class Payment extends Component {
  state = {
    verified: false,
    token: null,
    buttonDisable: false,
    isLoading: false,
    result: null,
    invoiceId: "",
  }; // 2077566000001660111

  initiatePayment = () => {
    this.setState({ verified: false }, async () => {
      const { invoice_id, invoice_number } = this.state.result;
      try {
        const response = await axios.post(`${baseURL}/api/payments/initiate`, {
          invoice_id,
          invoice_number,
        });
        console.log(response.data);
        const { success, auth_token } = response.data;
        this.setState({ verified: success, token: auth_token });
      } catch (error) {
        console.log(error);
        message.info("Some Error Occured");
      }
    });
  };

  render() {
    return (
      <Fragment>
        <div className="container page">
          <Form
            className="masterform"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Input
              style={{ marginRight: "2rem" }}
              placeholder="Enter Invoice ID"
              onChange={(e) => {
                this.setState({ invoiceId: e.target.value });
              }}
            />
            <CustomButton
              onClick={async () => {
                try {
                  const response = await axios.get(
                    `${baseURL}/api/invoices/${this.state.invoiceId}`
                  );
                  this.setState({ result: response.data.invoice });
                } catch (error) {
                  console.log(error);
                  message.info("Some Error Occured");
                }
              }}
            >
              Search
            </CustomButton>
          </Form>
          {this.state.result && (
            <Fragment>
              <Descriptions title="Invoice Details" bordered>
                <Descriptions.Item label="Invoice Number">
                  {this.state.result.invoice_number}
                </Descriptions.Item>
                <Descriptions.Item label="Invoice Id">
                  {this.state.result.invoice_id}
                </Descriptions.Item>
                <Descriptions.Item label="Invoice Link">
                  <a target="_blank" href={this.state.result.invoice_url}>
                    {this.state.result.invoice_url}
                  </a>
                </Descriptions.Item>
                <Descriptions.Item label="Currency">
                  {this.state.result.currency_symbol}
                </Descriptions.Item>
                <Descriptions.Item label="total">
                  {this.state.result.total}
                </Descriptions.Item>
                <Descriptions.Item label="Items">
                  {this.state.result.items.map(({ name, quantity }, idx) => {
                    return (
                      <p key={idx}>
                        {name} x {quantity}
                      </p>
                    );
                  })}
                </Descriptions.Item>
              </Descriptions>
              {!this.state.verified ? (
                <CustomButton onClick={this.initiatePayment}>
                  Pay Now
                </CustomButton>
              ) : (
                <form
                  action="https://easypay.easypaisa.com.pk/easypay/Confirm.jsf "
                  method="POST"
                  target="_blank"
                >
                  <input
                    name="auth_token"
                    value={this.state.token}
                    hidden={true}
                  />
                  <input
                    className="custom-button"
                    name="postBackURL"
                    value={`${baseURL}/api/payments/secondHandler`}
                    hidden={true}
                  />
                  <input value="Checkout" type="submit" name="pay" />
                </form>
              )}
            </Fragment>
          )}
        </div>
      </Fragment>
    );
  }
}
