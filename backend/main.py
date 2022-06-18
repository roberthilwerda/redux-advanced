
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import json


app = FastAPI()

## received a list of dicts
def update_cart(cart: List[dict]):
    # print(cart) ## list of BaseModel objects  

    with open("./cart.txt", "w") as cart_file:
        for item in cart:
            cart_file.write(str(item)+'\n')

def fetch_cart():
    cart = []
    with open("./cart.txt", "r") as cart_file:

        try:
            for line in cart_file:
                cart.append(json.loads(line))
        except Exception as e:
            print(e)
            

    return cart
    

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "localhost:3000",
    "http://localhost:3000",
    "https://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Item(BaseModel):
    title: str
    amount: int
    price: float

@app.put('/')
def update(cart: List[Item]):
    items = []
    try:
        for item in cart:
            items.append(item.json())

        update_cart(items)
       
    except Exception as e:
        print(e)
        return("error")
    return("success")

@app.get('/')
def send_cart():
    try:
        cart = fetch_cart()
        print(cart)
        return cart
    except:
        return('error')
    



