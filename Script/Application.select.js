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
	}

	var _proto = PBOC_EMV_APP.prototype;
	_proto.__proto__ = Application.prototype;

	$A000000333010102 = PBOC_EMV_APP();

	app = $A000000333010102;

	//Card reset
	atr = app.card.reset(Card.RESET_WARM);

	//Select
	rsp = app.select();
	Print("slect rsp : " + rsp.toString(HEX));
	Print("Aid(after select) : " + app.aid.toString(HEX));
}
catch (e)
{
	Print("Exception : " + e.className + "," + e.error + "," + e.reason + "," + e.message);
}
