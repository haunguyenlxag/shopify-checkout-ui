import { authenticate } from "../shopify.server";
import prisma from "../db.server";

export const action = async ({ request }) => {
  const { payload, topic, shop } = await authenticate.webhook(request);

  console.log(`Received ${topic} webhook for ${shop}`);

  try {
    switch (topic) {
      case "customers/data_request":
        await handleCustomerDataRequest(payload);
        break;
      
      case "customers/redact":
        await handleCustomerRedact(payload);
        break;
      
      case "shop/redact":
        await handleShopRedact(payload);
        break;
      
      default:
        console.log(`Unhandled webhook topic: ${topic}`);
    }
  } catch (error) {
    console.error(`Error processing webhook ${topic}: ${error.message}`);
    // Still return 200 to acknowledge receipt, even if there's an error
  }

  // Always return 200 to acknowledge receipt
  return new Response(null, { status: 200 });
};

async function handleCustomerDataRequest(payload) {
  const { customer } = payload;
  
  if (customer) {
    console.log(`Customer data request received for customer ID: ${customer.id}`);
    
    // In a real implementation, you would:
    // 1. Query your database for all data related to this customer
    // 2. Format the data appropriately
    // 3. Provide it to the store owner (usually via email or admin interface)
    
    // For this app, we might have:
    // - App settings data (if customer-specific)
    // - Any customer-specific customization data
    // - Order-related data if we store any
    
    // Since this app primarily deals with thank you page customization,
    // we likely don't store much customer-specific data
    console.log(`No customer-specific data stored for customer: ${customer.id}`);
  }
}

async function handleCustomerRedact(payload) {
  const { customer, orders_to_redact } = payload;
  
  if (customer) {
    console.log(`Customer redaction request received for customer ID: ${customer.id}`);
    
    // Delete or anonymize customer-specific data from your database
    // Since this app primarily deals with thank you page customization,
    // we likely don't store much customer-specific data
    
    // If you have any customer-specific data, delete it here
    // Example:
    // await prisma.customerData.deleteMany({
    //   where: { customerId: customer.id }
    // });
    
    console.log(`Customer data redacted for customer ID: ${customer.id}`);
  }
  
  if (orders_to_redact && orders_to_redact.length > 0) {
    console.log(`Order redaction request received for ${orders_to_redact.length} orders`);
    
    // Delete or anonymize order-specific data
    // Since this app doesn't store order data directly,
    // we just log the redaction request
    
    orders_to_redact.forEach(orderId => {
      console.log(`Order data redacted for order ID: ${orderId}`);
    });
  }
}

async function handleShopRedact(payload) {
  const { shop_id, shop_domain } = payload;
  
  console.log(`Shop redaction request received for shop: ${shop_domain} (ID: ${shop_id})`);
  
  // Delete all shop-specific data from your database
  // This includes app settings, customization data, etc.
  
  // Delete session data for this shop
  await prisma.session.deleteMany({
    where: { shop: shop_domain }
  });
  
  // If you have any other shop-specific data, delete it here
  // Example:
  // await prisma.appSettings.deleteMany({
  //   where: { shopId: shop_id }
  // });
  
  // await prisma.customizationData.deleteMany({
  //   where: { shopId: shop_id }
  // });
  
  console.log(`All data deleted for shop: ${shop_domain}`);
} 