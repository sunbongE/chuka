from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import requests
from bs4 import BeautifulSoup
import re

app = FastAPI()

class RequestBody(BaseModel):
    url: str

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Accept-Language": "ko-KR,ko;q=0.8,en-US;q=0.5,en;q=0.3"
}

def extract_and_convert_price(price_tag):
    if price_tag:
        price_text = price_tag.text.strip().replace(',', '').replace('원', '')
        price_text = re.sub(r'[^\d]', '', price_text)
        price = int(price_text)
    else:
        price = None
    return price

async def extract_shopping_info(url: str, headers: dict, selectors: dict):
    try:
        response = requests.get(url, headers=headers)
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # 이미지
        if selectors.get('image_method', 'find') == 'select_one':
            img_tag = soup.select_one(selectors['image'])
        elif selectors.get('image_method', 'find') == 'id':
            img_tag = soup.find('img', id=selectors['image'])
        else:
            img_tag = soup.find('img', class_=selectors['image'])
        image_url = img_tag.get('src') if img_tag else None
        print(img_tag)
        
        if image_url and image_url.startswith('//'):
            image_url = 'https:' + image_url

        # 가격
        if selectors.get('price_method', 'find') == 'select_one':
            price_tag = soup.select_one(selectors['price'])

        else:
            price_tag = soup.find(selectors['price_tag'], class_=selectors['price'])
        price = extract_and_convert_price(price_tag)

        # 이름
        name_tag = soup.find(selectors['name_tag'], class_=selectors['name'])
        name = name_tag.text.strip() if name_tag else None

        return {"image_url": image_url, "price": price, "name": name}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.post("/scrapping/")
async def extract_image(request_body: RequestBody):
    url = request_body.url

    if "shopping.naver.com" in url:
        selectors = {
            "image": "_2RYeHZAP_4",
            "image_method": "find",
            "price": "_1LY7DqCnwR",
            "price_tag": "span",
            "price_method": "find",
            "name": "_22kNQuEXmb _copyable",
            "name_tag": "h3",  
        }
        return await extract_shopping_info(url, headers, selectors)
    elif "www.coupang.com" in url:
        selectors = {
            "image": "prod-image__detail",
            "image_method": "find",
            "price": "origin-price",
            "price_tag": "span",
            "price_method": "find",
            "name": "prod-buy-header__title",
            "name_tag": "h2",
        }
        return await extract_shopping_info(url, headers, selectors)
    elif "www.11st.co.kr" in url:
        selectors = {
            "image": "div.img_full > img",
            "image_method": "select_one",
            "price": "dd.price_regular > del",
            "price_method": "select_one",
            "name": "title",
            "name_tag": "h1",
        }
        return await extract_shopping_info(url, headers, selectors)
    elif "item.gmarket.co.kr" in url or "itempage3.auction.co.kr" in url:
        selectors = {
            "image": "li.on > a > img",
            "image_method": "select_one",
            "price": "price_real",
            "price_tag": "strong",
            "price_method": "find",
            "name": "itemtit",
            "name_tag": "h1",
        }
        return await extract_shopping_info(url, headers, selectors)
    elif "front.wemakeprice.com" in url:
        selectors = {
            "image": "div.info_img > img",
            "image_method": "select_one",
            "price": "span.normal > s",
            "price_tag": "", #다른 가격은 동적이라 받아오질 못함
            "price_method": "select_one",
            "name": "deal_tit",
            "name_tag": "h3",
        }
        return await extract_shopping_info(url, headers, selectors)
    elif "www.ssg.com" in url:
        selectors = {
            "image": "mainImg",
            "image_method": "id",
            "price": "span.cdtl_old_price > em",
            "price_tag": "em",
            "price_method": "select_one",
            "name": "cdtl_info_tit_txt",
            "name_tag": "span",
        }
        return await extract_shopping_info(url, headers, selectors)
    else:
        raise HTTPException(status_code=400, detail="지원하지 않는 쇼핑몰입니다.")