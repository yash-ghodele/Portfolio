# How to List Your Website on Google (SEO Guide)

You are technically ready! Your site has:
- ✅ **Dynamic Sitemap**: Automatically lists all your projects.
- ✅ **Robots.txt**: Tells Google where to look.
- ✅ **Metadata**: Titles and descriptions are set.

## Final Step: Submit to Google Search Console
This is a manual step you must do to get indexed faster.

1.  **Go to Google Search Console**: [search.google.com/search-console](https://search.google.com/search-console)
2.  **Add Property**:
    - Select **URL Prefix**.
    - Enter your URL: `https://yash-ghodele.pages.dev`
    - Click **Continue**.
3.  **Verify Ownership**:
    - Choose the **HTML Tag** method.
    - Copy the code snippet (it looks like `<meta name="google-site-verification" content="..." />`).
    - **Do NOT** paste it yet. Just copy the `content` part (the long random string).
4.  **Update Your Code**:
    - Open `app/layout.tsx`.
    - Find the line: `"google-site-verification": "verification_token_placeholder"`.
    - Replace `verification_token_placeholder` with your copied string.
5.  **Deploy**:
    - Push the change to GitHub (`git push`).
    - Wait for Cloudflare to deploy.
6.  **Verify**:
    - Go back to Google Search Console and click **Verify**.

## Submit Sitemap
Once verified in Search Console:
1.  Go to **Sitemaps** on the left menu.
2.  Enter `sitemap.xml`.
3.  Click **Submit**.

Google will now crawl your site! 🚀
