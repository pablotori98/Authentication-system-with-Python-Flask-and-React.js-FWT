"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import JWTManager
from flask_jwt_extended import jwt_required, get_jwt_identity


api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


# @api.routes('/signup', methods=['POST'])
# def get_signup():

    

@api.route('/login', methods=['POST'])
def login_route():


    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user= User.query.filter_by(email=email, password=password).first()
    
    if user is None:
        return jsonify({"msg":"Ta quivocao"})
    

    #Creación del token
    access_token=create_access_token(identity=email) 
    print(access_token)
    return jsonify({"token": access_token, "user_id": user.id}), 200

@api.route('/private', methods=['GET'])
@jwt_required
def get_private():
    current_user=get_jwt_identity()
    response_bodyy= {
        "msg":"Estas dentro del private"}

    return jsonify(logged_in_as=current_user), 200


# @api.route('/signup', methods=['POST'])
# def get_signup():
#     response = {"msg":"fadf"}
#     return jsonify(response), 200