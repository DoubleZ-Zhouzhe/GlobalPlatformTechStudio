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
	
	var key01 = new Key($2B00000001);
	var key05 = new Key($2B00000003);
	var key06 = new Key($2B00000003);
	
	key01.setComponent(Key.DES,new ByteString("00112233445566778899AABBCCDDEEFF",HEX));
	
	key05.setComponent(Key.EXPONENT,new ByteString("010001",HEX));
	key05.setComponent(Key.MODULUS,new ByteString("BF290813CA2E9C2C61CC0370265A36B75FCFE5E433EE65265E64B17B6746B45ED3EFDA74B882909A422B2BB7444C41994297C30B0883E2DBC9505026100AF05F24F9432DD8D2002C774A57A05E0151EAF981C771F773574F34E88E36DFCAF8E1DE8C3961868859DD7303FF4A88FFBB29899480B51AA4EAA83DC01600CB3079CD",HEX));
	key06.setComponent(Key.EXPONENT,new ByteString("751F54BD9B50F78B11D887FABCE4E5457144D5DBFE1D808803A9BA3C9BC86C56F58FADCF7A053547EE66B9002EAE723ACEDC613A6F5B2F31EEA4709701995230496D6C1A792A4CC99BE5B2F07B42442DC21C7CF8C66D1F474E29E5E1857D9F59EB4FFCE08A55F2B321D480BB86DED3CA6484B5DBFCF20730E83F4F250FE2B381",HEX));
	key06.setComponent(Key.MODULUS,new ByteString("BF290813CA2E9C2C61CC0370265A36B75FCFE5E433EE65265E64B17B6746B45ED3EFDA74B882909A422B2BB7444C41994297C30B0883E2DBC9505026100AF05F24F9432DD8D2002C774A57A05E0151EAF981C771F773574F34E88E36DFCAF8E1DE8C3961868859DD7303FF4A88FFBB29899480B51AA4EAA83DC01600CB3079CD",HEX));
	
	//Instantiate crypto service
	var crypto = new Crypto();

	//DES MAC EMV
	reslt = crypto.sign(key01,Crypto.DES_MAC_EMV,new ByteString("1122334455667788",HEX),new ByteString("0000000000000000",HEX));
	Print("key01 DES_MAC_EMV sign is : " + reslt.toString(HEX));
	
	//Verify
	boolVerify = crypto.verify(key01,Crypto.DES_MAC_EMV,new ByteString("1122334455667788",HEX),new ByteString("0000000000000000",HEX),reslt);
	if (boolVerify == true) {
		Print("key01 DES_MAC_EMV correct");
	} else {
		Print("key01 DES_MAC_EMV incorrect");
	}

	//AES_CMAC
	reslt = crypto.sign(key01,Crypto.AES_CMAC,new ByteString("1122334455667788800000000000000080000000000000008000000000000000",HEX));
	Print("key01 AES_CMAC sign is : " + reslt.toString(HEX));
	
	//Verify
	boolVerify = crypto.verify(key01,Crypto.AES_CMAC,new ByteString("1122334455667788800000000000000080000000000000008000000000000000",HEX),reslt);
	if (boolVerify == true) {
		Print("key01 AES_MAC_EMV Verify correct");
	} else {
		Print("key01 AES_MAC_EMV Verify incorrect");
	}
	
	//SM4_CMAC
	reslt = crypto.sign(key01,Crypto.SM4_CMAC,new ByteString("1122334455667788800000000000000080000000000000008000000000000000",HEX));
	Print("key01 SM4_CMAC sign is : " + reslt.toString(HEX));
	
	//Verify
	boolVerify = crypto.verify(key01,Crypto.SM4_CMAC,new ByteString("1122334455667788800000000000000080000000000000008000000000000000",HEX),reslt);
	if (boolVerify == true) {
		Print("key01 SM4_MAC_EMV Verify correct");
	} else {
		Print("key01 SM4_MAC_EMV Verify incorrect");
	}
}
catch (e)
{
	Print("Exception : " + e.className + "," + e.error + "," + e.reason + "," + e.message);
}
