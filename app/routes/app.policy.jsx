import {
  Box,
  Card,
  Layout,
  Link,
  List,
  Page,
  Text,
  BlockStack,
  Divider,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

export default function PolicyPage() {
  return (
    <Page>
      <TitleBar title="Privacy Policy" />
      <Layout>
        <Layout.Section>
          <Card>
            <BlockStack gap="400">
              <div>
                <Text as="h1" variant="headingLg">
                  Thankyou Block Privacy Policy
                </Text>
                <Text as="p" variant="bodyMd" color="subdued">
                  Last Update: December 2024
                </Text>
              </div>

              <Divider />

              <Text as="p" variant="bodyMd">
                Thankyou Block ("we", "us", or "our") values and respects your privacy. 
                We have prepared this privacy policy to explain the manner in which we collect, 
                use, disclose and otherwise process your personal information through our 
                Shopify Thankyou Block app (the "App") and other interactions with you.
              </Text>

              <Text as="p" variant="bodyMd">
                Thankyou Block provides its customers ("Customers") with a Shopify eCommerce 
                integration that helps customize checkout thank you pages with custom content, 
                links, styling options, and markdown rendering capabilities (collectively the "Services").
              </Text>

              <Divider />

              <div>
                <Text as="h2" variant="headingMd">
                  TABLE OF CONTENTS
                </Text>
                <List type="bullet">
                  <List.Item>Collection And Use Of Personal Information</List.Item>
                  <List.Item>Sharing Of Personal Information</List.Item>
                  <List.Item>Safeguards And Retention</List.Item>
                  <List.Item>Access To Information</List.Item>
                  <List.Item>Updates To The Privacy Policy</List.Item>
                  <List.Item>Contact Us</List.Item>
                </List>
              </div>

              <Divider />

              <div>
                <Text as="h2" variant="headingMd">
                  Collection and use of personal information
                </Text>
                <Text as="p" variant="bodyMd">
                  The kinds of personal information that we process, and how we process it, 
                  depends on whether we are acting on behalf of our Customers, or whether 
                  we are collecting, using, and disclosing personal information for Thankyou Block's own purposes.
                </Text>

                <Text as="h3" variant="headingMd">
                  How we collect and use personal information on behalf of our Customers
                </Text>
                <Text as="p" variant="bodyMd">
                  The following are some examples of the personal information we may collect 
                  and analyze to provide the Services to our Customers.
                </Text>

                <Text as="p" variant="bodyMd">
                  In the course of providing the Services to our Customers, we may process 
                  personal information about our Customers' employees or other authorized 
                  users of the Services provided by the customer as set out below:
                </Text>

                <BlockStack gap="300">
                  <div>
                    <Text as="h4" variant="headingMd" fontWeight="bold">
                      Use of the App:
                    </Text>
                    <Text as="p" variant="bodyMd">
                      In order to provide the App, we collect certain personal information 
                      about authorized users of our Customers' Shopify store, such as name, 
                      address and email address. We use this personal information to administer 
                      our Customers' access to the App and the Services, and to manage our 
                      relationship with our Customers.
                    </Text>
                  </div>

                  <div>
                    <Text as="h4" variant="headingMd" fontWeight="bold">
                      App Customization Data:
                    </Text>
                    <Text as="p" variant="bodyMd">
                      We collect and store your app customization preferences including:
                    </Text>
                    <List type="bullet">
                      <List.Item>Custom link text and URLs</List.Item>
                      <List.Item>Description content (including markdown text)</List.Item>
                      <List.Item>Styling preferences (colors, fonts, backgrounds, borders)</List.Item>
                      <List.Item>Image URLs for display on thank you pages</List.Item>
                      <List.Item>Font size and appearance settings</List.Item>
                    </List>
                  </div>

                  <div>
                    <Text as="h4" variant="headingMd" fontWeight="bold">
                      Order Data Processing:
                    </Text>
                    <Text as="p" variant="bodyMd">
                      We process order IDs to integrate them with your custom URLs as requested. 
                      This allows us to append order IDs to your specified URLs for tracking 
                      and analytics purposes.
                    </Text>
                  </div>

                  <div>
                    <Text as="h4" variant="headingMd" fontWeight="bold">
                      Support Services:
                    </Text>
                    <Text as="p" variant="bodyMd">
                      We may collect certain information from you (such as name, email address 
                      and query) when we provide user support services by email or other means.
                    </Text>
                  </div>

                  <div>
                    <Text as="h4" variant="headingMd" fontWeight="bold">
                      Use of the Services:
                    </Text>
                    <Text as="p" variant="bodyMd">
                      We may monitor use of the App by our Customers in order to detect, 
                      investigate or prevent any actual or potential violation of our terms 
                      and conditions. This information is automatically collected from you 
                      when you use the App. We may also generate aggregated, non-identifiable 
                      data and use such information to monitor the performance, use and 
                      stability of the App and to improve the Services.
                    </Text>
                  </div>
                </BlockStack>

                <Text as="p" variant="bodyMd">
                  We require our Customers to ensure that they have obtained all authority 
                  to provide personal information to us in accordance with applicable privacy 
                  laws and to not provide us with any sensitive personal information. Except 
                  as set out herein, we do not collect or use personal information from our 
                  Customers for any purpose other than to provide Services.
                </Text>

                <Text as="p" variant="bodyMd">
                  We rely on our Customers to comply with applicable privacy laws when 
                  collecting, using, or disclosing personal information through the Services, 
                  including by obtaining appropriate consent to collect, use, and disclose 
                  personal information, including the personal information of others, through the App.
                </Text>
              </div>

              <Divider />

              <div>
                <Text as="h2" variant="headingMd">
                  Sharing of personal information
                </Text>
                <Text as="p" variant="bodyMd">
                  We do not sell or disclose your personal information to third parties 
                  without your consent, except as set forth below or as required or permitted by law.
                </Text>

                <BlockStack gap="300">
                  <div>
                    <Text as="h4" variant="headingMd" fontWeight="bold">
                      Service Providers:
                    </Text>
                    <Text as="p" variant="bodyMd">
                      Your personal information will be transferred (or otherwise made available) 
                      to certain third parties that provide services on our behalf. We use service 
                      providers to provide services such as hosting the App and providing 
                      database services. Our service providers are only provided with the 
                      information they need to perform their designated functions and are not 
                      authorized to use or disclose personal information for their own marketing 
                      or other purposes.
                    </Text>
                  </div>

                  <div>
                    <Text as="h4" variant="headingMd" fontWeight="bold">
                      Custom URLs and External Links:
                    </Text>
                    <Text as="p" variant="bodyMd">
                      When customers click on your custom links configured in the App, 
                      they will be directed to your specified URLs. We are not responsible 
                      for the privacy practices of these external websites. We encourage 
                      you to review the privacy policies of any external websites you link to.
                    </Text>
                  </div>

                  <div>
                    <Text as="h4" variant="headingMd" fontWeight="bold">
                      Legal and Compliance:
                    </Text>
                    <Text as="p" variant="bodyMd">
                      We may provide your personal information in response to a search warrant 
                      or other legally valid inquiry or order, or to another organization for 
                      the purposes of investigating a breach of an agreement or contravention 
                      of law or detecting, suppressing or preventing fraud, or as otherwise 
                      may be required or permitted by applicable law or legal process.
                    </Text>
                  </div>
                </BlockStack>
              </div>

              <Divider />

              <div>
                <Text as="h2" variant="headingMd">
                  Safeguards and retention
                </Text>
                <Text as="p" variant="bodyMd">
                  We have implemented reasonable administrative, technical and physical 
                  measures in an effort to safeguard the personal information in our custody 
                  and control against theft, loss and unauthorized access, use, modification 
                  and disclosure. We restrict access to personal information on a need-to-know 
                  basis to employees and authorized service providers who require access to 
                  fulfil their job requirements.
                </Text>

                <Text as="p" variant="bodyMd">
                  We have personal information retention processes designed to retain personal 
                  information for no longer than necessary for the purposes of providing 
                  Services to our Customers or to otherwise meet legal requirements.
                </Text>

                <Text as="p" variant="bodyMd">
                  We may also retain aggregate information beyond this time for research 
                  purposes and to help us develop and improve our services. You cannot be 
                  identified from aggregate information retained or used for these purposes.
                </Text>
              </div>

              <Divider />

              <div>
                <Text as="h2" variant="headingMd">
                  Access to information
                </Text>
                <Text as="p" variant="bodyMd">
                  If we receive a request from an individual to access or update personal 
                  information we maintain on behalf of a customer, we will direct that 
                  individual to the relevant customer. We will assist our Customers wherever 
                  possible in responding to individual access requests.
                </Text>

                <Text as="p" variant="bodyMd">
                  Subject to applicable law, you have the right to access, update and correct 
                  inaccuracies in your personal information in our custody or control. 
                  You may request access, updating and corrections of inaccuracies in your 
                  personal information in our custody or control by emailing or writing to 
                  us at the contact information set out below.
                </Text>
              </div>

              <Divider />

              <div>
                <Text as="h2" variant="headingMd">
                  Updates to the privacy policy
                </Text>
                <Text as="p" variant="bodyMd">
                  We may update this privacy policy periodically to reflect changes to our 
                  privacy practices. We encourage you to periodically review this page to 
                  ensure you are familiar with those changes. We will indicate at the top 
                  of this privacy policy when it was most recently updated.
                </Text>
              </div>

              <Divider />

              <div>
                <Text as="h2" variant="headingMd">
                  CONTACT US
                </Text>
                <Text as="p" variant="bodyMd">
                  If you have any questions or comments about this privacy policy or the 
                  manner in which we or our service providers treat your personal information, 
                  or to request access to our collection of your personal information, 
                  please contact us directly at:
                </Text>

                <BlockStack gap="200">
                  <Text as="p" variant="bodyMd">
                    <strong>Email:</strong> nguyenthanhhaulxag@gmail.com
                  </Text>
                  <Text as="p" variant="bodyMd">
                    <strong>Phone:</strong> +84 984 650 937
                  </Text>
                </BlockStack>
              </div>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

