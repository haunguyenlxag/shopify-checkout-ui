import {
  Page,
  Layout,
  Text,
  Card,
  BlockStack,
  Link,
  Badge,
} from "@shopify/polaris";

import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  await authenticate.admin(request);

  return null;
};

export default function Index() {

  return (
    <Page>
      <BlockStack gap="500">
        <Layout>
          <Layout.Section>
            <Card>
              <BlockStack gap="500">
                <BlockStack gap="200">
                  <Text as="h2" variant="headingMd">
                    Thank You Page Block Content Manager 🎉
                  </Text>
                  <Text variant="bodyMd" as="p">
                    Add a customizable content block to your Shopify Thank You page. Display a headline, description (with markdown support), image, and a call-to-action link—fully configurable from your app settings. The block supports custom colors, font sizes, borders, and will automatically append the order ID to your link for personalized experiences.
                  </Text>
                  <Badge tone="success">Active</Badge>
                </BlockStack>
                
                <BlockStack gap="200">
                  <Text as="h3" variant="headingMd">
                    Key Features:
                  </Text>
                  <BlockStack gap="200">
                    <Text as="p" variant="bodyMd">
                      ✅ <strong>Headline & Link:</strong> Show a bold headline, optionally as a clickable link (order ID is appended automatically).
                    </Text>
                    <Text as="p" variant="bodyMd">
                      ✅ <strong>Description with Markdown:</strong> Support for headings, lists, bold, italic, and dividers in your message.
                    </Text>
                    <Text as="p" variant="bodyMd">
                      ✅ <strong>Image Support:</strong> Display an image below your message.
                    </Text>
                    <Text as="p" variant="bodyMd">
                      ✅ <strong>Design Customization:</strong> Choose font size, text color, background color, border style, and more.
                    </Text>
                    <Text as="p" variant="bodyMd">
                      ✅ <strong>Order-aware Links:</strong> The block automatically adds the order ID to your link for tracking or personalization.
                    </Text>
                  </BlockStack>
                </BlockStack>

                <BlockStack gap="200">
                  <Text as="h3" variant="headingMd">
                    How to Add the Thank You Block to Your Store:
                  </Text>
                  <BlockStack gap="300">
                    <Text as="p" variant="bodyMd">
                      <strong>1. Go to Shopify Admin:</strong> Open your Shopify Admin and navigate to <strong>Settings &gt; Checkout</strong>.
                    </Text>
                    <Text as="p" variant="bodyMd">
                      <strong>2. Customize Thank You Page:</strong> Click <strong>Customize</strong> next to the Thank You page in the "Post-purchase pages" section.
                    </Text>
                    <Text as="p" variant="bodyMd">
                      <strong>3. Add App Block:</strong> In the theme editor, click <strong>Add app block</strong> and select <strong>Thank You Page Block Content Manager</strong> (or your app's block name).
                    </Text>
                    <Text as="p" variant="bodyMd">
                      <strong>4. Configure & Save:</strong> Drag the block to your desired position, configure its settings, and click <strong>Save</strong>.
                    </Text>
                  </BlockStack>
                </BlockStack>

                <BlockStack gap="200">
                  <Text as="h3" variant="headingMd">
                    Get Started:
                  </Text>
                  <Text as="p" variant="bodyMd">
                    Use the left menu to access block content management features. You can create or update your block's content and design at any time.
                  </Text>
                </BlockStack>
              </BlockStack>
            </Card>
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
  );
}
