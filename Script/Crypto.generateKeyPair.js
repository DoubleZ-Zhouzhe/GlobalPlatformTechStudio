try
{
	var $2B00000003 = {
		profileVersion : "2.0.0",
		objVersion     : "2.0.1",
		profileOID     : "2B00000003",
		profileID      : "0000000003",
		owner          : "GloablPlatform",
		type           : Key.PUBLIC,
		subType        : Key.RSA,
		size           : 1024,
		usage          : 0 | Key.ENCRYPT | Key.DECRYPT | Key.DECRYPT_ENCRYPT | Key.UNWRAP | Key.WRAP | Key.UNWRAP_WRAP | Key.SIGN | Key.VERIFY | Key.DERIVE,
		attribute      : 0 | Key.EXPORTABLE | Key.IMPORTABLE
	};
	
	var key0A = new Key($2B00000003);
	var key0B = new Key($2B00000003);
	
	//Instantiate crypto service
	var crypto = new Crypto();
	
	key0A.setComponent(Key.EXPONENT,new ByteString("010001",HEX));
	key0A.setSize(1024);
	Print("Generate RSA Key Pair........");
	crypto.generateKeyPair(Crypto.RSA,key0A,key0B);
	Print("Generate RSA Key Pair End");
	
	Print("key0A Public key add is : " + key0A.getAdd());
	Print("key0A Public key component EXPONENT is : " + key0A.getComponent(Key.EXPONENT).toString(HEX));
	Print("key0A Public key component MODULUS is : " + key0A.getComponent(Key.MODULUS).toString(HEX));
	Print("key0B Public key add is : " + key0B.getAdd());
	Print("key0B Public key component EXPONENT is : " + key0B.getComponent(Key.EXPONENT).toString(HEX));
	Print("key0B Public key component MODULUS is : " + key0B.getComponent(Key.MODULUS).toString(HEX));
}
catch (e)
{
	Print("Exception : " + e.className + "," + e.error + "," + e.reason + "," + e.message);
}
