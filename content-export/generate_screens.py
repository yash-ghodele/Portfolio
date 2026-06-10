import requests
import json

url = 'https://stitch.googleapis.com/mcp'
import os
import sys

api_key = os.environ.get('STITCH_API_KEY')
if not api_key:
    # Try reading from console
    try:
        api_key = input("Enter Stitch X-Goog-Api-Key: ").strip()
    except (KeyboardInterrupt, EOFError):
        print("API Key required.")
        sys.exit(1)

headers = {
    'X-Goog-Api-Key': api_key,
    'Content-Type': 'application/json'
}

def call_mcp_tool(method, arguments):
    payload = {
        'jsonrpc': '2.0',
        'id': 1,
        'method': 'tools/call',
        'params': {
            'name': method,
            'arguments': arguments
        }
    }
    r = requests.post(url, headers=headers, json=payload)
    print(f"[{method}] Status:", r.status_code)
    try:
        res = r.json()
        if 'error' in res:
            print(f"[{method}] Error:", res['error'])
        else:
            print(f"[{method}] Result:", json.dumps(res.get('result', {}), indent=2))
        return res
    except Exception as e:
        print(f"[{method}] Failed to parse response:", r.text)
        return None

# Generate Home Screen
home_prompt = """
Generate a premium, modern, dark hardware-aesthetic Home Page screen for Yash Ghodele's portfolio.
Use the design theme: dark mode, deep zinc-950 background, violet/purple primary accents (#7c3aed), subtle glassmorphism, thin white borders (opacity 5-10%), and dot grid overlays.

Key Sections:

1. Navigation Bar:
   - Sticky floating glass header, active menu items with small purple indicator dots.

2. Hero Section:
   - Large bold header: 'Yash Ghodele'
   - H2: 'Full Stack Developer & IoT Engineer'
   - Status Badge: '● Founder, Ugam Digital Studio'
   - Tags: 'Engineer • Leader • Innovator'
   - Description: 'Building scalable web applications and intelligent connected systems. I bridge the gap between hardware logic and software user experiences.'
   - Call to Action Buttons: 'View Projects (→)', 'Events', 'Contact Me'
   - Social Link Icons: GitHub, LinkedIn, Instagram.

3. 'At a Glance' Bento Grid:
   - Label: '// At a Glance'
   - Cell 1 (Founder Card): Avatar 'YG', Name 'Yash Ghodele', Badge 'Founder', Description: 'ECE engineer turned full-stack product builder. I bridge the gap between hardware sensors and high-performance web interfaces — and built Ugam to make that rare skill accessible.', Arrow link to /about.
   - Cell 2 (Latest Journal): Label: 'Latest Journal', Badge: 'Insights', Title: 'Analysis, Design, and Synthesis — Or: The Structured Side of "Fuck Around and Find Out"', Excerpt: 'Let\'s be honest about how most great things actually get built. Not with a 47-slide roadmap and a perfectly color-coded Notion board...', CTA Link: 'Read article →'.
   - Cell 3 (Stack Preview): Label: 'Stack', tech pills for: 'ESP32', 'MQTT', 'Next.js', 'Firebase', 'Flutter', 'Python'. Footer: 'IoT → Cloud → UI', link 'Full stack →'.
   - Cell 4 (Location): Label: 'Based In', Location: 'Aurangabad, MH → Global delivery', Description: 'Building digital infrastructure for Aurangabad\'s 500+ manufacturing units — offline-first, Marathi-aware, hardware-resilient.'.
   - Cell 5 (Ugam Studio CTA): Label: 'Startup', Title: 'Ugam Digital Studio', Description: 'Where digital begins. IoT systems, manufacturing dashboards, and engineering education — built for Bharat\'s industrial heartland.', Button: 'Visit Studio'.
"""

call_mcp_tool('generate_screen_from_text', {
    'projectId': '13410164898409275215',
    'designSystem': 'assets/d420c33b92914d65aff5a26c010af95c',
    'prompt': home_prompt.strip(),
    'deviceType': 'DESKTOP',
    'modelId': 'GEMINI_3_1_PRO'
})
