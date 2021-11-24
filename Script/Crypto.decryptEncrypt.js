try
{
	var $2B00000001 = {
		profileVersion : "2.0.0",
		objVersion     : "2.0.1",
		profileOID     : "2B00000001",
		profileID      : "0000000001",
		owner          : "GloablPlatform",
		type           : Key.SECRET,
		subType        : Key.DES,
		size           : 128,
		usage          : 0 | Key.ENCRYPT | Key.DECRYPT | Key.DECRYPT_ENCRYPT | Key.UNWRAP | Key.WRAP | Key.UNWRAP_WRAP | Key.SIGN | Key.VERIFY | Key.DERIVE,
		attribute      : 0 | Key.EXPORTABLE | Key.IMPORTABLE
	};

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
	var key09 = new Key($2B00000001);

	key07.setComponent(Key.DES,new ByteString("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",HEX));
	key09.setComponent(Key.DES,new ByteString("11112233445566778899AABBCCDDEEFF",HEX));
	
	//Instantiate crypto service
	var crypto = new Crypto();
	
	var data = new ByteString("11223344556677881122334455667788",HEX);

	var reslt = crypto.encrypt(key07,Crypto.DES_ECB_LP,data);
	Print("key07 DES ECB reslt : " + reslt.toString(HEX));

	resltDe = crypto.decryptEncrypt(key07,Crypto.DES_ECB,key09,Crypto.DES_ECB_LP,reslt);
	Print("key09 DES ECB Crypto,Decrypto with key07 reslt : " + resltDe.toString(HEX));

}
catch (e)
{
	Print("Exception : " + e.className + "," + e.error + "," + e.reason + "," + e.message);
}
