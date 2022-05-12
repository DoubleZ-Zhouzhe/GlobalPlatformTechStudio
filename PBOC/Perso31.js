try
{
	//Get Security Domain
	gpsd = auth();
	
	//Delete All
	deleteAll(gpsd);

	//Install PBOC
	installPBOC(gpsd);
	
	//Install PPSE
	installPpse(gpsd);
	
	//Install PSE
	installPse(gpsd);
	
	//Card reset
	atr = gpsd.card.reset(Card.RESET_COLD);
	Print("reset card");
	
	//Perso PSE
	persoPse(gpsd);
	
	//Card reset
	atr = gpsd.card.reset(Card.RESET_COLD);
	Print("reset card");
	
	//Perso PPSE
	persoPpse(gpsd);
	
	//Card reset
	atr = gpsd.card.reset(Card.RESET_COLD);
	Print("reset card");
	
	//Perso PBOC
	persoPboc(gpsd);
	
	alert("Personalization Successfully");
}
catch (e)
{
	Print("Exception : " + e.className + "," + e.error + "," + e.reason + "," + e.message);
}

//Delete All
function deleteAll(gpsd) {
	//Open secure channel
	gpsd.openSecureChannel(SecureChannel.SECURITY_LEVEL_NONE,0x00);
	Print("Open secure channel ok");
	
	//Delete Same App AID
	rsp = gpsd.deleteAID(new ByteString("A0000003330101",HEX),[0x9000,0x6A88]);
	Print("Delete Same App AID rsp : " + rsp.toString(HEX));

	//Delete Same App AID
	rsp = gpsd.deleteAID(new ByteString("A000000333010101",HEX),[0x9000,0x6A88]);
	Print("Delete Same App AID rsp : " + rsp.toString(HEX));
	
	//Delete Same PPse AID
	rsp = gpsd.deleteAID(new ByteString("325041592E5359532E4444463031",HEX),[0x9000,0x6A88]);
	Print("Delete Same App AID rsp : " + rsp.toString(HEX));
	
	//Delete Same Pse AID
	rsp = gpsd.deleteAID(new ByteString("315041592E5359532E4444463031",HEX),[0x9000,0x6A88]);
	Print("Delete Same App AID rsp : " + rsp.toString(HEX));
}

//Install PPSE
function installPpse(gpsd) {
	//Install For Install PPSE
	elfAid = new ByteString("A000000333010130",HEX);
	elmAid = new ByteString("315041592E5359532E4444463031",HEX);
	appAid = new ByteString("325041592E5359532E4444463031",HEX);
	privileges = new ByteString("000000",HEX);
	installParam = new ByteString("C900",HEX);
	installToken = new ByteString("",HEX);
	isMakeSelectable = true;

	//Install for install
	rsp = gpsd.installForInstall(elfAid,elmAid,appAid,privileges,installParam,installToken,isMakeSelectable,[0x9000]);
	Print("Install for install PPSE rsp : " + rsp.toString(HEX));
}

//Install PSE
function installPse(gpsd) {
	//Install For Install PSE
	elfAid = new ByteString("A000000333010130",HEX);
	elmAid = new ByteString("315041592E5359532E4444463031",HEX);
	appAid = new ByteString("315041592E5359532E4444463031",HEX);
	privileges = new ByteString("000000",HEX);
	installParam = new ByteString("C900",HEX);
	installToken = new ByteString("",HEX);
	isMakeSelectable = true;

	//Install for install
	rsp = gpsd.installForInstall(elfAid,elmAid,appAid,privileges,installParam,installToken,isMakeSelectable,[0x9000]);
	Print("Install for install PSE rsp : " + rsp.toString(HEX));
}

//Install PBOC
function installPBOC(gpsd) {
	//Install For Install PBOC
	elfAid = new ByteString("A000000333010130",HEX);
	elmAid = new ByteString("A0000003330101",HEX);
	appAid = new ByteString("A000000333010101",HEX);
	privileges = new ByteString("000000",HEX);
	installParam = new ByteString("C9010F",HEX);
	installToken = new ByteString("",HEX);
	isMakeSelectable = true;

	//Install for install
	rsp = gpsd.installForInstall(elfAid,elmAid,appAid,privileges,installParam,installToken,isMakeSelectable,[0x9000]);
	Print("Install for install rsp : " + rsp.toString(HEX));
}

//Perso PPSE
function persoPpse(gpsd) {
	//Ppse
	var app = new GPApplication();
	app.aid = new ByteString('325041592E5359532E4444463031', HEX);
	app.securityDomain = gpsd;
	
	//Select APP
	rsp = app.select(false,false,[0x9000]);
	Print("select app : " + rsp.toString(HEX));
	
	//Open secure channel
	gpsd.openSecureChannel(SecureChannel.SECURITY_LEVEL_NONE,0x00);
	Print("Open secure channel ok");
	
	//StoreData DGI 9102
	app.storeData(new ByteString("9102336F31840E325041592E5359532E4444463031A51FBF0C1C611A4F08A000000333010101500B50424F4320437265646974870101",HEX),false,[0x9000]);
}

//Perso PSE
function persoPse(gpsd) {
	//Pse
	var app = new GPApplication();
	app.aid = new ByteString('315041592E5359532E4444463031', HEX);
	app.securityDomain = gpsd;
	
	//Select APP
	rsp = app.select(false,false,[0x9000]);
	Print("select app : " + rsp.toString(HEX));
	
	//Open secure channel
	gpsd.openSecureChannel(SecureChannel.SECURITY_LEVEL_NONE,0x00);
	Print("Open secure channel ok");
	
	//StoreData DGI 9102
	app.storeData(new ByteString("9102266F24840E315041592E5359532E4444463031A5128801015F2D087A68656E667264659F110101",HEX),true,[0x9000]);

	//StoreData DGI 0102
	app.storeData(new ByteString("01012D702B61294F08A000000333010101500B50424F43204372656469749F120F4341524420494D4147452030303239",HEX),false,[0x9000]);
}

//Perso PBOC
function persoPboc(gpsd) {
	//Pse
	var app = new GPApplication();
	app.aid = new ByteString('A000000333010101', HEX);
	app.securityDomain = gpsd;
	
	//Select APP
	rsp = app.select(false,false,[0x9000]);
	Print("select app : " + rsp.toString(HEX));
	
	//Open secure channel
	gpsd.openSecureChannel(SecureChannel.SECURITY_LEVEL_NONE,0x00);
	Print("Open secure channel ok");
	
	//StoreData DGI 9102,Contact FCI
	app.storeData(new ByteString("9102596F578408A000000333010101A54B500B50424F43204372656469748701019F380F9F1A029F7A019F02065F2A029F4E145F2D087A68656E667264659F1101019F120F4341524420494D4147452030303331BF0C059F4D020B0A",HEX),true,[0x9000]);

	//StoreData DGI 9103,Contactless FCI
	app.storeData(new ByteString("9103626F608408A000000333010101A554500B50424F43204372656469748701019F38189F66049F02069F03069F1A0295055F2A029A039C019F37045F2D087A68656E667264659F1101019F120F4341524420494D4147452030303331BF0C059F4D020B0A",HEX),true,[0x9000]);

	//StoreData DGI 9104,DC AIP AFL
	app.storeData(new ByteString("91041682027C00941008010100100102001801020120010300",HEX),true,[0x9000]);
	
	//StoreData DGI 9203,EC AIP AFL
	app.storeData(new ByteString("92031682027C00941008010100100102001801040120010200",HEX),true,[0x9000]);

	//StoreData DGI 9207,QPBOC AIP AFL ISD 9F10
	app.storeData(new ByteString("92072482027C00940810010200180103019F101307010103000000010A01000000000000000000",HEX),true,[0x9000]);

	//StoreData DGI 9200,ISD 9F10
	app.storeData(new ByteString("9200169F101307010103000000010A01000000000000000000",HEX),true,[0x9000]);

	//StoreData DGI 0101,57 9F1F
	app.storeData(new ByteString("01012E702C57116228000100001117D301220101234567899F1F1630313032303330343035303630373038303930413042",HEX),true,[0x9000]);

	//StoreData DGI 0201,Issuer public key cert 90,9F32,Remain 92,CA Index 8F
	app.storeData(new ByteString("0201B37081B0908180229103A5E3120F2D2862091176AA2BD4E24D69E7EEF7B9195C91EA0088AECFF47EDFA0BEEF7C391DF3B05F717DCC06FFC8EEFF90BA14212B8A52AD48B33277B2E230D40B3E76DC59778926F1D8739E106CD741DE06A7423DFBA25E02F12E543D13D1B471806526024981B7D26B4BF6E5558604CCC289F59E8A802F45FB3D9E679F32010392248B643D1EAF2EA784AC205303C90E745EA2EFA5CBF02CC47D47833BB7B27ECC6962385A4B8F0180",HEX),true,[0x9000]);

	//StoreData DGI 0202,9F46 Icc public key cert  9F47 Icc modu  9F48 remain  9F49 DDOL  9F4A 
	app.storeData(new ByteString("0202A47081A19F46818088CA84E5F9C4A6B32CCA870BF4F49CCBAE4167D59D7117F5DAD2023BC4B680C28DFA38254F519940A9B9E47A66F4E38BAE04EE190FEFCA67B4A9FA422C29EC160C0FAF99D76F74878C3A28C3D340238C5DEC5804EFC1E4F17088BB9E15FC5E766FF51C1CFC76D97D7F9177847036F69C8E1812643D1523B99A8CF937E918C4C89F47030100019F480A89DD917D3A288B7BDD559F49039F37049F4A0182",HEX),true,[0x9000]);

	//StoreData DGI 0301,5A 5F24 5F25 9F08
	app.storeData(new ByteString("03011D701B5A0862280001000011175F24033012315F25039507019F08020030",HEX),true,[0x9000]);

	//StoreData DGI 0302,5F34 5F28 9F07 5F20 5F30 9F42 9F63
	app.storeData(new ByteString("03023E703C5F3401015F2801569F0702FFC05F200F46554C4C2046554E4354494F4E414C5F300202019F420201569F631011223344556677880000000000000000",HEX),true,[0x9000]);

	//StoreData DGI 0303,9F74
	app.storeData(new ByteString("03030B70099F7406454343303031",HEX),true,[0x9000]);

	//StoreData DGI 0304,8E 9F0D 9F0E 9F0F QPBOC EC Param
	app.storeData(new ByteString("03042670248E0A000000000000000002009F0D057C70B808009F0E057C70B808009F0F050000000000",HEX),true,[0x9000]);

	//StoreData DGI 0401,9F14 9F23
	app.storeData(new ByteString("04010A70089F1401039F230107",HEX),true,[0x9000]);

	//StoreData DGI 0402,8C CDOL1 8D CDOL2
	app.storeData(new ByteString("04023870368C189F02069F03069F1A0295055F2A029A039F21039C019F37048D1A8A029F02069F03069F1A0295055F2A029A039F21039C019F3704",HEX),true,[0x9000]);

	//StoreData DGI 0403,DC Param 8E 9F0D 9F0E 9F0F
	app.storeData(new ByteString("04032E702C8E120000000000000000420342035E0343031F009F0D05F0200400009F0E0500508800009F0F05F020049800",HEX),true,[0x9000]);

	//StoreData DGI 0D01,9F51 9F79 9F77 9F78 9F6D 9F53 9F5D 9F68 9F6C 9F6B (9F54 9F5C) 9F58 9F59 9F72 9F4F9F51 9F79 9F77 9F78 9F6D 9F53 9F5D 9F68 9F6C 9F6B (9F54 9F5C) 9F58 9F59 9F72 9F4F
	app.storeData(new ByteString("0D017570739F510201569F79060000000000009F77060000000150009F78060000000010009F6D060000000015009F5301039F5D060000000000019F6804927010009F6C0230009F6B060000000005009F5801039F5901079F7201009F4F199A039F21039F02069F03069F1A025F2A029F4E149C019F3602",HEX),true,[0x9000]);

	//StoreData DGI 0E01,57 5F34 5F20 9F63 9F52 9F56 9F57 9F76 9F36 DF4F 9F13
	app.storeData(new ByteString("0E016D706B57116228000100001117D101220101234567895F3401015F200F46554C4C2046554E4354494F4E414C9F6310112233445566778800000000000000009F520282409F5601809F570201569F760200009F36020000DF4F109A039F21039F1A029F4E149C019F36029F130101",HEX),true,[0x9000]);

	//StoreData DGI 8000,3DES key dmkac dmkmac dmkenc
	app.storeData(new ByteString("800030112233440066778811223344550077888B4F854F0831FBF2635A212E4DDDB92A11220044556677881122330055667788",HEX),true,[0x9000]);

	//StoreData DGI 9000,3DES key dmkac dmkmac dmkenc check sum
	app.storeData(new ByteString("90000997DCB0CE4E2CB37DF3",HEX),true,[0x9000]);

	//StoreData DGI 8201,RSA CRT Qinv 
	app.storeData(new ByteString("820130A682730F9213805749E474FB08D6C00888592B188C7BD6D15CC8643854754ED4C8C32300D1631FF599F744C07C90F1BE",HEX),true,[0x9000]);

	//StoreData DGI 8202,RSA CRT DQ 
	app.storeData(new ByteString("820230BB1B1E73C143A4C72B4470CCAE82346BEE3256E87CF548A4E9BCA698C81C52005EA0DE2FCA05053F0F01709EC7B97D73",HEX),true,[0x9000]);

	//StoreData DGI 8203,RSA CRT DP 
	app.storeData(new ByteString("82033024E27767845A44F87728FB3CFA9B528ECB0B3CCD0EF871442F63307AD8ADEFAE704A0136FBCF91A5BD1FEC1AEF6B6AB1",HEX),true,[0x9000]);

	//StoreData DGI 8204,RSA CRT Q 
	app.storeData(new ByteString("820430C8DE1801D80CDFCB0FC2FE4E6C7B1DCB99C9FBED69F4B9EA3EEAD4166BDE9CA582E587A870D7823EF64D73C320F5309F",HEX),true,[0x9000]);

	//StoreData DGI 8205,RSA CRT P 
	app.storeData(new ByteString("820530FC03512FED42394B442611AAC061B66523EC90FB6745D31297CA310E1F6833FFFFCC5ED34BF8AC3B52C7AA754FCF298B",HEX),true,[0x9000]);

	//StoreData DGI 8010,ADF1 Pin 
	app.storeData(new ByteString("801008241234FFFFFFFFFF",HEX),true,[0x9000]);

	//StoreData DGI 9010,ISD
	app.storeData(new ByteString("9010059F17010303",HEX),false,[0x9000]);
}

//Get Security Domain
function auth() {
	//new card
	card = new Card;

	//GP SCP02
	var scp02 = new GPScp02();

	//Set KMC
	var keyKMC = new Key();
	keyKMC.setComponent(Key.DES,new ByteString("404142434445464748494A4B4C4D4E4F",HEX));
	scp02.setBaseKey(keyKMC,GPScp02.DIVERSIFY_MODE_NON);

	//Security Domain
	var gpsd = new GPSecurityDomain;
	
	//gpsd.aid = new ByteString("A000000003000000",HEX);

	//Set Secure Channel
	gpsd.secureChannel = scp02;

	//Card reset
	atr = gpsd.card.reset(Card.RESET_COLD);
	Print("Reset Card");

	//Select
	gpsd.select([0x9000]);
	Print("Select CM ok");
	
	return gpsd;
}
