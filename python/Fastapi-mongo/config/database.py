from pymongo import MongoClient

username = "admin"
raw_password = "Ace@2002"
password = quote_plus(raw_password) 

client = MongoClient("mongodb+srv://{username}:{password}@cluster0.qoghiz1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

db = client.todo_db

collection_name = db["todo_collection"]