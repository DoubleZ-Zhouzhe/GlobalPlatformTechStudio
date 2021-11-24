try
{
	var app = new GPApplication();
	
	//Secure Channel
	scp02 = new GPScp02;
	
	//Security Domain
	gpsd = new GPSecurityDomain;
	
	//KMC
	gpsd.key.KMC = new Key();
	gpsd.key.KMC.setComponent(Key.DES,new ByteString("404142434445464748494A4B4C4D4E4F",HEX));
	
	//Set KMC
	scp02.setBaseKey(gpsd.key.KMC,GPScp02.DIVERSIFY_MODE_NON);
	
	//Set Secure Channel
	gpsd.secureChannel = scp02;
	
	//set Security Domain
	app.securityDomain = gpsd;
	
	//Card reset
	atr = app.card.reset(Card.RESET_WARM);
	
	//Open secure channel
	app.securityDomain.openSecureChannel();
}
catch (e)
{
	Print("Exception : " + e.className + "," + e.error + "," + e.reason + "," + e.message);
}
