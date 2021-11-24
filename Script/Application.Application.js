try
{
function PBOC_EMV_APP()
	{
		var app = new Application();
		
		app.__proto__ = PBOC_EMV_APP.prototype;
		
		app.$init();

		return app;
	}

	PBOC_EMV_APP.prototype.$init = function()
	{
		var $2B00000001 = {
		profileVersion : "2.0.0",
		objVersion     : "2.0.1",
		profileOID     : "20171008021025",
		profileID      : "0000000001",
		owner          : "GloablPlatform",
		type           : Key.SECRET,
		subType        : Key.DES,
		size           : 128,
		usage          : 0 | Key.ENCRYPT | Key.DECRYPT | Key.DECRYPT_ENCRYPT | Key.UNWRAP | Key.WRAP | Key.UNWRAP_WRAP | Key.SIGN | Key.VERIFY | Key.DERIVE,
		attribute      : 0 | Key.EXPORTABLE | Key.SENSITIVE,
		component      : {CRT_DP1 : "11223344556677889900",CRT_PQ : "0000000000000000",CRT_DQ1 : "AABBCCDDEEFF1122"}
		}
		
		this.key.KMC = new Key($2B00000001);
		//this.key.KMC.__proto__ = $2B00000001;

		this.key.UDKAC = new Key($2B00000001);
		//this.key.UDKAC.__proto__ = $2B00000001;

		this.key.KEK = new Key($2B00000001);
		//this.key.KEK.__proto__ = $2B00000001;
	}

	var _proto = PBOC_EMV_APP.prototype;
	_proto.__proto__ = Application.prototype;
	_proto.$OID = '100000000000000000003';
	_proto.profile = { LifeCycles : { LifeCycle : {} } };
	var _cycle = _proto.profile.LifeCycles.LifeCycle;
	_cycle.INSTALLED = { name : 'INSTALLED', value : 0x03 };
	_cycle.SELECTABLE = { name : 'SELECTABLE', value : 0x07 };
	_cycle.PERSONALIZED = { name : 'PERSONALIZED', value : 0x0F };
	_proto.$$startLifeCycle = {};
	_proto.$$endLifeCycle = {};
	_proto.$$startLifeCycle.$install = _cycle.LOADED;
	_proto.$$endLifeCycle.$install = _cycle.SELECTABLE;
	_proto.$$startLifeCycle.$Perso = _cycle.SELECTABLE;
	_proto.$$endLifeCycle.$Perso = _cycle.PERSONALIZED;
	_proto.$$startLifeCycle.$Audit = _cycle.PERSONALIZED;
	_proto.$$endLifeCycle.$Audit = _cycle.PERSONALIZED;

	$A000000333010102 = PBOC_EMV_APP();

	$A000000333010102.aid = new ByteString('A000000333010102', HEX)
	$A000000333010102.lifeCycle = $A000000333010102.profile.LifeCycles.LifeCycle.LOADED;

	Print("AID : " + $A000000333010102.aid);

	data = $A000000333010102.data;

	keyArray = $A000000333010102.key;

	bs = $A000000333010102.key.UDKAC.getProfileOID();
	Print("ProfileOID value is : " + bs.toString(ASCII));

	app = $A000000333010102;

	//Card reset
	atr = app.card.reset(Card.RESET_WARM);
	
	/**************************************/
	/*          Do something              */
	/**************************************/
}
catch (e)
{
	Print("Exception : " + e.className + "," + e.error + "," + e.reason + "," + e.message);
}
