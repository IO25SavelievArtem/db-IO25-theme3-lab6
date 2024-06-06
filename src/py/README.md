# Реалізація доступу до бази даних

### app.py

```py
from flask import request, jsonify
from model import app, create_role, read_roles, update_role, delete_role

@app.route('/roles', methods=['GET'])
def get_roles():
    roles = read_roles()
    roles_list = [{"id": role.id, "name": role.name, "description": role.description, "permissions": role.permissions, } for role in roles]
    return jsonify(roles_list), 200

@app.route('/roles', methods=['POST'])
def add_role():
    data = request.get_json()
    if 'name' not in data or 'description' not in data or 'permissions' not in data:
        return jsonify({"error": "Invalid data, 'name', 'description' and 'permissions' are required fields"}), 400
    try:
        create_role(data['name'], data['description'], data['permissions'])
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    return jsonify({"message": "Role created successfully"}), 201

@app.route('/roles/<int:role_id>', methods=['PUT'])
def update_role_endpoint(role_id):
    data = request.get_json()
    if not data:
        return jsonify({"error": "Invalid data."}), 400
    update_role(role_id, data.get('name'), data.get('description'), data.get('permissions'))
    return jsonify({"message": "Role updated successfully"}), 200

@app.route('/roles/<int:role_id>', methods=['DELETE'])
def delete_role_endpoint(role_id):
    delete_role(role_id)
    return jsonify({"message": "Role deleted successfully"}), 200

if __name__ == '__main__':
    app.run(debug=True, use_reloader=False)

```


### model.py

```py
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:s0l0m0n*dbase@127.0.0.1/db-IO25-theme3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class User(db.Model):
    __tablename__ = 'User'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(45))
    password = db.Column(db.String(45))
    Role_id = db.Column(db.Integer, db.ForeignKey('Role_id'), nullable=False)

class Role(db.Model):
    __tablename__ = 'Role'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(45), nullable=False)
    description = db.Column(db.String(45), nullable=False)
    permissions = db.Column(db.String(45), nullable=False)

class RolePermissions(db.Model):
    __tablename__ = 'Role permissions'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    Role_id = db.Column(db.Integer, db.ForeignKey('Role_id'), nullable=False)
    Permission_id = db.Column(db.Integer, db.ForeignKey('Permission_id'), nullable=False)

class Permission(db.Model):
    __tablename__ = 'Permission'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(45))

class Action(db.Model):
    __tablename__ = 'Action'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(45))
    description = db.Column(db.String(45))
    User_id = db.Column(db.Integer, db.ForeignKey('User_id'), nullable=False)

class PublicRequest(db.Model):
    __tablename__ = 'Public request'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(45))
    date = db.Column(db.String(45))
    Action_id = db.Column(db.Integer, db.ForeignKey('Action_id'), nullable=False)

class MediaData(db.Model):
    __tablename__ = 'Media data'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(45))
    fileType = db.Column(db.String(45))
    Public_request_id = db.Column(db.Integer, db.ForeignKey('Public_request_id'), nullable=False)

def create_role(name, description, permissions):
    role = Role(name=name, description=description, permissions=permissions)
    db.session.add(role)
    db.session.commit()

def read_roles():
    return Role.query.all()

def update_role(role_id, name=None, description=None, permissions=None):
    role = Role.query.get(role_id)
    if role:
        if name:
            role.name = name
        if description:
            role.description = description
        if permissions:
            role.permissions = permissions
        db.session.commit()

def delete_role(role_id):
    role = Role.query.get(role_id)
    if role:
        db.session.delete(role)
        db.session.commit()

```