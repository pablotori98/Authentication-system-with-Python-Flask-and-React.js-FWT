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
    
    if user:
        access_token=create_access_token(identity=user.id)#Creación del token
        return jsonify({"token": access_token, "user_id": user.id}), 200

    

@api.route('/signup', methods=['POST'])
def signup_route():
    user = request.json.get("user", None)
    # resto de elementos del registro

    user_exist = User.query.filter_by(user=user).filter_by(email=email).first()
    if user_exist:
        return jsonify({"msg":"User or mail exists"})
    
    else:
        new_user = User(user=user)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"user":new_user.serialize()})


@api.route('/private', methods=['POST'])
@jwt_required
def get_private():
    current_user_id=get_jwt_identity()
    user = User.query.get(current_user_id)
    return jsonify(user.serialize()), 200

# @api.route('/signup', methods=['POST'])
# def get_signup():
#     response = {"msg":"fadf"}
#     return jsonify(response), 200