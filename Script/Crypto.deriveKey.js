try
{
	var $2B00000002 = {
		profileVersion : "2.0.0",
		objVersion     : "2.0.1",
		profileOID     : "2B00000002",
		profileID      : "0000000002",
		owner          : "GloablPlatform",
		type           : Key.SECRET,
		subType        : Key.DES,
		size           : 128,
		usage          : 0 | Key.ENCRYPT | Key.DECRYPT | Key.DECRYPT_ENCRYPT | Key.UNWRAP | Key.WRAP | Key.UNWRAP_WRAP | Key.SIGN | Key.VERIFY | Key.DERIVE,
		attribute      : 0 | Key.EXPORTABLE | Key.IMPORTABLE 
	};

	var key07 = new Key($2B00000002);

	key07.setComponent(Key.DES,new ByteString("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",HEX));
	
	//Instantiate crypto service
	var crypto = new Crypto();
	
	var data = new ByteString("1122334455667788",HEX);

	var key09 = new Key($2B00000002);

	crypto.deriveKey(key07,Crypto.DES_ECB,data,key09);
	Print("key09 DES ECB derive reslt : " + key09.getComponent(Key.DES));
	Print("key09 DES ECB derive reslt : " + key09.getComponent(Key.DES).toString(HEX));
}
catch (e)
{
	Print("Exception : " + e.className + "," + e.error + "," + e.reason + "," + e.message);
}
