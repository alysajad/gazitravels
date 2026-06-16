import urllib.request
import urllib.parse
import json
import sys
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

def download_image(query, filename):
    # 1. Search for image files
    search_url = f"https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch={urllib.parse.quote(query)}&srnamespace=6&format=json"
    req = urllib.request.Request(search_url, headers={'User-Agent': 'GaziBot/1.0'})
    
    try:
        response = urllib.request.urlopen(req)
        data = json.loads(response.read().decode('utf-8'))
        results = data.get('query', {}).get('search', [])
        
        if not results:
            print(f"No results for {query}")
            return
            
        # Get first result title
        title = results[0]['title']
        print(f"Found: {title}")
        
        # 2. Get image URL for that title
        info_url = f"https://commons.wikimedia.org/w/api.php?action=query&titles={urllib.parse.quote(title)}&prop=imageinfo&iiprop=url&format=json"
        req2 = urllib.request.Request(info_url, headers={'User-Agent': 'GaziBot/1.0'})
        response2 = urllib.request.urlopen(req2)
        data2 = json.loads(response2.read().decode('utf-8'))
        
        pages = data2.get('query', {}).get('pages', {})
        page = list(pages.values())[0]
        image_url = page.get('imageinfo', [{}])[0].get('url')
        
        if not image_url:
            print(f"Could not find URL for {title}")
            return
            
        print(f"Downloading from {image_url}")
        
        # 3. Download
        urllib.request.urlretrieve(image_url, filename)
        print(f"Saved to {filename}")
        
    except Exception as e:
        print(f"Error for {query}: {e}")

download_image("Muslim praying at Kaaba", "public/images/pilgrimage/about-pilgrim-new.jpg")
download_image("Pilgrim facing Kaaba", "public/images/pilgrimage/excellence-kaaba-new.jpg")

