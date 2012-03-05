DemoCrank = function() {
	var space;

	function init(s) {
		space = s;
		var staticBody = new Body(Body.STATIC);
		staticBody.addShape(new ShapeBox(0, 10, 1024, 20));
		staticBody.addShape(new ShapeBox(0, 758, 1024, 20));
		staticBody.addShape(new ShapeBox(-502, 384, 20, 728));
		staticBody.addShape(new ShapeBox(502, 384, 20, 728));
		staticBody.resetMassData();
		space.addBody(staticBody);

		var body1 = new Body(Body.DYNAMIC, new vec2(0, 100));
		var shape = new ShapeSegment(new vec2(0, 0), new vec2(0, 50), 10);
		shape.e = 0.4;
		shape.u = 1.0;
		shape.density = 1;
		body1.addShape(shape);
		body1.resetMassData();        
		space.addBody(body1);

		var body2 = new Body(Body.DYNAMIC, new vec2(0, 150));
		var shape = new ShapeSegment(new vec2(0, 0), new vec2(0, 100), 10);
		shape.e = 0.4;
		shape.u = 1.0;
		shape.density = 1;
		body2.addShape(shape);
		body2.resetMassData();
		space.addBody(body2);

		var body3 = new Body(Body.DYNAMIC, new vec2(0, 250));
		var shape = new ShapeBox(0, 10, 200, 20);
		shape.e = 0.4;
		shape.u = 1.0;
		shape.density = 1;
		body3.addShape(shape);
		body3.resetMassData();
		space.addBody(body3);

		var joint = new RevoluteJoint(staticBody, body1, new vec2(0, 100));
		joint.collideConnected = false;
		joint.enableMotor(true);
		joint.setMotorSpeed(deg2rad(270));
		joint.setMaxMotorTorque(400000000);
		space.addJoint(joint);

		var joint = new RevoluteJoint(body1, body2, new vec2(0, 150));
		joint.collideConnected = false;
		space.addJoint(joint);

		var joint = new RevoluteJoint(body2, body3, new vec2(0, 250));
		joint.collideConnected = false;
		space.addJoint(joint);

		var joint = new PrismaticJoint(staticBody, body3, new vec2(0, 100), new vec2(0, 250));
		joint.collideConnected = false;
		space.addJoint(joint);      

		var body = new Body(Body.DYNAMIC, new vec2(-32, 300));
		var shape = new ShapeBox(0, 0, 30, 30);
		shape.e = 0.0;
		shape.u = 1.0;
		shape.density = 0.1;
		body.addShape(shape);
		body.resetMassData();
		space.addBody(body);

		var body = new Body(Body.DYNAMIC, new vec2(0, 300));
		var shape = new ShapeBox(0, 0, 30, 30);
		shape.e = 0.0;
		shape.u = 1.0;
		shape.density = 0.1;
		body.addShape(shape);
		body.resetMassData();
		space.addBody(body);

		var body = new Body(Body.DYNAMIC, new vec2(32, 300));
		var shape = new ShapeBox(0, 0, 30, 30);
		shape.e = 0.0;
		shape.u = 1.0;
		shape.density = 0.1;
		body.addShape(shape);
		body.resetMassData();        
		space.addBody(body);      
	}

	function runFrame() {		
	}

	function keyDown(ev) {
	}	

	function name() {
		return "Crank";
	}

	return {
		init: init,
		runFrame: runFrame,
		keyDown: keyDown,
		name: name
	};
}();	
