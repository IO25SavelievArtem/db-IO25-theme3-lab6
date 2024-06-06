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
