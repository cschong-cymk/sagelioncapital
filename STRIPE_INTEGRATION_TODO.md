# Stripe Integration TODO

This file tracks the remaining setup steps for the Stripe Checkout embedded form on the Sagelion home page.

## Values to Replace

The following values are placeholders and must be updated before going live.

**Files containing placeholders:**
- [api/create-checkout-session.js](api/create-checkout-session.js)
- [index.html](index.html)

| Field | Current Value | What to Set |
|-------|--------------|-------------|
| `mode` | `payment` | Set to `"payment"` for one-time charges or `"subscription"` for recurring billing. |
| `line_items[].price` | `price_...` | Your actual Stripe Price ID from the Dashboard (https://dashboard.stripe.com/prices) or API. |
| `publishableKey` | `pk_test_...` | Your Stripe publishable key from https://dashboard.stripe.com/test/apikeys or live keys. |

## Configured Parameters

These parameters were configured in Checkout Studio and are already set correctly.

**Files containing these parameters:**
- [api/create-checkout-session.js](api/create-checkout-session.js)

| Parameter | Value |
|-----------|-------|
| `ui_mode` | `form` |
| `billing_address_collection` | `auto` |
| `phone_number_collection.enabled` | `false` |
| `automatic_tax.enabled` | `false` |
| `payment_method_collection` | `always` |
| `submit_type` | `auto` |
| `integration_identifier` | `custom_embedded_web_0001` |

## Setup and Next Steps

### 1. Environment variables

Add these secrets in your Vercel dashboard (Settings → Environment Variables):

| Variable | Source |
|----------|--------|
| `STRIPE_SECRET_KEY` | https://dashboard.stripe.com/test/apikeys (use live key for production) |

No browser-facing `VITE_` prefix is needed because the publishable key is set directly in the HTML script.

### 2. Install dependencies

```bash
npm install
```

This installs the `stripe` package added to `package.json`.

### 3. Create a Stripe Price

In the Stripe Dashboard, create a Price for the donation/product you want to sell, then copy the Price ID (starts with `price_`) into:

- `api/create-checkout-session.js` → `line_items[0].price`

Also update `index.html` → `publishableKey` with your publishable key.

### 4. Project structure

```
sagelioncapital_live/
├── api/
│   └── create-checkout-session.js   # Vercel serverless endpoint
├── index.html                       # Support section + client Stripe form
├── package.json                     # now includes stripe dependency
└── STRIPE_INTEGRATION_TODO.md       # this file
```

### 5. How it works

1. Visitor loads the home page.
2. The page fetches `/api/create-checkout-session` to create a Stripe Checkout Session.
3. The server returns the `client_secret`.
4. The page initializes `stripe.initCheckoutFormSdk()` and mounts the form into `#checkout-form`.
5. The visitor submits the form; Stripe handles payment confirmation.

### 6. Testing

Use Stripe test keys and test card numbers:

- Card: `4242 4242 4242 4242`
- Expiry: any future date
- CVC: any 3 digits

Test the endpoint locally with:

```bash
vercel dev
```

### 7. Next steps

- Replace placeholder Price ID and publishable key.
- Add webhook handling if you need post-payment fulfillment (confirmation emails, seat allocation, etc.).
- Set up live keys and remove test data before launch.
- Add order/donation tracking if required.

### Resources

- https://docs.stripe.com/checkout/embedded-form
- https://support.stripe.com
