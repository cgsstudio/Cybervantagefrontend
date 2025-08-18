# EmailJS Debugging Guide

## Current Issue
You're getting the error: "Sorry, there was been an error sending your message. Please try again or contact us directly."

## Debugging Steps

### 1. Check Browser Console
1. Open your browser's Developer Tools (F12)
2. Go to the Console tab
3. Try submitting the form
4. Look for any error messages or logs

### 2. Test EmailJS Connection
1. Look for the blue "Test EmailJS" button above the form
2. Click it to test if EmailJS is working
3. Check console for any errors

### 3. Verify EmailJS Credentials
Your current configuration:
- **Public Key**: `FH1vZhcDeN3Vg_-GD`
- **Service ID**: `service_6u8396n`
- **Template ID**: `template_ugx265n`

### 4. Common Issues & Solutions

#### Issue 1: EmailJS Not Initialized
**Symptoms**: Console shows "EmailJS is not initialized"
**Solution**: Check if the public key is correct

#### Issue 2: Service ID Invalid
**Symptoms**: Console shows "Service not found"
**Solution**: Verify service ID in EmailJS dashboard

#### Issue 3: Template ID Invalid
**Symptoms**: Console shows "Template not found"
**Solution**: Verify template ID in EmailJS dashboard

#### Issue 4: Template Variables Mismatch
**Symptoms**: Email sent but variables not replaced
**Solution**: Check template variable names match exactly

### 5. EmailJS Dashboard Verification
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Check **Email Services** - verify `service_6u8396n` exists
3. Check **Email Templates** - verify `template_ugx265n` exists
4. Check **Account** → **API Keys** - verify public key

### 6. Template Variable Check
Your template should have these variables:
- `{{to_name}}`
- `{{from_name}}`
- `{{from_email}}`
- `{{from_phone}}`
- `{{company}}`
- `{{request_type}}`
- `{{message}}`
- `{{reply_to}}`

### 7. Test with Simple Template
Create a simple test template:
```html
Subject: Test Email

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}
```

### 8. Browser Compatibility
- Test in different browsers
- Check if JavaScript is enabled
- Clear browser cache and cookies

### 9. Network Issues
- Check if EmailJS is blocked by firewall
- Try on different network
- Check browser network tab for failed requests

### 10. EmailJS Version
You're using `emailjs-com` v3.2.0
- Consider upgrading to latest version
- Check [EmailJS migration guide](https://www.emailjs.com/docs/migrate/)

## Quick Fixes to Try

1. **Restart Development Server**
   ```bash
   npm run dev
   ```

2. **Clear Browser Cache**
   - Hard refresh (Ctrl+F5)

3. **Check EmailJS Status**
   - Visit [EmailJS Status Page](https://status.emailjs.com/)

4. **Test with Different Email**
   - Try different email addresses
   - Check spam folder

## Still Having Issues?

1. Check the console logs after clicking "Test EmailJS"
2. Share the exact error message from console
3. Verify your EmailJS account is active
4. Check if you've reached email limits (free tier has limits)

## Contact Support
- EmailJS Support: [support@emailjs.com](mailto:support@emailjs.com)
- EmailJS Community: [https://community.emailjs.com/](https://community.emailjs.com/)

